package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.reactive.*;
import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import kotlin.Unit;
import net.minecraft.util.*;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.logging.*;

public class GravelsExtendedBattles {

    public static List<ElementalType> NEW_TYPES = new ArrayList<>();
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static final String MOD_ID = "gravels_extended_battles";
    public static final ArrayList<String> showdownFiles = new ArrayList<>(
            List.of("abilities.js","conditions.js", "items.js", "moves.js", "pokedex.js", "scripts.js", "tags.js"));
    public static final ArrayList<String> fangameTypechart = new ArrayList<>(
            List.of("typechart2.js"));
    public static final ArrayList<String> gebTypechart = new ArrayList<>(
            List.of("typechart.js"));
    public static Logger logger = Logger.getLogger(MOD_ID);
    public static URL SHOW_DOWN_FOLDER = GravelsExtendedBattles.class.getResource("\\showdown");
    public static List<String> BANNED_LABELS;
    public static List<String> ALLOWED_LABELS;
    public static int TYPE_COUNT = 18;
    public static List<Species> SORTED_SPECIES;
    public static SimpleObservable<Boolean> scaleNeedsARefresh = new SimpleObservable<>();
    public static boolean banHasBeenApplied = false;
    public static List<Identifier> modeledPokemonIdentifiers = new ArrayList<>();
    public static void addModeledPokemon(Identifier identifier){
        modeledPokemonIdentifiers.add(identifier);
    }
    public static void init(IGravelmonConfig gravelmonConfig, String minecraftFolder) {
        BANNED_LABELS = gravelmonConfig.getBannedLabels();
        ALLOWED_LABELS = gravelmonConfig.getAllowedLabels();
        for (String fileName : GravelsExtendedBattles.showdownFiles) {
            try {
                ShowdownFileManager.exportResource(minecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        boolean enableFangameTypechart = gravelmonConfig.getEnableOriginalFanGameTypings();
        if (enableFangameTypechart) {
            for (String fileName : GravelsExtendedBattles.fangameTypechart) {
                try {
                    ShowdownFileManager.exportResource(minecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }

            // Rename the typechart2.js file after loading
            try {
                String originalFilePath = minecraftFolder + File.separator + "typechart2.js";
                String renamedFilePath = minecraftFolder + File.separator + "typechart.js";
                ShowdownFileManager.renameFile(originalFilePath, renamedFilePath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else {
            // If fangameTypechart is disabled, use showdownFiles instead
            for (String fileName : GravelsExtendedBattles.gebTypechart) {
                try {
                    ShowdownFileManager.exportResource(minecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        PokemonSpecies.INSTANCE.getObservable().subscribe(Priority.NORMAL, pokemonSpecies -> {
            SpeciesManager.banPokemon(pokemonSpecies, ((GravelmonPokemonSpeciesAccessor)(Object) pokemonSpecies));
            banHasBeenApplied = true;
            if(gravelmonConfig.getEnableDexResort()){
                GravelmonDexSorter.resort(pokemonSpecies);
            }
            return Unit.INSTANCE;
        });
    }
}
