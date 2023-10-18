package drai.dev.gravelmon.forge;

import drai.dev.gravelmon.*;
import eu.midnightdust.lib.util.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

import java.io.*;

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
