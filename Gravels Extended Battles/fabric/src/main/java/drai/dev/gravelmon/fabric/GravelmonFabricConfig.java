package drai.dev.gravelmon.fabric;

import eu.midnightdust.lib.config.*;

import java.util.*;

public class GravelmonFabricConfig extends MidnightConfig {
    @Entry(name = "Banned Labels: ") public static List<String> bannedLabels = new ArrayList<>(List.of("not_modeled")); // Array String Lists are also supported
    /*
    The .json language file for your config class could look similar to this:
    {
	    "modid.midnightconfig.title":"I am a title",        // "*.midnightconfig.title" defines the title of the screen
	    "modid.midnightconfig.text1":"I am a comment *u*",  // Translation for the comment "text1" defined in the example config
	    "modid.midnightconfig.text2":"I am a centered comment (╯°□°）╯︵ ┻━┻",
	    "modid.midnightconfig.name":"I am a string!",             // Translation for the field "name" defined in the example config
	    "modid.midnightconfig.name.tooltip":"I am a tooltip uwu \nI am a new line",
	    // When hovering over the option "showInfo",
	    // this text will appear as a tooltip.
	    // "\n" inserts a line break.
	    "modid.midnightconfig.fabric":"I am an int",
	    "modid.midnightconfig.world":"I am a double",
	    "modid.midnightconfig.showInfo":"I am a boolean",
	    "modid.midnightconfig.hello":"I am a limited int!",
	    "modid.midnightconfig.testEnum":"I am an enum!",
	    "modid.midnightconfig.enum.TestEnum.FORGE":"Slow",
	    "modid.midnightconfig.enum.TestEnum.FABRIC":"Fancy",
	    "modid.midnightconfig.enum.TestEnum.QUILT":"Fabulous",
	    "modid.midnightconfig.category.numbers": "Numbers",
	    "modid.midnightconfig.category.text": "Text",
	    "modid.midnightconfig.category.sliders": "Sliders"
    }
    To initialize the config you have to call "MidnightConfig.init("modid", MidnightConfigExample.class)" in your ModInitializer
    To get an instance of the config screen you have to call "MidnightConfig.getScreen(parent, "modid");"
    If you don't use the whole library and therefore not the automatic ModMenu integration, the code in your ModMenu integration class would look something like this:
    @Override
    public ConfigScreenFactory<?> getModConfigScreenFactory() {
        return parent -> MidnightConfig.getScreen(parent, "modid");
    }
    */
}
