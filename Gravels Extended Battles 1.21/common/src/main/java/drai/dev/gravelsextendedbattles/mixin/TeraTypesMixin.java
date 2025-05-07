package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.types.tera.*;
import com.cobblemon.mod.common.api.types.tera.elemental.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.resources.*;
import net.minecraft.util.*;
import org.intellij.lang.annotations.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

@Mixin(TeraTypes.class)
public abstract class TeraTypesMixin {
    @Unique
    private static boolean initializing= false;

    @Final
    @Shadow
    private static HashMap<ResourceLocation, TeraType> types;

    @Unique
    private static boolean isInit = false;
    @Inject(method = "create", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD)
    private void injected(ResourceLocation id, TeraType type, CallbackInfoReturnable<TeraType> cir) {
        if(!isInit && !initializing){
            initializing = true;
            GravelsExtendedBattles.NEW_TYPES.forEach(elementalType -> {
                create(ResourceLocation.fromNamespaceAndPath("cobblemon",elementalType.getName()), new ElementalTypeTeraType(elementalType));
            });
            initializing = false;
            isInit=true;
        }
    }

    @Unique
    private TeraType create(ResourceLocation id, TeraType type) {
        return types.put(id, type);
    }
}
