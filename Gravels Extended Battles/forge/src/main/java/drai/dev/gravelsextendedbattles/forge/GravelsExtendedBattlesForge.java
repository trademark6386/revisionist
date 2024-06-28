package drai.dev.gravelsextendedbattles.forge;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.reactive.*;
import com.cobblemon.mod.common.pokemon.*;
import com.mojang.brigadier.*;
import drai.dev.gravelsextendedbattles.*;
import eu.midnightdust.lib.config.*;
import kotlin.Unit;
import net.minecraft.server.command.*;
import net.minecraft.util.*;
import net.minecraftforge.api.distmarker.*;
import net.minecraftforge.event.*;
import net.minecraftforge.eventbus.api.*;
import net.minecraftforge.fml.common.*;
import net.minecraftforge.fml.loading.*;
import org.jetbrains.annotations.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.MOD_ID;
import static drai.dev.gravelsextendedbattles.GravelsExtendedBattles.BANNED_LABELS;

@Mod(GravelsExtendedBattles.MOD_ID)
public class GravelsExtendedBattlesForge {
    public static String MINECRAFT_FOLDER = FMLPaths.GAMEDIR.get().toString()+"/showdown/data/mods/cobblemon/";
    public GravelsExtendedBattlesForge() {
        MidnightConfig.init("gravelmon", GravelmonForgeConfig.class);
        GravelsExtendedBattles.init(new GravelmonForgeConfig(), MINECRAFT_FOLDER);
    }
}
