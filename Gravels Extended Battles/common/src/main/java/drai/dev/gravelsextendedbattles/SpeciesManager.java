package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import net.minecraft.util.*;
import org.jetbrains.annotations.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.ALLOWED_LABELS;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.BANNED_LABELS;

public class SpeciesManager {

    public static void banPokemon(@NotNull PokemonSpecies pokemonSpecies, GravelmonPokemonSpeciesAccessor accessor) {
        var currentSpecies = accessor.getSpeciesByIdentifier();
        var speciesToBeRemoved = currentSpecies.entrySet().stream().filter(identifierSpeciesEntry -> {
            boolean shouldBeBanned = false;
            if (containsBannedLabels(identifierSpeciesEntry.getValue().getLabels().stream().toList())) {
//                    System.out.println("blocked a pokemon with " +label + "label: " + pokemon.getDisplayName().toString());
                shouldBeBanned = true;
            }
            return shouldBeBanned;
        }).toList();
        if (!speciesToBeRemoved.isEmpty()) {
            accessor.getSpeciesByDex().clear();
            pokemonSpecies.getImplemented().clear();

            for (var entry : speciesToBeRemoved) {
                currentSpecies.remove(entry.getKey());
            }
            for (var species : currentSpecies.values()) {
                if (species != null) {
                    Species old = species;
                    accessor.getSpeciesByDex().remove(old.getResourceIdentifier().getNamespace(), old.getNationalPokedexNumber());
                    accessor.getSpeciesByDex().put(species.getResourceIdentifier().getNamespace(), species.getNationalPokedexNumber(), species);
                    if (species.getImplemented()) {
                        pokemonSpecies.getImplemented().add(species);
                    }
                    var evolutions = new ArrayList<>(species.getEvolutions());
                    for (var evolutionData : evolutions) {
                        var result = evolutionData.getResult();

                        var resultSpecies = currentSpecies.get(new Identifier("cobblemon", result.getSpecies() != null ? result.getSpecies() : ""));
                        if (resultSpecies != null) {
                            var resultForm = resultSpecies.getForm(Collections.singleton(result.getForm()));
                            if(containsBannedLabels(resultForm.getLabels().stream().toList())||containsBannedLabels(resultSpecies.getLabels().stream().toList())) {
                                species.getEvolutions().remove(evolutionData);
                            }
                        } else {
                            species.getEvolutions().remove(evolutionData);
                        }
                    }

                    var forms = new ArrayList<>(species.getForms());
                    for (var formData : forms) {
                        if(containsBannedLabels(formData.getLabels().stream().toList())) {
                            species.getForms().remove(formData);
                            continue;
                        }

                        var formEvolutions = new ArrayList<>(formData.getEvolutions());
                        for (var formEvolutionData : formEvolutions) {
                            var result = formEvolutionData.getResult();
                            var resultSpecies = currentSpecies.get(new Identifier("cobblemon", result.getSpecies() != null ? result.getSpecies() : ""));
                            if (resultSpecies != null) {
                                var resultForm = resultSpecies.getForm(Collections.singleton(result.getForm()));
                                if(containsBannedLabels(resultForm.getLabels().stream().toList())) {
                                    species.getEvolutions().remove(formEvolutionData);
                                }
                            } else {
                                formData.getEvolutions().remove(formEvolutionData);
                            }
                        }
                    }
                }
            }
        }
    }

    public static boolean containsBannedLabels(List<String> labels) {
        if(labels == null) return false;
        if(labels.isEmpty()) return false;
        for (String label : labels) {
            if(ALLOWED_LABELS.contains(label)) return false;
            if (BANNED_LABELS.contains(label)) {
                return true;
            }
        }
        return false;
    }
}




