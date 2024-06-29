package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(Species.class)
public class SpeciesMixin{
    @Shadow private PreEvolution preEvolution;
    @Inject(method = "getPreEvolution", at =@At("TAIL"), cancellable = true, remap = false)
    private void executeInject(CallbackInfoReturnable<PreEvolution> cir) {
        GravelmonPreEvolutionMixinImpl.nullablePreEvolution(preEvolution, cir);
    }
}
