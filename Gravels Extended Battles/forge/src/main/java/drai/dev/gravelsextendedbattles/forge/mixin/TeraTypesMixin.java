package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.types.tera.*;
import com.cobblemon.mod.common.api.types.tera.elemental.*;
import drai.dev.gravelsextendedbattles.*;
import net.minecraft.util.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(TeraTypes.class)
public abstract class TeraTypesMixin {
    @Unique
    private static boolean gravelsExtendedBattles$initializing = false;
    @Shadow protected abstract TeraType create(Identifier par1, TeraType par2);

    @Unique
    private static boolean gravelsExtendedBattles$isInit = false;
    @Inject(method = "create", at = @At("HEAD"), locals = LocalCapture.CAPTURE_FAILHARD)
    private void injected(Identifier id, TeraType type, CallbackInfoReturnable<TeraType> cir) {
        if(!gravelsExtendedBattles$isInit && !gravelsExtendedBattles$initializing){
            gravelsExtendedBattles$initializing = true;
            GravelsExtendedBattles.NEW_TYPES.forEach(elementalType -> {
                create(new Identifier("cobblemon",elementalType.getName()), new ElementalTypeTeraType(elementalType));
            });
            gravelsExtendedBattles$initializing = false;
            gravelsExtendedBattles$isInit=true;
        }
    }

}
