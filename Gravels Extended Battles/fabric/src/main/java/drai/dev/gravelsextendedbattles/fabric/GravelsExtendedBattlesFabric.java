package drai.dev.gravelsextendedbattles.fabric;

import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import net.fabricmc.api.*;
import net.fabricmc.loader.api.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {

    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FabricLoader.getInstance().getGameDir().toString()+"/showdown/data/mods/cobblemon/";


    @Override
    public void onInitialize() {
        MidnightConfig.init("gravelmon", GravelmonFabricConfig.class);
        GravelsExtendedBattles.init(new GravelmonFabricConfig(), SHOWDOWN_MODS_COBBLEMON_FOLDER);
    }
}
