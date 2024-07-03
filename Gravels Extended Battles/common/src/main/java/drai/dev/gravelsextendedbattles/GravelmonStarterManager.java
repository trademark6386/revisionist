package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.*;
import com.cobblemon.mod.common.config.starter.*;
import com.cobblemon.mod.common.starter.*;
import net.minecraft.client.particle.*;

import java.util.*;

public class GravelmonStarterManager {
    public static Map<String, StarterCategory> NEW_STARTERS = new HashMap<>();

    public static void registerNewStarter(String afterCategory, StarterCategory newStarter) {
        NEW_STARTERS.put(afterCategory, newStarter);
    }

    public static void processStarters(){
        var starterConfig = Cobblemon.INSTANCE.getStarterConfig();
        var currentStarters = starterConfig.getStarters();
        if(GravelsExtendedBattles.ADD_STARTERS){
            NEW_STARTERS.forEach((after, newStarter) -> {
                if(!currentStarters.contains(newStarter)){
                    var afterCategory = currentStarters.stream().filter(starterCategory -> starterCategory.getName().equalsIgnoreCase(after)).findFirst();
                    if(afterCategory.isPresent()){
                         var index = currentStarters.indexOf(afterCategory.get()) + 1;
                         currentStarters.add(index, newStarter);
                    } else {
                        currentStarters.add(newStarter);
                    }

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
