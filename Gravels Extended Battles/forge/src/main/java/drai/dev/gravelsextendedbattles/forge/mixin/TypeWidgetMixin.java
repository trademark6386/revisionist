package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.summary.widgets.type.*;
import kotlin.jvm.internal.*;
import net.minecraft.client.util.math.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static com.cobblemon.mod.common.api.gui.GuiUtilsKt.*;
import static drai.dev.gravelsextendedbattles.forge.GravelsExtendedBattlesForge.ICON_WIDGET_INIT;
import static drai.dev.gravelsextendedbattles.forge.GravelsExtendedBattlesForge.TYPE_COUNT;

@Mixin(TypeWidget.class)
public abstract class TypeWidgetMixin {
    @Mutable
    @Shadow @Final private static Identifier typeResource;

    @Inject(method = "renderType(Lcom/cobblemon/mod/common/api/types/ElementalType;Lnet/minecraft/client/util/math/MatrixStack;II)V", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void changeTypeIconResource(ElementalType type, MatrixStack pMatrixStack, int pX, int pY, CallbackInfo ci){
        if(!ICON_WIDGET_INIT){
            typeResource = new Identifier("gravelmon","textures/gui/types.png");
            ICON_WIDGET_INIT=true;
        }
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(pMatrixStack, "pMatrixStack");
        Identifier texture = typeResource;
        double iconX = (double)pX + 0.5;
        int width = ((TypeWidget)(Object)this).getWidth();
        int height = ((TypeWidget)(Object)this).getHeight();
        double offset = (double)((float)((TypeWidget)(Object)this).getWidth() * (float)type.getTextureXMultiplier()) + 0.1;
        int textureWidth = ((TypeWidget)(Object)this).getWidth() * TYPE_COUNT;
        blitk(pMatrixStack,
                texture,
                iconX,
                pY,
                height,
                width,
                offset,
                0,
                textureWidth,
                ((TypeWidget)(Object)this).getWidth(),
                0, 1, 1, 1, 1F, false,
                1);
        ci.cancel();
    }
}
