package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.api.pokemon.evolution.requirement.*;
import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.pokemon.*;
import com.cobblemon.mod.common.pokemon.evolution.requirements.*;
import com.cobblemon.mod.common.pokemon.evolution.variants.*;
import com.google.common.collect.*;
import drai.dev.gravelmon.pokemon.attributes.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.mixin.*;
import net.minecraft.resources.*;
import net.minecraft.util.*;
import org.jetbrains.annotations.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.*;

public class SpeciesManager {
    private static final Map<String, List<TypeChangeEntry>> changedTypes = new HashMap<>();
    private static final HashMap<String, List<EvolutionEntry>> additionalFormEvolutions = new HashMap<>();
    private static final HashMap<String, Float> additionalFormBaseScaleChanges = new HashMap<>();

    public static void banPokemon(@NotNull PokemonSpecies pokemonSpecies, GravelmonPokemonSpeciesAccessor accessor) {
        var currentSpecies = accessor.getSpeciesByIdentifier();
        var speciesToBeRemoved = currentSpecies.entrySet().stream()
                .filter(ResourceLocationSpeciesEntry ->
                        containsBannedLabels(ResourceLocationSpeciesEntry.getValue().getLabels().stream().toList())
                ).toList();
        if (!speciesToBeRemoved.isEmpty()) {
            accessor.getSpeciesByDex().clear();
            pokemonSpecies.getImplemented().clear();

            for (var entry : speciesToBeRemoved) {
                currentSpecies.remove(entry.getKey());
            }
            for (var species : currentSpecies.values()) {
                if (species != null) {
                    accessor.getSpeciesByDex().remove(species.getResourceIdentifier().getNamespace(), species.getNationalPokedexNumber());
                    accessor.getSpeciesByDex().put(species.getResourceIdentifier().getNamespace(), species.getNationalPokedexNumber(), species);
                    if (species.getImplemented() || !containsBannedLabels(List.of("not_modeled"))) {
                        pokemonSpecies.getImplemented().add(species);
                    }
                    var evolutions = new ArrayList<>(species.getEvolutions());
                    for (var evolutionData : evolutions) {
                        var result = evolutionData.getResult();

                        var resultSpecies = currentSpecies.get(new ResourceLocation("cobblemon", result.getSpecies() != null ? result.getSpecies() : ""));
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
                            var resultSpecies = currentSpecies.get(new ResourceLocation("cobblemon", result.getSpecies() != null ? result.getSpecies() : ""));
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

    public static boolean containsBannedLabels(String species, String form){
        if(species == null) return true;
        var pokemon = PokemonSpecies.INSTANCE.getByName(species);
        if(pokemon == null) return true;
        return containsBannedLabels(pokemon.getForm(Set.of(form == null ? "" : form)).getLabels().stream().toList());
    }

    public static boolean containsBannedLabels(List<String> labels) {
        if(labels == null) return false;
        if(labels.isEmpty()) return false;
        for (String label : labels) {
            try {
                var labelEnum = Label.valueOf(label.toUpperCase());
                if (Label.passwordProtectedLabels.containsKey(labelEnum)) {
                    if (!PASSWORDS.contains(Label.passwordProtectedLabels.get(labelEnum))) return true;
                }
            } catch (IllegalArgumentException e) {
                //do nothing, this is fine
            }


            if(ALLOWED_LABELS.contains(label)) return false;
            if (BANNED_LABELS.contains(label)) {
                return true;
            }
        }
        return false;
    }
//
    public static void registerFormEvolution(String pokemon, EvolutionEntry moveToInsert){
        additionalFormEvolutions.computeIfAbsent(pokemon, k -> new ArrayList<>()).add(moveToInsert);
    }

    public static void registerTypeChange(String pokemon, TypeChangeEntry typeChangeEntry){
        changedTypes.computeIfAbsent(pokemon, k -> new ArrayList<>()).add(typeChangeEntry);
    }

    public static void registerBaseScaleChange(String pokemon, float baseScale){
        additionalFormBaseScaleChanges.put(pokemon, baseScale);
    }

    public static void processTypeChanges(){
        var implementedTypes = GravelsExtendedBattles.IMPLEMENTED_TYPES;
        changedTypes.forEach((key,value)-> {
            var splitFrom = key.split(" ");
            var pokemon = PokemonSpecies.INSTANCE.getByName(splitFrom[0]);
            if(pokemon!=null){
                FormData form = null;
                if(splitFrom.length>1){
                    form = pokemon.getForm(new HashSet<>(List.of(splitFrom[1].toLowerCase())));
                }
                var isForm = false;
                if(form!=null){
                    isForm = !form.getName().equalsIgnoreCase("normal");
                }
                for (var typeChanges : value) {
                    if(!implementedTypes.contains(typeChanges.getTo())) continue;
                    var newType = ElementalTypes.INSTANCE.get(typeChanges.getTo());
                    if(newType==null) continue;
                    if(!isForm){
                        if (pokemon.getPrimaryType().getName().equalsIgnoreCase(typeChanges.getFrom())) {
                            pokemon.setPrimaryType$common(newType);
                        } else if(
                                (pokemon.getSecondaryType()!=null && pokemon.getSecondaryType().getName().equalsIgnoreCase(typeChanges.getFrom()))
                                || pokemon.getSecondaryType() == null && typeChanges.getFrom() == null
                            ){
                            pokemon.setSecondaryType$common(newType);
                        }
                    } else {
                        var agreeableForm = (FormDataAccessor)(Object)form;
                        if (form.getPrimaryType().getName().equalsIgnoreCase(typeChanges.getFrom())) {
                            agreeableForm.setPrimaryType(newType);
                        } else if(
                                (form.getSecondaryType()!=null && form.getSecondaryType().getName().equalsIgnoreCase(typeChanges.getFrom()))
                                        || form.getSecondaryType() == null && typeChanges.getFrom() == null
                        ){
                            agreeableForm.setSecondaryType(newType);
                        }
                    }

                }
            }
        });
        var pokemonSpecies = PokemonSpecies.INSTANCE;
        var accessor = ((PokemonSpeciesAccessor)(Object)pokemonSpecies);
        var currentSpecies = accessor.getSpeciesByIdentifier();
        currentSpecies.forEach((key, value) -> substituteType(value, implementedTypes));
    }

    private static void substituteType(Species species, List<String> implementedTypes) {
        if(!implementedTypes.contains(species.getPrimaryType().getName())) {
            var type = Type.getByName(species.getPrimaryType().getName());
            if(type!=null){
                var substitutionType = type.getSubstitutionType();
                if(substitutionType!=null){
                    var substitutionTypeName = substitutionType.getName();
                    var newType = ElementalTypes.INSTANCE.get(substitutionTypeName);
                    if(newType!=null){
                        species.setPrimaryType$common(newType);
                    }
                }
            }
        }
        if(species.getSecondaryType()!=null){
            if(!implementedTypes.contains(species.getSecondaryType().getName())) {
                var type = Type.getByName(species.getSecondaryType().getName());
                if(type!=null){
                    var substitutionType = type.getSubstitutionType();
                    if(substitutionType!=null){
                        var substitutionTypeName = substitutionType.getName();
                        var newType = ElementalTypes.INSTANCE.get(substitutionTypeName);
                        if(newType!=null){
                            species.setSecondaryType$common(newType);
                        }
                    }
                }
            }
        }

        for (var formData : species.getForms()){
            if(!implementedTypes.contains(formData.getPrimaryType().getName())) {
                var type = Type.getByName(formData.getPrimaryType().getName());
                if(type!=null){
                    var substitutionType = type.getSubstitutionType();
                    if(substitutionType!=null){
                        var substitutionTypeName = substitutionType.getName();
                        var newType = ElementalTypes.INSTANCE.get(substitutionTypeName);
                        if(newType!=null){
                            var formDataAccessor = (FormDataAccessor)(Object)formData;
                            formDataAccessor.setPrimaryType(newType);
                        }
                    }
                }
            }
            if(formData.getSecondaryType()!=null){
                if(!implementedTypes.contains(formData.getSecondaryType().getName())) {
                    var type = Type.getByName(formData.getSecondaryType().getName());
                    if(type!=null){
                        var substitutionType = type.getSubstitutionType();
                        if(substitutionType!=null){
                            var substitutionTypeName = substitutionType.getName();
                            var newType = ElementalTypes.INSTANCE.get(substitutionTypeName);
                            if(newType!=null){
                                var formDataAccessor = (FormDataAccessor)(Object)formData;
                                formDataAccessor.setSecondaryType(newType);
                            }
                        }
                    }
                }
            }
        }
    }

    public static void processFormEvolutionAdditions(){
        additionalFormEvolutions.forEach((key,value)-> {
            var splitFrom = key.split(" ");
            var pokemon = PokemonSpecies.INSTANCE.getByName(splitFrom[0]);
            if(pokemon!=null){
                FormData form = null;
                if(splitFrom.length<2){
                    return;
                }
                form = pokemon.getForm(new HashSet<>(List.of(splitFrom[1])));
                if(form.getName().equalsIgnoreCase("normal")) return;
                var evolutions = form.getEvolutions();
                for(var evolution : value){
                    var evolutionObj = resolveEvolution(form, evolution);
                    if(evolutionObj==null) continue;
                    evolutions.add(evolutionObj);
                    ((FormDataAccessor) (Object) form).setEvolutions(evolutions);
                }
            }
        });
    }

    public static void processFormBaseScaleAdditions(){
        additionalFormBaseScaleChanges.forEach((key,value)-> {
            var splitFrom = key.split(" ");
            var pokemon = PokemonSpecies.INSTANCE.getByName(splitFrom[0]);
            if(pokemon!=null){
                if(splitFrom.length<2){
                    return;
                }
                FormData form = form = pokemon.getForm(new HashSet<>(List.of(splitFrom[1])));
                if(form.getName().equalsIgnoreCase("normal")) return;
                ((FormDataAccessor) (Object) form).setBaseScale(value);
            }
        });
    }

    private static Evolution resolveEvolution(FormData form, EvolutionEntry evolutionEntry) {
        var evolutionId = form.getSpecies().getName().toLowerCase()+"_"+evolutionEntry.getResult().replaceAll(" ", "_").toLowerCase();
        var result = PokemonProperties.Companion.parse(evolutionEntry.getResult());
        if(result.getSpecies()==null) return null;
        if(evolutionEntry.getKind() == EvolutionType.LEVEL_UP){
            Set<EvolutionRequirement> requirements = getEvolutionRequirements(evolutionEntry);
            return new LevelUpEvolution(evolutionId, result, true, false, requirements, new HashSet<>(), true);
        }
        return null;
    }

    private static @NotNull Set<EvolutionRequirement> getEvolutionRequirements(EvolutionEntry evolutionEntry) {
        Set<EvolutionRequirement> requirements = new HashSet<>();
        evolutionEntry.getRequirements().forEach(evolutionRequirementEntry -> {
            if(evolutionRequirementEntry.getRequirementKind().equalsIgnoreCase(EvolutionRequirementCondition.LEVEL.getName())){
                var requirement = new LevelRequirement();
                var level = Integer.parseInt(evolutionRequirementEntry.getConditionParameter());
                ((LevelRequirementAccessor)(Object) requirement).setMinLevel(level);
                requirements.add(requirement);
            }
        });
        return requirements;
    }
}




