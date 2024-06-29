package drai.dev.gravelsextendedbattles.resorting.nodes;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;

import java.util.*;

public class SpeciesEvolutionNode implements IEvolutionNode{
    private Species pokemon;
    private List<IEvolutionNode> evolutions;
    private List<IEvolutionNode> preEvolutions;

    public SpeciesEvolutionNode(Species pokemon) {
        this.pokemon = pokemon;
        this.evolutions = new ArrayList<>();
        this.preEvolutions = new ArrayList<>();
    }

    public List<IEvolutionNode> getEvolutions() {
        return evolutions;
    }

    public void addEvolution(IEvolutionNode formEvolutionNode) {
        evolutions.add(formEvolutionNode);
    }

    public void addPreEvolution(IEvolutionNode formEvolutionNode) {
        preEvolutions.add(formEvolutionNode);
    }

    public String getForm(){
        return null;
    }

    public String getSpecies(){
        return pokemon.getName().toLowerCase();
    }

    public List<IEvolutionNode> getPreEvolutions() {
        return preEvolutions;
    }

    @Override
    public Set<Evolution> getPokemonEvolutions() {
        return pokemon.getEvolutions();
    }

    @Override
    public int getPokedexNumber() {
        return pokemon.getNationalPokedexNumber();
    }
}
