package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.api.pokemon.evolution.requirement.*;
import com.cobblemon.mod.common.pokemon.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.bannedLabels;

@Mixin(Evolution.DefaultImpls.class)
public class EvolutionMixin {

    /**
     * @author
     * @reason
     */
    @Inject(method = "test",at = @At("TAIL"), remap = false, cancellable = true)
    private static void test(Evolution $this, Pokemon pokemon, CallbackInfoReturnable<Boolean> cir) {
        boolean canEvolve = true;
        for (EvolutionRequirement requirement : $this.getRequirements()) {
            if (!requirement.check(pokemon)) {
                canEvolve = false;
                break;
            }
        }
        var result = $this.getResult().create();
        for (String label : bannedLabels){
            if(result.hasLabels(label)){
                canEvolve = false;
                break;
            }
        }
        cir.setReturnValue(canEvolve);
    }
}
