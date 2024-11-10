package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import org.spongepowered.asm.mixin.injection.callback.*;

public class GravelmonPreEvolutionMixinImpl {
    public static void nullablePreEvolution(PreEvolution preEvolution, CallbackInfoReturnable<PreEvolution> cir) {
        if(preEvolution != null){
            if(preEvolution.getSpecies() == null && preEvolution.getForm() == null){
                cir.setReturnValue(null);
                cir.cancel();
                return;
            }
        }
    }
}
