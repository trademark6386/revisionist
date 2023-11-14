package drai.dev.gravelsextendedbattles.fabric;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.reactive.*;
import com.cobblemon.mod.common.api.reactive.Observable;
import com.cobblemon.mod.common.api.spawning.detail.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import kotlin.*;
import kotlin.Unit;
import net.fabricmc.api.*;
import net.fabricmc.fabric.api.command.v2.*;
import net.fabricmc.loader.api.*;
import net.minecraft.util.*;
import org.jetbrains.annotations.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.bannedLabels;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.sortedSpecies;

public class GravelsExtendedBattlesFabric implements ModInitializer {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;

    public static List<Identifier> modeledPokemonIdentifiers = new ArrayList<>();
    public static SimpleObservable<Boolean> scaleNeedsARefresh = new SimpleObservable<>();
    public static String MinecraftFolder = FabricLoader.getInstance().getGameDir().toString()+"/showdown/data/mods/cobblemon/";
    public static void addModeledPokemon(Identifier identifier){
        modeledPokemonIdentifiers.add(identifier);
    }

    @Override
    public void onInitialize() {
        GravelsExtendedBattles.init();
        MidnightConfig.init("gravelmon", GravelmonFabricConfig.class);
        bannedLabels = GravelmonFabricConfig.bannedLabels.toArray(new String[0]);
        CommandRegistrationCallback.EVENT.register(GravelmonCommands::register);
        scaleNeedsARefresh.emit(false);
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        boolean enableFangameTypechart = GravelmonFabricConfig.enableFangameTypechart;
        if (enableFangameTypechart) {
            for (String fileName : GravelsExtendedBattles.fangameTypechart) {
                try {
                    exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        } else {
            // If fangameTypechart is disabled, use showdownFiles instead
            for (String fileName : GravelsExtendedBattles.gebTypechart) {
                try {
                    exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        for (String fileName : GravelsExtendedBattles.fangameTypechart) {
            try {
                exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        CobblemonEvents.POKEMON_ENTITY_SPAWN.subscribe(Priority.NORMAL, pokemonEntitySpawnEvent -> {
            var pokemon = pokemonEntitySpawnEvent.getEntity().getPokemon();
            for (String label : bannedLabels) {
                if(pokemon.hasLabels(label)){
                    pokemonEntitySpawnEvent.getEntity().discard();
                    System.out.println("blocked a pokemon with " +label + "label: " + pokemon.getDisplayName().toString());
                    //TODO uncomment this when the bug regarding spawn canceling is fixed.
                    pokemonEntitySpawnEvent.cancel();
                }
            }
            return Unit.INSTANCE;
        });
        PokemonSpecies.INSTANCE.getObservable().subscribe(Priority.HIGHEST, registeredSpecies -> {
            scaleNeedsARefresh.emit(true);
            return Unit.INSTANCE;
        });
        scaleNeedsARefresh.subscribe(Priority.HIGHEST, registeredSpecies -> {
            if(!PokemonSpecies.INSTANCE.getSpecies().isEmpty()){
                return refreshScale(PokemonSpecies.INSTANCE);
            }
             return Unit.INSTANCE;
        });
    }

    @NotNull
    private static Unit refreshScale(@NotNull PokemonSpecies instance) {

        for (Species species : instance.getSpecies()) {
            boolean scaleChangeNeeded = false;
            if (!Arrays.stream(bannedLabels).toList().contains("not_modeled") && !species.getImplemented()) {
                if (!modeledPokemonIdentifiers.contains(species.getResourceIdentifier())) {
                    scaleChangeNeeded = true;
                }
            }
            if (scaleChangeNeeded) {
                var identifier = new Identifier("gravelmon", species.getResourceIdentifier().getPath());
                //identifier.to
                //TODO check if its possible to see how high the tallest pixel inside the 96x96 image is.
                species.setBaseScale(0.3F);
            }
        }
        modeledPokemonIdentifiers = new ArrayList<>();
        return Unit.INSTANCE;
    }

    static public String exportResource(String minecraftFolder,String resourceName) throws Exception {
        InputStream stream = null;
        OutputStream resStreamOut = null;
        String jarFolder;
        try {
            stream = GravelsExtendedBattlesFabric.class.getResourceAsStream(resourceName);//note that each / is a directory down in the "jar tree" been the jar the root of the tree
            if(stream == null) {
                throw new Exception("Cannot get resource \"" + resourceName + "\" from Jar file.");
            }

            int readBytes;
            byte[] buffer = new byte[4096];
            Files.createDirectories(new File(minecraftFolder).toPath());
            jarFolder = minecraftFolder +resourceName;
            //jarFolder = "C:\\Users\\Stijn\\Desktop\\test\\"+resourceName;
            resStreamOut = new FileOutputStream(jarFolder);
            while ((readBytes = stream.read(buffer)) > 0) {
                resStreamOut.write(buffer, 0, readBytes);
            }

        } catch (Exception ex) {
            throw ex;
        } finally {
            stream.close();
            resStreamOut.close();
        }

        return jarFolder + resourceName;
    }
}
