package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.pokemon.*;
import kotlin.*;
import org.apache.commons.io.*;

import java.io.*;
import java.net.*;
import java.util.*;

public class GravelsExtendedBattles {
    public static final ArrayList<String> showdownFiles = new ArrayList<>(
            List.of("abilities.js","conditions.js", "items.js", "moves.js", "pokedex.js", "scripts.js"));
    public static final ArrayList<String> fangameTypechart = new ArrayList<>(
            List.of("originaltypes/typechart.js"));
    public static final ArrayList<String> gebTypechart = new ArrayList<>(
            List.of("typechart.js"));
    public static URL SHOW_DOWN_FOLDER = GravelsExtendedBattles.class.getResource("\\showdown");
    public static String[] bannedLabels;
    public static List<Species> sortedSpecies;
    public static void init() {
       /* CobblemonEvents.POKEMON_ENTITY_SPAWN.subscribe(Priority.HIGHEST, evolutionAcceptedEvent -> {

            return Unit.INSTANCE;
        });*/

    }


    public static void copyFileToDest(File source, File dest){
        try {
            FileUtils.copyDirectory(source, dest);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static public String exportResource(String minecraftFolder,String resourceName) throws Exception {
        InputStream stream = null;
        OutputStream resStreamOut = null;
        String jarFolder;
        try {
            stream = GravelsExtendedBattles.class.getResourceAsStream("..\\..\\..\\"+resourceName);//note that each / is a directory down in the "jar tree" been the jar the root of the tree
            if(stream == null) {
                throw new Exception("Cannot get resource \"" + resourceName + "\" from Jar file.");
            }

            int readBytes;
            byte[] buffer = new byte[4096];
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
