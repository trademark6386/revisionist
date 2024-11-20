package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokedex.*;
import com.cobblemon.mod.common.api.pokedex.entry.*;
import com.cobblemon.mod.common.api.pokemon.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.mixin.*;
import drai.dev.gravelsextendedbattles.resorting.*;
import net.minecraft.resources.*;

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
                if(species == null || speciesToBeRemoved.contains(species)){
                    dexDef.getEntries().remove(entry);
                }
                assert species != null;
                var formsToRemove = entry.getForms().stream().filter(pokedexForm -> {
                    var form = species.getFormByName(pokedexForm.getDisplayForm());
                    if(form.getName().equalsIgnoreCase("normal")) return false;
                    if (containsBannedLabels(form.getLabels().stream().toList())) {
                        species.getForms().remove(form);
                        return true;
                    }
                    return false;
                }).toList();
                for(var form : formsToRemove){
                    entry.getForms().remove(form);
                }
            }
            //empty pokedexes should be removed
            if(dexDef.getEntries().isEmpty()) dexes.getDexEntryMap().remove(dex.getKey());
        }
    }

    public static List<PokedexEntry> processPokedexResorting(List<PokedexEntry> nationalDexEntries){
        var evolutionGraph = GravelmonPokedexResorter.GRAPH_INSTANCE;
        var sortedSpecies = evolutionGraph.getSortedSpecies();
        var sortedEntries = new ArrayList<PokedexEntry>();
        var pokemonSpecies = PokemonSpecies.INSTANCE;
        for (int i = 0; i < sortedSpecies.size(); i++) {
            var sortedSpeciesEntry = sortedSpecies.get(i);
            var species = sortedSpeciesEntry.getSpecies();
            var dexEntry = nationalDexEntries.stream().filter(entry -> pokemonSpecies.getByIdentifier(entry.getSpeciesId()) == species).findFirst();
            if(dexEntry.isPresent()){
                sortedEntries.add(dexEntry.get());
            }
        }
        return sortedEntries;
    }
}
