package drai.dev.gravelsextendedbattles.resorting;

import com.cobblemon.mod.common.api.pokemon.*;

public class GravelmonPokedexResorter {
    public static void resort(PokemonSpecies pokemonSpecies) {
        new EvolutionGraph(pokemonSpecies);
    }
}
