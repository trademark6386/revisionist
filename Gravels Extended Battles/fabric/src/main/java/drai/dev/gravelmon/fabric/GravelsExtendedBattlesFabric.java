package drai.dev.gravelmon.fabric;

import drai.dev.gravelmon.*;
import net.fabricmc.api.*;
import net.fabricmc.loader.api.*;
import org.apache.commons.io.*;

import java.io.*;
import java.net.*;
import java.nio.file.FileSystem;
import java.nio.file.*;
import java.util.*;
import java.util.jar.*;
import java.util.zip.*;

import static drai.dev.gravelmon.GravelsExtendedBattles.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FabricLoader.getInstance().getGameDir().toString()+"\\showdown\\data\\mods\\cobblemon\\";
    @Override
    public void onInitialize() {
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(GravelsExtendedBattlesFabric.MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }
}
