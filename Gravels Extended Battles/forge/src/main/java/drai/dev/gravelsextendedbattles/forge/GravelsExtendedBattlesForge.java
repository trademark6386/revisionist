package drai.dev.gravelsextendedbattles.forge;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.reactive.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import kotlin.Unit;
import net.minecraft.server.command.*;
import net.minecraft.util.*;
import net.minecraftforge.api.distmarker.*;
import net.minecraftforge.event.*;
import net.minecraftforge.eventbus.api.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;
import org.jetbrains.annotations.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.MOD_ID;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.bannedLabels;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";

    public static List<Identifier> modeledPokemonIdentifiers = new ArrayList<>();
    public static SimpleObservable<Boolean> scaleNeedsARefresh = new SimpleObservable<>();
    public GravelsExtendedBattlesForge(){
        GravelsExtendedBattles.init();
        MidnightConfig.init("gravelmon", GravelmonForgeConfig.class);
        GravelsExtendedBattles.bannedLabels = GravelmonForgeConfig.bannedLabels.toArray(new String[0]);

        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        boolean enableFangameTypechart = GravelmonForgeConfig.enableFangameTypechart;
        if (enableFangameTypechart) {
            for (String fileName : GravelsExtendedBattles.fangameTypechart) {
                try {
                    exportResource(GravelsExtendedBattlesForge.MinecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }

            // Rename the typechart2.js file after loading
            try {
                String originalFilePath = GravelsExtendedBattlesForge.MinecraftFolder + File.separator + "typechart2.js";
                String renamedFilePath = GravelsExtendedBattlesForge.MinecraftFolder + File.separator + "typechart.js";
                renameFile(originalFilePath, renamedFilePath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            // If fangameTypechart is disabled, use showdownFiles instead
            for (String fileName : GravelsExtendedBattles.gebTypechart) {
                try {
                    exportResource(GravelsExtendedBattlesForge.MinecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        CobblemonEvents.POKEMON_ENTITY_SPAWN.subscribe(Priority.NORMAL, pokemonEntitySpawnEvent -> {
            var pokemon = pokemonEntitySpawnEvent.getEntity().getPokemon();
            for (String label : bannedLabels) {
                if(pokemon.hasLabels(label)){
                    pokemonEntitySpawnEvent.getEntity().discard();
                    System.out.println("blocked a pokemon with " +label + "label: " + pokemon.getDisplayName().toString());
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

    private static void renameFile(String originalFilePath, String newFilePath) throws IOException {
        Path source = Paths.get(originalFilePath);
        Path destination = Paths.get(newFilePath);
        Files.move(source, destination);
    }

    @Mod.EventBusSubscriber(modid = MOD_ID, bus = Mod.EventBusSubscriber.Bus.FORGE, value = Dist.CLIENT)
    public static class ServerModEvents {
        @SubscribeEvent
        public static void RegisterServerCommandsEvent(RegisterCommandsEvent event){
            CommandDispatcher<ServerCommandSource> dispatcher = event.getDispatcher();
            CheckSpawnsForSpeciesCommand.register(dispatcher);
        }
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
            stream = GravelsExtendedBattlesForge.class.getResourceAsStream(resourceName);//note that each / is a directory down in the "jar tree" been the jar the root of the tree
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
