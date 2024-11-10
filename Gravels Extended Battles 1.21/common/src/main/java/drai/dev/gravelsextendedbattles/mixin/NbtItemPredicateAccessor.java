package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.conditional.*;
import com.cobblemon.mod.common.pokemon.evolution.predicate.*;
import net.minecraft.world.item.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;

@Mixin(NbtItemPredicate.class)
public interface NbtItemPredicateAccessor {
    @Accessor
    RegistryLikeCondition<Item> getItem();
}
