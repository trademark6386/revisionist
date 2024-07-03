package drai.dev.gravelsextendedbattles.starters;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.config.starter.*;
import org.jetbrains.annotations.*;

import java.util.*;

public class StarterCategoryDataHolder {
        private String name;
        private String lang;
        private List<String> starters;

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
    }