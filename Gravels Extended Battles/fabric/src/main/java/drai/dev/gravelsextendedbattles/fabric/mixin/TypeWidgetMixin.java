package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.summary.widgets.type.*;
import drai.dev.gravelsextendedbattles.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import kotlin.jvm.internal.*;
import net.minecraft.client.util.math.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static com.cobblemon.mod.common.api.gui.GuiUtilsKt.blitk;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.ICON_WIDGET_INIT;

@Mixin(TypeWidget.class)
public abstract class TypeWidgetMixin {
    @Mutable
    @Shadow @Final private static Identifier typeResource;

    @Inject(method = "renderType(Lcom/cobblemon/mod/common/api/types/ElementalType;Lnet/minecraft/client/util/math/MatrixStack;II)V", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void changeTypeIconResource(ElementalType type, MatrixStack pMatrixStack, int pX, int pY, CallbackInfo ci){
        GravelmonTypeWidget.changeTypeWidget((TypeWidget)(Object)this, typeResource, type, pMatrixStack, (double) pX, pY, ci);
    }


}
