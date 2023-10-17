package drai.dev.gravelmon.fabric.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.client.gui.*;
import com.cobblemon.mod.common.client.render.item.*;
import drai.dev.gravelmon.*;
import drai.dev.gravelmon.fabric.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import net.minecraft.world.level.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    private static boolean isInit = false;

    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        if(!isInit){
            var cosmic = new ElementalType("cosmic",Text.translatable("cobblemon.type.cosmic"),
                    0x780fd5,18,
                    new Identifier("gravelmon",
                            "types/cosmic.png"));
            GravelsExtendedBattlesFabric.TYPE_COUNT++;
            var sound = new ElementalType("sound",Text.translatable("cobblemon.type.sound"),
                    0x780fd5,19,
                    new Identifier("gravelmon",
                            "gui/types.png"));
            GravelsExtendedBattlesFabric.TYPE_COUNT++;
            register(sound);
            isInit=true;
            System.out.println("I added the sound type, yippeeeee");
        }
    }

}
