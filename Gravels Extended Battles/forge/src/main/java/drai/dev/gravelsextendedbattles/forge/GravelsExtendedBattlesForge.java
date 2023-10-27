package drai.dev.gravelsextendedbattles.forge;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import kotlin.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

import java.io.*;
import java.nio.file.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.bannedLabels;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";
    public GravelsExtendedBattlesForge(){
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(MinecraftFolder, fileName);
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
        GravelsExtendedBattles.init();
        MidnightConfig.init("gravelmon", GravelmonForgeConfig.class);
        GravelsExtendedBattles.bannedLabels = GravelmonForgeConfig.bannedLabels.toArray(new String[0]);
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
