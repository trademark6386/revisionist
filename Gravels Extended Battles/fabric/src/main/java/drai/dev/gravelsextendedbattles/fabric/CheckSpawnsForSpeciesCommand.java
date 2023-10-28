package drai.dev.gravelsextendedbattles.fabric;

import com.cobblemon.mod.common.*;
import com.cobblemon.mod.common.api.conditional.*;
import com.cobblemon.mod.common.api.permission.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.spawning.*;
import com.cobblemon.mod.common.api.spawning.condition.*;
import com.cobblemon.mod.common.api.spawning.context.*;
import com.cobblemon.mod.common.api.spawning.detail.*;
import com.cobblemon.mod.common.command.argument.*;
import com.cobblemon.mod.common.registry.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import com.mojang.datafixers.util.*;
import kotlin.ranges.*;
import net.minecraft.registry.tag.*;
import net.minecraft.server.command.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import net.minecraft.world.biome.*;
import net.minecraft.world.gen.structure.*;
import org.jetbrains.annotations.*;

import java.text.*;
import java.util.*;
import java.util.function.*;
import java.util.regex.*;

public class CheckSpawnsForSpeciesCommand {
    public static final float PURPLE_THRESHOLD = 0.01F;
    public static final float  RED_THRESHOLD = 0.1F;
    public static final float  YELLOW_THRESHOLD = 5F;
    public static final DecimalFormat df = new DecimalFormat("#.##");
    public static void register(CommandDispatcher<ServerCommandSource> dispatcher){
        Predicate<ServerCommandSource> permissionRequirement = (ServerCommandSource source) -> Cobblemon.INSTANCE.getPermissionValidator().hasPermission(source, CobblemonPermissions.INSTANCE.getCHECKSPAWNS());
        dispatcher.register(CommandManager.literal("checkspawnsforspecies")
                .requires(permissionRequirement).then(
                        CommandManager.argument("species", PokemonPropertiesArgumentType.Companion.properties())
                                .executes(CheckSpawnsForSpeciesCommand::execute)
                )
        );
    }

    public static int execute(CommandContext<ServerCommandSource> context) throws CommandSyntaxException {
        if (!Cobblemon.config.getEnableSpawning()) {
            return 0;
        }

        var player = context.getSource().getPlayerOrThrow();
        PokemonProperties pokemonProperties = PokemonPropertiesArgumentType.Companion.getPokemonProperties(context, "species");
        List<SpawnDetail> pokemonSpawnDetails = CobblemonSpawnPools.INSTANCE.getWORLD_SPAWN_POOL().getDetails().stream().filter(spawnDetail -> {
            if(spawnDetail instanceof PokemonSpawnDetail) {
                var species = ((PokemonSpawnDetail) spawnDetail).getPokemon().getSpecies();
                var aspects = ((PokemonSpawnDetail) spawnDetail).getPokemon().getAspects();
                return pokemonProperties.getSpecies().equals(species) && pokemonProperties.getAspects().equals(aspects);
            }
             return false;
        }
        ).toList();
        var messages = new ArrayList<MutableText>();
        if(!pokemonSpawnDetails.isEmpty()){
            String initMessage = "Spawn Conditions for ";
            initMessage += genSpeciesText(pokemonProperties)+":";
            messages.add(Text.translatable(initMessage));
            int counter = 1;
            for (SpawnDetail spawnDetail: pokemonSpawnDetails) {
                var message = Text.translatable("Spawn condition "+counter+":\n" +
                        "Spawns in the bucket: " + spawnDetail.getBucket().name+" with a weight of "+spawnDetail.getWeight()+"\n");
                if(!spawnDetail.getConditions().isEmpty()) {
                    for (SpawningCondition spawnCondition : spawnDetail.getConditions()) {
                        message.append(Text.translatable("With the following conditions satisfied:\n"));
                        addSpawningCondition(spawnCondition, message);
                        message.append(Text.translatable("\n"));
                    }
                }
                if(!spawnDetail.getAnticonditions().isEmpty()){
                    for (SpawningCondition spawnCondition: spawnDetail.getAnticonditions()) {
                        message.append(Text.translatable("With the following conditions not satisfied:\n"));
                        addSpawningCondition(spawnCondition, message);
                        message.append(Text.translatable("\n"));
                    }
                }

                if(spawnDetail.isModDependencySatisfied()){
                    message.append("This condition has its Mod Dependencies satisfied.");
                    message.append(Text.translatable("\n"));
                }
                messages.add(message);
                counter++;
            }
        }

        if(messages.isEmpty()){
            player.sendMessage(Text.translatable("No Spawns found for "+genSpeciesText(pokemonProperties)));
        } else{
            for (MutableText message : messages) {
                player.sendMessage(message);
            }
        }
        return Command.SINGLE_SUCCESS;
    }

