package drai.dev.gravelsextendedbattles.resorting;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.resorting.nodes.*;
import org.apache.commons.lang3.mutable.*;

import java.util.*;
import java.util.logging.*;

public class EvolutionGraph {
    private final Map<String, IEvolutionNode> nodes;
    private final Collection<Species> species;
    private List<IEvolutionNode> sortedSpecies;
    private final List<IEvolutionNode> speciesWithMultiplePreEvolutions = new ArrayList<>();

    public EvolutionGraph(PokemonSpecies pokemonSpecies) {
        this.nodes = new HashMap<>();
        this.species = pokemonSpecies.getSpecies();
        species.forEach(this::addPokemon);
        species.forEach(species1 -> {
            String name = species1.getName().toLowerCase();
            var evolutions = species1.getEvolutions();
            evolutions.forEach(evolution -> {
                var result = evolution.getResult();
                this.addEvolution(name, null, result.getSpecies(), null);
            });
            species1.getForms().forEach(formData -> {
                if (!formData.getAspects().isEmpty()
                        && !formData.getAspects().contains("female")
                        && !formData.getAspects().contains("mega")
                        && !formData.getAspects().contains("mega-x")
                        && !formData.getAspects().contains("mega-y")
                        && !formData.getAspects().contains("primal")
                        && !formData.getAspects().contains("alola-totem")
                        && !formData.getAspects().contains("gmax")) {
                    if (formData.getName().equalsIgnoreCase("normal")) return;
                    var formEvolutions = formData.getEvolutions();
                    formEvolutions.forEach(formEvolution -> {
                        var result = formEvolution.getResult();
                        this.addEvolution(name, null, result.getSpecies(), null);
                    });
                }
            });
        });
        // Add Evolutions

        sortedSpecies = new ArrayList<>(nodes.values().stream().sorted().toList());
        speciesWithMultiplePreEvolutions.forEach(multiplePreEvoSpecies->{
            var baseForms = new HashMap<IEvolutionNode, IEvolutionNode>();
            for(var preEvo : multiplePreEvoSpecies.getPreEvolutions()) {
                baseForms.put(this.getBaseForm(preEvo), preEvo);
            }
            if(baseForms.isEmpty()) return;
            var sortedBaseForms = baseForms.keySet().stream().sorted((o1, o2)->Integer.compare(this.getMaxPokedexNumber(o1), this.getMaxPokedexNumber(o2))).toList();
            var baseFormWithHighestPokedexNumber = sortedBaseForms.get(0);
            var baseFormWithLowestPokedexNumber = sortedBaseForms.get(sortedBaseForms.size() - 1);
            baseForms.keySet().stream().filter(key-> key!=baseFormWithHighestPokedexNumber).forEach(key-> {
                baseForms.get(key).getEvolutions().remove(multiplePreEvoSpecies);
                multiplePreEvoSpecies.getPreEvolutions().remove(baseForms.get(key));
            });
            var baseFormList = baseForms.keySet().stream().filter(key-> key!=baseFormWithLowestPokedexNumber).sorted().toList();
            var startingSortingNumber = sortedSpecies.indexOf(baseFormWithLowestPokedexNumber);
            for (int i = 0; i < baseFormList.size(); i++) {
                var node = baseFormList.get(i);
                shiftDex(node, startingSortingNumber+1+i);
            }
        });

        sortedSpecies = new ArrayList<>(sortedSpecies.stream().sorted(Comparator.comparingInt(IEvolutionNode::findLowestPokedexNumber)).toList());
        var dexNumber = new MutableInt(0);
        for (int i = 0; i < sortedSpecies.size(); i++) {
            var node = sortedSpecies.get(i);
            updateDexNumbers(node, dexNumber);
        }
        GravelsExtendedBattles.SORTED_SPECIES  = sortedSpecies.stream().sorted(Comparator.comparingInt(IEvolutionNode::getPokedexNumber)).toList();
        /*for (int i = 0; i < GravelsExtendedBattles.SORTED_SPECIES.size(); i++) {
            var species = GravelsExtendedBattles.SORTED_SPECIES.get(i);
//            System.out.println(i+1 + ": " + species.getSpecies().getName());
        }*/
    }

    public void shiftDex(IEvolutionNode node, int newNumber) {
        sortedSpecies.remove(node);
        sortedSpecies.add(newNumber-1, node);
    }

