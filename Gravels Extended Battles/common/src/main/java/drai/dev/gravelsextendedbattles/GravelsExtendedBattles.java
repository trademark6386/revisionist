package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.types.*;
import com.cobblemon.mod.common.pokemon.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.resorting.*;
import drai.dev.gravelsextendedbattles.starters.*;
import eu.midnightdust.lib.config.*;
import kotlin.Unit;

import javax.imageio.*;
import java.awt.image.*;
import java.io.*;
import java.nio.file.*;
import java.util.*;
import java.util.logging.*;

public class GravelsExtendedBattles {

    public static List<ElementalType> NEW_TYPES = new ArrayList<>();
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static final String MOD_ID = "gravels_extended_battles";
    public static final ArrayList<String> SHOWDOWN_FILES = new ArrayList<>(
            List.of("abilities.js","conditions.js", "items.js", "moves.js", "pokedex.js", "scripts.js", "tags.js"));
    public static final ArrayList<String> FAN_GAME_TYPE_CHART = new ArrayList<>(
            List.of("typechart2.js"));
    public static final ArrayList<String> GEB_TYPE_CHART = new ArrayList<>(
            List.of("typechart.js"));
    public static Logger LOGGER = Logger.getLogger(MOD_ID);
    public static List<String> BANNED_LABELS;
    public static List<String> ALLOWED_LABELS;
    public static List<String> IMPLEMENTED_TYPES;
    public static int TYPE_COUNT = 18;
    public static boolean ADD_STARTERS = false;
    public static List<Species> SORTED_SPECIES = new ArrayList<>();
    public static void init(String minecraftFolder) {
        MidnightConfig.init("gravelmon", GravelmonConfig.class);
        var gravelmonConfig = new GravelmonConfig();
        BANNED_LABELS = gravelmonConfig.getBannedLabels();
        ALLOWED_LABELS = gravelmonConfig.getAllowedLabels();
        IMPLEMENTED_TYPES = gravelmonConfig.getImplementedTypes();
        ADD_STARTERS = gravelmonConfig.getShouldAddStarters();
        for (String fileName : GravelsExtendedBattles.SHOWDOWN_FILES) {
            try {
                ShowdownFileManager.exportResource(minecraftFolder, fileName);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        boolean enableFangameTypechart = gravelmonConfig.getEnableOriginalFanGameTypings();
        if (enableFangameTypechart) {
            for (String fileName : GravelsExtendedBattles.FAN_GAME_TYPE_CHART) {
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
            for (String fileName : GravelsExtendedBattles.GEB_TYPE_CHART) {
                try {
                    ShowdownFileManager.exportResource(minecraftFolder, fileName);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        }
        PokemonSpecies.INSTANCE.getObservable().subscribe(Priority.LOWEST, pokemonSpecies -> {
            SpeciesManager.banPokemon(pokemonSpecies, ((GravelmonPokemonSpeciesAccessor) (Object) pokemonSpecies));
            if (gravelmonConfig.getEnableDexResort()) {
                GravelmonPokedexResorter.resort(pokemonSpecies);
            }
            SpeciesManager.processFormEvolutionAdditions();
            SpeciesManager.processTypeChanges();
            GravelmonStarterManager.processStarters();
            GravelmonMoveSubstitution.substituteMoves();
            return Unit.INSTANCE;
        });
    }
}
