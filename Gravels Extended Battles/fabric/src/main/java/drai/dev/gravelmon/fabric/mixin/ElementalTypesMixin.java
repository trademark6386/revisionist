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

import static drai.dev.gravelmon.fabric.GravelsExtendedBattlesFabric.TYPE_COUNT;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    private static boolean isInit = false;
    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        if(!isInit){
            createType("cosmic");
            createType("crystal");
            createType("digital");
            createType("light");
            createType("nuclear");
            createType("plastic");
            createType("questionmark");
            createType("shadow");
            createType("slime");
            createType("sound");
            createType("wind");
            isInit=true;
            System.out.println("I added the sound type, yippeeeee");
        }
    }

    private void createType(String typeName) {
        var type = new ElementalType(typeName,Text.translatable("cobblemon.type."+typeName),
                0x780fd5,TYPE_COUNT,
                new Identifier("gravelmon",
                        "types/"+typeName+".png"));
        TYPE_COUNT++;
        register(type);
    }

}
