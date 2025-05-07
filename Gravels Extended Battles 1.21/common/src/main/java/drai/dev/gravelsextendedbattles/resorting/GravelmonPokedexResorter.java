package drai.dev.gravelsextendedbattles.resorting;

import com.cobblemon.mod.common.api.pokemon.*;

public class GravelmonPokedexResorter {
    public static EvolutionGraph GRAPH_INSTANCE;
    public static void resort(PokemonSpecies pokemonSpecies) {
        GRAPH_INSTANCE = new EvolutionGraph(pokemonSpecies);
    }
}
