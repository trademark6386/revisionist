package drai.dev.gravelsextendedbattles.mixin;

import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(com.cobblemon.mod.common.command.SpawnAllPokemon.class)
public class SpawnAllPokemonMixin {

    @Inject(method = "execute", at = @At("HEAD"), cancellable = true, remap = false)
    public void executeInject(CommandContext<ServerCommandSource> context,
                              IntRange range, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        GravelmonSpawnAllPokemonCommand.spawnAllPokemon(context, range, cir);
    }
}
