package drai.dev.gravelmon.fabric.mixin;

import com.cobblemon.mod.common.api.gui.*;
import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.*;
import com.oracle.svm.core.annotate.*;
import kotlin.jvm.internal.*;
import net.minecraft.client.gui.*;
import net.minecraft.client.util.math.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.*;

import static com.cobblemon.mod.common.api.gui.GuiUtilsKt.blitk;
import static drai.dev.gravelmon.fabric.GravelsExtendedBattlesFabric.ICON_MIXIN_INIT;
import static drai.dev.gravelmon.fabric.GravelsExtendedBattlesFabric.TYPE_COUNT;

@Mixin(TypeIcon.class)
public abstract class TypeIconMixin {
    @Shadow @Final private float doubleCenteredOffset;
    @Shadow @Final private boolean small;
    @Shadow @Final private ElementalType secondaryType;
    @Shadow @Final private boolean centeredX;
    @Shadow @Final private static int TYPE_ICON_DIAMETER;

    @Shadow @Final private static float SCALE;

    @Mutable
    @Shadow @Final private static Identifier smallTypesResource;

    @Mutable
    @Shadow @Final private static Identifier typesResource;
    @Shadow @Final private float secondaryOffset;
    @Shadow @Final private float opacity;
    private boolean init = false;
    @Inject(method = "render", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void changeTypeIconResource(DrawContext context, CallbackInfo ci){
        if(!ICON_MIXIN_INIT){
            smallTypesResource = new Identifier("gravelmon","textures/gui/types_small.png");
            typesResource = new Identifier("gravelmon","textures/gui/types.png");
            ICON_MIXIN_INIT=true;
        }
        Intrinsics.checkNotNullParameter(context, "context");
        int diameter = this.small ? 18 : 36;
        float offsetX = this.centeredX ? (float)(diameter / 2) * 0.5F + (this.secondaryType != null ? this.doubleCenteredOffset : 0.0F) : 0.0F;
        MatrixStack matrixStack;
        if (this.secondaryType != null) {
            matrixStack = context.getMatrices();
            Intrinsics.checkNotNullExpressionValue(matrixStack, "context.matrices");
            Identifier texture = this.small ? smallTypesResource : typesResource;
            float xIcon = (((TypeIcon)(Object)this).getX().floatValue() + secondaryOffset - offsetX) / 0.5F;
            float yIcon = ((TypeIcon)(Object)this).getY().floatValue() / 0.5F;
            int width = diameter;
            int height = diameter;
            float IconDiameter = (float)diameter;
            ElementalType var10007 = this.secondaryType;
            Intrinsics.checkNotNull(var10007);
            blitk(matrixStack,
                    texture,
                    xIcon,
                    yIcon,
                    width,
                    height,
                    (double)(IconDiameter * (float)var10007.getTextureXMultiplier()) + 0.1,
                    0,
                    (float)diameter * TYPE_COUNT,
                    (float) diameter,
                    0, 1, 1, 1, 1F, false,
                    SCALE);
        }

        matrixStack = context.getMatrices();
        Intrinsics.checkNotNullExpressionValue(matrixStack, "context.matrices");
        blitk(matrixStack,
                this.small ? smallTypesResource : typesResource,
                (((TypeIcon)(Object)this).getX().floatValue() - offsetX) / 0.5F,
                ((TypeIcon)(Object)this).getY().floatValue() / 0.5F, (Number)diameter, (Number)diameter,
                (double)((float)diameter * (float)((TypeIcon)(Object)this).getType().getTextureXMultiplier()) + 0.1,
                0, (float)diameter * TYPE_COUNT, (Number)diameter, 0, 1, 1, 1,
                (Number)this.opacity, false, SCALE);
        ci.cancel();

    }
}
