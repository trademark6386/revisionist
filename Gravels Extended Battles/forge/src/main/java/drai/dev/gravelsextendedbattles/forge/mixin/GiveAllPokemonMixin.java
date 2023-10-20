package drai.dev.gravelsextendedbattles.forge.mixin;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.storage.pc.*;
import com.cobblemon.mod.common.pokemon.*;
import com.cobblemon.mod.common.util.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import kotlin.jvm.internal.*;
import kotlin.ranges.*;
import net.minecraft.server.command.*;
import net.minecraft.server.network.*;
import org.spongepowered.asm.mixin.*;
import org.spongepowered.asm.mixin.injection.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.*;

@Mixin(com.cobblemon.mod.common.command.GiveAllPokemon.class)
public class GiveAllPokemonMixin {
    boolean initList = false;
    @Inject(method = "execute", at =@At("HEAD"), remap = false, cancellable = true)
    private void executeInject(CommandContext<ServerCommandSource> context, IntRange range,
                               CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        if(!initList){
            sortedSpecies = genSortedList();
            initList=true;
        }
        ServerPlayerEntity player = ((ServerCommandSource) context.getSource()).getPlayerOrThrow();
        //System.out.println("line one");
        Intrinsics.checkNotNullExpressionValue(player, "player");
        //System.out.println("line two");
        PCStore pcStore = PlayerExtensionsKt.party(player).getOverflowPC();
        //System.out.println("line three");
        if (pcStore == null) {
            //System.out.println("pc store was null");
            cir.setReturnValue(0);
        } else {
            //System.out.println("pc store wasnt null");
            PCStore pc = pcStore;
            for (Species species : sortedSpecies) {
                boolean isValid = true;
                for (String label : bannedLabels) {
                    if (species.getLabels().contains(label)) {
                        //System.out.println("this pokemon has been banned: " + species.getName());
                        isValid = false;
                        break;
                    }
                }
                if(isValid){
                    //System.out.println("Added " + species.getName() + " To player pc.");
                    pc.add(species.create(10));
                }
            }
            cir.setReturnValue(Command.SINGLE_SUCCESS);
        }

        //System.out.println("finished command");
        cir.cancel();
        }

        public List<Species> genSortedList(){
            var allowedLabels = new ArrayList<>(List.of("baby", "pseudo_legendary", "legendary", "mythical",
                    "gen1", "gen2", "gen3", "gen4", "gen5",
                    "gen6", "gen7", "gen8", "gen9"));
            Comparator<Species> comparator = (o1, o2) -> {
                int diff = o1.getNationalPokedexNumber() - o2.getNationalPokedexNumber();
                if(diff == 0){
                    boolean o1IsOriginal = true;
                    boolean o2IsOriginal = true;
                    for (String label : o1.getLabels()) {
                        if(!allowedLabels.contains(label)){
                            o1IsOriginal = false;
                        }
                    }
                    for (String label : o2.getLabels()) {
                        if(!allowedLabels.contains(label)){
                            o2IsOriginal = false;
                        }
                    }
                    if(o1IsOriginal && !o2IsOriginal){
                        return -1;
                    } else {
                        return o1.getName().compareTo(o2.getName());
                    }
                }
                return diff;
            };
            List<Species> orderedSpecies = PokemonSpecies.INSTANCE.getImplemented();
            orderedSpecies.sort(comparator);
            return orderedSpecies;
        }
    }

