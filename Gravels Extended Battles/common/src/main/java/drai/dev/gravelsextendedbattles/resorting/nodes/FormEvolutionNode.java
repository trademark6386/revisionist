package drai.dev.gravelsextendedbattles.resorting.nodes;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;

import java.util.*;

public class FormEvolutionNode implements IEvolutionNode {
    private FormData pokemon;
    private List<IEvolutionNode> evolutions;
    private List<IEvolutionNode> preEvolutions;

    public FormEvolutionNode(FormData pokemon) {
        this.pokemon = pokemon;
        this.evolutions = new ArrayList<>();
        this.preEvolutions = new ArrayList<>();
    }

    public FormData getPokemon() {
        return pokemon;
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
        return pokemon.getName().equalsIgnoreCase("normal") ? null : pokemon.getName().toLowerCase();
    }

    public String getSpecies(){
        return pokemon.getSpecies().getName().toLowerCase();
    }

    public List<IEvolutionNode> getPreEvolutions() {
        return preEvolutions;
    }

    @Override
    public Set<Evolution> getPokemonEvolutions() {
        return getPokemon().getEvolutions();
    }

    @Override
    public int getPokedexNumber() {
        return pokemon.species.getNationalPokedexNumber();
    }
}
