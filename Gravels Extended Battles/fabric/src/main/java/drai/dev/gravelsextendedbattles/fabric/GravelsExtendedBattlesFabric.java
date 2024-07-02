package drai.dev.gravelsextendedbattles.fabric;

import drai.dev.gravelsextendedbattles.*;
import net.fabricmc.api.*;
import net.fabricmc.loader.api.*;
import net.minecraft.util.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {

    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FabricLoader.getInstance().getGameDir().toString()+"/showdown/data/mods/cobblemon/";


    @Override
    public void onInitialize() {
        GravelsExtendedBattles.init(SHOWDOWN_MODS_COBBLEMON_FOLDER);
    }
}
