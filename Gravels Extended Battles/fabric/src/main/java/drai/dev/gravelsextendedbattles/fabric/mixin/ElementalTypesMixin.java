package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.api.types.tera.*;
import com.cobblemon.mod.common.api.types.tera.elemental.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.TYPE_COUNT;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        GravelmonTypes.initializeTypes((this::register));
    }
}
