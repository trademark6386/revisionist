package drai.dev.gravelsextendedbattles.starters;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.config.starter.*;
import org.jetbrains.annotations.*;

import java.util.*;

public class StarterCategoryDataHolder implements Comparable<StarterCategoryDataHolder> {
    private final String name;
    private final String lang;
    private final List<String> starters;

    public StarterCategoryDataHolder(String name, String lang, List<String> starters) {
        this.name = name;
        this.lang = lang;
        this.starters = starters;
    }

    @Nullable
    public StarterCategory toStarterCategory() {
        List<PokemonProperties> starterProperties = new ArrayList<>();
        this.starters.stream().map(PokemonProperties.Companion::parse).forEach(starterProperties::add);
        return new StarterCategory(name, lang, starterProperties);
    }

    public String getName() {
        return name;
    }

    public String getLang() {
        return lang;
    }

    public List<String> getStarters() {
        return starters;
    }

    @Override
    public int compareTo(@NotNull StarterCategoryDataHolder o) {
        return Collections.reverseOrder(String.CASE_INSENSITIVE_ORDER).compare(this.name, o.name);
    }
}