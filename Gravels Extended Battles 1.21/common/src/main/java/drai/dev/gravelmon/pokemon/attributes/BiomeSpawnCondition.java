package drai.dev.gravelmon.pokemon.attributes;

import java.util.*;

public class BiomeSpawnCondition extends SpawnCondition {
    private final List<Biome> biomes = new ArrayList<>();

    public BiomeSpawnCondition(List<Biome> biomes) {
        super(SpawnConditionType.BIOMES, "");
        this.biomes.addAll(biomes);
    }

    public List<Biome> getBiomes() {
        return biomes;
    }
}
