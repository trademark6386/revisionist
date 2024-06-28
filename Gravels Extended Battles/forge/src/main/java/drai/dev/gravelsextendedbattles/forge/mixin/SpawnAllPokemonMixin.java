package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import kotlin.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import net.minecraft.server.network.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.*;

@Mixin(com.cobblemon.mod.common.command.SpawnAllPokemon.class)
public class SpawnAllPokemonMixin {

    @Inject(method = "execute", at = @At("HEAD"), cancellable = true, remap = false)
    public void executeInject(CommandContext<ServerCommandSource> context,
                              IntRange range, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        GravelmonSpawnAllPokemonCommand.spawnAllPokemon(context, range, cir);
    }
}
