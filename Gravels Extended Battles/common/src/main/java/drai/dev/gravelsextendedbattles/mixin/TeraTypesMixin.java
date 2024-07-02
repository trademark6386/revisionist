package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.types.tera.*;
import com.cobblemon.mod.common.api.types.tera.elemental.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.resources.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(TeraTypes.class)
public abstract class TeraTypesMixin {
    @Unique
    private static boolean initializing= false;

    @Shadow protected abstract TeraType create(ResourceLocation par1, TeraType par2);

    @Unique
    private static boolean isInit = false;
    @Inject(method = "create", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD)
    private void injected(ResourceLocation id, TeraType type, CallbackInfoReturnable<TeraType> cir) {
        if(!isInit && !initializing){
            initializing = true;
            GravelsExtendedBattles.NEW_TYPES.forEach(elementalType -> {
                create(new ResourceLocation("cobblemon",elementalType.getName()), new ElementalTypeTeraType(elementalType));
            });
            initializing = false;
            isInit=true;
        }
    }

}
