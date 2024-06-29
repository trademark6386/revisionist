package drai.dev.gravelsextendedbattles.forge;

import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static String MINECRAFT_FOLDER = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";
    public GravelsExtendedBattlesForge() {
        GravelsExtendedBattles.init(MINECRAFT_FOLDER);
    }
}
