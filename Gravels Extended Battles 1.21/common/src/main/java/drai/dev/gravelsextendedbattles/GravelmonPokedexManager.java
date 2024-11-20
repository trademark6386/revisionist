package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokedex.*;
import com.cobblemon.mod.common.api.pokedex.entry.*;
import com.cobblemon.mod.common.api.pokemon.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.mixin.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.SpeciesManager.containsBannedLabels;
import static drai.dev.gravelsextendedbattles.SpeciesManager.getSpeciesToBeRemoved;

public class GravelmonPokedexManager {
    public static void processPokedexBans(Dexes dexes){
        PokedexManagerAccessor pokedexManagerAccessor = (PokedexManagerAccessor) (Object) PokedexManager.Companion;
        var pokemonSpecies = PokemonSpecies.INSTANCE;
        var pokemonSpeciesAccesssor = ((GravelmonPokemonSpeciesAccessor) (Object) pokemonSpecies);
        var currentSpecies = pokemonSpeciesAccesssor.getSpeciesByIdentifier();
        var speciesToBeRemoved = getSpeciesToBeRemoved(currentSpecies).stream().map(Map.Entry::getValue).toList();
        if(speciesToBeRemoved.isEmpty()) return;
        var allDexes = new ArrayList<>(dexes.getDexEntryMap().entrySet());
        for (var dex : allDexes){
            var dexDef = dex.getValue();
            var entries = new ArrayList<>(dexDef.getEntries());
            for (var entry : entries){
                var species = pokemonSpecies.getByIdentifier(entry.getSpeciesId());
                if(speciesToBeRemoved.contains(species)){
                    dexDef.getEntries().remove(entry);
                }
            }

            //empty pokedexes should be removed
            if(dexDef.getEntries().isEmpty()) dexes.getDexEntryMap().remove(dex.getKey());
        }
    }

    public static void processPokedexResorting(Dexes dexes){

    }
}
