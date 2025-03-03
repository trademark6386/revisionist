package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokedex.def.*;
import com.cobblemon.mod.common.api.pokemon.evolution.*;
import net.minecraft.resources.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;

import java.util.*;

@Mixin(SimplePokedexDef.class)
public interface SimplePokedexDefAccessor {
    @Accessor
    @Mutable
    void setEntries(List<ResourceLocation> entries);
}
