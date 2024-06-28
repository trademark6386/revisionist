package drai.dev.gravelsextendedbattles.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.storage.pc.*;
import com.cobblemon.mod.common.pokemon.*;
import com.cobblemon.mod.common.util.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.mixinimpl.*;
import kotlin.jvm.internal.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import net.minecraft.server.network.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.BANNED_LABELS;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.SORTED_SPECIES;

@Mixin(com.cobblemon.mod.common.command.GiveAllPokemon.class)
public class GiveAllPokemonMixin {
    @Inject(method = "execute", at = @At("HEAD"), remap = false, cancellable = true)
    private void executeInject(CommandContext<ServerCommandSource> context, IntRange range,
                               CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        GravelmonGiveAllPokemonCommand.modifyGiveCommand(context, cir);
    }
}

