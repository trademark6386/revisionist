package drai.dev.gravelmon.fabric.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import kotlin.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import net.minecraft.server.network.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import static drai.dev.gravelmon.GravelsExtendedBattles.bannedLabels;

@Mixin(com.cobblemon.mod.common.command.SpawnAllPokemon.class)
public class SpawnAllPokemonMixin {

    @Inject(method = "execute", at = @At("HEAD"), cancellable = true, remap = false)
    public void executeInject(CommandContext<ServerCommandSource> context,
                              IntRange range, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        ServerPlayerEntity player = ((ServerCommandSource)context.getSource()).getPlayerOrThrow();
        for (Species species : PokemonSpecies.INSTANCE.getImplemented()) {
            if(range.contains(species.getNationalPokedexNumber())){
                var isValid = true;
                for (String label : bannedLabels) {
                    if(species.getLabels().contains(label)){
                        isValid = false;
                    }
                }
                if(isValid){
                    var pokemon = species.create(10);
                    pokemon.sendOut(player.getServerWorld(),player.getPos(), (pokemonEntity) -> {
                        pokemonEntity.createSpawnPacket(); return Unit.INSTANCE;});
                }
            }
        }
        cir.setReturnValue(Command.SINGLE_SUCCESS);
        cir.cancel();
    }
}
