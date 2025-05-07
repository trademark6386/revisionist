package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.types.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.network.chat.*;
import net.minecraft.resources.*;
import net.minecraft.util.*;

import java.util.function.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.TYPE_COUNT;

public class GravelmonTypes {
    private static boolean isInit = false;
    private static Function<ElementalType, ElementalType> registrationFunction;
    public static void initializeTypes(Function<ElementalType, ElementalType> implementationRegistrationFunction){
        if(!isInit){
            registrationFunction = implementationRegistrationFunction;
            GravelsExtendedBattles.NEW_TYPES.add(createType("cosmic", 0x9738ff));
            GravelsExtendedBattles.NEW_TYPES.add(createType("crystal", 0xa1fbe8));
            GravelsExtendedBattles.NEW_TYPES.add(createType("digital", 0x2dd92d));
            GravelsExtendedBattles.NEW_TYPES.add(createType("light", 0xfffccd));
            GravelsExtendedBattles.NEW_TYPES.add(createType("nuclear", 0xc3f531));
            GravelsExtendedBattles.NEW_TYPES.add(createType("plastic", 0xebb459));
            GravelsExtendedBattles.NEW_TYPES.add(createType("questionmark", 0x5fd0ae));
            GravelsExtendedBattles.NEW_TYPES.add(createType("shadow", 0x272748));
            GravelsExtendedBattles.NEW_TYPES.add(createType("slime", 0x75e47b));
            GravelsExtendedBattles.NEW_TYPES.add(createType("sound", 0x4c5981));
            GravelsExtendedBattles.NEW_TYPES.add(createType("wind", 0x45efa8));
            GravelsExtendedBattles.NEW_TYPES.add(createType("eldritch", 0x962c46));
            GravelsExtendedBattles.NEW_TYPES.add(createType("blood", 0x761310));
            System.out.println("finished adding new types");
            isInit=true;
        }
    }

    private static ElementalType createType(String typeName, int hue) {
        var type = new ElementalType(typeName, Component.translatable("cobblemon.type."+typeName),
                hue,TYPE_COUNT,
                ResourceLocation.fromNamespaceAndPath("gravelmon",
                        "types/"+typeName+".png"));
        TYPE_COUNT++;
        return registrationFunction.apply(type);
    }
}