    public void addPokemon(Species species) {
        String name = species.getName().toLowerCase();
        if (!nodes.containsKey(name)) {
            nodes.put(name, new SpeciesEvolutionNode(species));
        }

        species.getForms().forEach(formData -> {
            String form = formData.getName().toLowerCase();
            if (!formData.getAspects().isEmpty()
                    && !formData.getAspects().contains("female")
                    && !formData.getAspects().contains("mega")
                    && !formData.getAspects().contains("mega-x")
                    && !formData.getAspects().contains("mega-y")
                    && !formData.getAspects().contains("primal")
                    && !formData.getAspects().contains("alola-totem")
                    && !formData.getAspects().contains("gmax")) {
                if (formData.getName().equalsIgnoreCase("normal")) return;
            }
        });

    }

    public void addEvolution(String fromName, String fromForm, String toName, String toForm) {
        String fromKey = fromForm == null ? fromName : fromName + "-" + fromForm;
        String toKey = toForm == null ? toName : toName + "-" + toForm;
        if (toName == null)
            GravelsExtendedBattles.LOGGER.log(Level.WARNING, "Invalid evolution result for evolution of " + fromKey);
        if (fromKey.equals(toKey)) return;
        IEvolutionNode fromNode = nodes.get(fromKey);
        IEvolutionNode toNode = nodes.get(toKey);

        if (fromNode != null && toNode != null) {
            if (toNode.getEvolutions().contains(fromNode)) return;
            if (fromNode.getEvolutions().contains(toNode)) return;
            fromNode.addEvolution(toNode);
            toNode.addPreEvolution(fromNode);
            if(toNode.getPreEvolutions().size()>1){
                if(!speciesWithMultiplePreEvolutions.contains(toNode)) speciesWithMultiplePreEvolutions.add(toNode);
            }
        }
    }

    public IEvolutionNode getBaseForm(IEvolutionNode node) {
        for (var preEvo : node.getPreEvolutions()) {
            return getBaseForm(preEvo);
        }
        return node;
    }

    public int getMaxPokedexNumber(IEvolutionNode node) {
        return getMaxPokedexNumber(node, node.getPokedexNumber());
    }

    private int getMaxPokedexNumber(IEvolutionNode node, int max) {
        if(node.getPokedexNumber() > max){
            max = node.getPokedexNumber();
        }
        for (IEvolutionNode evolution : node.getEvolutions()) {
            max = getMaxPokedexNumber(evolution, max);
        }
        return max;
    }

    private int getMinPokedexNumber(IEvolutionNode node, int min) {
        if(node.getPokedexNumber() < min){
            min = node.getPokedexNumber();
        }
        for (IEvolutionNode evolution : node.getEvolutions()) {
            min = getMaxPokedexNumber(evolution, min);
        }
        return min;
    }

    public void printEvolutions(IEvolutionNode node, int i) {
//        if(isBeginningNode(node)) printEvolutions(node, i, "");
    }

    private boolean isBeginningNode(IEvolutionNode node) {
        if (node != null) {
            return node.getPreEvolutions().isEmpty() && node.getForm() == null;
        }
        return false;
    }

    private void printEvolutions(IEvolutionNode node, int i, String indent) {
        System.out.println(indent + "└" + node.getPokedexNumber() + "-" + node.getSpecies() + (node.getForm() == null ? "" : " " + node.getForm()));
        for (IEvolutionNode evolution : node.getEvolutions()) {
            printEvolutions(evolution, 1+i,indent + "  ");
        }
    }

    private void updateDexNumbers(IEvolutionNode node, MutableInt integer) {
//        integer.setValue(node.findLowestPokedexNumber());
        if(isBeginningNode(node)){
            updateDexNumbersRecursive(node, integer);
        }
    }

    private void updateDexNumbersRecursive(IEvolutionNode node, MutableInt integer) {
        integer.add(1);
        node.setPokedexNumber(integer.getValue());
        for (IEvolutionNode evolution : node.getEvolutions()) {
            updateDexNumbersRecursive(evolution, integer);
        }
    }

    public Map<String, IEvolutionNode> getNodes() {
        return nodes;
    }

    public Collection<Species> getSpecies() {
        return species;
    }

    public static List<IEvolutionNode> getSortedSpecies() {
        return GravelsExtendedBattles.SORTED_SPECIES;
    }

    public List<IEvolutionNode> getSpeciesWithMultiplePreEvolutions() {
        return speciesWithMultiplePreEvolutions;
    }
}
