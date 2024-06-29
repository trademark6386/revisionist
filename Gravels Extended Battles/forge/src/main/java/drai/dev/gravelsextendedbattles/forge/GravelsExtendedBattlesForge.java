package drai.dev.gravelsextendedbattles.forge;

import drai.dev.gravelsextendedbattles.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";
    public GravelsExtendedBattlesForge() {
        GravelsExtendedBattles.init(SHOWDOWN_MODS_COBBLEMON_FOLDER);
    }
}
