package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;
import com.google.common.collect.*;
import net.minecraft.registry.*;
import net.minecraft.world.biome.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;

import java.util.*;

@Mixin(FormData.class)
public interface FormDataAccessor {

    @Mutable
    @Accessor("_evolutions")
    public void setEvolutions(Set<Evolution> evolutions);
}
