package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokemon.evolution.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(FormData.class)
public class FormDataMixin{
    @Final
    @Shadow private PreEvolution _preEvolution;
    @Inject(method = "getPreEvolution", at =@At("TAIL"), cancellable = true, remap = false)
    private void executeInject(CallbackInfoReturnable<PreEvolution> cir) {
        test(cir);
    }

    public void test(CallbackInfoReturnable<PreEvolution> cir){
        GravelmonPreEvolutionMixinImpl.nullablePreEvolution(_preEvolution, cir);
    }


}
