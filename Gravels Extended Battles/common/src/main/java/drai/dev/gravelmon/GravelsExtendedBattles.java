package drai.dev.gravelmon;

import dev.architectury.platform.*;
import org.apache.commons.io.*;

import java.io.*;
import java.net.*;
import java.nio.file.*;
import java.nio.file.FileSystem;
import java.util.*;

public class GravelsExtendedBattles {
    public static final String MOD_ID = "gravels_extended_battles";
    public static final ArrayList<String> showdownFiles = new ArrayList<>(
            List.of("abilities.js","conditions.js", "items.js", "moves.js", "pokedex.js", "scripts.js", "typechart.js"));
    public static URL SHOW_DOWN_FOLDER = GravelsExtendedBattles.class.getResource("\\showdown");
    public static void init() {
    }


    public static void copyFileToDest(File source, File dest){
        try {
            FileUtils.copyDirectory(source, dest);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
