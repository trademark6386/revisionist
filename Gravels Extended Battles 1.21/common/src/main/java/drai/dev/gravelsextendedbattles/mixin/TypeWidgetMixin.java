package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.summary.widgets.type.*;
import com.mojang.blaze3d.vertex.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import net.minecraft.resources.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(TypeWidget.class)
public abstract class TypeWidgetMixin {
    @Mutable
    @Shadow @Final private static ResourceLocation typeResource;

    @Inject(method = "renderType(Lcom/cobblemon/mod/common/api/types/ElementalType;Lcom/mojang/blaze3d/vertex/PoseStack;II)V", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void changeTypeIconResource(ElementalType type, PoseStack pMatrixStack, int pX, int pY, CallbackInfo ci){
        GravelmonTypeWidget.changeTypeWidget((TypeWidget)(Object)this, typeResource, type, pMatrixStack, (double) pX, pY, ci);
    }


}
