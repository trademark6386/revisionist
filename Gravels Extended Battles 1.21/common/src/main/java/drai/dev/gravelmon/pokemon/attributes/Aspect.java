package drai.dev.gravelmon.pokemon.attributes;

public enum Aspect {
    ALOLAN("alolan", false, false),
    GALARIAN("galarian", false, false),
    HISUIAN("hisuian", false, false),
    PALDEAN("paldean", false, false),
    VALENCIAN("valencian", false, false),
    BLUE("blue", true, false),
    EXOTHERMIC("exothermic", true, false),
    COSPLAY("cosplay", false, false),
    WORLD("world", false, false),
    GMAX("gmax", false, false),
    STARTER("starter", false, false),
    PARTNER("partner", false, false),
    KALOS("kalos", false, false),
    UNOVA("unova", false, false),
    SINNOH("sinnoh", false, false),
    HOENNIAN("hoennian", true, false),
    ORIGINAL("original", false, false),
    LIBRE("libre", false, false),
    PHD("phd", false, false),
    POP_STAR("pop-star", false, false),
    BELLE("belle", false, false),
    ROCK_STAR("rock-star", false, false),
    MEGA("mega", false, false),
    ACTIVE("active", true, false),
    BLAZE_BOOST("blaze-boost", true, false),
    ARMORED("armored", true, false),
    MAGICIAN("magician", true, false),
    STORM("storm", true, false),
    FAIRY("fairy", true, false),
    DRAGON("dragon", true, false),
    PSYCHIC("psychic", true, false),
    SOUND("sound", true, false),
    WATER("water", true, false),
    STEEL("steel", true, false),
    GROUND("ground", true, false),
    POISON("poison", true, false),
    ROCK("rock", true, false),
    GRASS("grass", true, false),
    FLYING("flying", true, false),
    FIGHTING("fighting", true, false),
    ELECTRIC("electric", true, false),
    DARK("dark", true, false),
    ICE("ice", true, false),
    GHOST("ghost", true, false),
    FIRE("fire", true, false),
    RED("red", true, false),
    GREEN("green", true, false),
    YELLOW("yellow", true, false),
    MONSTER("monster", true, false),
    SUMMER("summer", true, false),
    SCHOOL("school", true, false),
    SWARM("swarm", true, false),
    DRY("dry", true, false),
    SIRIUS("sirius", true, false),
    ALTAIR("altair", true, false),
    ONE("one", true, false),
    TWO("two", true, false),
    THREE("three", true, false),
    FOUR("four", true, false),
    FIVE("five", true, false),
    SIX("six", true, false),
    SEVEN("seven", true, false),
    EIGHT("eight", true, false),
    NINE("nine", true, false),
    TEN("ten", true, false),
    ELEVEN("eleven", true, false),
    TWELVE("twelve", true, false),
    THIRTEEN("thirteen", true, false),
    FOURTEEN("fourteen", true, false),
    FIFTEEN("fifteen", true, false),
    SIXTEEN("sixteen", true, false),
    SEVENTEEN("seventeen", true, false),
    EIGHTEEN("eighteen", true, false),
    NINETEEN("nineteen", true, false),
    TWENTY("twenty", true, false),
    TWENTYONE("twentyone", true, false),
    TWENTYTWO("twentytwo", true, false),
    TWENTYTHREE("twentythree", true, false),
    TWENTYFOUR("twentyfour", true, false),
    TWENTYFIVE("twentyfive", true, false),
    TWENTYSIX("twentysix", true, false),
    TWENTYSEVEN("twentyseven", true, false),
    SUNNY("sunny", true, false),
    RAINY("rainy", true, false),
    SNOWY("snowy", true, false),
    NOSE_PATTERN("nosepattern", true, false),
    BROW_PATTERN("browpattern", true, false),
    QAMORAN("qamoran"),
    NOSTAN,
    VARITASIAN,
    X,
    SEVIIAN,
    DEEP,
    AYREIAN,
    KASKADIAN,
    MYSTIC,
    AVALOSSIAN,
    ENJINNIAN,
    NOVRAN,
    NEO,
    NORHEIMAN,
    AVORIAN,
    HIZIAN,
    ALTERAN,
    ARISTOSIAN,
    ARMIRAN,
    RELIC,
    GUTSY,
    WINDY,
    SMOGGY,
    DUSTY,
    SANDY,
    SWARMY,
    SPOOKY,
    WHIRLY,
    ALLERGY,
    ZAPPY,
    ZENNY,
    SORCERY,
    SHADY,
    LOVELY,
    CEFIRAN,
    EGHO,
    DELTA,
    DELTA_SPIDER,
    DELTA_RUIN,
    MYTHIAN,
    HUBIAN,
    EARTH,
    HAVAIIAN,
    LAGOONAN,
    RICAN,
    CROZOICAN,
    INTERIAN,
    DELTA_WATER,
    DELTA_FAIRY,
    DELTA_BERRY,
    DELTA_CAKE,
    SIGNETAN,
    OKENIAN,
    LOST_ISLANDS,
    SPACE,
    BETA,
    TERRESTRIAL,
    XENOVERSAL,
    ASTRAL,
    MIX,
    TWIRL,
    BASS,
    HOME,
    JUNK,
    WEB,
    BRAWL,
    SWAY,
    SOL,
    AMAZE_ALL,
    ELDIWAN,
    ALTERAN_WINTER_COAT,
    ALTERAN_SUMMER_COAT,
    XENOVERSE,
    CEFIRAN_FIRE,
    CEFIRAN_ICE,
    CEFIRAN_ELECTRIC,
    MALE_X,
    FEMALE_X,
    DELTA_UNLEASHED,
    AFRICANUSAN,
    VESITAN,
    EPOCH,
    TOKASSIAN,
    PASTELIAN,
    NODORRAN,
    OLYSOSIAN,
    OTTORAN,
    MYSTISIAN,
    MASTENIAN,
    THEOSSIAN,
    DHIOMAN,
    IONOSIAN,
    FORMAN,
    RAIANIAN,
    TRIBAL,
    NORSE,
    PALMIAN,
    TRIZORAN,
    FOREST,
    FLIGIAN,
    CAVE,
    SEA,
    IVRISIAN,
    FERRANIAN,
    MAHALIAN,
    FABELIAN,
    SAHLIAN,
    ELBIAN,
    AROMIAN,
    MIKITARIAN,
    FEMALE,
    ISHIRIAN;
    private String name;
    private boolean isNew;
    private boolean isDefault;

    public boolean isNew() {
        return isNew;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public String getName() {
        return name != null ? name : this.name();
    }

    Aspect() {
        this.name = this.getName().toLowerCase().replaceAll("_", "");
        this.isNew = true;
        this.isDefault = false;
    }

    Aspect(String name) {
        this.name = name;
        this.isNew = true;
        this.isDefault = false;
    }

    Aspect(String name, boolean isNew, boolean isDefault) {
        this.name = name;
        this.isNew = isNew;
        this.isDefault = isDefault;
    }
}
