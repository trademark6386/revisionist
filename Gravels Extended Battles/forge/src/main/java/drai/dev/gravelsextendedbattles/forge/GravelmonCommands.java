package drai.dev.gravelsextendedbattles.forge;

import com.mojang.brigadier.*;
import net.minecraft.command.*;
import net.minecraft.server.command.*;

public class GravelmonCommands {
    public static void register(CommandDispatcher<ServerCommandSource> dispatcher, CommandRegistryAccess registry,
                                CommandManager.RegistrationEnvironment selection ){
        CheckSpawnsForSpeciesCommand.register(dispatcher);
    }
}
