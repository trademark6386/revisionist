package drai.dev.gravelsextendedbattles.mixin;

import com.cobblemon.mod.common.api.moves.*;
import com.cobblemon.mod.common.api.spawning.detail.*;
import com.cobblemon.mod.common.battles.runner.*;
import com.mojang.brigadier.exceptions.*;
import net.minecraft.server.packs.resources.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

@Mixin(Moves.class)
public class MovesMixin {
    @Final
    @Shadow
    private static Map<String, MoveTemplate> allMoves;
    @Final
    @Shadow
    private static Map<Integer, MoveTemplate> idMapping;

    @Inject(method = "reload", at = @At("HEAD"), cancellable = true)
    public void executeInject(ResourceManager manager, CallbackInfo ci) throws CommandSyntaxException {
        allMoves.clear();
        idMapping.clear();
        var movesJson = ShowdownService.Companion.getService().getMoves();
    }

    public PokemonSpawnDetail getSelf() {
        return (PokemonSpawnDetail) (Object) this;
    }
}