    private static MutableText addSpawningCondition(SpawningCondition spawnCondition, MutableText mutableText) {
       var conditionText = "";
       List<String> conditionEntries = new ArrayList<>();
        if(spawnCondition.getDimensions() != null){
            var dimensions = "Spawns in Dimensions: (";
            boolean isFirstDimension = true;
            for (Object identifier : spawnCondition.getDimensions()) {
                if (identifier instanceof Identifier) {
                    if (isFirstDimension) {
                        isFirstDimension = false;
                    } else {
                        dimensions += ", ";
                    }
                    dimensions += identifier.toString();
                }
            }
            dimensions += ")"+",\n";
            conditionEntries.add(dimensions);
        };
        if(spawnCondition.getBiomes()!=null){
            var biomes = "In biomes (";
            boolean isFirstBiome = true;
            var biomesList = spawnCondition.getBiomes().stream().toList();
            for (int i = 0; i < spawnCondition.getBiomes().size(); i++) {
                if (isFirstBiome) {
                    isFirstBiome = false;
                } else {
                    biomes += ", ";
                }
                var biomeCondition = biomesList.get(i);
                if(biomeCondition instanceof BiomeTagCondition){
                    biomes += ((BiomeTagCondition) biomeCondition).getTag().id().toString();
                } else if(biomeCondition instanceof  BiomeIdentifierCondition){
                    biomes += ((BiomeIdentifierCondition) biomeCondition).getIdentifier().toString();
                }

            }
            biomes+=")"+",\n";
            conditionEntries.add(biomes);
        }
        boolean isFirstConditionEntry = true;
        for (String conditionEntry : conditionEntries) {
            if(isFirstConditionEntry){
                isFirstConditionEntry = false;
            }
            conditionText += conditionEntry;
        }

        var whileText = "";
        List<String> whileEntries = new ArrayList<>();
        if(spawnCondition.getCanSeeSky()!=null){
            if(Boolean.TRUE.equals(spawnCondition.getCanSeeSky())){
                whileEntries.add("it can see the sky");
            } else{
                whileEntries.add("it can't see the sky");
            }
        }
        if(spawnCondition.getMinY()!=null){
            whileEntries.add("the area is above y="+spawnCondition.getMinY());
        }
        if(spawnCondition.getMaxY()!=null){
            whileEntries.add("the area is below y="+spawnCondition.getMaxY());
        }
        if(spawnCondition.getMinLight()!=null){
            whileEntries.add("the area's light level is above "+spawnCondition.getMinLight());
        }
        if(spawnCondition.getMaxLight()!=null){
            whileEntries.add("the area 's light level is below"+spawnCondition.getMaxLight());
        }
        if(spawnCondition.isRaining()!=null){
            if(Boolean.TRUE.equals(spawnCondition.getCanSeeSky())){
                whileEntries.add("it is raining");
            } else{
                whileEntries.add("it isn't raining");
            }
            whileEntries.add("the area 's light level is below"+spawnCondition.getMaxLight());
        }
        if(spawnCondition.isThundering()!=null){
            if(Boolean.TRUE.equals(spawnCondition.getCanSeeSky())){
                whileEntries.add("it is thundering");
            } else{
                whileEntries.add("it isn't thundering");
            }
            whileEntries.add("the area 's light level is below"+spawnCondition.getMaxLight());
        }
        if(spawnCondition.getStructures()!=null){
            var isFirstStructureCondition = true;
            var structuresText = "is inside or around structures: ";
            var structuresList = spawnCondition.getStructures().stream().toList();
            for (int i = 0; i < spawnCondition.getStructures().size(); i++) {
                if (isFirstStructureCondition) {
                    isFirstStructureCondition = false;
                } else {
                    structuresText += ", ";
                }
                var entry = structuresList.get(i);
                var castedEntry = ((Either<Identifier, TagKey<Structure>>)entry);
                if(castedEntry.left().isPresent()){
                    structuresText+=castedEntry.left().get().toString();
                } else if(castedEntry.right().isPresent()){
                    structuresText+=castedEntry.right().get().id();
                }
            }
            whileEntries.add(structuresText);
        }
        if(spawnCondition.getMoonPhase()!=null){
            var moonPhases = spawnCondition.getMoonPhase().getRanges();
            var moonPhasesText = "the moon phase is between ";
            var isFirstMoonPhaseRange = true;
            for (IntRange intRange : moonPhases) {
                if(isFirstMoonPhaseRange){
                    isFirstMoonPhaseRange = false;
                } else {
                    moonPhasesText += " and ";
                }
                moonPhasesText+=intRange.toString();
            }
            whileEntries.add(moonPhasesText);
        }



        boolean isFirstWhileEntry = true;
        for (String whileEntry :
                whileEntries) {
            if(isFirstWhileEntry){
                whileText = "While ";
            } else {
                whileText+=" and \n";
            }
            whileText+=whileEntry;

        }
        mutableText.append(Text.translatable(
                  conditionText+
                          whileText
        ));
        return mutableText;
    }

    @NotNull
    private static String genSpeciesText(PokemonProperties pokemonProperties) {
        String initMessage = capitalizeWord(pokemonProperties.getSpecies());
        if(!pokemonProperties.getAspects().isEmpty()){
            initMessage +=" (";
            boolean isFirst = true;
            for (String aspect : pokemonProperties.getAspects()) {
                if(isFirst){
                    isFirst = false;
                } else{
                    initMessage += ", ";
                }
                initMessage += capitalizeWord(aspect);
            }
            initMessage += ")";
        }
        return initMessage;
    }

    public static String capitalizeWord(String word){
        String output = Pattern.compile("^.").matcher(word).replaceFirst(m -> m.group().toUpperCase());
        return output;
    }

    public static MutableText applyColour(float percentage) {
        MutableText name = Text.translatable(percentage+"");
        if (percentage < PURPLE_THRESHOLD) {
            name.setStyle(Style.EMPTY.withColor(Formatting.field_1076));
        } else if (percentage < RED_THRESHOLD) {
            name.setStyle(Style.EMPTY.withColor(Formatting.field_1061));
        } else if (percentage < YELLOW_THRESHOLD) {
            name.setStyle(Style.EMPTY.withColor(Formatting.field_1054));
        } else {
            name.setStyle(Style.EMPTY.withColor(Formatting.field_1060));
        }
        return name;
    }

    public static MutableText applyColour(MutableText name, Formatting color) {
        return name.setStyle(Style.EMPTY.withColor(color));
    }
}
