package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.summary.widgets.type.*;
import drai.dev.gravelsextendedbattles.*;
import kotlin.jvm.internal.*;
import net.minecraft.client.util.math.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static com.cobblemon.mod.common.api.gui.GuiUtilsKt.blitk;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.ICON_WIDGET_INIT;

public class GravelmonTypeWidget {
    public static void changeTypeWidget(TypeWidget typeWidget, Identifier typeResource, ElementalType type, MatrixStack pMatrixStack, double pX, int pY, CallbackInfo ci) {
        if(!ICON_WIDGET_INIT){
            typeResource = new Identifier("gravelmon","textures/gui/types.png");
            ICON_WIDGET_INIT=true;
        }
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(pMatrixStack, "pMatrixStack");
        Identifier texture = typeResource;
        double iconX = pX + 0.5;
        int width = typeWidget.getWidth();
        int height = typeWidget.getHeight();
        double offset = (double)((float)typeWidget.getWidth() * (float) type.getTextureXMultiplier()) + 0.1;
        int textureWidth = typeWidget.getWidth() * GravelsExtendedBattles.TYPE_COUNT;
        blitk(pMatrixStack,
                texture,
                iconX,
                pY,
                height,
                width,
                offset,
                0,
                textureWidth,
                typeWidget.getWidth(),
                0, 1, 1, 1, 1F, false,
                1);
        ci.cancel();
    }
}
