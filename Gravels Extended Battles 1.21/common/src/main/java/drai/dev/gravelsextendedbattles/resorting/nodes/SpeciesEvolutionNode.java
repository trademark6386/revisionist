package drai.dev.gravelsextendedbattles.resorting.nodes;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;

import java.util.*;

public class SpeciesEvolutionNode extends IEvolutionNode{
    private Species pokemon;
    private List<IEvolutionNode> evolutions;
    private List<IEvolutionNode> preEvolutions;

    public SpeciesEvolutionNode(Species pokemon) {
        this.pokemon = pokemon;
        this.evolutions = new ArrayList<>();
        this.preEvolutions = new ArrayList<>();
        this.sortingNumber = pokemon.getNationalPokedexNumber();
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

    public Species getSpecies(){
        return pokemon;
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

    @Override
    public void setPokedexNumber(int i) {
        pokemon.setNationalPokedexNumber(i);
    }

    @Override
    public Species getPokemon() {
        return pokemon;
    }
}
