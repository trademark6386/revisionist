package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.*;
import kotlin.*;
import kotlin.ranges.*;
import net.minecraft.commands.*;
import net.minecraft.server.level.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

public class GravelmonSpawnAllPokemonCommand {
    public static void spawnAllPokemon(CommandContext<CommandSourceStack> context, IntRange range, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        ServerPlayer player = context.getSource().getPlayerOrException();
        for (Species species : PokemonSpecies.INSTANCE.getSpecies()) {
            if (range.contains(species.getNationalPokedexNumber())) {
                var pokemon = species.create(10);
                pokemon.sendOut((ServerLevel) player.level(), player.position(), null, (pokemonEntity) -> {
                    return Unit.INSTANCE;
                });
                for (FormData formData : species.getForms()) {
                    if (!formData.getAspects().isEmpty()
                            && !formData.getAspects().contains("female")
                            && !formData.getAspects().contains("mega")
                            && !formData.getAspects().contains("mega-x")
                            && !formData.getAspects().contains("mega-y")
                            && !formData.getAspects().contains("primal")
                            && !formData.getAspects().contains("alola-totem")
                            && !formData.getAspects().contains("gmax")) {
                        var form = species.create(10);
                        form.setAspects(new HashSet<>(formData.getAspects()));
                        pokemon.sendOut((ServerLevel) player.level(), player.position(), null, (pokemonEntity) -> {
                            return Unit.INSTANCE;
                        });
                    }
                }

            }
        }
        cir.setReturnValue(Command.SINGLE_SUCCESS);
        cir.cancel();
    }
}
