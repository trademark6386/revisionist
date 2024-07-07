package drai.dev.gravelsextendedbattles.mixin.loot;

import net.minecraft.world.item.*;
import net.minecraft.world.level.storage.loot.entries.*;
import net.minecraft.world.level.storage.loot.functions.*;
import net.minecraft.world.level.storage.loot.predicates.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;

@Mixin(LootItem.class)
public interface LootItemAccessor {
    @Mutable
    @Accessor
    Item getItem();

    @Accessor()
    @Mutable
    void setItem(Item item);
}
