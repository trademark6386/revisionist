package drai.dev.gravelmon.forge;

import drai.dev.gravelmon.*;
import eu.midnightdust.lib.util.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

import static drai.dev.gravelmon.GravelsExtendedBattles.exportResource;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static int TYPE_COUNT = 18;
    public static String MinecraftFolder = FMLPaths.GAMEDIR.get().toString()+"\\showdown\\data\\mods\\cobblemon\\";
    public GravelsExtendedBattlesForge(){
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                exportResource(MinecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
    }
}
