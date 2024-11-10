package drai.dev.gravelmon.pokemon.attributes;

import org.jetbrains.annotations.*;

public enum Type {
    NORMAL("normal"),
    FIRE("fire"),
    FIGHTING("fighting"),
    WATER("water"),
    FLYING("flying"),
    GRASS("grass"),
    POISON("poison"),
    ELECTRIC("electric"),
    GROUND("ground"),
    PSYCHIC("psychic"),
    ROCK("rock"),
    ICE("ice"),
    BUG("bug"),
    DRAGON("dragon"),
    GHOST("ghost"),
    DARK("dark"),
    STEEL("steel"),
    FAIRY("fairy"),
    SHADOW("shadow", Type.DARK),
    WIND("wind", Type.FLYING),
    COSMIC("cosmic", Type.PSYCHIC),
    SOUND("sound", Type.NORMAL),
    NUCLEAR("nuclear", Type.POISON),
    DIGITAL("digital", Type.ELECTRIC),
    PLASTIC("plastic", Type.NORMAL),
    LIGHT("light", Type.PSYCHIC),
    SLIME("slime", Type.POISON),
    CRYSTAL("crystal", Type.ROCK),
    ELDRITCH("eldritch", Type.GHOST),
    QUESTION_MARK("questionmark", Type.NORMAL),
    BLOOD("blood", Type.DARK);
    private final String name;
    @Nullable
    private Type substitutionType;
    Type(String name, Type substitutionType) {
        this.name = name;
        this.substitutionType = substitutionType;
    }
    Type(String name){
        this.name = name;
    }

    public String getName() {
            return name;
    }

    public Type getSubstitutionType() {
        return substitutionType;
    }

    public static Type getByName(String name) {
        for (Type type : Type.values()) {
            if (type.getName().equalsIgnoreCase(name)) {
                return type;
            }
        }
        return null;
    }
}
