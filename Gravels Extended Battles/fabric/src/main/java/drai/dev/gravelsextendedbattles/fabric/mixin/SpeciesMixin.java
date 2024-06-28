package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;
import com.google.common.collect.*;
import net.minecraft.resource.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(Species.class)
public class SpeciesMixin{
    @Shadow private PreEvolution preEvolution;
    @Inject(method = "getPreEvolution", at =@At("TAIL"), cancellable = true, remap = false)
    private void executeInject(CallbackInfoReturnable<PreEvolution> cir) {
        nullablePreEvolution(cir);
    }

    private void nullablePreEvolution(CallbackInfoReturnable<PreEvolution> cir) {
        if(preEvolution == null||preEvolution.getSpecies() == null){
            cir.setReturnValue(null);
            cir.cancel();
            return;
        }
    }
}
