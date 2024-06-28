package drai.dev.gravelsextendedbattles.interfaces;

import com.cobblemon.mod.common.pokemon.*;
import com.google.common.collect.*;
import net.minecraft.util.*;

import java.util.*;

public interface GravelmonPokemonSpeciesAccessor {
    HashBasedTable<String, Integer, Species> getSpeciesByDex();
    HashMap<Identifier, Species> getSpeciesByIdentifier();
}
