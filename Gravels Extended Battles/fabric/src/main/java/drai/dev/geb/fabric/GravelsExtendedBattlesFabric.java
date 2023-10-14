package drai.dev.geb.fabric;

import drai.dev.geb.GravelsExtendedBattles;
import net.fabricmc.api.ModInitializer;

public class GravelsExtendedBattlesFabric implements ModInitializer {
    @Override
    public void onInitialize() {
        GravelsExtendedBattles.init();
    }
}