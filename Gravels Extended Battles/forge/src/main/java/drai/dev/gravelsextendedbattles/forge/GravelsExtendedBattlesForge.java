package drai.dev.gravelsextendedbattles.forge;

import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.forge.mixin.*;
import net.minecraft.world.level.storage.loot.*;
import net.minecraftforge.common.*;
import net.minecraftforge.event.*;
import net.minecraftforge.eventbus.api.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static String SHOWDOWN_MODS_COBBLEMON_FOLDER = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";
    public GravelsExtendedBattlesForge() {
        GravelsExtendedBattles.init(SHOWDOWN_MODS_COBBLEMON_FOLDER);
        MinecraftForge.EVENT_BUS.addListener(this::onLootTableLoad);
    }

    private void onLootTableLoad(LootTableLoadEvent event) {
        var pools = ((LootTableAccessor)event.getTable()).getPools();
        GravelmonFossilManager.addLootPools(pools.toArray(new LootPool[0]));
    }
}
