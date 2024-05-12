package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.api.types.tera.*;
import com.cobblemon.mod.common.api.types.tera.elemental.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.text.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.fabric.GravelsExtendedBattlesFabric.TYPE_COUNT;

@Mixin(ElementalTypes.class)
public abstract class ElementalTypesMixin {
    @Unique
    private static boolean isInit = false;
    @Shadow
    public abstract ElementalType register(ElementalType elementalType);
    @Inject(method = "register(Ljava/lang/String;Lnet/minecraft/text/MutableText;II)Lcom/cobblemon/mod/common/api/types/ElementalType;", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD, cancellable = true)
    private void injected(String name, MutableText displayName, int hue, int textureXMultiplier, CallbackInfoReturnable<ElementalType> cir) {
        if(!isInit){
            GravelsExtendedBattles.NEW_TYPES.add(createType("cosmic", 0x780fd5));
            GravelsExtendedBattles.NEW_TYPES.add(createType("crystal", 0xa1fbe8));
            GravelsExtendedBattles.NEW_TYPES.add(createType("digital", 0x9caac5));
            GravelsExtendedBattles.NEW_TYPES.add(createType("light", 0xfffccd));
            GravelsExtendedBattles.NEW_TYPES.add(createType("nuclear", 0x8feb3b));
            GravelsExtendedBattles.NEW_TYPES.add(createType("plastic", 0xebb459));
            GravelsExtendedBattles.NEW_TYPES.add(createType("questionmark", 0x5fd0ae));
            GravelsExtendedBattles.NEW_TYPES.add(createType("shadow", 0x272748));
            GravelsExtendedBattles.NEW_TYPES.add(createType("slime", 0x75e47b));
            GravelsExtendedBattles.NEW_TYPES.add(createType("sound", 0x59bfa6));
            GravelsExtendedBattles.NEW_TYPES.add(createType("wind", 0x6eefb6));
            GravelsExtendedBattles.NEW_TYPES.add(createType("eldritch", 0x962c46));
            System.out.println("finished setting up new types");
            isInit=true;
        }
    }

    @Unique
    private ElementalType createType(String typeName, int hue) {
        var type = new ElementalType(typeName,Text.translatable("cobblemon.type."+typeName),
                hue,TYPE_COUNT,
                new Identifier("gravelmon",
                        "types/"+typeName+".png"));
        TYPE_COUNT++;
        return register(type);
    }
}
