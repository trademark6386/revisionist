package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.*;
import com.cobblemon.mod.common.config.starter.*;
import com.cobblemon.mod.common.starter.*;
import net.minecraft.client.particle.*;

import java.util.*;

public class GravelmonStarterManager {
    public static Map<String, StarterCategory> NEW_STARTERS = new HashMap<>();

    public static void registerNewStarter(StarterCategory newStarter) {
        NEW_STARTERS.put(newStarter.getName(), newStarter);
    }

    public static void processStarters(){
        var starterConfig = Cobblemon.INSTANCE.getStarterConfig();
        var currentStarters = starterConfig.getStarters();
        if(GravelsExtendedBattles.ADD_STARTERS){
            NEW_STARTERS.forEach((name, newStarter) -> {
                if(!currentStarters.contains(newStarter)){
                    currentStarters.add(newStarter);
                }
            });
        }
        currentStarters.forEach(starterCategory -> {
            var starters = new ArrayList<>(starterCategory.component3().stream()
                    .filter(pokemon -> !SpeciesManager.containsBannedLabels(pokemon.getSpecies(), pokemon.getForm())).toList());
            starterCategory.component3().clear();
            starterCategory.component3().addAll(starters);
        });
        var finalCategories = currentStarters.stream().filter(starter -> !starter.component3().isEmpty()).toList();
        starterConfig.setStarters(finalCategories);
    }

}
