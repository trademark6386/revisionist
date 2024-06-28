package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import kotlin.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import net.minecraft.server.network.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.BANNED_LABELS;

public class GravelmonSpawnAllPokemonCommand {
    public static void spawnAllPokemon(CommandContext<ServerCommandSource> context, IntRange range, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        ServerPlayerEntity player = ((ServerCommandSource) context.getSource()).getPlayerOrThrow();
        for (Species species : PokemonSpecies.INSTANCE.getSpecies()) {
            if(range.contains(species.getNationalPokedexNumber())){
                var isValid = true;
                for (String label : BANNED_LABELS) {
                    if(species.getLabels().contains(label)){
                        isValid = false;
                    }
                }
                if(Arrays.stream(BANNED_LABELS).toList().contains("not_modeled") && !species.getImplemented()){
                    isValid = false;
                }
                if(isValid){

                    var pokemon = species.create(10);
                    pokemon.sendOut(player.getServerWorld(),player.getPos(), null, (pokemonEntity) -> {
                        pokemonEntity.createSpawnPacket(); return Unit.INSTANCE;});
                    var regionalAspects = new ArrayList<String>(List.of("galarian", "whitestriped", "alolan", "paldean", "hisuian"));
                    var splitEvolutionRegionals = new ArrayList<String>(List.of("pikachu","cubone", "exeggcute", "koffing", "mimejr"));
                    for (FormData formData : species.getForms()) {
                        for (String aspect : regionalAspects) {
                            if(formData.getAspects().contains(aspect)&&!splitEvolutionRegionals.contains(species.getName().toLowerCase())){
                                pokemon = species.create(10);
                                pokemon.setAspects(new HashSet<>(List.of(aspect)));
                                pokemon.sendOut(player.getServerWorld(),player.getPos(),null, (pokemonEntity) -> {
                                    pokemonEntity.createSpawnPacket(); return Unit.INSTANCE;});
                            }
                        }
                    }
                }
            }
        }
        cir.setReturnValue(Command.SINGLE_SUCCESS);
        cir.cancel();
    }
}
