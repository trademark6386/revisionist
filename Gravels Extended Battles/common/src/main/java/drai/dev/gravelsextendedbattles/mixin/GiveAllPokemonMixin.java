package drai.dev.gravelsextendedbattles.mixin;

import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

@Mixin(com.cobblemon.mod.common.command.GiveAllPokemon.class)
public class GiveAllPokemonMixin {
    @Inject(method = "execute", at = @At("HEAD"), remap = false, cancellable = true)
    private void executeInject(CommandContext<ServerCommandSource> context, IntRange range,
                               CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        GravelmonGiveAllPokemonCommand.modifyGiveCommand(context, cir);
    }
}

