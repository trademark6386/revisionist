package drai.dev.gravelsextendedbattles.fabric;

import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.loot.*;
import net.fabricmc.api.*;
import net.fabricmc.fabric.api.loot.v2.*;
import net.fabricmc.loader.api.*;

public class GravelsExtendedBattlesFabric implements ModInitializer {

    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FabricLoader.getInstance().getGameDir().toString()+"/showdown/data/mods/cobblemon/";


    @Override
    public void onInitialize() {
        GravelsExtendedBattles.init(SHOWDOWN_MODS_COBBLEMON_FOLDER);

        LootTableEvents.MODIFY.register((resourceManager, lootManager, id, tableBuilder, source) -> {
            GravelmonFossilManager.addLootPools(lootManager.getLootTable(id).pools);
            GravelmonFossilManager.processFossilAdditions(id, tableBuilder);
        });

    }
}
