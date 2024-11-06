package drai.dev.gravelsextendedbattles.mixinimpl;

import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.storage.pc.*;
import com.cobblemon.mod.common.pokemon.*;
import com.cobblemon.mod.common.util.*;
import com.mojang.brigadier.*;
import com.mojang.brigadier.context.*;
import com.mojang.brigadier.exceptions.*;
import drai.dev.gravelsextendedbattles.*;
import kotlin.jvm.internal.*;
import net.minecraft.commands.*;
import net.minecraft.server.level.*;
import org.spongepowered.asm.mixin.injection.callback.*;

import java.util.*;
import java.util.stream.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.SORTED_SPECIES;

public class GravelmonGiveAllPokemonCommand {
    public static void modifyGiveCommand(CommandContext<CommandSourceStack> context, CallbackInfoReturnable<Integer> cir) throws CommandSyntaxException {
        ServerPlayer player = context.getSource().getPlayerOrException();
        Intrinsics.checkNotNullExpressionValue(player, "player");
        PCStore pcStore = PlayerExtensionsKt.party(player).getOverflowPC();
        if (pcStore == null) {
            cir.setReturnValue(0);
        } else {
            PCStore pc = pcStore;
            for (Species species : PokemonSpecies.INSTANCE.getSpecies().stream()
                    .sorted(Comparator.comparingInt(Species::getNationalPokedexNumber)).toList()) {
                pc.add(species.create(10));
                var forms = species.getForms();
                forms.sort(Comparator.comparing(formData -> {
                    var optional = formData.getAspects().stream().findFirst();
                    return optional.isPresent() ? optional.get() : "";
                }, String::compareTo));
                for (FormData formData : forms) {
                    if (!formData.getAspects().isEmpty()
                            && !formData.getAspects().contains("female")
                            && !formData.getAspects().contains("f")
                            && !formData.getAspects().contains("mega")
                            && !formData.getAspects().contains("mega-x")
                            && !formData.getAspects().contains("mega-y")
                            && !formData.getAspects().contains("primal")
                            && !formData.getAspects().contains("douse")
                            && !formData.getAspects().contains("bluestriped")
                            && !formData.getAspects().contains("sky")
                            && !formData.getAspects().contains("zen_mode")
                            && !formData.getAspects().contains("shock")
                            && !formData.getAspects().contains("burn")
                            && !formData.getAspects().contains("chill")
                            && !formData.getAspects().contains("resolute")
                            && !formData.getAspects().contains("alola-totem")
                            && !formData.getAspects().contains("totem")
                            && !formData.getAspects().contains("unbound")
                            && !formData.getAspects().contains("pumpkin-size-small")
                            && !formData.getAspects().contains("pumpkin-size-large")
                            && !formData.getAspects().contains("pumpkin-size-super")
                            && !formData.getAspects().contains("neutral")
                            && !formData.getAspects().contains("fancy")
                            && !formData.getAspects().contains("eternal")
                            && !formData.getAspects().contains("pokeball")
                            && !formData.getAspects().contains("blade")
                            && !formData.getAspects().contains("gmax")
                            && !formData.getAspects().contains("bug")
                            && !formData.getAspects().contains("dark")
                            && !formData.getAspects().contains("dragon")
                            && !formData.getAspects().contains("electric")
                            && !formData.getAspects().contains("fairy")
                            && !formData.getAspects().contains("fighting")
                            && !formData.getAspects().contains("fire")
                            && !formData.getAspects().contains("flying")
                            && !formData.getAspects().contains("ghost")
                            && !formData.getAspects().contains("grass")
                            && !formData.getAspects().contains("ground")
                            && !formData.getAspects().contains("ice")
                            && !formData.getAspects().contains("poison")
                            && !formData.getAspects().contains("psychic")
                            && !formData.getAspects().contains("rock")
                            && !formData.getAspects().contains("steel")
                            && !formData.getAspects().contains("water")
                            && !formData.getAspects().contains("origin")
                            && !formData.getAspects().contains("heat")
                            && !formData.getAspects().contains("wash")
                            && !formData.getAspects().contains("frost")
                            && !formData.getAspects().contains("mow")
                            && !formData.getAspects().contains("fan")
                            && !formData.getAspects().contains("sunshine")
                            && !formData.getAspects().contains("sandy")
                            && !formData.getAspects().contains("trash")
                            && !formData.getAspects().contains("speed")
                            && !formData.getAspects().contains("defense")
                            && !formData.getAspects().contains("attack")
                            && !formData.getAspects().contains("sunny")
                            && !formData.getAspects().contains("spiky-eared")
                            && !formData.getAspects().contains("rainy")
                            && !formData.getAspects().contains("partner")
                            && !formData.getAspects().contains("snowy")
                            && !formData.getAspects().contains("cosplay")
                            && !formData.getAspects().contains("rock-star")
                            && !formData.getAspects().contains("belle")
                            && !formData.getAspects().contains("pop-star")
                            && !formData.getAspects().contains("phd")
                            && !formData.getAspects().contains("libre")
                            && !formData.getAspects().contains("original")
                            && !formData.getAspects().contains("hoenn")
                            && !formData.getAspects().contains("sinnoh")
                            && !formData.getAspects().contains("unova")
                            && !formData.getAspects().contains("kalos")
                            && !formData.getAspects().contains("alola")
                            && !formData.getAspects().contains("starter")
                            && !formData.getAspects().contains("world")
                            && !formData.getAspects().contains("meteor")
                            && !formData.getAspects().contains("busted")
                            && !formData.getAspects().contains("busted-totem")
                            && !formData.getAspects().contains("dusk-mane")
                            && !formData.getAspects().contains("dawn-wings")
                            && !formData.getAspects().contains("ultra")
                            && !formData.getAspects().contains("low-key")
                            && !formData.getAspects().contains("low-key-gmax")
                            && !formData.getAspects().contains("antique")
                            && !formData.getAspects().contains("gulping")
                            && !formData.getAspects().contains("gorging")
                            && !formData.getAspects().contains("crowned")
                            && !formData.getAspects().contains("eternamax")
                            && !formData.getAspects().contains("hangry")
                            && !formData.getAspects().contains("dada")
                            && !formData.getAspects().contains("bloodmoon")
                            && !formData.getAspects().contains("rapid-strike")
                            && !formData.getAspects().contains("rapid-strike-gmax")
                            && !formData.getAspects().contains("shadow")
                            && !formData.getAspects().contains("hero")
                            && !formData.getAspects().contains("three-segment")
                            && !formData.getAspects().contains("squawkabilly-color-blue")
                            && !formData.getAspects().contains("squawkabilly-color-yellow")
                            && !formData.getAspects().contains("squawkabilly-color-white")
                            && !formData.getAspects().contains("wellspring")
                            && !formData.getAspects().contains("hearthflame")
                            && !formData.getAspects().contains("cornerstone")
                            && !formData.getAspects().contains("masterpiece")
                            && !formData.getAspects().contains("teal-tera")
                            && !formData.getAspects().contains("wellspring-tera")
                            && !formData.getAspects().contains("hearthflame-tera")
                            && !formData.getAspects().contains("cornerstone-tera")
                            && !formData.getAspects().contains("terastal")
                            && !formData.getAspects().contains("roaming")
                            && !formData.getAspects().contains("stellar")
                    ) {
                        var form = species.create(10);
                        form.setAspects(new HashSet<>(formData.getAspects()));
                        pc.add(form);
                    }
                }
            }
            cir.setReturnValue(Command.SINGLE_SUCCESS);
        }
        cir.cancel();
    }

    public static List<Species> genSortedList() {
        var originalLabels = new ArrayList<>(List.of("baby", "pseudo_legendary", "legendary", "mythical",
                "gen1", "gen2", "gen3", "gen4", "gen5",
                "gen6", "gen7", "gen8", "gen9"));
        Comparator<Species> comparator = (o1, o2) -> {
            int diff = o1.getNationalPokedexNumber() - o2.getNationalPokedexNumber();
            if (diff == 0) {
                boolean o1IsOriginal = true;
                boolean o2IsOriginal = true;
                for (String label : o1.getLabels()) {
                    if (!originalLabels.contains(label)) {
                        o1IsOriginal = false;
                    }
                }
                for (String label : o2.getLabels()) {
                    if (!originalLabels.contains(label)) {
                        o2IsOriginal = false;
                    }
                }
                if (o1IsOriginal && !o2IsOriginal) {
                    return -1;
                } else {
                    return o1.getName().compareTo(o2.getName());
                }
            }
            return diff;
        };
        List<Species> orderedSpecies = new ArrayList<>(PokemonSpecies.INSTANCE.getSpecies().stream().toList());
        orderedSpecies.sort(comparator);
        return orderedSpecies;
    }
}
