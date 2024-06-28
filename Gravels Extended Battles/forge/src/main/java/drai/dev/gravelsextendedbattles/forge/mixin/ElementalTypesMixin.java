package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.types.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        GravelmonTypes.initializeTypes((this::register));
    }
}
