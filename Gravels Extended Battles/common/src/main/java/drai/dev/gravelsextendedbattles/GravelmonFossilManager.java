package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.fossil.*;
import drai.dev.gravelsextendedbattles.mixin.loot.*;
import net.minecraft.core.*;
import net.minecraft.core.registries.*;
import net.minecraft.resources.*;
import net.minecraft.world.level.storage.loot.*;
import net.minecraft.world.level.storage.loot.entries.*;
import org.intellij.lang.annotations.*;

import java.util.*;

public class GravelmonFossilManager {
    private static final List<LootPool[]> LOOT_POOLS = new ArrayList<>();

    public static void addLootPools(LootPool[] lootPool){
        LOOT_POOLS.add(lootPool);
    }

    public static void scanLootPools(){
        LOOT_POOLS.forEach(lootPools->Arrays.stream(lootPools).forEach(lootPool -> {
            var accessor = createLootPoolAccessor(lootPool);
            var entries = new ArrayList<>(List.of(accessor.getEntries()));
            new ArrayList<>(entries).stream().filter(lootPoolEntryContainer -> lootPoolEntryContainer.getType()== LootPoolEntries.ITEM).map(entryContainer -> (LootItem) entryContainer)
                    .forEach(lootItem -> {
                        var item = createLootItemAccessor(lootItem).getItem();
                        var itemId = BuiltInRegistries.ITEM.getKey(item);
                        var fossil = GravelsExtendedBattles.FOSSIL_MAP.get(itemId);
                        if(fossil == null) return;
                        if(!SpeciesManager.containsBannedLabels(fossil.getResult().getSpecies(), fossil.getResult().getForm())) return;
                        entries.remove(lootItem);
                    });
            LootPoolEntryContainer[] array = new LootPoolEntryContainer[entries.size()];
            accessor.setEntries(entries.toArray(array));
        }));
    }

    public static LootPoolAccessor createLootPoolAccessor(LootPool lootPool) {
        return (LootPoolAccessor) lootPool;
    }
    public static LootItemAccessor createLootItemAccessor(LootItem lootItem) {
        return (LootItemAccessor) lootItem;
    }
}
