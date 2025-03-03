package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokedex.def.*;
import com.cobblemon.mod.common.api.pokedex.entry.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.resources.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

@Mixin(AggregatePokedexDef.class)
public interface NationalDexAccessor {
    @Accessor
    List<ResourceLocation> getSubDexIds();
}
