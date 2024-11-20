package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.*;
import com.cobblemon.mod.common.api.types.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import net.minecraft.network.chat.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(Cobblemon.class)
public class CobblemonMixin {

    @Inject(method = "preInitialize", at = @At("HEAD"), remap = false)
    private void injected(CobblemonImplementation implementation, CallbackInfo ci) {
        GravelsExtendedBattles.logJVM();
    }
}
