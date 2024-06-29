package drai.dev.gravelsextendedbattles.resorting;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.resorting.nodes.*;

import java.util.*;
import java.util.logging.*;

public class EvolutionGraph {
    private Map<String, IEvolutionNode> nodes;
    private Collection<Species> species;
    public EvolutionGraph(PokemonSpecies pokemonSpecies) {
        this.nodes = new HashMap<>();
        this.species = pokemonSpecies.getSpecies();
        species.forEach(this::addPokemon);

        // Add Evolutions
        var sortedNodes = nodes.values().stream().sorted().toList();
        for (int i = 0; i < sortedNodes.size(); i++) {
            var node = sortedNodes.get(i);
            var evolutions = node.getPokemonEvolutions();
            evolutions.forEach(evolution -> {
                        var result = evolution.getResult();
                        var form = result.getForm();
                        if(form == null && result.getOriginalString().contains(" ")){
                            form = result.getOriginalString().split(" ")[1];
                        }
                        this.addEvolution(node.getSpecies(), node.getForm(), result.getSpecies(), form);
            });
        }

        sortedNodes.forEach(value -> this.printEvolutions(value.getSpecies(), value.getForm()));
    }

    public void addPokemon(Species species) {
        String name = species.getName().toLowerCase();
        if (!nodes.containsKey(name)) {
            nodes.put(name, new SpeciesEvolutionNode(species));
        }
        species.getForms().forEach(formData -> {
            String form = formData.getName().toLowerCase();
            if(formData.getName().equalsIgnoreCase("normal")) return;
            String key = form.equalsIgnoreCase("normal") ? name : name + "-" + form;
            if (!nodes.containsKey(key)) {
                nodes.put(key, new FormEvolutionNode(formData));
            }
        });

    }

    public void addEvolution(String fromName, String fromForm, String toName, String toForm) {
        String fromKey = fromForm == null ? fromName : fromName + "-" + fromForm;
        String toKey = toForm == null ? toName : toName + "-" + toForm;
        if(toName == null) GravelsExtendedBattles.logger.log(Level.WARNING, "Invalid evolution result for evolution of "+fromKey);
        if(fromKey.equals(toKey)) return;
        IEvolutionNode fromNode = nodes.get(fromKey);
        IEvolutionNode toNode = nodes.get(toKey);

        if (fromNode != null && toNode != null) {
            if(toNode.getEvolutions().contains(fromNode)) return;
            fromNode.addEvolution(toNode);
            toNode.addPreEvolution(fromNode);
        }
    }

    public IEvolutionNode getNode(String name, String form) {
        String key = form == null ? name : name + "-" + form;
        return nodes.get(key);
    }

    public void printEvolutions(String name, String form) {
        IEvolutionNode node = getNode(name, form);
        if (node != null) {
            printEvolutions(node, "");
        }
    }

    private void printEvolutions(IEvolutionNode node, String indent) {
        System.out.println(indent+ "└" + node.getSpecies() + (node.getForm() == null ? "" : " "+ node.getForm()));
        for (IEvolutionNode evolution : node.getEvolutions()) {
            printEvolutions(evolution, indent + "  ");
        }
    }
}
