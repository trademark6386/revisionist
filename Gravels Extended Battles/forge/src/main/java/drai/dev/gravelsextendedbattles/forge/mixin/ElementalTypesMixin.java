package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.types.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static drai.dev.gravelsextendedbattles.forge.GravelsExtendedBattlesForge.TYPE_COUNT;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    private static boolean isInit = false;
    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        if(!isInit){
            createType("cosmic", 0x780fd5);
            createType("crystal", 0xa1fbe8);
            createType("digital", 0x9caac5);
            createType("light", 0xfffccd);
            createType("nuclear", 0x8feb3b);
            createType("plastic", 0xebb459);
            createType("questionmark", 0x5fd0ae);
            createType("shadow", 0x272748);
            createType("slime", 0x75e47b);
            createType("sound", 0x59bfa6);
            createType("wind", 0x6eefb6);
            isInit=true;
        }
    }

    private void createType(String typeName, int hue) {
        var type = new ElementalType(typeName,Text.translatable("cobblemon.type."+typeName),
                hue,TYPE_COUNT,
                new Identifier("gravelmon",
                        "types/"+typeName+".png"));
        TYPE_COUNT++;
        register(type);
    }

}
