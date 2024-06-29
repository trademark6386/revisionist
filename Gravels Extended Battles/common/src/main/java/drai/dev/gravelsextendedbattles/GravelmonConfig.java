package drai.dev.gravelsextendedbattles;

import drai.dev.gravelsextendedbattles.interfaces.*;
import eu.midnightdust.lib.config.*;

import java.util.*;

public class GravelmonConfig extends MidnightConfig implements IGravelmonConfig {
    @Entry(name = "Banned Labels: ") public static List<String> bannedLabels = new ArrayList<>(List.of("not_modeled")); // Array String Lists are also supported
    @Entry(name = "Original Fangame Typings: ") public static boolean enableFangameTypechart = false;
    @Entry(name = "Re-sort pokedex in evolution order: ") public static boolean resortPokedexInEvolutionOrder = false;

    @Override
    public boolean getEnableOriginalFanGameTypings() {
        return enableFangameTypechart;
    }

    @Override
    public boolean getEnableDexResort() {
        return resortPokedexInEvolutionOrder;
    }

    @Override
    public List<String> getBannedLabels() {
        return bannedLabels;
    }
}
