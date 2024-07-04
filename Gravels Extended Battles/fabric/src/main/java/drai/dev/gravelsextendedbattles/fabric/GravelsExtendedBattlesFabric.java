package drai.dev.gravelsextendedbattles.fabric;

import com.cobblemon.mod.common.api.fossil.*;
import drai.dev.gravelsextendedbattles.*;
import net.fabricmc.api.*;
import net.fabricmc.fabric.api.loot.v2.*;
import net.fabricmc.fabric.mixin.registry.sync.*;
import net.fabricmc.loader.api.*;
import net.minecraft.core.registries.*;
import net.minecraft.util.*;
import net.minecraft.world.level.storage.loot.*;
import net.minecraft.world.level.storage.loot.entries.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelmonFossilManager.createLootItemAccessor;
import static drai.dev.gravelsextendedbattles.GravelmonFossilManager.createLootPoolAccessor;

public class GravelsExtendedBattlesFabric implements ModInitializer {

    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FabricLoader.getInstance().getGameDir().toString()+"/showdown/data/mods/cobblemon/";


    @Override
    public void onInitialize() {
        GravelsExtendedBattles.init(SHOWDOWN_MODS_COBBLEMON_FOLDER);

        LootTableEvents.MODIFY.register((resourceManager, lootManager, id, tableBuilder, source) -> {
            GravelmonFossilManager.addLootPools(lootManager.getLootTable(id).pools);
            GravelmonFossilManager.addFossils(id, tableBuilder);
        });

    }
}
