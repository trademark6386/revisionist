package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import com.google.common.collect.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.gen.*;

import java.util.*;

@Mixin(PokemonSpecies.class)
public interface PokemonSpeciesAccessor extends GravelmonPokemonSpeciesAccessor {
    @Accessor
    HashBasedTable<String, Integer, Species> getSpeciesByDex();

    @Accessor
    HashMap<Identifier, Species> getSpeciesByIdentifier();
}
