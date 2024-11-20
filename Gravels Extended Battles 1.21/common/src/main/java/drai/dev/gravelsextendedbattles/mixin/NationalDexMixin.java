package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.pokedex.def.*;
import com.cobblemon.mod.common.api.pokedex.entry.*;
import com.cobblemon.mod.common.api.spawning.detail.*;
import drai.dev.gravelsextendedbattles.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

@Mixin(AggregatePokedexDef.class)
public class NationalDexMixin {

    @Inject(method = "getEntries", at = @At("HEAD"), remap = false)
    private void injected(CallbackInfoReturnable<List<PokedexEntry>> cir) {
        var self = getSelf();
        if(!self.getId().getPath().equalsIgnoreCase("national")) return;
        var entries = cir.getReturnValue();
        cir.setReturnValue(GravelmonPokedexManager.processPokedexResorting(entries));
    }

    @Unique
    public AggregatePokedexDef getSelf() {
        return (AggregatePokedexDef) (Object) this;
    }
}
