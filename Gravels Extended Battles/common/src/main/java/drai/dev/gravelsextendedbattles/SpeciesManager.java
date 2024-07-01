package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.api.pokemon.evolution.requirement.*;
import com.cobblemon.mod.common.pokemon.*;
import com.cobblemon.mod.common.pokemon.evolution.requirements.*;
import com.cobblemon.mod.common.pokemon.evolution.variants.*;
import drai.dev.gravelmon.pokemon.attributes.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.mixin.*;
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

    private static HashMap<String, List<EvolutionEntry>> additionalFormEvolutions = new HashMap<>();
//
    public static void registerFormEvolution(String pokemon, EvolutionEntry moveToInsert){
        additionalFormEvolutions.computeIfAbsent(pokemon, k -> new ArrayList<>()).add(moveToInsert);
    }

    public static void processFormEvolutionAdditions(){
        SpeciesManager.registerFormEvolution("sandslash alolan", new EvolutionEntry("sandridger alolan", EvolutionType.LEVEL_UP, List.of(),
                List.of(new EvolutionRequirementEntry(EvolutionRequirementCondition.LEVEL,"40"))));
        additionalFormEvolutions.forEach((key,value)-> {
            var splitFrom = key.split(" ");
            var pokemon = PokemonSpecies.INSTANCE.getByName(splitFrom[0]);
            if(pokemon!=null){
                var form = pokemon.getForm(new HashSet<>(List.of(splitFrom[1])));
                if(form.getName().equalsIgnoreCase("normal")) return;
                var evolutions = form.getEvolutions();
                for(var evolution : value){
                    evolutions.add(resolveEvolution(form, evolution));
                    ((FormDataAccessor) (Object) form).setEvolutions(evolutions);
                }
            }
        });
    }

    private static Evolution resolveEvolution(FormData form, EvolutionEntry evolutionEntry) {
        var evolutionId = form.getSpecies().getName().toLowerCase()+"_"+evolutionEntry.getResult().replaceAll(" ", "_").toLowerCase();
        var result = PokemonProperties.Companion.parse(evolutionEntry.getResult());
        if(evolutionEntry.getKind() == EvolutionType.LEVEL_UP){
            Set<EvolutionRequirement> requirements = new HashSet<>();
            evolutionEntry.getRequirements().stream().forEach(evolutionRequirementEntry -> {
                if(evolutionRequirementEntry.getRequirementKind().equalsIgnoreCase(EvolutionRequirementCondition.LEVEL.getName())){
                    requirements.add(new LevelRequirement(Integer.parseInt(evolutionRequirementEntry.getConditionParameter())));
                }
            });
            return new LevelUpEvolution(evolutionId, result, false, false, requirements, new HashSet<>(), true);
        }
        return null;
    }

    private static class LevelRequirement implements EvolutionRequirement {

        int minLevel;
        int maxLevel = Integer.MAX_VALUE;

        public LevelRequirement(int minLevel) {
            this.minLevel = minLevel;
        }

        @Override
        public boolean check(@NotNull Pokemon pokemon) {
            return pokemon.getLevel() >= minLevel && pokemon.getLevel() < maxLevel;
        }
    }
}




