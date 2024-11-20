package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokedex.*;
import com.cobblemon.mod.common.api.pokemon.*;
import drai.dev.gravelsextendedbattles.mixin.*;

public class GravelmonPokedexManager {
    public static void processPokedexBans(PokemonSpecies dexes){
        PokedexManagerAccessor pokedexManagerAccessor = (PokedexManagerAccessor) (Object) PokedexManager.Companion;
        var entries = pokedexManagerAccessor.getSpeciesRecords();
    }

    public static void processPokedexResorting(PokemonSpecies dexes){

    }
}
