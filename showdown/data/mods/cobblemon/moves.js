"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  abyssallure: {
    num: 1154,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Abyssal Lure",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (!target || target.fainted || target.hp <= 0)
        this.boost({ spa: 2 }, pokemon, pokemon, move);
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Cool"
  },
  accelerock: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  acesplay: {
    num: 1297,
    accuracy: 100,
    basePower: 95,
    category: "Speecial",
    name: "Ace's Play",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    overrideOffensivePokemon: "target",
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Clever"
  },
  achillesheel: {
    num: 967,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Achilles Heel",
    pp: 15,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Normal" || type === "Fire" || type === "Water" || type === "Electric" || type === "Grass" || type === "Ice" || type === "Fighting" || type === "Poison" || type === "Ground" || type === "Flying" || type === "Psychic" || type === "Bug" || type === "Rock" || type === "Dragon" || type === "Dark" || type === "Steel" || type === "Fairy" || type === "Wind" || type === "Cosmic" || type === "Sound" || type === "Nuclear" || type === "Digital" || type === "Plastic" || type === "Light" || type === "Crystal" || type === "Slime")
        return 1;
    },
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  acidrain: {
    num: 957,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acid Rain",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "AcidRain",
    secondary: null,
    target: "all",
    type: "Poison",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  aeroblast: {
    inherit: true,
	flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, wind: 1, legendary: 1 }
  },
  aircannon: {
    num: 1051,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Air Cannon",
    pp: 30,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Beautiful"
  },
  allure: {
    num: 1214,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Allure",
    pp: 10,
    priority: 0,
	overrideOffensiveStat: "atk",
    flags: { contact: 1, protect: 1, mirror: 1 },
	onBasePower(basePower, attacker, defender, move) {
      if (
        defender.hasMove("attract") ||
        defender.hasAbility("allure") ||
        defender.hasAbility("cutecharm")
      ) {
        this.debug("Allure power reduction");
        return this.chainModify(0.5);
      }
    },
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    contestType: "Tough"
  },
  ampclaw: {
    num: 1252,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Amp Claw",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    contestType: "Cool"
  },
  ancientroar: {
    num: 918,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Ancient Roar",
    pp: 15,
    priority: 0,
    flags: { sound: 1, bypasssub: 1, protect: 1, mirror: 1 },
	secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Tough"
  },
  ancientroarsound: {
    num: 1095,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Ancient Roar Sound",
    pp: 15,
    priority: 0,
    flags: { sound: 1, bypasssub: 1, protect: 1, mirror: 1 },
    onModifyType(move, pokemon, target) {
      const rockTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Rock";
      if (rockTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>rockTypeEffectiveness){
        move.type = "Sound"
      }
    },
	secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Tough"
  },
  antivirusnet: {
    num: 1338,
    accuracy: 85,
    basePower: 35,
    category: "Physical",
    name: "Antivirus Net",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Tough"
  },
  aquaslam: {
    num: 1052,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Aqua slam",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Water",
    contestType: "Tough"
  },
  arceanbanish: {
    num: 1323,
    accuracy: 30,
    basePower: 0,
    category: "Special",
    name: "Arcean Banish",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Eldritch",
    zMove: { basePower: 180 },
    maxMove: { basePower: 130 },
    contestType: "Cool"
  },
  asteroidbelt: {
    num: 958,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Asteroid Belt",
    pp: 10,
    flags: { noassist: 1, failcopycat: 1 },
    volatileStatus: "asteroidbelt",
    condition: {
      duration: 5,
      onTryHit(target, source, move) {
        if (this.checkMoveMakesContact(move, source, target)) {
          this.damage(source.baseMaxhp / 8, source, target);
        }
        return this.NOT_FAIL;
      },
	  onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(1, 10)) {
          source.trySetStatus("frz", target);
        }
      }
    }
    },
    secondary: null,
    target: "self",
    type: "Rock",
    zMove: { boost: { def: 1 } },
    contestType: "Tough"
  },
  asteroidshot: {
    num: 901,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Asteroid Shot",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Rock",
    contestType: "Cute"
  },
  astralbarrage: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  astrallance: {
    num: 1251,
    accuracy: true,
    basePower: 80,
    category: "Special",
    name: "Astral Lance",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	willCrit: true,
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  astralshot: {
    num: 1037,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Astral Shot",
    pp: 15,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Cosmic",
    contestType: "Beautiful"
  },
  atomicpunch: {
    num: 972,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Atomic Punch",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Nuclear",
    contestType: "Cute"
  },
  atomsplit: {
    num: 959,
    accuracy: 100,
    basePower: 250,
    category: "special",
    name: "Atom Split",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    contestType: "Beautiful"
  },
  atomsplitnuclear: {
    num: 1097,
    accuracy: 100,
    basePower: 250,
    category: "special",
    name: "Atom Split Nuclear",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Nuclear",
    contestType: "Beautiful"
  },
  attackorder: {
    num: 454,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Attack Order",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    critRatio: 2,
    secondary: null,
	onHit(target, source) {
        if (this.field.isWeather("pheromones")) {
            if (!target.volatiles["partiallytrapped"]) {
                target.addVolatile("partiallytrapped", source);
                this.add("-activate", target, "move: Attack Order", "[of] " + source);
            }
        }
    },
    target: "normal",
    type: "Bug",
    contestType: "Clever"
  },
  attract: {
    num: 213,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Attract",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1 },
    volatileStatus: "attract",
    condition: {
      noCopy: true,
      // doesn't get copied by Baton Pass
      onStart(pokemon, source, effect) {
        const isPheromonesActive = this.field.isWeather("pheromones");
        if (!isPheromonesActive && !((pokemon.gender === "M" && source.gender === "F") || (pokemon.gender === "F" && source.gender === "M"))) {
          this.debug("incompatible gender");
          return false;
        }
        if (!this.runEvent("Attract", pokemon, source)) {
          this.debug("Attract event failed");
          return false;
        }
        if (effect.name === "Cute Charm") {
          this.add("-start", pokemon, "Attract", "[from] ability: Cute Charm", "[of] " + source);
        } else if (effect.name === "Destiny Knot") {
          this.add("-start", pokemon, "Attract", "[from] item: Destiny Knot", "[of] " + source);
        } else {
          this.add("-start", pokemon, "Attract");
        }
      },
      onUpdate(pokemon) {
        if (this.effectState.source && !this.effectState.source.isActive && pokemon.volatiles["attract"]) {
          this.debug("Removing Attract volatile on " + pokemon);
          pokemon.removeVolatile("attract");
        }
      },
      onBeforeMovePriority: 2,
      onBeforeMove(pokemon, target, move) {
        this.add("-activate", pokemon, "move: Attract", "[of] " + this.effectState.source);
        if (this.randomChance(1, 2)) {
          this.add("cant", pokemon, "Attract");
          return false;
        }
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Attract", "[silent]");
      }
    },
    onTryImmunity(target, source) {
      return target.gender === "M" && source.gender === "F" || target.gender === "F" && source.gender === "M" || this.field.isWeather("pheromones");
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cute"
  },
  audacity: {
    num: 1155,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Audacity",
    pp: 5,
    priority: 0,
    flags: { sound: 1, distance: 1, bypasssub: 1 },
	boosts: {
      atk: 2,
      spe: 2,
	  evasion: 2
    },
    secondary: {
      chance: 100,
      volatileStatus: "perishsong"
    },
    target: "Self",
    type: "Fighting",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  auraprojection: {
    num: 1312,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aura Projection",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "battleaura",
    secondary: null,
    target: "all",
    type: "Fighting",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  aurorabeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  aurorawave: {
    num: 1280,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Aurora Wave",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Light",
    contestType: "Beautiful"
  },
  axekick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  babble: {
    num: 1224,
    accuracy: 100,
    basePower: 45,
    category: "Special",
    name: "Babble",
    pp: 25,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Tough"
  },
  banishingfist: {
    num: 1319,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Banishing Fist",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Eldritch",
    contestType: "Cute"
  },
  bansheesscream: {
    num: 996,
    accuracy: 80,
    basePower: 100,
    category: "Special",
    name: "Banshee's Scream",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      chance: 35,
      volatileStatus: "perishsong"
    },
    target: "normal",
    type: "Sound",
    contestType: "Clever"
  },
  barbedtackle: {
    num: 926,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Barbed Tackle",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Tough"
  },
  barrierlight: {
    num: 1105,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Barrier Light",
    pp: 20,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Light",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool"
  },
  basilisksglare: {
    num: 924,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Basilisk's Glare",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1 },
    onHit(target) {
      if (target.getTypes().join() === "Rock" || !target.setType("Rock")) {
        this.add("-fail", target);
        return null;
      }
      this.add("-start", target, "typechange", "Rock");
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    zMove: { boost: { spa: 1 } },
    contestType: "Cute"
  },
  batteringram: {
    num: 916,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Battering Ram",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onTryHit(pokemon) {
      pokemon.side.removeSideCondition("reflect");
      pokemon.side.removeSideCondition("lightscreen");
      pokemon.side.removeSideCondition("auroraveil");
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Cool"
  },
  beguile: {
    num: 1193,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Beguile",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
	onTryHit(target) {
      if (target.volatiles['attract']) {
        target.faint();
		return null;
      }
	},
	secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Cool"
  },
  behemothbash: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, failcopycat: 1, failmimic: 1, legendary: 1 }
  },
  behemothblade: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, failcopycat: 1, failmimic: 1, slicing: 1, legendary: 1 }
  },
  bide: {
    inherit: true,
	flags: { contact: 1, protect: 1, nosleeptalk: 1, failinstruct: 1, speed: 1 }
  },
  bigbang: {
    num: 1038,
    accuracy: 100,
    basePower: 105,
    category: "Physical",
    name: "Big Bang",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      onHit(target, source) {
        const result = this.random(3);
        if (result === 0) {
          target.trySetStatus("brn", source);
        } else if (result === 1) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("frz", source);
        }
      }
    },
    target: "allAdjacent",
    type: "Cosmic",
    contestType: "Beautiful"
  },
  blackhole: {
    num: 1288,
    accuracy: 90,
    basePower: 130,
    category: "Special",
    name: "Black Hole",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Beautiful"
  },
  blackout: {
    num: 1158,
    accuracy: 85,
    basePower: 70,
    category: "Physical",
    name: "Blackout",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "slp"
    },
    target: "normal",
    type: "Ghost",
    contestType: "Beautiful"
  },
  blastcannon: {
    num: 1276,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Blast Cannon",
    pp: 15,
    priority: 0,
    flags: { bullet: 1, charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  blazekick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  bleakwindstorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, wind: 1, legendary: 1 }
  },
  blueflare: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  bluenote: {
    num: 1238,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Blue Note",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, sound: 1 },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  boltblitz: {
    num: 1156,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    isNonstandard: "Past",
    name: "Bolt Blitz",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    recoil: [1, 4],
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Tough"
  },
  boltstrike: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  bonesweep: {
    num: 927,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Bone Sweep",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    contestType: "Tough"
  },
  boomburstsound: {
    num: 998,
    accuracy: 100,
    basePower: 140,
    category: "Special",
    name: "Boomburst Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Sound",
    contestType: "Tough"
  },
  bounce: {
    inherit: true,
    condition: {
      duration: 2,
      onInvulnerability(target, source, move) {
        if (["gust", "gustwind", "tornado", "twister", "skyuppercut", "thunder", "hurricane", "hurricanewind", "smackdown", "thousandarrows"].includes(move.id)) {
          return;
        }
        return false;
      },
      onSourceBasePower(basePower, target, source, move) {
        if (move.id === "gust" || move.id === "gustwind" || move.id === "twister") {
          return this.chainModify(2);
        }
      }
    }
  },
  bramblebash: {
    num: 1198,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    isNonstandard: "Past",
    name: "Bramble Bash",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    self: {
      volatileStatus: "rage"
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Tough"
  },
  brace: {
    num: 902,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Brace",
    pp: 15,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      atk: -1,
      spa: -1,
	  def: 1,
	  spd: 1
    },
    sideCondition: "brace",
    condition: {
      duration: 1,
      onSideStart(side) {
        this.add("-sidestart", side, "move: Brace");
      },
      onCriticalHit: false,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 6,
      onSideEnd(side) {
        this.add("-sideend", side, "move: Brace");
      }
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { boost: { evasion: 1 } },
    contestType: "Cool"
  },
  brainfreeze: {
    num: 928,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Brain Freeze",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Psychic",
    contestType: "Cool"
  },
  brainstorm: {
    num: 929,
    accuracy: 90,
    basePower: 70,
    category: "Special",
    name: "Brain Storm",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 70,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  bubblebeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  bufu: {
    num: 6969,
    accuracy: 90,
    basePower: 40,
    category: "Special",
    name: "Bufu",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
	onModifyMove(move) {
      if (this.field.isWeather(["hail", "snow"]))
        move.accuracy = true;
	},
    secondary: {
      chance: 5,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
  },
  bufula: {
    num: 6969,
    accuracy: 90,
    basePower: 70,
    category: "Special",
    name: "Bufula",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
	onModifyMove(move) {
      if (this.field.isWeather(["hail", "snow"]))
        move.accuracy = true;
	},
    secondary: {
      chance: 5,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
  },
  bufudyne: {
    num: 6969,
    accuracy: 90,
    basePower: 95,
    category: "Special",
    name: "Bufudyne",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
	onModifyMove(move) {
      if (this.field.isWeather(["hail", "snow"]))
        move.accuracy = true;
	},
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
  },
  bugbomb: {
    num: 1053,
    accuracy: 95,
    basePower: 70,
    category: "Special",
    name: "Bug Bomb",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Bug",
    contestType: "Cute"
  },
  bugbuzzsound: {
    num: 1001,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Bug Buzz Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
	onModifyType(move, pokemon, target) {
      const bugTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Bug";
      if (bugTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>bugTypeEffectiveness){
        move.type = "Sound"
      }
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Bug",
    contestType: "Beautiful"
  },
  buggnaw: {
    num: 1283,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Bug Gnaw",
    pp: 35,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Tough"
  },
  bugnoise: {
    num: 1130,
    accuracy: 90,
    basePower: 120,
    category: "Special",
    name: "Bug Noise",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      chance: 20,
      status: "par"
    },
    target: "allAdjacentFoes",
    type: "Bug"
  },
  bugout: {
    num: 951,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Bug Out",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, distance: 1 },
    recoil: [33, 100],
    secondary: null,
    target: "any",
    type: "Bug",
    contestType: "Cool"
  },
  bulletpunch: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, speed: 1 }
  },
  burningbulwark: {
    inherit: true,
	flags: { metronome: 1, noassist: 1, failcopycat: 1, legendary: 1 }
  },
  cacophony: {
    num: 1333,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Cacophony",
    pp: 10,
    priority: 0,
    flags: {sound: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1},
    self: {
      volatileStatus: "lockedmove",
    },
    onAfterMove(pokemon) {
      if (pokemon.volatiles["lockedmove"] && pokemon.volatiles["lockedmove"].duration === 1) {
        pokemon.removeVolatile("lockedmove");
      }
    },
    secondary: null,
    target: "randomNormal",
    type: "Sound",
    contestType: "Cool"
  },
  cactussmash: {
    num: 930,
    accuracy: 100,
    basePower: 115,
    category: "Physical",
    name: "Cactus Smash",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [33, 100],
    secondary: {
      chance: 35,
      status: "psn"
    },
    target: "normal",
    type: "Grass",
    contestType: "Cool"
  },
  carbonize: {
    num: 1157,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Carbonize",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "psn"
    },
    critRatio: 2,
    target: "normal",
    type: "Steel",
    contestType: "Cool"
  },
  cataclysm: {
    num: 1190,
    accuracy: 100,
    basePower: 200,
    category: "Special",
    name: "Cataclysm",
    pp: 1,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  causticbreath: {
    num: 903,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Caustic Breath",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      boosts: {
        def: -1,
		spd: -1
      }
    },
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  cavein: {
    num: 1275,
    accuracy: 85,
    basePower: 90,
    category: "Physical",
    name: "Cave In",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [1, 4],
    secondary: null,
    target: "normal",
    type: "Ground",
    contestType: "Tough"
  },
  chairdrop: {
    num: 955,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Chair Drop",
    pp: 10,
    flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1, nonsky: 1 },
    onEffectiveness(typeMod, target, type, move) {
      return typeMod + this.dex.getEffectiveness("Steel", type);
    },
    priority: 0,
    secondary: null,
    target: "any",
    type: "Fighting",
    zMove: { basePower: 170 },
    contestType: "Tough"
  },
  channel: {
    num: 1151,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Channel",
    pp: 10,
    priority: 0,
    flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1, failmimic: 1 },
	onHit(target, source, effect) {
      const ghostMoves = this.dex.moves.all().filter((move) =>
      move.type === "Ghost" &&
        (![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
        !move.realMove && !move.isZ && !move.isMax &&
        (!move.isNonstandard || move.isNonstandard === "Unobtainable") &&
        !effect.noMetronome.includes(move.name)
      );
      let randomGhostMove = "";
      if (ghostMoves.length) {
        ghostMoves.sort((a, b) => a.num - b.num);
        randomGhostMove = this.sample(ghostMoves).id;
      }
      if (!randomGhostMove) 
        return false;
      source.side.lastSelectedMove = this.toID(randomGhostMove);
      this.actions.useMove(randomGhostMove, target);
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    contestType: "Cute"
  },
  chargebeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  charminggnash: {
    num: 1278,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Charming Gnash",
    pp: 25,
    priority: 0,
    flags: { bite: 1, contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "attract"
    },
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  chattersound: {
    num: 999,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    isNonstandard: "Past",
    name: "Chatter Sound",
    pp: 20,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1,
      sound: 1,
      distance: 1,
      bypasssub: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    noSketch: true,
    secondary: {
      chance: 100,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Sound",
    contestType: "Cute"
  },
  cheapshot: {
    num: 904,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Cheap Shot",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Dark"
  },
  chomper: {
    num: 1301,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Chomper",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  cinderbreath: {
    num: 931,
    accuracy: 100,
    basePower: 55,
    category: "Special",
    name: "Cinder Breath",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Fire",
    contestType: "Tough"
  },
  cloudburst: {
    num: 1159,
    accuracy: 90,
    basePower: 140,
    category: "Special",
    name: "Cloudburst",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Beautiful"
  },
  cloudburstwind: {
    num: 1160,
    accuracy: 90,
    basePower: 140,
    category: "Special",
    name: "Cloudburst Wind",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Wind",
    contestType: "Beautiful"
  },
  collisioncourse: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, legendary: 1 }
  },
  cometcrash: {
    num: 1046,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Comet Crash",
    pp: 10,
    priority: -6,
    flags: { contact: 1, protect: 1, mirror: 1 },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Cosmic",
    contestType: "Cute"
  },
  cometshower: {
    num: 1039,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Comet Shower",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 25,
      volatileStatus: "flinch"
    },
    target: "allAdjacent",
    type: "Cosmic",
    contestType: "Cool"
  },
  constructionblocks: {
    num: 1118,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Construction Blocks",
    pp: 20,
    priority: 0,
    flags: { reflectable: 1, mustpressure: 1 },
    sideCondition: "constructionblocks",
    condition: {
      // this is a side condition
      onSideStart(side) {
        this.add("-sidestart", side, "move: Construction Blocks");
      },
      onEntryHazard(pokemon) {
        if (pokemon.hasItem("heavydutyboots"))
          return;
        const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove("constructionblocks")), -6, 6);
        this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
      }
    },
    secondary: null,
    target: "foeSide",
    type: "Plastic",
    zMove: { boost: { def: 1 } },
    contestType: "Cool"
  },
  cookiecut: {
    num: 1194,
    accuracy: 100,
    basePower: 10,
    category: "Physical",
    isNonstandard: "Past",
    name: "Cookie Cut",
    pp: 5,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  copypaste: {
    num: 1281,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Copy-Paste",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1,
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    onHit(target, source) {
      const disallowedMoves = ["chatter", "sketch", "struggle"];
      const move = target.lastMove;
      if (source.transformed || !move || source.moves.includes(move.id))
        return false;
      if (disallowedMoves.includes(move.id) || move.isZ || move.isMax)
        return false;
      const sketchIndex = source.moves.indexOf("sketch");
      if (sketchIndex < 0)
        return false;
      const sketchedMove = {
        move: move.name,
        id: move.id,
        pp: move.pp,
        maxpp: move.pp,
        target: move.target,
        disabled: false,
        used: false
      };
      source.moveSlots[sketchIndex] = sketchedMove;
      source.baseMoveSlots[sketchIndex] = sketchedMove;
      this.add("-activate", source, "move: Copy-Paste", move.name);
    },
    noSketch: true,
    secondary: null,
    target: "normal",
    type: "Digital",
    zMove: { boost: { atk: 1, def: 1, spa: 1, spd: 1, spe: 1 } },
    contestType: "Clever"
  },
  coralbreak: {
    num: 973,
    accuracy: 95,
    basePower: 80,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Coral Break",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  coreenforcer: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  corrode: {
    num: 919,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Corrode",
    pp: 10,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Steel")
        return 1;
    },
    flags: { protect: 1, mirror: 1 },
    ignoreImmunity: { "Steel": true },
    secondary: null,
    target: "normal",
    type: "Poison",
    contestType: "Beautiful"
  },
  corrupt: {
    num: 1215,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "corrupt",
    pp: 5,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
	onHit(target) {
        const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
        for (let i = 0; i < 2; i++) {
            const randomStat = this.sample(stats);
            stats.splice(stats.indexOf(randomStat), 1);
            this.boost({ [randomStat]: -2 }, target, target, this.dex.getActiveMove('corrupt'));
        }
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: { boost: { atk: 1 } },
    contestType: "Cool"
  },
  cosmicpowercosmic: {
    num: 1101,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Unobtainable",
    name: "Cosmic Power Cosmic",
    pp: 20,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      def: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Cosmic",
    zMove: { boost: { spd: 1 } },
    contestType: "Beautiful"
  },
  cosmicray: {
    num: 1040,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Cosmic Ray",
    pp: 10,
    priority: 0,
    flags: { protect: 1, pulse: 1, mirror: 1, distance: 1, beam: 1 },
    secondary: {
      chance: 15,
      volatileStatus: "flinch"
    },
    target: "any",
    type: "Cosmic",
    contestType: "Cool"
  },
  cosmicrays: {
    num: 1314,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Cosmic Rays",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "psychicfield",
    secondary: null,
    target: "all",
    type: "Psychic",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  courtchange: {
    num: 756,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Court Change",
    pp: 10,
    priority: 0,
    flags: { mirror: 1 },
    onHitField(target, source) {
      const sideConditions = [
        "mist",
        "lightscreen",
        "reflect",
        "spikes",
        "safeguard",
        "tailwind",
        "toxicspikes",
        "stealthrock",
        "waterpledge",
        "firepledge",
        "grasspledge",
        "stickyweb",
        "auroraveil",
		"fiesta",
		"hawthorns",
		"scorchedashes",
		"velvetscales",
		"salttherapy",
		"constructionblocks",
        "gmaxsteelsurge",
        "gmaxcannonade",
        "gmaxvinelash",
        "gmaxwildfire"
      ];
      let success = false;
      if (this.gameType === "freeforall") {
        const offset = this.random(3) + 1;
        const sides = [this.sides[0], this.sides[2], this.sides[1], this.sides[3]];
        const temp = { 0: {}, 1: {}, 2: {}, 3: {} };
        for (const side of sides) {
          for (const id in side.sideConditions) {
            if (!sideConditions.includes(id))
              continue;
            temp[side.n][id] = side.sideConditions[id];
            delete side.sideConditions[id];
            const effectName = this.dex.conditions.get(id).name;
            this.add("-sideend", side, effectName, "[silent]");
            success = true;
          }
        }
        for (let i = 0; i < 4; i++) {
          const sourceSideConditions = temp[sides[i].n];
          const targetSide = sides[(i + offset) % 4];
          for (const id in sourceSideConditions) {
            targetSide.sideConditions[id] = sourceSideConditions[id];
            const effectName = this.dex.conditions.get(id).name;
            let layers = sourceSideConditions[id].layers || 1;
            for (; layers > 0; layers--)
              this.add("-sidestart", targetSide, effectName, "[silent]");
          }
        }
      } else {
        const sourceSideConditions = source.side.sideConditions;
        const targetSideConditions = source.side.foe.sideConditions;
        const sourceTemp = {};
        const targetTemp = {};
        for (const id in sourceSideConditions) {
          if (!sideConditions.includes(id))
            continue;
          sourceTemp[id] = sourceSideConditions[id];
          delete sourceSideConditions[id];
          success = true;
        }
        for (const id in targetSideConditions) {
          if (!sideConditions.includes(id))
            continue;
          targetTemp[id] = targetSideConditions[id];
          delete targetSideConditions[id];
          success = true;
        }
        for (const id in sourceTemp) {
          targetSideConditions[id] = sourceTemp[id];
        }
        for (const id in targetTemp) {
          sourceSideConditions[id] = targetTemp[id];
        }
        this.add("-swapsideconditions");
      }
      if (!success)
        return false;
      this.add("-activate", source, "move: Court Change");
    },
    secondary: null,
    target: "all",
    type: "Normal"
  },
  crackleslam: {
    num: 1054,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Crackle Slam",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "allAdjacent",
    type: "Electric",
    contestType: "Cool"
  },
  creamwhip: {
    num: 1246,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Cream Whip",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Ice",
    contestType: "Tough"
  },
  crushgrip: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  crystalize: {
    num: 1161,
    accuracy: 90,
    basePower: 110,
    category: "Special",
    name: "Crystalize",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      status: "frz"
    },
    target: "normal",
    type: "Rock"
  },
  crystalizecrystal: {
    num: 1162,
    accuracy: 90,
    basePower: 110,
    category: "Special",
    name: "Crystalize Crystal",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      status: "frz"
    },
    target: "normal",
    type: "Crystal"
  },
  crystallization: {
    num: 1036,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Crystallization",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1 },
    onHit(target) {
      if (target.getTypes().join() === "Crystal" || !target.setType("Crystal")) {
        this.add("-fail", target);
        return null;
      }
      this.add("-start", target, "typechange", "Crystal");
    },
    secondary: null,
    target: "normal",
    type: "Crystal",
    zMove: { boost: { spa: 1 } },
    contestType: "Cute"
  },
  crystalrush: {
    num: 968,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Crystal Rush",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Crystal",
    contestType: "Beautiful"
  },
  cursedwrath: {
    num: 1266,
    accuracy: 100,
    basePower: 0,
    basePowerCallback(pokemon, target) {
      const userHPPercentage = (pokemon.hp / pokemon.maxhp) * 100;
      let bp;
      if (userHPPercentage >= 68.75) {
        bp = 20;
      } else if (userHPPercentage >= 35.42) {
        bp = 40;
      } else if (userHPPercentage >= 20.83) {
        bp = 80;
      } else if (userHPPercentage >= 10.42) {
        bp = 100;
      } else if (userHPPercentage >= 4.17) {
        bp = 150;
      } else {
        bp = 200;
      }
      this.debug("BP: " + bp);
      return bp;
    },
    category: "Special",
    name: "Cursed Wrath",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Cute"
  },
  cut: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, slicing: 1, hm: 1 }
  },
  cymbalcrash: {
    num: 1119,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Cymbal Crash",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  darkbargain: {
    num: 1191,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dark Bargain",
    pp: 5,
    priority: 0,
    flags: { snatch: 1 },
	volatileStatus: "curse",
    boosts: {
      spa: 2,
      spe: 2,
	  accuracy: 2
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: { boost: { spa: 1 } },
    contestType: "Beautiful"
  },
  darkeningbolt: {
    num: 1239,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Darkening Bolt",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  darkmatter: {
    num: 920,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Dark Matter",
    pp: 5,
    priority: 0,
    flags: { recharge: 1, protect: 1, mirror: 1 },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  darkroar: {
    num: 1131,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Dark Roar",
    pp: 30,
    priority: 1,
	flags: { protect: 1, mirror: 1, sound: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  darkroarsound: {
    num: 1132,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Dark Roar Sound",
    pp: 30,
    priority: 1,
	onModifyType(move, pokemon, target) {
      const darkTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dark";
      if (darkTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>darkTypeEffectiveness){
        move.type = "Sound"
      }
    },
    flags: { protect: 1, mirror: 1, sound: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  datatransfer: {
    num: 1341,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Data Transfer",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, heal: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Clever"
  },
  dazzledust: {
    num: 1163,
    accuracy: 95,
    basePower: 0,
    damageCallback(pokemon, target) {
      return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
    },
    category: "Special",
    name: "Dazzle Dust",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, powder: 1 },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  decapattack: {
    num: 1041,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    isNonstandard: "Past",
    name: "Decap Attack",
    pp: 10,
    priority: 0,
    flags: { bullet: 1, protect: 1, mirror: 1 },
	recoil: [1, 2],
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Tough"
  },
  deafeningnoise: {
    num: 1334,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Deafening Noise",
    pp: 10,
    priority: 0,
    flags: {sound: 1, protect: 1, reflectable: 1, mirror: 1, allyanim: 1, metronome: 1},
	onTryHit(target) {
      if (target.getAbility().flags["cantsuppress"] || target.ability === "soundproof" || target.ability === "truant") {
        return false;
      }
    },
    onHit(pokemon) {
      const oldAbility = pokemon.setAbility("soundproof");
      if (oldAbility) {
        this.add("-ability", pokemon, "soundproof", "[from] move: Deafening Noise");
        return;
      }
      return oldAbility;
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Clever"
  },
  decode: {
	num: 1328,
	accuracy: 100,
	basePower: 60,
	category: "Special",
	name: "Decode",
	pp: 20,
	priority: 0,
	flags: { protect: 1, mirror: 1 },
	secondary: null,
	target: "normal",
	type: "Digital",
	contestType: "Clever"
  },
  deepyawn: {
    num: 1267,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Deep Yawn",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, sound: 1 },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  defendorder: {
    inherit: true,
	onModifyMove(move, pokemon) {
      if (["pheromones"].includes(pokemon.effectiveWeather()))
        move.boosts = { def: 2, spd: 2 };
    }
  },
  defog: {
    num: 432,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defog",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1 },
    onHit(target, source, move) {
      let success = false;
      if (!target.volatiles["substitute"] || move.infiltrates)
        success = !!this.boost({ evasion: -1 });
      const removeTarget = [
        "reflect",
        "lightscreen",
        "auroraveil",
        "safeguard",
		"salttherapy",
        "mist",
        "spikes",
        "toxicspikes",
        "stealthrock",
		"hawthorns",
		"scorchedashes",
		"velvetscales",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "constructionblocks",
		"fiesta",
		"spikes",
        "toxicspikes",
        "stealthrock",
		"hawthorns",
		"scorchedashes",
		"velvetscales",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target.side, this.dex.conditions.get(targetCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (source.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", source.side, this.dex.conditions.get(sideCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: { boost: { accuracy: 1 } },
    contestType: "Cool"
  },
  defogwind: {
    num: 1093,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defog Wind",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1 },
    onHit(target, source, move) {
      let success = false;
      if (!target.volatiles["substitute"] || move.infiltrates)
        success = !!this.boost({ evasion: -1 });
      const removeTarget = [
        "reflect",
        "lightscreen",
        "auroraveil",
        "safeguard",
		"salttherapy",
        "mist",
        "spikes",
        "toxicspikes",
        "stealthrock",
		"hawthorns",
		"scorchedashes",
		"velvetscales",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "constructionblocks",
		"fiesta",
		"spikes",
        "toxicspikes",
        "stealthrock",
		"hawthorns",
		"scorchedashes",
		"velvetscales",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target.side, this.dex.conditions.get(targetCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (source.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", source.side, this.dex.conditions.get(sideCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    secondary: null,
    target: "normal",
    type: "Wind",
    zMove: { boost: { accuracy: 1 } },
    contestType: "Cool"
  },
  dejavu: {
    num: 1042,
    accuracy: true,
    basePower: 105,
    category: "Special",
    name: "Deja-Vu",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Psychic",
    contestType: "Cool"
  },
  demoralize: {
    num: 1153,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Unobtainable",
    name: "Demoralize",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1 },
    onTryHit(target) {
      if (target.getAbility().isPermanent || target.ability === "defeatist") {
        return false;
      }
    },
    onHit(pokemon) {
      const oldAbility = pokemon.setAbility("defeatist");
      if (oldAbility) {
        this.add("-ability", pokemon, "Defeatist", "[from] move: Demoralize");
        return;
      }
      return oldAbility;
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: { boost: { spa: 1 } },
    contestType: "Cute"
  },
  depthcharge: {
    num: 960,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Depth Charge",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Water",
    contestType: "Cute"
  },
  detox: {
    num: 1213,
    accuracy: 100,
    basePower: 130,
    category: "Special",
    name: "Detox",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onTry(source) {
      return source.status === "psn" || source.status === "tox";
    },
	onHit(target, source, move) {
      const success = source.cureStatus();
      if (success) {
        this.add('-clearstatus', source, source.status);
      }
      return success;
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    contestType: "Cute"
  },
  devastate: {
    num: 1133,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Devastate",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Dark",
    contestType: "Beautiful"
  },
  devildarts: {
    num: 1164,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Devil  Darts",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    multihit: 2,
    smartTarget: true,
    secondary: null,
    target: "normal",
    type: "Fire",
    maxMove: { basePower: 130 }
  },
  diamondclaw: {
    num: 1055,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Diamond Claw",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    self: {
      chance: 50,
      boosts: {
        def: 1
      }
    },
    secondary: {
      // Sheer Force negates the self even though it is not secondary
    },
    target: "allAdjacentFoes",
    type: "Rock",
    contestType: "Beautiful"
  },
  diamondclawcrystal: {
    num: 1114,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Diamond Claw Crystal",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    self: {
      chance: 50,
      boosts: {
        def: 1
      }
    },
    secondary: {
      // Sheer Force negates the self even though it is not secondary
    },
    target: "allAdjacentFoes",
    type: "Crystal",
    contestType: "Beautiful"
  },
  diamondstorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  diamondstormcrystal: {
    num: 1113,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Diamond Storm Crystal",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      chance: 50,
      boosts: {
        def: 2
      }
    },
    secondary: {
      // Sheer Force negates the self even though it is not secondary
    },
    target: "allAdjacentFoes",
    type: "Crystal",
    contestType: "Beautiful"
  },
  dig: {
    num: 91,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dig",
    pp: 10,
    priority: 0,
    flags: { contact: 1, charge: 1, protect: 1, mirror: 1, nonsky: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    condition: {
      duration: 2,
      onImmunity(type, pokemon) {
        if (type === "sandstorm" || type === "hail")
          return false;
      },
      onInvulnerability(target, source, move) {
        if (["earthquake", "magnitude", "earthmover", "gaiasfury"].includes(move.id)) {
          return;
        }
        return false;
      },
      onSourceModifyDamage(damage, source, target, move) {
        if (move.id === "earthquake" || move.id === "magnitude" || move.id === "gaiasfury") {
          return this.chainModify(2);
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    contestType: "Tough"
  },
  disarmingvoicesound: {
    num: 1002,
    accuracy: true,
    basePower: 40,
    category: "Special",
    name: "Disarming Voice Sound",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    onModifyType(move, pokemon, target) {
      const fairyTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Fairy";
      if (fairyTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>fairyTypeEffectiveness){
        move.type = "Sound"
      }
    },
	secondary: null,
    target: "allAdjacentFoes",
    type: "Fairy",
    contestType: "Cute"
  },
  discofever: {
    num: 1235,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Disco Fever",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { spa: 1 } },
    contestType: "Clever"
  },
  dive: {
    num: 291,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dive",
    pp: 10,
    priority: 0,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1,
      allyanim: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1,
	  hm: 1
    },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      if (attacker.hasAbility("gulpmissile") && attacker.species.name === "Cramorant" && !attacker.transformed) {
        const forme = attacker.hp <= attacker.maxhp / 2 ? "cramorantgorging" : "cramorantgulping";
        attacker.formeChange(forme, move);
      }
      this.add("-prepare", attacker, move.name);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    condition: {
      duration: 2,
      onImmunity(type, pokemon) {
        if (type === "sandstorm" || type === "hail")
          return false;
      },
      onInvulnerability(target, source, move) {
        if ([" depthcharge", "surf", "whirlpool"].includes(move.id)) {
          return;
        }
        return false;
      },
      onSourceModifyDamage(damage, source, target, move) {
        if (move.id === "depthcharge" || move.id === "surf" || move.id === "whirlpool") {
          return this.chainModify(2);
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  divinecall: {
    num: 1332,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Divine Call",
    pp: 10,
    priority: 0,
    flags: {failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failmimic: 1, failinstruct: 1},
    onHit(target, source, effect) {
      const moves = this.dex.moves.all().filter(move => (
        (![2, 4].includes(this.gen) || !source.moves.includes(move.id)) &&
        (!move.isNonstandard || move.isNonstandard === "Unobtainable") &&
        move.flags["legendary"]
      ));
      let randomMove = "";
      if (moves.length) {
        moves.sort((a, b) => a.num - b.num);
        randomMove = this.sample(moves).id;
      }
      if (!randomMove) return false;
      source.side.lastSelectedMove = this.toID(randomMove);
      this.actions.useMove(randomMove, target);
    },
    callsMove: true,
    secondary: null,
    target: "self",
    type: "Cosmic",
    contestType: "Beautiful",
  },
  doomdesire: {
    inherit: true,
	flags: { metronome: 1, futuremove: 1, legendary: 1 }
  },
  doublekick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  doubleshot: {
    num: 1134,
    accuracy: 100,
    basePower: 35,
    category: "Special",
    name: "Double Shot",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: 2,
    secondary: {
      chance: 20,
      self: {
        boosts: {
          accuracy: 1
        }
      }
    },
    target: "normal",
    type: "Fighting",
    maxMove: { basePower: 130 },
    contestType: "Tough"
  },
  dracoblitz: {
    num: 932,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Draco Blitz",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, defrost: 1 },
    recoil: [50, 100],
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Dragon",
    contestType: "Cool"
  },
  dracojet: {
    num: 921,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Draco Jet",
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonascent: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, distance: 1, legendary: 1 }
  },
  dragonbeat: {
    num: 1135,
    accuracy: 90,
    basePower: 120,
    category: "Special",
    name: "Dragon Beat",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 40,
      boosts: {
        atk: 2
      }
    },
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonendurance: {
    num: 1231,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Dragon Endurance",
    pp: 15,
    priority: 0,
    flags: { nonsky: 1 },
    pseudoWeather: "dragonendurance",
    condition: {
      duration: 5,
      onFieldStart(field, source) {
        this.add("-fieldstart", "move: Dragon Endurance", "[of] " + source);
      },
      onBasePowerPriority: 1,
      onBasePower(basePower, attacker, defender, move) {
        if (move.type === "Electric" || move.type === "Fire" || move.type === "Grass" || move.type === "Water") {
          this.debug("dragon endurance weaken");
          return this.chainModify([1352, 4096]);
        }
      },
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 3,
      onFieldEnd() {
        this.add("-fieldend", "move: Dragon Endurance");
      }
    },
    secondary: null,
    target: "all",
    type: "Dragon",
    zMove: { boost: { spd: 1 } },
    contestType: "Cute"
  },
  dragonenergy: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  dragonforce: {
    num: 1315,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dragon Force",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "dragonforce",
    secondary: null,
    target: "all",
    type: "Dragon",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  dragonhide: {
    num: 1056,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dragon Hide",
    pp: 15,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      def: 2,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Dragon",
    zMove: { boost: { atk: 1 } },
    contestType: "Cool"
  },
  dragonify: {
    num: 922,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Dragonify",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1 },
    onHit(target) {
      if (target.getTypes().join() === "Dragon" || !target.setType("Dragon")) {
        this.add("-fail", target);
        return null;
      }
      this.add("-start", target, "typechange", "Dragon");
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    zMove: { boost: { spa: 1 } },
    contestType: "Cute"
  },
  dragonicbloom: {
    num: 1058,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Dragonic Bloom",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Grass";
      const grassTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === grassTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Grass")){
          move.type = "Grass";
        }
      } else if(grassTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Grass"
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonicflare: {
    num: 1059,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    name: "Dragonic Flare",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Fire";
      const fireTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === fireTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Fire")){
          move.type = "Fire";
        }
      } else if(fireTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Fire"
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonicglow: {
    num: 1060,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Dragonic Glow",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Fairy";
      const fairyTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === fairyTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Fairy")){
          move.type = "Fairy";
        }
      } else if(fairyTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Fairy"
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonicstrike: {
    num: 1061,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    name: "Dragonic Strike",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Electric";
      const electricTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === electricTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Electric")){
          move.type = "Electric";
        }
      } else if(electricTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Electric"
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonicwave: {
    num: 1062,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    name: "Dragonic Wave",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Water";
      const waterTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === waterTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Water")){
          move.type = "Water";
        }
      } else if(waterTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Water"
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  dragonimpact: {
    num: 1057,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Dragon Impact",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    self: {
      boosts: {
        atk: -1,
        def: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  dragonpledge: {
    num: 1233,
    accuracy: 100,
	basePower: 80,
    category: "Special",
    name: "Dragon Pledge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  drainlife: {
    num: 974,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Drain Life",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, heal: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Clever"
  },
  drajectile: {
    num: 1291,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Drajectile",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Cool"
  },
  drakonvoice: {
    num: 923,
    accuracy: 85,
    basePower: 105,
    category: "Special",
    name: "Drakon Voice",
    pp: 10,
    priority: 0,
    flags: { sound: 1, bypasssub: 1, protect: 1, mirror: 1 },
	secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  drakonvoicesound: {
    num: 1096,
    accuracy: 85,
    basePower: 105,
    category: "Special",
    name: "Drakon Voice Sound",
    pp: 10,
    priority: 0,
    flags: { sound: 1, bypasssub: 1, protect: 1, mirror: 1 },
    onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Sound"
      }
    },
	secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  dryice: {
    num: 1063,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Dry Ice",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.trySetStatus("brn", source);
        } else if(result === 1) {
          target.trySetStatus("frz", source);
        }
      }
    },
    target: "normal",
    type: "Ice",
    contestType: "Beautiful"
  },
  dryneedles: {
    num: 933,
    accuracy: 95,
    basePower: 18,
    category: "Physical",
    name: "Dry Needles",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  dustdevil: {
    num: 961,
    accuracy: 80,
    basePower: 90,
    category: "Special",
    name: "Dust Devil",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, nonsky: 1, powder: 1 },
    onEffectiveness(typeMod, target, type, move) {
      if (move.type !== "Ground")
        return;
      if (!target)
        return;
      if (!target.runImmunity("Ground")) {
        if (target.hasType("Flying"))
          return 0;
      }
    },
    ignoreImmunity: { "Ground": true },
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: { basePower: 180 },
    contestType: "Beautiful"
  },
  duststorm: {
    num: 1307,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dust Storm",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "duststorm",
    secondary: null,
    target: "all",
    type: "Ground",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  dustydash: {
    num: 1064,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Dusty Dash",
    pp: 15,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1, powder: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Ground",
    contestType: "Cool"
  },
  dynamaxcannon: {
    inherit: true,
	flags: { protect: 1, failencore: 1, nosleeptalk: 1, failcopycat: 1, failmimic: 1, failinstruct: 1, noparentalbond: 1, legendary: 1 }
  },
  earthmover: {
    num: 1216,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Earthmover",
    pp: 15,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Ground")
        return 1;
    },
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  echoedvoicesound: {
    num: 999,
    accuracy: 100,
    basePower: 40,
    basePowerCallback(pokemon, target, move) {
      let bp = move.basePower;
      if (this.field.pseudoWeather.echoedvoice) {
        bp = move.basePower * this.field.pseudoWeather.echoedvoice.multiplier;
      }
      this.debug("BP: " + move.basePower);
      return bp;
    },
    category: "Special",
    name: "Echoed Voice Sound",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    onTry() {
      this.field.addPseudoWeather("echoedvoice");
    },
    condition: {
      duration: 2,
      onFieldStart() {
        this.effectState.multiplier = 1;
      },
      onFieldRestart() {
        if (this.effectState.duration !== 2) {
          this.effectState.duration = 2;
          if (this.effectState.multiplier < 5) {
            this.effectState.multiplier++;
          }
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Beautiful"
  },
  echoingblow: {
    num: 1120,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Echoing Blow",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1, sound: 1 },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  eevoboost: {
    num: 1043,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Eevoboost",
    pp: 5,
    priority: -1,
    flags: { snatch: 1 },
    boosts: {
      atk: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  eldritchinvocation: {
    num: 1322,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Eldritch Invocation",
    pp: 5,
    priority: 0,
    flags: { recharge: 1, protect: 1, mirror: 1 },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Eldritch",
    contestType: "Cool"
  },
  electrobash: {
    num: 1295,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Amp Claw",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    contestType: "Cool"
  },
  electroburst: {
    num: 1165,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Electroburst",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 40,
      boosts: {
        accuracy: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Electric",
    contestType: "Cool"
  },
  electrodrift: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, legendary: 1 }
  },
  electroswing: {
    num: 1237,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Electro Swing",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    status: "par",
    ignoreImmunity: false,
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { spd: 1 } },
    contestType: "Cool"
  },
  emperorsedge: {
    num: 1253,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Emperor's Edge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Tough"
  },
  engorge: {
    num: 1284,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Engorge",
    pp: 35,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Tough"
  },
  engulf: {
    num: 962,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Engulf",
    pp: 40,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onAfterHit(target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Engulf", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Engulf", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    onAfterSubDamage(damage, target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Engulf", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Engulf", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Cool"
  },
  eternabeam: {
    inherit: true,
	flags: { recharge: 1, protect: 1, mirror: 1, legendary: 1 }
  },
  eternalhex: {
    num: 1305,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Eternal Hex",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        atk: -1,
		def: -1,
		spa: -1,
		spd: -1,
		spe: -1
      }
    },
    target: "normal",
    type: "Eldritch",
    contestType: "Tough"
  },
  exsanguinate: {
    num: 1289,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Exsanguinate",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, heal: 1, bite: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Clever"
  },
  expunge: {
    num: 976,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Expunge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "fallout":
          move.accuracy = true;
          break;
      }
    },
	onEffectiveness(typeMod, target, type) {
      if (type === "Nuclear")
        return 1;
    },
    secondary: null,
    target: "normal",
    type: "Nuclear",
    contestType: "Cool"
  },
  extremespeed: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  faengrush: {
    num: 934,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Faeng Rush",
    pp: 15,
    priority: 0,
    flags: { bite: 1, contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fairy",
    contestType: "Cool"
  },
  fairypledge: {
    num: 1220,
    accuracy: 100,
	basePower: 80,
    category: "Special",
    name: "Fairy Pledge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Beautiful"
  },
  fairyrush: {
    num: 1302,
    accuracy: 75,
    basePower: 100,
    category: "Physical",
    name: "Fairy Rush",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  fakeout: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  fallout: {
    num: 975,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fallout",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "Fallout",
    secondary: null,
    target: "all",
    type: "Nuclear",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  fangbarrage: {
    num: 1207,
    accuracy: 30,
    basePower: 0,
    category: "Physical",
    name: "Fang Barrage",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, bite: 1 },
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: { basePower: 180 },
    maxMove: { basePower: 130 },
    contestType: "Tough"
  },
  feint: {
    inherit: true,
	flags: { mirror: 1, noassist: 1, failcopycat: 1, speed: 1 }
  },
  feralclutch: {
    num: 1223,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Feral Clutch",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  fever: {
    num: 1065,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Fever",
    pp: 25,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Cool"
  },
  feyhammer: {
    num: 1066,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Fey Hammer",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  fiesta: {
    num: 1000,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fiesta",
    pp: 20,
    priority: 0,
    flags: { reflectable: 1, nonsky: 1, mustpressure: 1 },
    sideCondition: "fiesta",
    condition: {
        onSideStart(side) {
            this.add("-sidestart", side, "Fiesta");
            this.effectState.layers = 1;
        },
        onSideRestart(side) {
            if (this.effectState.layers >= 3) return false;
            this.add("-sidestart", side, "Fiesta");
            this.effectState.layers++;
        },
        onEntryHazard(pokemon, source) {
            if (pokemon.hp < pokemon.maxhp) {
                this.heal(pokemon.maxhp / 2);
                this.add('-heal', pokemon, pokemon.getHealth, '[from] move: Fiesta');
                this.effectState.layers--;
				 // Remove the Fiesta condition after healing
                if (this.effectState.layers <= 0) {
                    pokemon.side.removeSideCondition("fiesta");
				}
            }
        },
    },
    secondary: null,
    target: "allySide",
    type: "Normal",
    zMove: { boost: { def: 1 } },
    contestType: "Clever",
  },
  fierywrath: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  firecracker: {
    num: 1186,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Firecracker",
    pp: 10,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, speed: 1 },
    self: {
      volatileStatus: "followme"
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Cool"
  },
  firekunai: {
    num: 1243,
    accuracy: 95,
    basePower: 40,
    category: "Physical",
    name: "Fire Kunai",
    pp: 10,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, defrost: 1, speed: 1 },
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Fire"
  },
  fireworks: {
    num: 1067,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Fireworks",
    pp: 20,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Flying")
        return 1;
    },
    flags: { protect: 1, mirror: 1, bullet: 1 },
    ignoreImmunity: { "Flying": true },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  firstimpression: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  fissionburst: {
    num: 977,
    accuracy: 100,
    basePower: 150,
    category: "special",
    name: "Fission Burst",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Nuclear",
    contestType: "Beautiful"
  },
  flameimpact: {
    num: 978,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Flame Impact",
    pp: 15,
    priority: 2,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  flamejet: {
    num: 953,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Flame Jet",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  flamingfists: {
    num: 1254,
    accuracy: 100,
    basePower: 95,
    category: "Physical",
    name: "Flaming Fists",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 40,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    contestType: "Tough"
  },
  flash: {
    inherit: true,
	flags: { protect: 1, reflectable: 1, mirror: 1, hm: 1 },
	onModifyMove(move, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather()))
        move.boosts = { accuracy: -2 };
    }
  },
  flashinglightning: {        
	num: 1331,
	accuracy: 100,
	basePower: 90,
	category: "Physical",
	name: "Flashing Lightning",
	pp: 15,
	priority: 0,
	flags: { contact: 1, protect: 1, mirror: 1 },
	secondary: null,
	critRatio: 2,
	target: "normal",
	type: "Electric",
	contestType: "Cool"
  },
  flashlight: {
    num: 1104,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Flash Light",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, hm: 1 },
    boosts: {
      accuracy: -1
    },
	onModifyMove(move, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather()))
        move.boosts = { accuracy: -2 };
    },
    secondary: null,
    target: "normal",
    type: "Light",
    zMove: { boost: { evasion: 1 } },
    contestType: "Beautiful"
  },
  flashflood: {
    num: 935,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Flash Flood",
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  flashbang: {
    num: 997,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Flashbang",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Light",
    contestType: "Cool"
  },
  flashcannonlight: {
    num: 1110,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Flash Cannon Light",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onModifyType(move, pokemon, target) {
      const steelTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Light";
      const lightTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Steel";
      if (steelTypeEffectiveness === lightTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Light")){
          move.type = "Light";
        }
      } else if(lightTypeEffectiveness>steelTypeEffectiveness){
        move.type = "Light"
      }
    },
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  flashpulse: {
    num: 996,
    accuracy: 90,
    basePower: 85,
    category: "Special",
    name: "Flash Pulse",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, pulse: 1 },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Light",
    contestType: "Clever"
  },
  flavortest: {
    num: 1242,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Flavor Test",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
	onEffectiveness(typeMod, target, type, move) {
      return typeMod + this.dex.getEffectiveness("Ice", type);
    },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Fairy"
  },
  fleurcannon: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1, legendary: 1 }
  },
  flop: {
    num: 1124,
    accuracy: 80,
    basePower: 80,
    category: "Physical",
    isNonstandard: "Past",
    name: "Flop",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
	critRatio: 2,
    recoil: [1, 4],
    secondary: null,
    target: "normal",
    type: "Slime",
    contestType: "Cool"
  },
  flowerpower: {
    num: 1279,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Flower Power",
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onEffectiveness(typeMod, target, type, move) {
      return typeMod + this.dex.getEffectiveness("Fairy", type);
    },
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: { basePower: 170 },
    contestType: "Tough"
  },
  flubberfang: {
    num: 1327,
    accuracy: 95,
    basePower: 65,
    category: "Physical",
    name: "Flubber Fang",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Slime",
    contestType: "Tough"
  },
  fly: {
    inherit: true,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1,
	  hm: 1
    },
	condition: {
      duration: 2,
      onInvulnerability(target, source, move) {
        if (["gust", "gustwind", "tornado", "twister", "skyuppercut", "thunder", "hurricane", "hurricanewind", "smackdown", "thousandarrows"].includes(move.id)) {
          return;
        }
        return false;
      },
      onSourceModifyDamage(damage, source, target, move) {
        if (move.id === "gust" || move.id === "gustwind" || move.id === "twister") {
          return this.chainModify(2);
        }
      }
    }
  },
  focusedram: {
    num: 936,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    isNonstandard: "Past",
    name: "Focused Ram",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [1, 4],
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Tough"
  },
  foggystrike: {
    num: 937,
    accuracy: true,
    basePower: 55,
    category: "Physical",
    name: "Foggy Strike",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  foghorn: {
    num: 1306,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Foghorn",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "fog",
    secondary: null,
    target: "all",
    type: "Normal",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  freezeshock: {
    inherit: true,
	flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1, legendary: 1 }
  },
  freezingglare: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  frostbite: {
    num: 1136,
    accuracy: 95,
    basePower: 80,
    category: "Special",
    name: "Frostbite",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 40,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Ice",
    contestType: "Tough"
  },
  frostclaw: {
    num: 1255,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Frost Claw",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    contestType: "Cool"
  },
  frostslash: {
    num: 905,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    isNonstandard: "Past",
    name: "Frost Slash",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, contact: 1 },
    critRatio: 2,
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    contestType: "Cool"
  },
  fusionbolt: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  fusionflare: {
    inherit: true,
	flags: { protect: 1, mirror: 1, defrost: 1, metronome: 1, legendary: 1 }
  },
  gaiasfury: {
    num: 1256,
    accuracy: 100,
    basePower: 110,
    category: "Physical",
    name: "Gaia's Fury",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, nonsky: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacent",
    type: "Ground",
    contestType: "Tough"
  },
  galerush: {
    num: 1068,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Gale Rush",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "Normal",
    type: "Flying",
    contestType: "Cool"
  },
  gammaray: {
    num: 979,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Gamma Ray",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Nuclear",
    contestType: "Tough"
  },
  gemstoneglimmer: {
    num: 980,
    accuracy: 95,
    basePower: 75,
    category: "Special",
    name: "Gemstone Glimmer",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 25,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Rock",
    contestType: "Tough"
  },
  gemstoneglimmercrystal: {
    num: 1115,
    accuracy: 95,
    basePower: 75,
    category: "Special",
    name: "Gemstone Glimmer Crystal",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 25,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Crystal",
    contestType: "Tough"
  },
  geodecannon: {
    num: 1070,
    accuracy: 90,
    basePower: 90,
    category: "Special",
    name: "Geode Cannon",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Tough"
  },
  geodecannoncrystal: {
    num: 1116,
    accuracy: 90,
    basePower: 90,
    category: "Special",
    name: "Geode Cannon Crystal",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Crystal",
    contestType: "Tough"
  },
  geoimpact: {
    num: 1137,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Geo Impact",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 60,
      boosts: {
        spa: 2
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  geomancy: {
    inherit: true,
	flags: { charge: 1, nonsky: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1, legendary: 1 },
    onModifyMove(move, pokemon) {
      const weather = pokemon.effectiveWeather();
      if (["darkness", "eclipse"].includes(weather)) {
        move.boosts = { spa: 1, spd: 1, spe: 1 };
      }
      if (weather === "fairydust") {
        move.boosts = { spa: 3, spd: 3, spe: 3 };
      }
    },
  },
  geosphere: {
    num: 1069,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Geo-Sphere",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, nonsky: 1 },
    onEffectiveness(typeMod, target, type, move) {
      if (move.type !== "Ground")
        return;
      if (!target)
        return;
      if (!target.runImmunity("Ground")) {
        if (target.hasType("Flying"))
          return 0;
      }
    },
    ignoreImmunity: { "Ground": true },
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: { basePower: 180 },
    contestType: "Beautiful"
  },
  geosplinter: {
    num: 1210,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Geosplinter",
    pp: 5,
    priority: 3,
    flags: { snatch: 1 },
    volatileStatus: "powertrick",
    secondary: null,
    target: "self",
    type: "Rock",
    zMove: { boost: { atk: 1 } },
    contestType: "Clever"
  },
  ghastlywail: {
    num: 1071,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Ghastly wail",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Ghost",
    contestType: "Beautiful"
  },
  giraternalgrip: {
    num: 1317,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Giraternal Grip",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Eldritch"
  },
  glaciallance: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  glaciate: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  glaciercrash: {
    num: 1072,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Glacier Crash",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Ice",
    contestType: "Tough"
  },
  glide: {
    num: 1138,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Glide",
    pp: 30,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      self: {
        boosts: {
          accuracy: 1
        }
      }
    },
    target: "normal",
    type: "Flying",
    contestType: "Tough"
  },
  glorp: {
    num: 1326,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Glorp",
    pp: 25,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Slime",
    contestType: "Tough"
  },
  goldenfist: {
    num: 981,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Golden Fist",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Clever"
  },
  gooeystrike: {
    num: 1336,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Gooey Strike",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Slime",
    contestType: "Tough"
  },
  goopelt: {
    num: 1324,
    accuracy: 100,
    basePower: 25,
    category: "Special",
    name: "Goo Pelt",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Slime",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Beautiful"
  },
  gravitycosmic: {
    num: 1100,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Gravity Cosmic",
    pp: 5,
    priority: 0,
    flags: { nonsky: 1 },
    pseudoWeather: "gravity",
    secondary: null,
    target: "all",
    type: "Cosmic",
    zMove: { boost: { spa: 1 } },
    contestType: "Clever"
  },
  gravitywave: {
    num: 1139,
    accuracy: 100,
    basePower: 0,
    basePowerCallback(pokemon, target) {
      const targetWeight = target.getWeight();
      let bp;
      if (targetWeight >= 2e3) {
        bp = 120;
      } else if (targetWeight >= 1e3) {
        bp = 100;
      } else if (targetWeight >= 500) {
        bp = 80;
      } else if (targetWeight >= 250) {
        bp = 60;
      } else if (targetWeight >= 100) {
        bp = 40;
      } else {
        bp = 20;
      }
      this.debug("BP: " + bp);
      return bp;
    },
    category: "Special",
    name: "Gravity Wave",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onTryHit(target, source, move) {
      if (target.volatiles["dynamax"]) {
        this.add("-fail", source, "move: Gravity Wave", "[from] Dynamax");
        this.attrLastMove("[still]");
        return null;
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Cute"
  },
  gravitywavecosmic: {
    num: 1140,
    accuracy: 100,
    basePower: 0,
    basePowerCallback(pokemon, target) {
      const targetWeight = target.getWeight();
      let bp;
      if (targetWeight >= 2e3) {
        bp = 120;
      } else if (targetWeight >= 1e3) {
        bp = 100;
      } else if (targetWeight >= 500) {
        bp = 80;
      } else if (targetWeight >= 250) {
        bp = 60;
      } else if (targetWeight >= 100) {
        bp = 40;
      } else {
        bp = 20;
      }
      this.debug("BP: " + bp);
      return bp;
    },
    category: "Special",
    name: "Gravity Wave Cosmic",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onTryHit(target, source, move) {
      if (target.volatiles["dynamax"]) {
        this.add("-fail", source, "move: Gravity Wave Cosmic", "[from] Dynamax");
        this.attrLastMove("[still]");
        return null;
      }
    },
    secondary: null,
    target: "normal",
    type: "Cosmic",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Cute"
  },
  grimstinger: {
    num: 1166,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Grim Stinger",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onBasePower(basePower, pokemon, target) {
      if (target.status === "slp") {
        return this.chainModify(2);
      }
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Beautiful"
  },
  groomguard: {
    num: 938,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Groom Guard",
    pp: 15,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      spd: 3
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cute"
  },
  growth: {
    num: 74,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Growth",
    pp: 20,
    priority: 0,
    flags: { snatch: 1 },
    onModifyMove(move, pokemon) {
      if (["sunnyday", "desolateland", "fallout"].includes(pokemon.effectiveWeather()))
        move.boosts = { atk: 2, spa: 2 };
    },
    boosts: {
      atk: 1,
      spa: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { boost: { spa: 1 } },
    contestType: "Beautiful"
  },
  guardianleaf: {
    num: 1141,
    accuracy: 95,
    basePower: 75,
    category: "Physical",
    name: "Guardian Leaf",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      self: {
        boosts: {
          def: 1
        }
      }
    },
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  gustwind: {
    num: 1088,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Gust Wind",
    pp: 35,
    priority: 0,
    flags: { protect: 1, mirror: 1, distance: 1, wind: 1 },
    secondary: null,
    target: "any",
    type: "Wind",
    contestType: "Clever"
  },
  h4k41: {
    num: 1257,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "H4K41",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Questionmark",
    contestType: "Cool"
  },
  halflife: {
    num: 982,
    accuracy: 90,
    basePower: 0,
    damageCallback(pokemon, target) {
      return this.clampIntRange(target.getUndynamaxedHP() / 2, 1);
    },
    category: "Special",
    name: "Half-Life",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Nuclear",
    contestType: "Tough"
  },
  haunt: {
    num: 1313,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Haunt",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "cursedwinds",
    secondary: null,
    target: "all",
    type: "Ghost",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  hawthorns: {
    num: 1221,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hawthorns",
    pp: 15,
    priority: 0,
    flags: { snatch: 1, mirror: 1 },
    sideCondition: "hawthorns",
    condition: {
      onSideStart(side) {
        this.add('-sidestart', side, 'move: Hawthorns');
      },
      onResidualOrder: 5,
      onResidual(side) {
        this.heal(pokemon.baseMaxhp / 16);
      }
    },
    secondary: null,
    target: "allySide",
    type: "Grass",
    zMove: { boost: { def: 1 } },
    contestType: "Clever"
  },
  healbellsound: {
    num: 1003,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Unobtainable",
    name: "Heal Bell Sound",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, sound: 1, distance: 1, bypasssub: 1 },
    onHit(target, source) {
      this.add("-activate", source, "move: Heal Bell");
      let success = false;
      const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
      for (const ally of allies) {
        if (ally !== source && ally.hasAbility("soundproof"))
          continue;
        if (ally.cureStatus())
          success = true;
      }
      return success;
    },
    target: "allyTeam",
    type: "Sound",
    zMove: { effect: "heal" },
    contestType: "Beautiful"
  },
  healorder: {
    num: 456,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Heal Order",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, heal: 1, metronome: 1 },
    onHit(pokemon) {
      let factor = 0.5;
      if (this.field.isWeather(["Pheromones"])) {
        factor = 0.667;
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  heartswap: {
    inherit: true,
	flags: { protect: 1, mirror: 1, bypasssub: 1, allyanim: 1, legendary: 1 }
  },
  heavypunch: {
    num: 1202,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Heavy Punch",
    pp: 35,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    contestType: "Cute"
  },
  highjumpkick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1 }
  },
  hiss: {
    num: 1222,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Hiss",
    pp: 30,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    boosts: {
      spd: -2
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { def: 1 } },
    contestType: "Cute"
  },
  hitandrun: {
    num: 1187,
    accuracy: 90,
    basePower: 65,
    category: "Physical",
    name: "Hit and Run",
    pp: 10,
    priority: -1,
    flags: { contact: 1, protect: 1, mirror: 1 },
	onAfterHit(target, source, move) {
      if (source.item || source.volatiles["gem"]) {
        return;
      }
      const yourItem = target.takeItem(source);
      if (!yourItem) {
        return;
      }
      if (!this.singleEvent("TakeItem", yourItem, target.itemState, source, target, move, yourItem) || !source.setItem(yourItem)) {
        target.item = yourItem.id;
        return;
      }
      this.add("-item", source, yourItem, "[from] move: Hit and Run", "[of] " + target);
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cute"
  },
  hivemind: {
    num: 1167,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Hivemind",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Beautiful"
  },
  honeclaws: {
    inherit: true,
	onModifyMove(move, pokemon) {
      if (["darkness"].includes(pokemon.effectiveWeather()))
        move.boosts = { atk: 2, accuracy: 2 };
    }
  },
  hotchilipepper: {
    num: 1244,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Hot Chili Pepper",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  howlsound: {
    num: 1004,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Howl Sound",
    pp: 40,
    priority: 0,
    flags: { snatch: 1, sound: 1 },
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "allies",
    type: "Sound",
    zMove: { boost: { atk: 1 } },
    contestType: "Cool"
  },
  hurricane: {
    num: 542,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Hurricane",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, distance: 1, wind: 1 },
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
		case "acidrain":
		case "thunderstorm":
          move.accuracy = true;
          break;
        case "sunnyday":
        case "desolateland":
          move.accuracy = 50;
          break;
      }
    },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Flying",
    contestType: "Tough"
  },
  hurricanewind: {
    num: 1089,
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Hurricane Wind",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, distance: 1, wind: 1 },
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
		case "acidrain":
          move.accuracy = true;
          break;
        case "sunnyday":
        case "desolateland":
          move.accuracy = 50;
          break;
      }
    },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "any",
    type: "Wind",
    contestType: "Tough"
  },
  hydrosteam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, defrost: 1, metronome: 1, legendary: 1 }
  },
  hyperbeam: {
    inherit: true,
	flags: { recharge: 1, protect: 1, mirror: 1, beam: 1 }
  },
  hyperspacefury: {
    inherit: true,
	flags: { mirror: 1, bypasssub: 1 }
  },
  hyperspacehole: {
    inherit: true,
	flags: { mirror: 1, bypasssub: 1, legendary: 1 }
  },
  hyperspacehole: {
    inherit: true,
	flags: { mirror: 1, bypasssub: 1, legendary: 1 }
  },
  hypervoicesound: {
    num: 1005,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Hyper Voice Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Sound",
    contestType: "Cool"
  },
  hypnopulse: {
    num: 1142,
    accuracy: 90,
    basePower: 55,
    category: "Special",
    name: "Hypnopulse",
    pp: 25,
    priority: 0,
    flags: { protect: 1, pulse: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "slp"
    },
    target: "any",
    type: "Psychic",
    contestType: "Beautiful"
  },
  hystericalslap: {
    num: 6969,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Hysterical Slap",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
	multihit: [1, 3],
     secondary: {
      chance: 5,
      volatileStatus: "confusion"
        },
    target: "normal",
    type: "Fighting",
  },
  icebeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  iceburn: {
    inherit: true,
	flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1, legendary: 1 }
  },
  iceshard: {
    inherit: true,
	flags: { protect: 1, mirror: 1, speed: 1 }
  },
  icewall: {
    num: 1258,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Ice Wall",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    self: {
      sideCondition: "reflect"
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    contestType: "Clever"
  },
  iceweave: {
    num: 1274,
    accuracy: 95,
    basePower: 0,
    category: "Status",
    name: "Ice Weave",
    pp: 40,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    boosts: {
      spe: -2
    },
	secondary: null,
    target: "allAdjacentFoes",
    type: "Ice",
    contestType: "Cute"
  },
  infernalblade: {
    num: 983,
    accuracy: 95,
    basePower: 90,
    category: "Special",
    name: "Infernal Blade",
    pp: 10,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Fairy")
        return 1;
    },
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  instantcrush: {
    num: 984,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Instant Crush",
    pp: 10,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  ironsphere: {
    num: 1259,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Iron Sphere",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      onHit(target, source, move) {
        if (source.isActive)
          target.addVolatile("trapped", source, move, "trapper");
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Tough"
  },
  ivycudgel: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  jellybounce: {
    num: 1325,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Jelly Bounce",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Slime",
    contestType: "Beautiful"
  },
  jetpunch: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, speed: 1 }
  },
  jetstrike: {
    num: 906,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Jet Strike",
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Beautiful"
  },
  jewelflash: {
    num: 1073,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Jewel Flash",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Rock",
    contestType: "Tough"
  },
  jewelflashcrystal: {
    num: 1117,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Jewel Flash Crystal",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Crystal",
    contestType: "Tough"
  },
  judgment: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  jumpkick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1 }
  },
  junglehealing: {
    inherit: true,
	flags: { heal: 1, bypasssub: 1, allyanim: 1, legendary: 1 }
  },
  kindleseed: {
    num: 1199,
    accuracy: 90,
    basePower: 60,
    category: "Special",
    name: "Kindleseed",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    volatileStatus: "leechseed",
    onTryImmunity(target) {
      return !target.hasType("Fire");
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  knightsvow: {
    num: 1195,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Unobtainable",
    name: "Knight's Vow",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, distance: 1, bypasssub: 1 },
	self: {
      volatileStatus: "followme",
	  sideCondition: "luckychant"
    },
    onHit(target, source) {
      this.add("-activate", source, "move: Knight's Bow");
      let success = false;
      const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
      for (const ally of allies) {
        if (ally !== source)
          continue;
        if (ally.cureStatus())
          success = true;
      }
      return success;
    },
    target: "allyTeam",
    type: "Fairy",
    zMove: { effect: "heal" },
    contestType: "Beautiful"
  },
  knucklefins: {
    num: 1211,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Knucklefins",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 100,
      volatileStatus: "torment"
    },
    target: "normal",
    type: "Water",
    contestType: "Tough"
  },
  landsliderush: {
    num: 954,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Landslide Rush",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Ground",
    contestType: "Cute"
  },
  landswrath: {
    inherit: true,
	flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1, legendary: 1 }
  },
  latentpower: {
    num: 1143,
    accuracy: 100,
    basePower: 130,
    category: "Special",
    name: "Latent Power",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        evasion: 2
      }
    },
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  leafdarts: {
    num: 1074,
    accuracy: 90,
    basePower: 10,
	basePowerCallback(pokemon, target, move) {
      return 10 * move.hit;
    },
    category: "Physical",
    name: "Leaf Darts",
    pp: 10,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    multihit: [1, 3],
	multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  leafshield: {
    num: 907,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Leaf Shield",
    pp: 10,
    priority: 0,
    flags: { snatch: 1 },
    onModifyMove(move, pokemon) {
      if (["sunnyday", "desolateland"].includes(pokemon.effectiveWeather()))
        move.boosts = { def: 2, spd: 2 };
    },
    boosts: {
      def: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: { boost: { spa: 1 } },
    contestType: "Beautiful"
  },
  leekcutter: {
    num: 1260,
    accuracy: 100,
    basePower: 95,
    category: "Physical",
    name: "Leek Cutter",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Grass",
    contestType: "Tough"
  },
  lightningstrike: {
    num: 1075,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Lightning Strike",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Electric",
    contestType: "Clever"
  },
  lightofruin: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  lightscreenlight: {
    num: 1107,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Light Screen Light",
    pp: 30,
    priority: 0,
    flags: { snatch: 1 },
    sideCondition: "lightscreen",
    secondary: null,
    target: "allySide",
    type: "Light",
    zMove: { boost: { spd: 1 } },
    contestType: "Beautiful"
  },
  lowkick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  lunarblessing: {
    inherit: true,
	flags: { snatch: 1, heal: 1, metronome: 1, legendary: 1 }
  },
  lunarcannon: {
    num: 1189,
    accuracy: 100,
    basePower: 105,
    category: "Special",
    name: "Lunar Cannon",
    pp: 10,
    priority: 0,
    flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1, beam: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["darkness", "eclipse"].includes(attacker.effectiveWeather())) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["sunnyday", "desolateland"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  lunardance: {
    inherit: true,
	flags: { snatch: 1, dance: 1, heal: 1, metronome: 1, legendary: 1 }
  },
  lusterbloom: {
    num: 1296,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Luster Bloom",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 10,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Electric",
    contestType: "Beautiful"
  },
  lusterpurge: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  machpunch: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, speed: 1 }
  },
  magicwall: {
    num: 1230,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Magic Wall",
    pp: 15,
    priority: 0,
    flags: { nonsky: 1 },
    pseudoWeather: "magicwall",
    condition: {
      duration: 5,
      onFieldStart(field, source) {
        this.add("-fieldstart", "move: Magic Wall", "[of] " + source);
      },
      onBasePowerPriority: 1,
      onBasePower(basePower, attacker, defender, move) {
        if (move.type === "Dragon" || move.type === "Fighting" || move.type === "Dark" || move.type === "Bug") {
          this.debug("magic wall weaken");
          return this.chainModify([1352, 4096]);
        }
      },
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 3,
      onFieldEnd() {
        this.add("-fieldend", "move: Magic Wall");
      }
    },
    secondary: null,
    target: "all",
    type: "Fairy",
    zMove: { boost: { spd: 1 } },
    contestType: "Cute"
  },
  magmablade: {
    num: 1277,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Magma Blade",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Cool"
  },
  magmaring: {
    num: 1144,
    accuracy: true,
    basePower: 55,
    category: "Special",
    name: "Magma Ring",
    pp: 20,
    priority: -1,
    flags: { protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  magmastorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  magnetforce: {
    num: 1269,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Magnet Force",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          this.boost({atk: -1}, target, source, null, true);
        } else if(result === 1) {
          this.boost({spa: -1}, target, source, null, true);
        }
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Beautiful"
  },
  magnetize: {
    num: 1316,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magnetize",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "magnetosphere",
    secondary: null,
    target: "all",
    type: "Steel",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  magnetpulse: {
    num: 1261,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Magnet Pulse",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, pulse: 1 },
    secondary: {
      chance: 30,
      onHit(target, source, move) {
        if (source.isActive)
          target.addVolatile("trapped", source, move, "trapper");
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Tough"
  },
  magnumpunch: {
    num: 1270,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Magnum Punch",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 10,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.addVolatile("flinch");
        } else if(result === 1) {
          this.boost({def: -1}, target, source, null, true);
        }
      }
    },
    target: "normal",
    type: "Fighting",
    contestType: "Beautiful"
  },
  malignantchain: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  megakick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  megalofang: {
    num: 1076,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Megalo Fang",
    pp: 15,
    priority: 0,
    flags: { bite: 1, contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Water",
    contestType: "Cool"
  },
  meltdown: {
    num: 1217,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "MEltdown",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Poison",
    contestType: "Beautiful"
  },
  meltdownnuclear: {
    num: 1218,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "Meltdown Nuclear",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Nuclear",
    contestType: "Beautiful"
  },
  mentalanguish: {
    num: 1304,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Mental Anguish",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Eldritch",
    contestType: "Clever"
  },
  mesmersmoke: {
    num: 1077,
    accuracy: 70,
    basePower: 0,
    category: "Status",
    name: "MEsmer Smoke",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    status: "slp",
    secondary: null,
    target: "allAdjacent",
    type: "Poison",
    zMove: { boost: { spe: 1 } },
    contestType: "Clever"
  },
  metalcruncher: {
    num: 985,
    accuracy: 85,
    basePower: 120,
    category: "Physical",
    name: "Metal Cruncher",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 85,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Tough"
  },
  metalwhip: {
    num: 986,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Metal Whip",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Tough"
  },
  meteorbeam: {
    inherit: true,
	flags: { charge: 1, protect: 1, mirror: 1, beam: 1 }
  },
  meteormashcosmic: {
    num: 1102,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Meteor Mash Cosmic",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
	onModifyType(move, pokemon, target) {
      const steelTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Cosmic";
      const cosmicTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Steel";
      if (steelTypeEffectiveness === cosmicTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Cosmic")){
          move.type = "Cosmic";
        }
      } else if(cosmicTypeEffectiveness>steelTypeEffectiveness){
        move.type = "Cosmic"
      }
    },
    secondary: {
      chance: 20,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    contestType: "Cool"
  },
  mightycleave: {
    inherit: true,
	flags: { contact: 1, mirror: 1, metronome: 1, slicing: 1, legendary: 1 }
  },
  mindblast: {
    num: 1078,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Mind Blast",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Psychic",
    contestType: "Clever"
  },
  mindblown: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  mindcharge: {
    num: 6969,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mind Charge",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, dance: 1, metronome: 1, cantusetwice: 1 },
    boosts: {
      spa: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  minimize: {
    num: 107,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Minimize",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    volatileStatus: "minimize",
    condition: {
      noCopy: true,
      onRestart: () => null,
      onSourceModifyDamage(damage, source, target, move) {
        const boostedMoves = [
          "fairyrush",
		  "stomp",
          "steamroller",
          "bodyslam",
          "flyingpress",
          "dragonrush",
          "heatcrash",
          "heavyslam",
          "maliciousmoonsault"
        ];
        if (boostedMoves.includes(move.id)) {
          return this.chainModify(2);
        }
      },
      onAccuracy(accuracy, target, source, move) {
        const boostedMoves = [
          "fairyrush",
		  "stomp",
          "steamroller",
          "bodyslam",
          "flyingpress",
          "dragonrush",
          "heatcrash",
          "heavyslam",
          "maliciousmoonsault"
        ];
        if (boostedMoves.includes(move.id)) {
          return true;
        }
        return accuracy;
      }
    },
    boosts: {
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cute"
  },
  miraclewill: {
    num: 964,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Miracle Will",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, allyanim: 1 },
    onTryHit(target, source, move) {
      if (source.isAlly(target)) {
        move.basePower = 0;
        move.infiltrates = true;
      }
    },
    onHit(target, source) {
      if (source.isAlly(target)) {
        if (!this.heal(Math.floor(target.baseMaxhp * 0.5))) {
          this.add("-immune", target);
          return this.NOT_FAIL;
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Cute"
  },
  miresurge: {
    num: 1203,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Mire Surge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  miresurgeslime: {
    num: 1205,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Mire Surge Slime",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Slime",
    contestType: "Cool"
  },
  mistball: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, legendary: 1 }
  },
  moongeistbeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1, legendary: 1 }
  },
  moonimpact: {
    num: 1298,
    accuracy: 80,
    basePower: 150,
    category: "Physical",
    name: "Moon Impact",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [1, 2],
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  moonlight: {
    num: 236,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Moonlight",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1 },
    onHit(pokemon) {
      let factor = 0.5;
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
		case "darkness":
        case "desolateland":
		case "pollenstorm":
		case "fairydust":
          factor = 0.667;
          break;
        case "raindance":
        case "primordialsea":
        case "sandstorm":
        case "hail":
        case "snow":
		case "acidrain":
		case "thunderstorm":
		case "fog":
		case "duststorm":
		case "cursedwinds":
          factor = 0.25;
          break;
		case "fallout":
		case "shadowyaura":
		case "smog":
          factor = 0.125;
          break;
		case "eclipse":
          factor = 0;
          break;
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    },
    secondary: null,
    target: "self",
    type: "Fairy",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  moonrazer: {
    num: 1168,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Moonrazer",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "slp"
    },
    target: "normal",
    type: "Fairy"
  },
  morningsun: {
    num: 234,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Morning Sun",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1 },
    onHit(pokemon) {
      let factor = 0.5;
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
		case "pollenstorm":
		case "fairydust":
          factor = 0.667;
          break;
        case "raindance":
        case "primordialsea":
        case "sandstorm":
        case "hail":
        case "snow":
		case "acidrain":
		case "thunderstorm":
		case "fog":
		case "duststorm":
		case "cursedwinds":
          factor = 0.25;
          break;
		case "fallout":
		case "shadowyaura":
		case "smog":
          factor = 0.125;
          break;
		case "darkness":
          factor = 0;
          break;
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  mortalspin: {
    num: 866,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Mortal Spin",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onAfterHit(target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Mortal Spin", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Mortal Spin", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    onAfterSubDamage(damage, target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Mortal Spin", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Mortal Spin", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    secondary: {
      chance: 100,
      status: "psn"
    },
    target: "allAdjacentFoes",
    type: "Poison"
  },
  movemountains: {
    num: 1262,
    accuracy: 90,
    basePower: 105,
    category: "Physical",
    name: "Move Mountains",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, legendary: 1 },
    self: {
      onHit(source) {
        for (const side of source.side.foeSidesWithConditions()) {
          side.addSideCondition("stealthrock");
        }
      }
    },
    secondary: null,
    // allows sheer force to trigger
    target: "normal",
    type: "Rock"
  },
  mowdown: {
    num: 1290,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Mow Down",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
	onEffectiveness(typeMod, target, type) {
      if (type === "Grass")
        return 1;
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Dark",
    contestType: "Tough"
  },
  mudslide: {
    num: 908,
    accuracy: 95,
    basePower: 75,
    category: "Special",
    name: "Mudslide",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        evasion: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Ground",
    contestType: "Cute"
  },
  mysticalpower: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  mysticchant: {
    num: 1299,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Mystic Chant",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Beautiful"
  },
  nailflick: {
    num: 1044,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Nail Flick",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
	critRatio: 2,
    target: "normal",
    type: "Normal",
    contestType: "Cute"
  },
  nanorepair: {
    num: 925,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nanorepair",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1, legendary: 1 },
    heal: [1, 2],
	boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  naturesmadness: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  necroticpunch: {
    num: 1318,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Necrotic Punch",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Eldritch",
    contestType: "Cool"
  },
  newmoon: {
    num: 969,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "New Moon",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "Darkness",
    secondary: null,
    target: "all",
    type: "Dark",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  niflheim: {
    num: 6969,
    accuracy: 80,
    basePower: 110,
    category: "Special",
    name: "Niflheim",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
	onModifyMove(move) {
      if (this.field.isWeather(["hail", "snow"]))
        move.accuracy = true;
	},
    secondary: {
      chance: 15,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
  },
  nimbusfist: {
    num: 939,
    accuracy: 100,
    basePower: 35,
    category: "Physical",
    name: "Nimbus Fist",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 100,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Water",
    contestType: "Tough"
  },
  nobleroarsound: {
    num: 1006,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Noble Roar Sound",
    pp: 30,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    boosts: {
      atk: -1,
      spa: -1
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { def: 1 } },
    contestType: "Tough"
  },
  noiseburst: {
    num: 1249,
    accuracy: 90,
    basePower: 150,
    category: "Special",
    name: "Noise Burst",
    pp: 5,
    priority: 0,
    flags: { recharge: 1, protect: 1, mirror: 1, sound: 1 },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  nostrilflare: {
    num: 1045,
    accuracy: 90,
    basePower: 55,
    category: "Special",
    name: "Nostril Flare",
    pp: 20,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Tough"
  },
  nuclearslash: {
    num: 987,
    accuracy: 90,
    basePower: 55,
    category: "Physical",
    name: "Nuclear Slash",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
	critRatio: 2,
    target: "normal",
    type: "Nuclear",
    contestType: "Cute"
  },
  nuclearwaste: {
    num: 988,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Nuclear waste",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    // No Guard-like effect for Poison-type users implemented in Scripts#tryMoveHit
    status: "tox",
    secondary: null,
    target: "normal",
    type: "Nuclear",
    zMove: { boost: { def: 1 } },
    contestType: "Clever"
  },
  oblivionwing: {
    inherit: true,
	flags: { protect: 1, mirror: 1, distance: 1, heal: 1, metronome: 1, legendary: 1 }
  },
  oceanswrath: {
    num: 989,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Ocean's Wrath",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, legendary: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  originpulse: {
    inherit: true,
	flags: { protect: 1, pulse: 1, mirror: 1, beam: 1, legendary: 1 }
  },
  overheadstrike: {
    num: 949,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Overhead Strike",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    basePowerCallback(pokemon, target, move) {
      if (target.status || target.hasAbility("comatose")) {
        this.debug("BP doubled from status condition");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Cute"
  },
  ozonebeam: {
    num: 1128,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Ozone Beam",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, beam: 1 },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Wind",
    contestType: "Tough"
  },
  parasiticfungi: {
    num: 1188,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Parasitic Fungi",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onEffectiveness(typeMod, target, type) {
      if (type === "Normal" || type === "Bug")
        return 1;
    },
	volatileStatus: "parasiticfungi",
    condition: {
      duration: 5,
	  noCopy: true,
      onStart(pokemon) {
        this.add("-start", pokemon, "Parasitic Fungi");
      },
      onResidualOrder: 13,
      onResidual(pokemon) {
        const residualDamage = (pokemon.hasType(["Normal", "Bug"])) ? pokemon.baseMaxhp / 8 : pokemon.baseMaxhp / 16;
          this.damage(residualDamage, pokemon);
      },
      onEnd(pokemon) {
        this.add("-end", pokemon, "Parasitic Fungi");
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass"
  },
  pentascale: {
    num: 1050,
    accuracy: 100,
    basePower: 15,
    category: "Special",
    name: "Penta Scale",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Beautiful"
  },
  perfectglare: {
    num: 1248,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Perfect Glare",
    pp: 20,
    priority: 1,
    flags: { protect: 1, reflectable: 1, mirror: 1, speed: 1 },
    status: "par",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { boost: { spd: 1 } },
    contestType: "Tough"
  },
  perishsongsound: {
    num: 1007,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Perish Song Sound",
    pp: 5,
    priority: 0,
    flags: { sound: 1, distance: 1, bypasssub: 1 },
    onHitField(target, source, move) {
      let result = false;
      let message = false;
      for (const pokemon of this.getAllActive()) {
        if (this.runEvent("Invulnerability", pokemon, source, move) === false) {
          this.add("-miss", source, pokemon);
          result = true;
        } else if (this.runEvent("TryHit", pokemon, source, move) === null) {
          result = true;
        } else if (!pokemon.volatiles["perishsong"]) {
          pokemon.addVolatile("perishsong");
          this.add("-start", pokemon, "perish3", "[silent]");
          result = true;
          message = true;
        }
      }
      if (!result)
        return false;
      if (message)
        this.add("-fieldactivate", "move: Perish Song");
    },
    condition: {
      duration: 4,
      onEnd(target) {
        this.add("-start", target, "perish0");
        target.faint();
      },
      onResidualOrder: 24,
      onResidual(pokemon) {
        const duration = pokemon.volatiles["perishsong"].duration;
        this.add("-start", pokemon, "perish" + duration);
      }
    },
    secondary: null,
    target: "all",
    type: "Sound",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  perplex: {
    num: 965,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Perplex",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onBasePower(basePower, pokemon, target) {
      if (target.status === "confusion") {
        return this.chainModify(2);
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Clever"
  },
  pesticide: {
    num: 1152,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Pesticide",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onEffectiveness(typeMod, target, type) {
      if (type === "Bug")
        return 1;
    },
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Beautiful"
  },
  phantomforce: {
    inherit: true,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["darkness", "cursedwinds"].includes(attacker.effectiveWeather())) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    }
  },
  phantomgrip: {
    num: 1079,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Phantom Grip",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Ghost",
    contestType: "Cool"
  },
  photongeyser: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  photongeyserlight: {
    num: 1103,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    isNonstandard: "Past",
    name: "Photon Geyser Light",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onModifyMove(move, pokemon) {
      if (pokemon.getStat("atk", false, true) > pokemon.getStat("spa", false, true))
        move.category = "Physical";
    },
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Light",
    contestType: "Cool"
  },
  piercepincer: {
    num: 950,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Pierce PIncer",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        def: -2
      }
    },
    target: "normal",
    type: "Bug",
    contestType: "Tough"
  },
  pillowpummel: {
    num: 1152,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Pillow Pummel",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      status: "slp"
    },
    target: "normal",
    type: "Fairy"
  },
  plague: {
    num: 1285,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Plague",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1 },
    onHit(target) {
      if (target.getTypes().join() === "Bug" || !target.setType("Bug")) {
        this.add("-fail", target);
        return null;
      }
      this.add("-start", target, "typechange", "Bug");
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: { boost: { spa: 1 } },
    contestType: "Cute"
  },
  plasmafists: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, legendary: 1 }
  },
  poisonleaf: {
    num: 1145,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Poison Leaf",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Cool"
  },
  pokeburstream: {
	num: 1330,
	accuracy: 100,
	basePower: 100,
	category: "Physical",
	name: "Pokéburst Stream",
	pp: 5,
	priority: 0,
	flags: { contact: 1, protect: 1, mirror: 1},
	secondary: null,
	target: "normal",
	type: "Dark",
	contestType: "Beautiful"
  },
  pollinate: {
    num: 1308,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Pollinate",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "pollenstorm",
    secondary: null,
    target: "all",
    type: "Grass",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  polyblast: {
    num: 1119,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Polyblast",
    pp: 20,
    priority: 0,
    flags: { protect: 1, pulse: 1, mirror: 1, distance: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "any",
    type: "Plastic",
    contestType: "Beautiful"
  },
  polygonalsword: {
    num: 1121,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Polygonal Sword",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Cool"
  },
  possession: {
    num: 910,
    accuracy: 100,
    basePower: 95,
    category: "Special",
	overrideOffensivePokemon: "target",
    overrideOffensiveStat: "atk",
    name: "Possession",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Beautiful"
  },
  powergemcrystal: {
    num: 1112,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Power Gem Crystal",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Crystal",
    contestType: "Beautiful"
  },
  precipiceblades: {
    inherit: true,
	flags: { protect: 1, mirror: 1, nonsky: 1, legendary: 1 }
  },
  pressurize: {
    num: 940,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Pressurize",
    pp: 20,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      spd: 2
    },
    secondary: null,
    target: "self",
    type: "Rock",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Tough"
  },
  primalscream: {
    num: 1228,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Primal Scream",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Sound",
    contestType: "Tough"
  },
  prismaticlaser: {
    inherit: true,
	flags: { recharge: 1, protect: 1, mirror: 1, beam: 1, legendary: 1 }
  },
  prismaticlaserlight: {
    num: 1111,
    accuracy: 100,
    basePower: 160,
    category: "Special",
    isNonstandard: "Past",
    name: "Prismatic Laser Light",
    pp: 10,
    priority: 0,
    flags: { recharge: 1, protect: 1, mirror: 1, beam: 1, legendary: 1 },
	onModifyType(move, pokemon, target) {
      const psychicTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Light";
      const lightTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Psychic";
      if (psychicTypeEffectiveness === lightTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Light")){
          move.type = "Light";
        }
      } else if(lightTypeEffectiveness>psychicTypeEffectiveness){
        move.type = "Light"
      }
    },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Cool"
  },
  probepunch: {
    num: 1286,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Probe Punch",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 10,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Bug",
    contestType: "Beautiful"
  },
  protonbeam: {
    num: 990,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Proton Beam",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, beam: 1 },
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Nuclear",
    contestType: "Beautiful"
  },
  psybeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  psyblade: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1, legendary: 1 }
  },
  psybolt: {
    num: 911,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Psybolt",
    pp: 30,
    priority: 1,
    flags: { protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  psyburn: {
    num: 1146,
    accuracy: 70,
    basePower: 120,
    category: "Special",
    name: "Psyburn",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      self: {
        boosts: {
          spd: 1
        }
      }
    },
    target: "normal",
    type: "Psychic",
    contestType: "Cool"
  },
  psychoboost: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  psylight: {
    num: 1209,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Psylight",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "allAdjacentFoes",
    type: "Psychic",
    contestType: "Cool"
  },
  psystrike: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  puffup: {
    num: 1263,
    accuracy: true,
    basePower: 120,
    category: "Special",
    name: "Puff Up",
    pp: 1,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { boost: { def: 1 } },
    contestType: "Cool"
  },
  pummel: {
    num: 1169,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Pummel",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, punch: 1 },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Fighting",
    contestType: "Tough"
  },
  pursuant: {
    num: 1282,
    accuracy: 100,
    basePower: 125,
    category: "Physical",
    name: "Pursuant",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, bypasssub: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    contestType: "Tough"
  },
  quantumleap: {
    num: 991,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Quantum Leap",
    pp: 5,
    priority: 0,
    flags: { contact: 1, charge: 1, mirror: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1, legendary: 1 },
    breaksProtect: true,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    condition: {
      duration: 2,
      onInvulnerability: false
    },
    secondary: null,
    target: "normal",
    type: "Nuclear",
    contestType: "Cool"
  },
  quickattack: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  quicksand: {
    num: 1080,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Quicksand",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Ground",
    contestType: "Tough"
  },
  radioacid: {
    num: 992,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Radioacid",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Nuclear",
    contestType: "Cute"
  },
  ragingflame: {
    num: 1271,
    accuracy: 100,
    basePower: 110,
    category: "Physical",
    name: "Raging Flame",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      self: {
        volatileStatus: "confusion"
      }
    },
    target: "normal",
    type: "Fire",
    contestType: "Beautiful"
  },
  ragingwaves: {
    num: 1321,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "RAging Waves",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, failinstruct: 1 },
    self: {
      volatileStatus: "lockedmove"
    },
    onAfterMove(pokemon) {
      if (pokemon.volatiles["lockedmove"] && pokemon.volatiles["lockedmove"].duration === 1) {
        pokemon.removeVolatile("lockedmove");
      }
    },
    secondary: null,
    target: "randomNormal",
    type: "Water",
    contestType: "Cool"
  },
  rapidspin: {
    num: 229,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Rapid Spin",
    pp: 40,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onAfterHit(target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Rapid Spin", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Rapid Spin", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    onAfterSubDamage(damage, target, pokemon) {
      if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
        this.add("-end", pokemon, "Leech Seed", "[from] move: Rapid Spin", "[of] " + pokemon);
      }
      const sideConditions = ["constructionblocks", "fiesta", "spikes", "toxicspikes", "stealthrock", "hawthorns", "scorchedashes", "velvetscales", "salttherapy", "stickyweb", "gmaxsteelsurge"];
      for (const condition of sideConditions) {
        if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
          this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Rapid Spin", "[of] " + pokemon);
        }
      }
      if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
        pokemon.removeVolatile("partiallytrapped");
      }
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  rapidgrowth: {
    num: 1147,
    accuracy: 85,
    basePower: 100,
    category: "Special",
    name: "Rapid Growth",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "allAdjacentFoes",
    type: "Grass",
    contestType: "Cool"
  },
  razorblade: {
    num: 1081,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Razor Blade",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Cool"
  },
  razorwindwind: {
    num: 1090,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Razor Wind wind",
    pp: 10,
    priority: 0,
    flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Wind",
    contestType: "Cool"
  },
  reflectivecloak: {
    num: 1118,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflective Cloak",
    pp: 10,
    priority: 4,
    flags: { noassist: 1, failcopycat: 1 },
    stallingMove: true,
    volatileStatus: "protect",
    onPrepareHit(pokemon) {
      return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
    },
    onHit(pokemon) {
      pokemon.addVolatile("stall");
    },
    secondary: null,
    target: "self",
    type: "Light",
    zMove: { boost: { evasion: 1 } },
    contestType: "Cool"
  },
  reflectlight: {
    num: 1106,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflect Light",
    pp: 20,
    priority: 0,
    flags: { snatch: 1 },
    sideCondition: "reflect",
    secondary: null,
    target: "allySide",
    type: "Light",
    zMove: { boost: { def: 1 } },
    contestType: "Clever"
  },
  reformat: {
	num: 1329,
	accuracy: 100,
	basePower: 0,
	category: "Status",
	name: "Reformat",
	pp: 20,
	priority: 0,
	flags: { snatch: 1 },
	secondary: null,
	boosts: {
      def: 1,
	  spd: 1,
      spe: -1
    },
	target: "self",
	type: "Digital",
	contestType: "Cool"
  },
  relicsong: {
    inherit: true,
	flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, legendary: 1 }
  },
  relicsongsound: {
    num: 1008,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Relic Song Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, legendary: 1 },
    secondary: {
      chance: 10,
      status: "slp"
    },
    onHit(target, pokemon, move) {
      if (pokemon.baseSpecies.baseSpecies === "Meloetta" && !pokemon.transformed) {
        move.willChangeForme = true;
      }
    },
    onAfterMoveSecondarySelf(pokemon, target, move) {
      if (move.willChangeForme) {
        const meloettaForme = pokemon.species.id === "meloettapirouette" ? "" : "-Pirouette";
        pokemon.formeChange("Meloetta" + meloettaForme, this.effect, false, "[msg]");
      }
    },
    target: "allAdjacentFoes",
    type: "Sound",
    contestType: "Beautiful"
  },
  remoraidcannon: {
    num: 1264,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Remoraid Cannon",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
    multihit: 2,
    smartTarget: true,
    secondary: null,
    target: "normal",
    type: "Water",
    maxMove: { basePower: 130 }
  },
  replicate: {
    num: 1171,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Replicate",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    flags: {
      bypasssub: 1,
      allyanim: 1,
      failencore: 1,
      nosleeptalk: 1,
      noassist: 1,
      failcopycat: 1,
      failinstruct: 1,
      failmimic: 1
    },
    onHit(target, source) {
      const disallowedMoves = ["chatter", "sketch", "struggle"];
      const move = target.lastMove;
      if (source.transformed || !move || source.moves.includes(move.id))
        return false;
      if (disallowedMoves.includes(move.id) || move.isZ || move.isMax)
        return false;
      const sketchIndex = source.moves.indexOf("sketch");
      if (sketchIndex < 0)
        return false;
      const sketchedMove = {
        move: move.name,
        id: move.id,
        pp: move.pp,
        maxpp: move.pp,
        target: move.target,
        disabled: false,
        used: false
      };
      source.moveSlots[sketchIndex] = sketchedMove;
      source.baseMoveSlots[sketchIndex] = sketchedMove;
      this.add("-activate", source, "move: Sketch", move.name);
    },
    noSketch: true,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: { boost: { atk: 1, def: 1, spa: 1, spd: 1, spe: 1 } },
    contestType: "Clever"
  },
  reprisal: {
    num: 1287,
    accuracy: 100,
    basePower: 60,
    basePowerCallback(pokemon, target, move) {
      const damagedByTarget = pokemon.attackedBy.some(
        (p) => p.source === target && p.damage > 0 && p.thisTurn
      );
      if (damagedByTarget) {
        this.debug("BP doubled for getting hit by " + target);
        return move.basePower * 2;
      }
      return move.basePower;
    },
    category: "Special",
    name: "Reprisal",
    pp: 10,
    priority: -4,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Beautiful"
  },
  revup: {
    num: 1250,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Rev Up",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  rhythmstrike: {
    num: 1049,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Rhythm Strike",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 100,
      boosts: {
        def: -1,
		spd: -1
      }
    },
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  ripen: {
    num: 1172,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ripen",
    pp: 10,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      def: 1,
      spa: 2
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  ripplewave: {
    num: 1082,
    accuracy: 90,
    basePower: 50,
    category: "Special",
    name: "Ripple Wave",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: { basePower: 140 },
    maxMove: { basePower: 120 },
    contestType: "Cool"
  },
  risingvoltage: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  roaroftime: {
    inherit: true,
	flags: { recharge: 1, protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  roarsound: {
    num: 1009,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Roar Sound",
    pp: 20,
    priority: -6,
    flags: { reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1, noassist: 1, failcopycat: 1 },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { def: 1 } },
    contestType: "Cool"
  },
  rockclimb: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, hm: 1 }
  },
  rocksmash: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, hm: 1 }
  },
  rollingkick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  roundsound: {
    num: 1010,
    accuracy: 100,
    basePower: 60,
    basePowerCallback(target, source, move) {
      if (move.sourceEffect === "roundsound") {
        this.debug("BP doubled");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    category: "Special",
    name: "Round Sound",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    onTry(source, target, move) {
      for (const action of this.queue.list) {
        if (!action.pokemon || !action.move || action.maxMove || action.zmove)
          continue;
        if (action.move.id === "roundsound") {
          this.queue.prioritizeAction(action, move);
          return;
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Beautiful"
  },
  rottingsparks: {
    num: 1303,
    accuracy: 90,
    basePower: 25,
    category: "Special",
    name: "Rotting Sparks",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Eldritch",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Beautiful"
  },
  royalbreath: {
    num: 1292,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Royal Breath",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
  },
  rubblerush: {
    num: 1173,
    accuracy: 80,
    basePower: 140,
    category: "Physical",
    name: "Rubble Rush",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [33, 100],
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Cool"
  },
  ruination: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  sacredfire: {
    inherit: true,
	flags: { protect: 1, mirror: 1, defrost: 1, metronome: 1, legendary: 1 }
  },
  sacredsword: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1, legendary: 1 }
  },
  sacrificialpact: {
    num: 1320,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Sacrificial Pact",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    recoil: [50, 100],
    secondary: null,
    target: "normal",
    type: "Eldritch",
    contestType: "Tough"
  },
  saltcrash: {
    num: 917,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Salt Crash",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          def: 1
        }
      }
    },
    target: "normal",
    type: "Fighting"
  },
  salttherapy: {
    num: 1185,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Salt Therapy",
    pp: 10,
    priority: 0,
    flags: { snatch: 1 },
    sideCondition: "salttherapy",
    condition: {
      duration: 5,
      onSideStart(side) {
        this.add("-sidestart", side, "move: Salt Therapy");
      },
      onResidualOrder: 6,
      onResidual(side) {
        this.heal(side.baseMaxhp / 12);
      },
      onSideEnd(side) {
        this.add("-sideend", side, "move: Salt Therapy");
      },
    },
    secondary: null,
    target: "allySide",
    type: "Rock",
    contestType: "Beautiful",
  },
  sandsearstorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, wind: 1, legendary: 1 }
  },
  saurtooth: {
    num: 1293,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Saurtooth",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  scorchedashes: {
    num: 1227,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Scorched Ashes",
    pp: 20,
    priority: 0,
    flags: { reflectable: 1 },
    sideCondition: "scorchedashes",
    condition: {
      onSideStart(side) {
        this.add("-sidestart", side, "move: Scorched Ashes");
      },
      onEntryHazard(pokemon) {
        if (!pokemon.isGrounded() || pokemon.hasItem("heavydutyboots"))
          return;
        this.add("-activate", pokemon, "move: Scorched Ashes");
        this.boost({ atk: -1 }, pokemon, this.effectState.source, this.dex.getActiveMove("scorchedashes"));
      }
    },
    secondary: null,
    target: "foeSide",
    type: "Fire",
    zMove: { boost: { atk: 1 } },
    contestType: "Tough"
  },
  screechsound: {
    num: 1011,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Screech Sound",
    pp: 40,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1 },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { atk: 1 } },
    contestType: "Clever"
  },
  searingshot: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, legendary: 1 }
  },
  searingslash: {
    num: 941,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Searing Slash",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
	critRatio: 2,
    target: "normal",
    type: "Fire",
    contestType: "Cute"
  },
  secretsword: {
    inherit: true,
	flags: { protect: 1, mirror: 1, slicing: 1, legendary: 1 }
  },
  seedflare: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  seedyrecede: {
    num: 956,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Seedy Recede",
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1 },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Cute"
  },
  shadetrance: {
    num: 1174,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Shade Trance",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  shadowblast: {
    num: 1019,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Shadow Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, distance: 1, legendary: 1 },
    critRatio: 2,
    secondary: null,
    target: "any",
    type: "Shadow",
    contestType: "Cool"
  },
  shadowblitz: {
    num: 1020,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Shadow Blitz",
    pp: 35,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Shadow",
    contestType: "Tough"
  },
  shadowbolt: {
    num: 1021,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Shadow Bolt",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, legendary: 1 },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Shadow",
    contestType: "Cool"
  },
  shadowbreak: {
    num: 1022,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Shadow Break",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Shadow",
    contestType: "Tough"
  },
  shadowchill: {
    num: 1023,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Shadow Chill",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, legendary: 1 },
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Shadow",
    contestType: "Beautiful"
  },
  shadowclamp: {
    num: 1272,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Shadow Clamp",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, bite: 1 },
    secondary: {
      chance: 30,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          target.addVolatile("confusion");
        } else if(result === 1) {
          target.setStatus("slp");
        }
      }
    },
    target: "normal",
    type: "Ghost",
    contestType: "Beautiful"
  },
  shadowdown: {
    num: 1024,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Shadow Down",
    pp: 40,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, allyanim: 1 },
    boosts: {
      def: -2
    },
    secondary: null,
    target: "normal",
    type: "Shadow",
    zMove: { boost: { atk: 1 } },
    contestType: "Clever"
  },
  shadowend: {
    num: 1025,
    accuracy: 80,
    basePower: 120,
    category: "Physical",
    name: "Shadow End",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [1, 2],
    secondary: null,
    target: "normal",
    type: "Shadow",
    contestType: "Tough"
  },
  shadowfire: {
    num: 1026,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Shadow Fire",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, legendary: 1 },
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Shadow",
    contestType: "Beautiful"
  },
  shadowforce: {
    inherit: true,
	flags: { contact: 1, charge: 1, mirror: 1, metronome: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1, legendary: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["darkness"].includes(attacker.effectiveWeather())) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    }
  },
  shadowhalf: {
    num: 1027,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Shadow Half",
    pp: 5,
    priority: 0,
    flags: { protect: 1 },
    onHit(target, source) {
        if (target.hp > target.maxhp / 2) {
            this.damage(target.maxhp / 2, target);
        }
        if (source.hp > source.maxhp / 2) {
            this.damage(source.maxhp / 2, source);
        }
    },
    secondary: null,
    target: "allAdjacent",
    type: "Shadow",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  shadowhold: {
    num: 1028,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shadow Hold",
    pp: 5,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    onHit(target, source, move) {
      return target.addVolatile("trapped", source, move, "trapper");
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Shadow",
    zMove: { boost: { def: 1 } },
    contestType: "Cute"
  },
  shadowmist: {
    num: 1029,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Shadow Mist",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    boosts: {
      evasion: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Shadow",
    zMove: { boost: { accuracy: 1 } },
    contestType: "Cute"
  },
  shadowpanic: {
    num: 1030,
    accuracy: 60,
    basePower: 0,
    category: "Status",
    name: "Shadow Panic",
    pp: 10,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1 },
    volatileStatus: "confusion",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Shadow",
    zMove: { boost: { spa: 1 } },
    contestType: "Clever"
  },
  shadowrave: {
    num: 1031,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Shadow Rave",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Shadow",
    contestType: "Beautiful"
  },
  shadowrush: {
    num: 1018,
    accuracy: 100,
    basePower: 55,
    category: "Physical",
    name: "Shadow Rush",
    pp: 25,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Shadow",
    contestType: "Tough"
  },
  shadowshed: {
    num: 1032,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Psychic Fangs",
    pp: 10,
    priority: 0,
    flags: {},
	onTryHit(pokemon) {
      pokemon.side.removeSideCondition("safeguard");
	  pokemon.side.removeSideCondition("reflect");
      pokemon.side.removeSideCondition("lightscreen");
      pokemon.side.removeSideCondition("auroraveil");
    },
    secondary: null,
    target: "normal",
    type: "Shadow",
    contestType: "Clever"
  },
  shadowsky: {
    num: 1035,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shadow Sky",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "Shadowyaura",
    secondary: null,
    target: "all",
    type: "Shadow",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  shadowsneak: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  shadowstorm: {
    num: 1033,
    accuracy: 100,
    basePower: 95,
    category: "Special",
    name: "Shadow Rave",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Shadow",
    contestType: "Beautiful"
  },
  shadowwave: {
    num: 1034,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Shadow Wave",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Shadow",
    contestType: "Beautiful"
  },
  shieldbash: {
    num: 912,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Shield Bash",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    overrideOffensiveStat: "def",
    secondary: null,
    target: "normal",
    type: "Steel"
  },
  shimmershot: {
    num: 1175,
    accuracy: 80,
    basePower: 65,
    category: "Special",
    name: "Shimmer Shot",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "allAdjacentFoes",
    type: "Questionmark",
    contestType: "Beautiful"
  },
  shimmershotlight: {
    num: 1176,
    accuracy: 80,
    basePower: 65,
    category: "Special",
    name: "Shimmer Shot Light",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "allAdjacentFoes",
    type: "Light",
    contestType: "Beautiful"
  },
  shoreup: {
    num: 659,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shore Up",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1, metronome: 1 },
    onHit(pokemon) {
      let factor = 0.5;
      if (this.field.isWeather(["sandstorm", "duststorm"])) {
        factor = 0.667;
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    },
    secondary: null,
    target: "self",
    type: "Ground",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Beautiful"
  },
  signalbeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  signalbeamlight: {
    num: 1109,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    isNonstandard: "Past",
    name: "Signal Beam Light",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, beam: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
	onModifyType(move, pokemon, target) {
      const bugTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Light";
      const lightTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Bug";
      if (bugTypeEffectiveness === lightTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Light")){
          move.type = "Light";
        }
      } else if(lightTypeEffectiveness>bugTypeEffectiveness){
        move.type = "Light"
      }
    },
    target: "normal",
    type: "Bug",
    contestType: "Beautiful"
  },
  simplebeam: {
    inherit: true,
	flags: { protect: 1, reflectable: 1, mirror: 1, allyanim: 1, beam: 1 }
  },
  singsound: {
    num: 1012,
    accuracy: 55,
    basePower: 0,
    category: "Status",
    name: "Sing Sound",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { spe: 1 } },
    contestType: "Cute"
  },
  siphon: {
    num: 1177,
    accuracy: 75,
    basePower: 100,
    category: "Special",
    name: "Siphon",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, heal: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Clever"
  },
  siphonbite: {
    num: 1083,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Siphon Bite",
    pp: 10,
    priority: 0,
    flags: { bite: 1, contact: 1, protect: 1, mirror: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Bug",
    contestType: "Cool"
  },
  sizzlebeak: {
    num: 1178,
    accuracy: 95,
    basePower: 25,
    category: "Physical",
    name: "Sizzle Beak",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    contestType: "Cute"
  },
  skydrop: {
    inherit: true,
      onAnyInvulnerability(target, source, move) {
        if (target !== this.effectState.target && target !== this.effectState.source) {
          return;
        }
        if (source === this.effectState.target && target === this.effectState.source) {
          return;
        }
        if (["gust", "gustwind", "tornado", "twister", "skyuppercut", "thunder", "hurricane", "hurricanewind", "smackdown", "thousandarrows"].includes(move.id)) {
          return;
        }
        return false;
      },
      onAnyBasePower(basePower, target, source, move) {
        if (target !== this.effectState.target && target !== this.effectState.source) {
          return;
        }
        if (source === this.effectState.target && target === this.effectState.source) {
          return;
        }
        if (move.id === "gust" || move.id === "gustwind" || move.id === "twister") {
          this.debug("BP doubled on midair target");
          return this.chainModify(2);
        }
      }
  },
  skyfall: {
    num: 993,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Sky Fall",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Flying",
    contestType: "Cute"
  },
  sleeptalksound: {
    num: 1013,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sleep Talk Sound",
    pp: 10,
    priority: 0,
    flags: { failencore: 1, nosleeptalk: 1, noassist: 1, failcopycat: 1, failinstruct: 1, failmimic: 1 },
    sleepUsable: true,
    onTry(source) {
      return source.status === "slp" || source.hasAbility("comatose");
    },
    onHit(pokemon) {
      const moves = [];
      for (const moveSlot of pokemon.moveSlots) {
        const moveid = moveSlot.id;
        if (!moveid)
          continue;
        const move = this.dex.moves.get(moveid);
        if (move.flags["nosleeptalk"] || move.flags["charge"] || move.isZ && move.basePower !== 1 || move.isMax) {
          continue;
        }
        moves.push(moveid);
      }
      let randomMove = "";
      if (moves.length)
        randomMove = this.sample(moves);
      if (!randomMove) {
        return false;
      }
      this.actions.useMove(randomMove, pokemon);
    },
    secondary: null,
    target: "self",
    type: "Sound",
    zMove: { effect: "crit2" },
    contestType: "Cute"
  },
  slimyspit: {
    num: 1126,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Slimy Spit",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Slime",
    contestType: "Clever"
  },
  smartpunch: {
    num: 1340,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Smart Punch",
    pp: 40,
    priority: 0,
    flags: { contact: 1, protect: 1, punch: 1, mirror: 1 },
    onDamagePriority: -20,
    onDamage(damage, target, source, effect) {
      if (damage >= target.hp)
        return target.hp - 1;
    },
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Cool"
  },
  smogdiffusion: {
    num: 948,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Smog Diffusion",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    selfSwitch: true,
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Cool"
  },
  smogscreen: {
    num: 1273,
    accuracy: 95,
    basePower: 55,
    category: "Special",
    name: "Smogscreen",
    pp: 25,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      onHit(target, source) {
        const result = this.random(2);
        if (result === 0) {
          this.boost({accuracy: -1}, target, source, null, true);
        } else if(result === 1) {
          target.setStatus("psn");
        }
      }
    },
    target: "normal",
    type: "Poison",
    contestType: "Beautiful"
  },
  smogspread: {
    num: 1310,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Smog Spread",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "smog",
    secondary: null,
    target: "all",
    type: "Poison",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  snoresound: {
    num: 1014,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Snore Sound",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    sleepUsable: true,
    onTry(source) {
      return source.status === "slp" || source.hasAbility("comatose");
    },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Sound",
    contestType: "Cute"
  },
  solarbeam: {
    inherit: true,
	flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1, beam: 1 },
    onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["raindance", "primordialsea", "sandstorm", "hail", "snow", "acidrain", "darkness", "eclipse", "fallout", "thunderstorm", "fog", "duststorm", "cursedwinds"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    }
  },
  solarblade: {
    num: 669,
    accuracy: 100,
    basePower: 125,
    category: "Physical",
    name: "Solar Blade",
    pp: 10,
    priority: 0,
    flags: { contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1, nosleeptalk: 1, failinstruct: 1 },
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["sunnyday", "desolateland"].includes(attacker.effectiveWeather())) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["raindance", "primordialsea", "sandstorm", "hail", "snow", "acidrain", "darkness", "eclipse", "fallout", "thunderstorm", "fog", "duststorm", "cursedwinds"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Cool"
  },
  somnismog: {
    num: 1300,
    accuracy: 60,
    basePower: 0,
    category: "Status",
    name: "Somnismog",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1 },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: { boost: { spe: 1 } },
    contestType: "Clever"
  },
  sonicboomsound: {
    num: 1015,
    accuracy: 90,
    basePower: 0,
    damage: 20,
    category: "Special",
    isNonstandard: "Past",
    name: "Sonic Boom Sound",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  souldevour: {
    num: 1265,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Soul Devour",
    pp: 10,
    priority: 0,
    flags: { mirror: 1, bypasssub: 1 },
    breaksProtect: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Clever"
  },
  soulstealing7starstrike: {
    inherit: true,
	flags: { contact: 1, kick: 1 }
  },
  soundbarrier: {
    num: 1229,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Sound Barrier",
    pp: 15,
    priority: 0,
    flags: { nonsky: 1 },
    pseudoWeather: "soundbarrier",
    condition: {
      duration: 5,
      onFieldStart(field, source) {
        this.add("-fieldstart", "move: Sound Barrier", "[of] " + source);
      },
      onBasePowerPriority: 1,
      onBasePower(basePower, attacker, defender, move) {
        if (move.type === "Flying" || move.type === "Water" || move.type === "Fairy") {
          this.debug("sound barrier weaken");
          return this.chainModify([1352, 4096]);
        }
      },
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 3,
      onFieldEnd() {
        this.add("-fieldend", "move: Sound Barrier");
      }
    },
    secondary: null,
    target: "all",
    type: "Sound",
    zMove: { boost: { spd: 1 } },
    contestType: "Cute"
  },
  soundpledge: {
    num: 1226,
    accuracy: 100,
	basePower: 80,
    category: "Special",
    name: "Sound Pledge",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    secondary: null,
    target: "normal",
    type: "Sound",
    contestType: "Beautiful"
  },
  soundpound: {
    num: 1335,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Sound Pound",
    pp: 15,
    priority: 0,
    flags: {protect: 1, mirror: 1, metronome: 1, sound: 1},
    secondary: {
      chance: 20,
      boosts: {
        def: -1,
      },
    },
    target: "normal",
    type: "Sound",
    contestType: "Clever",
  },
  spacialrend: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, legendary: 1 }
  },
  spam: {
    num: 1123,
    accuracy: 100,
    basePower: 25,
    category: "Special",
    name: "Spam",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Digital",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Beautiful"
  },
  sparklingariasound: {
    num: 1016,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    isNonstandard: "Past",
    name: "Sparkling Aria Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      dustproof: true,
      chance: 100,
      volatileStatus: "sparklingaria"
    },
	onModifyType(move, pokemon, target) {
      const waterTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Water";
      if (waterTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>waterTypeEffectiveness){
        move.type = "Sound"
      }
    },
    onAfterMove(source, target, move) {
      for (const pokemon of this.getAllActive()) {
        if (pokemon !== source && pokemon.removeVolatile("sparklingaria") && pokemon.status === "brn" && !source.fainted) {
          pokemon.cureStatus();
        }
      }
    },
    target: "allAdjacent",
    type: "Water",
    contestType: "Tough"
  },
  spectralthief: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, bypasssub: 1, legendary: 1 }
  },
  spotlightlight: {
    num: 1108,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Spotlight Light",
    pp: 15,
    priority: 3,
    flags: { protect: 1, reflectable: 1, allyanim: 1, noassist: 1, failcopycat: 1 },
    volatileStatus: "spotlight",
    onTryHit(target) {
      if (this.activePerHalf === 1)
        return false;
    },
    secondary: null,
    target: "normal",
    type: "Light",
    zMove: { boost: { spd: 1 } },
    contestType: "Cute"
  },
  springtidestorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, wind: 1, legendary: 1 }
  },
  sprinkle: {
    num: 1311,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sprinkle",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "fairydust",
    secondary: null,
    target: "all",
    type: "Fairy",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  squallstrike: {
    num: 1129,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Squall Strike",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Wind",
    contestType: "Beautiful"
  },
  standoff: {
    num: 966,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Standoff",
    pp: 5,
    priority: 0,
    flags: { reflectable: 1, mirror: 1 },
    onHit(target, source, move) {
      return target.addVolatile("trapped", source, move, "trapper");
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: { boost: { spd: 1 } },
    contestType: "Cool"
  },
  stardust: {
    num: 1148,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Stardust",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Steel",
    contestType: "Beautiful"
  },
  stardustcosmic: {
    num: 1149,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Stardust Cosmic",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Cosmic",
    contestType: "Beautiful"
  },
  starshot: {
    num: 1047,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Star Shot",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    onModifyPriority(priority, source, target, move) {
      if (this.field.isTerrain("gravity") && source.isGrounded()) {
        return priority + 1;
      }
    },
    secondary: null,
    target: "normal",
    type: "Cosmic",
    contestType: "Cool"
  },
  starstorm: {
    num: 1196,
    accuracy: 100,
    basePower: 110,
    category: "Special",
    name: "Starstorm",
    pp: 5,
    priority: 0,
    flags: {},
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
  },
  starstormcosmic: {
    num: 1197,
    accuracy: 100,
    basePower: 110,
    category: "Special",
    name: "Starstorm Cosmic",
    pp: 5,
    priority: 0,
    flags: {},
    secondary: null,
    target: "normal",
    type: "Cosmic",
    contestType: "Tough"
  },
  steameruption: {
    inherit: true,
	flags: { protect: 1, mirror: 1, defrost: 1, legendary: 1 }
  },
  steelbeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  stingfreeze: {
    num: 1245,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Sting Freeze",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Ice",
    contestType: "Cool"
  },
  fakemonstonesurge: {
    num: 1179,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Fakemon Stone Surge",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Rock",
    contestType: "Cool"
  },
  stormforecast: {
    num: 1150,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Storm Forecast",
    pp: 10,
    priority: 0,
    flags: { allyanim: 1, futuremove: 1 },
    ignoreImmunity: true,
    onTry(source, target) {
      if (!target.side.addSlotCondition(target, "futuremove"))
        return false;
      Object.assign(target.side.slotConditions[target.position]["futuremove"], {
        duration: 3,
        move: "stormforecast",
        source,
        moveData: {
          id: "stormforecast",
          name: "Storm Forecast",
          accuracy: 100,
          basePower: 120,
          category: "Special",
          priority: 0,
          flags: { allyanim: 1, futuremove: 1 },
          ignoreImmunity: false,
          effectType: "Move",
          type: "Electric"
        }
      });
      this.add("-start", source, "move: Storm Forecast");
      return this.NOT_FAIL;
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Clever"
  },
  strength: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, hm: 1 }
  },
  subwoofer: {
    num: 1225,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Subwoofer",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Sound",
    contestType: "Cool"
  },
  suckerpunch: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  suddenstrike: {
    num: 994,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Sudden Strike",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1 },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Beautiful"
  },
  sugarrush: {
    num: 1241,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Sugar Rush",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    recoil: [33, 100],
    secondary: null,
    target: "normal",
    type: "Fairy",
    contestType: "Cool"
  },
  sulfuricspray: {
    num: 1084,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Sulfuric Spray",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    onEffectiveness(typeMod, target, type, move) {
      if (move.type !== "Poison")
        return;
      if (!target)
        return;
      if (!target.runImmunity("Poison")) {
        if (target.hasType("Steel"))
          return 0;
      }
    },
    ignoreImmunity: { "PoOison": true },
    secondary: null,
    target: "normal",
    type: "POison",
    zMove: { basePower: 180 },
    contestType: "Beautiful"
  },
  sunsteelstrike: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, legendary: 1 }
  },
  supernova: {
    num: 1048,
    accuracy: 100,
    basePower: 250,
    category: "Physical",
    name: "Super Nova",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, noparentalbond: 1 },
	pseudoWeather: "gravity",
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Cosmic",
    contestType: "Beautiful"
  },
  supersonicsound: {
    num: 1017,
    accuracy: 55,
    basePower: 0,
    category: "Status",
    name: "Supersonic sound",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1 },
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Sound",
    zMove: { boost: { spe: 1 } },
    contestType: "Clever"
  },
  superstar: {
    num: 1122,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Superstar",
    pp: 5,
    priority: 0,
    flags: { contact: 1, recharge: 1, protect: 1, mirror: 1 },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Tough"
  },
  surf: {
    inherit: true,
	flags: { cprotect: 1, mirror: 1, nonsky: 1, hm: 1 },
	onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["darkness"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("boost by weather");
        return this.chainModify(1.5);
      }
    }
  },
  surgingstrikes: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, legendary: 1 }
  },
  shadowforce: {
    inherit: true,
    onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["darkness"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("weakened by weather");
        return this.chainModify(1.5);
      }
    }
  },
  spectralsap: {
    num: 1200,
    accuracy: 100,
    basePower: 65,
    category: "Physical",
    name: "Spectral Sap",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    stealsBoosts: true,
    // Boost stealing implemented in scripts.js
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Cool"
  },
  swarmsignal: {
    num: 1309,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swarm Signal",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "pheromones",
    secondary: null,
    target: "all",
    type: "Bug",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  swiftcosmic: {
    num: 1099,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Swift Cosmic",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Cosmic",
    contestType: "Cool"
  },
  swindle: {
    num: 1180,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Swindle",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Clever"
  },
  synthesis: {
    num: 235,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Synthesis",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1 },
    onHit(pokemon) {
      let factor = 0.5;
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
		case "pollenstorm":
		case "fairydust":
          factor = 0.667;
          break;
        case "raindance":
        case "primordialsea":
        case "sandstorm":
        case "hail":
        case "snow":
		case "acidrain":
		case "thunderstorm":
		case "fog":
		case "duststorm":
		case "cursedwinds":
          factor = 0.25;
          break;
		case "fallout":
		case "shadowyaura":
		case "smog":
          factor = 0.125;
          break;
		case "darkness":
		case "eclipse":
          factor = 0;
          break;
      }
      const success = !!this.heal(this.modify(pokemon.maxhp, factor));
      if (!success) {
        this.add("-fail", pokemon, "heal");
        return this.NOT_FAIL;
      }
      return success;
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Clever"
  },
  tachyoncutter: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1, legendary: 1 }
  },
  taiga: {
    num: 1201,
    accuracy: 95,
    basePower: 120,
    category: "Physical",
    name: "Taiga",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Ice",
    contestType: "Cool"
  },
  tailwindwind: {
    num: 1092,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tailwind",
    pp: 15,
    priority: 0,
    flags: { snatch: 1, wind: 1 },
    sideCondition: "tailwind",
    secondary: null,
    target: "allySide",
    type: "Wind",
    zMove: { effect: "crit2" },
    contestType: "Cool"
  },
  takeheart: {
    inherit: true,
	flags: { snatch: 1, metronome: 1, legendary: 1 }
  },
  talongash: {
    num: 1085,
    accuracy: 90,
    basePower: 50,
    category: "Physical",
    name: "Talon Gash",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: { basePower: 140 },
    maxMove: { basePower: 120 },
    contestType: "Cool"
  },
  tartantrum: {
    num: 942,
    accuracy: 95,
    basePower: 90,
    category: "Physical",
    name: "Tar-Tantrum",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, defrost: 1, punch: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Rock",
    contestType: "Cool"
  },
  technoblast: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1, legendary: 1 }
  },
  tempest: {
    num: 1219,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Tempest",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
	onHit(target, source) {
      // Clear weather conditions
      this.field.clearWeather();
      this.add("-fieldstart", "move: Tempest", "[of] " + source);
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Cool"
  },
  tendril: {
    num: 1125,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Tendril",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Slime",
    contestType: "Tough"
  },
  terastarstorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, noassist: 1, failcopycat: 1, failmimic: 1, legendary: 1 }
  },
  terrorize: {
    num: 913,
    accuracy: 70,
    basePower: 120,
    category: "Special",
    name: "Terrorize",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Ghost",
    contestType: "Clever"
  },
  thornwhip: {
    num: 943,
    accuracy: 95,
    basePower: 50,
    category: "Physical",
    name: "Thorn Whip",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
	critRatio: 2,
    target: "normal",
    type: "Grass",
    contestType: "Cute"
  },
  thousandarrows: {
    inherit: true,
	flags: { protect: 1, mirror: 1, nonsky: 1, legendary: 1 }
  },
  thousandwaves: {
    inherit: true,
	flags: { protect: 1, mirror: 1, nonsky: 1, legendary: 1 }
  },
  thunder: {
    inherit: true,
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
		case "acidrain":
		case "thunderstorm":
          move.accuracy = true;
          break;
        case "sunnyday":
        case "desolateland":
          move.accuracy = 50;
          break;
      }
    }
  },
  thundercage: {
    inherit: true,
	flags: { protect: 1, mirror: 1, legendary: 1 }
  },
  thunderclap: {
    num: 1181,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Thunderclap",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, speed: 1, legendary: 1 },
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Clever"
  },
  thundercrush: {
    num: 952,
    accuracy: 80,
    basePower: 100,
    category: "Physical",
    name: "Thunder Crush",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Electric",
    contestType: "Cool"
  },
  thunderouskick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1, legendary: 1 }
  },
  thunderslash: {
    num: 944,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Thunder Slash",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
	critRatio: 2,
    target: "normal",
    type: "Electric",
    contestType: "Cute"
  },
  thunderstorm: {
    num: 995,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Thunderstorm",
    pp: 10,
    priority: 0,
    flags: {},
    weather: "Thunderstorm",
    secondary: null,
    target: "all",
    type: "Electric",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  thunderstruck: {
    num: 1240,
    accuracy: 90,
    basePower: 150,
    category: "Physical",
    name: "Thunderstruck",
    pp: 5,
    priority: 0,
    flags: { contact: 1, recharge: 1, protect: 1, mirror: 1 },
    self: {
      volatileStatus: "mustrecharge"
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    contestType: "Tough"
  },
  tidaldragoon: {
    num: 1234,
    accuracy: 100,
    basePower: 25,
    category: "Special",
    name: "Tidal Dragoon",
    pp: 30,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    multihit: [2, 5],
    secondary: null,
    target: "normal",
    type: "Dragon",
    zMove: { basePower: 140 },
    maxMove: { basePower: 130 },
    contestType: "Cool"
  },
  tikitorch: {
    num: 1086,
    accuracy: 90,
    basePower: 60,
    category: "Special",
    name: "Tiki Torch",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      status: "brn"
    },
    target: "normal",
    type: "Grass",
    contestType: "Cool"
  },
  tornado: {
    num: 1127,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Tornado",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, nonsky: 1 },
    secondary: null,
    target: "allAdjacent",
    type: "Wind",
    contestType: "Beautiful"
  },
  toxifume: {
    num: 1208,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Toxifume",
    pp: 5,
    priority: 0,
    flags: { charge: 1, protect: 1, mirror: 1, nosleeptalk: 1, failinstruct: 1 },
    onTryMove(attacker, defender, move) {
        if (attacker.removeVolatile(move.id)) {
            return;
        }
        this.add("-prepare", attacker, move.name);
        if (!this.runEvent("ChargeMove", attacker, defender, move)) {
            return;
        }
        attacker.addVolatile("twoturnmove", defender);
        // Apply the Special Attack boost on the first turn
        this.boost({ spa: 1 }, attacker, attacker, move);
        return null;
    },
    secondary: {
      chance: 100,
      status: "tox"
    },
    target: "normal",
    type: "Poison",
    contestType: "Beautiful",
  },
  tripleaxel: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  triplekick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  tropkick: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, kick: 1 }
  },
  twirlenade: {
    num: 1182,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Twirlenade",
    pp: 5,
    priority: 0,
    flags: { snatch: 1 },
    volatileStatus: "confusion",
    boosts: {
      spe: 2,
      evasion: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    contestType: "Clever"
  },
  twisterwind: {
    num: 1094,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Twister Wind",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, wind: 1 },
	onModifyType(move, pokemon, target) {
      const dragonTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Wind";
      const windTypeEffectiveness = target.runEffectiveness(move);
      move.type = "Dragon";
      if (dragonTypeEffectiveness === windTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Wind")){
          move.type = "Wind";
        }
      } else if(windTypeEffectiveness>dragonTypeEffectiveness){
        move.type = "Wind"
      }
    },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Dragon",
    contestType: "Cool"
  },
  triattack: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  trickshot: {
    num: 1087,
    accuracy: 90,
    basePower: 30,
    category: "Special",
    name: "Trick Shot",
    pp: 15,
    priority: 0,
    flags: { bullet: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fairy",
    contestType: "Cool"
  },
  trojanhorse: {
    num: 1339,
    accuracy: 100,
    basePower: 40,
    basePowerCallback(pokemon, target, move) {
      if (target.beingCalledBack || target.switchFlag) {
        this.debug("Trojan Horse damage boost");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    category: "Physical",
    isNonstandard: "Past",
    name: "Trojan Horse",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    beforeTurnCallback(pokemon) {
      for (const side of this.sides) {
        if (side.hasAlly(pokemon))
          continue;
        side.addSideCondition("pursuit", pokemon);
        const data = side.getSideConditionData("pursuit");
        if (!data.sources) {
          data.sources = [];
        }
        data.sources.push(pokemon);
      }
    },
    onModifyMove(move, source, target) {
      if (target?.beingCalledBack || target?.switchFlag)
        move.accuracy = true;
    },
    onTryHit(target, pokemon) {
      target.side.removeSideCondition("pursuit");
    },
    secondary: null,
    target: "normal",
    type: "Digital",
    contestType: "Clever"
  },
  twinbeam: {
    inherit: true,
	flags: { protect: 1, mirror: 1, beam: 1 }
  },
  typhoon: {
    num: 945,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Typhoon",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Flying",
    contestType: "Tough"
  },
  uvray: {
    num: 1184,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "UV Ray",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, defrost: 1 },
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Light",
    contestType: "Tough"
  },
  vacuumwave: {
    inherit: true,
	flags: { protect: 1, mirror: 1, speed: 1 }
  },
  vanish: {
    num: 946,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Vanish",
    pp: 5,
    priority: 0,
    flags: { snatch: 1 },
    boosts: {
      evasion: 2
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool"
  },
  vcreate: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, legendary: 1 }
  },
  veiledsky: {
    num: 1268,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Veiled Sky",
    pp: 5,
    priority: 0,
    flags: {},
    weather: "eclipse",
    secondary: null,
    target: "all",
    type: "Dark",
    zMove: { boost: { spe: 1 } },
    contestType: "Beautiful"
  },
  velvetscales: {
    num: 1232,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Velvet Scales",
    pp: 20,
    priority: 0,
    flags: { reflectable: 1 },
    sideCondition: "velvetscales",
    condition: {
      onSideStart(side) {
        this.add("-sidestart", side, "move: Velvet Scales");
      },
      onEntryHazard(pokemon) {
        if (!pokemon.isGrounded() || pokemon.hasItem("heavydutyboots"))
          return;
        this.add("-activate", pokemon, "move: Velvet Scales");
        this.boost({ def: -1, spd: -1 }, pokemon, this.effectState.source, this.dex.getActiveMove("velvetscales"));
      }
    },
    secondary: null,
    target: "foeSide",
    type: "Dragon",
    zMove: { boost: { atk: 1 } },
    contestType: "Tough"
  },
  venomswipe: {
    num: 947,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Venom Swipe",
    pp: 10,
    priority: 0,
    flags: { contact:1, protect: 1, mirror: 1 },
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    contestType: "Tough"
  },
  virugait: {
    num: 1183,
    accuracy: 100,
    basePower: 50,
    category: "Physical",
    name: "Virugait",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Poison",
    contestType: "Cool"
  },
  viscosityslam: {
    num: 1337,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Viscosity Slam",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      onHit(target, source, move) {
        if (source.isActive)
          target.addVolatile("trapped", source, move, "trapper");
      }
    },
    target: "normal",
    type: "Slime",
    contestType: "Tough"
  },
  voidstar: {
    num: 1247,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Void Star",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, heal: 1 },
    drain: [1, 2],
    secondary: null,
    target: "normal",
    type: "Ice",
    contestType: "Clever"
  },
  waterfall: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, hm: 1 }
  },
  watershuriken: {
    inherit: true,
	flags: { protect: 1, mirror: 1, speed: 1 }
  },
  weatherball: {
    inherit: true,
    onModifyType(move, pokemon) {
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
          move.type = "Fire";
          break;
        case "raindance":
        case "primordialsea":
          move.type = "Water";
          break;
		case "pollenstorm":
          move.type = "Grass";
          break;
		case "duststorm":
          move.type = "Ground";
          break;
        case "pheromones":
          move.type = "Bug";
          break;
		case "sandstorm":
          move.type = "Rock";
          break;
        case "battleaura":
          move.type = "Fighting";
          break;
		case "hail":
        case "snow":
          move.type = "Ice";
          break;
		case "darkness":
		case "eclipse":
          move.type = "Dark";
          break;
		case "cursedwinds":
          move.type = "Ghost";
          break;
		case "psychicfield":
          move.type = "Psychic";
          break;
		case "acidrain":
		case "smog":
          move.type = "Poison";
          break;
		case "dragonforce":
          move.type = "Dragon";
          break;
		case "magnetosphere":
          move.type = "Steel";
          break;
		case "fairydust":
          move.type = "Fairy";
          break;
		case "fallout":
          move.type = "Nuclear";
          break;
		case "thunderstorm":
          move.type = "Electric";
          break;
		case "shadowyaura":
          move.type = "Shadow";
          break;
      }
    },
    onModifyMove(move, pokemon) {
      switch (pokemon.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
          move.basePower *= 2;
          break;
        case "raindance":
        case "primordialsea":
          move.basePower *= 2;
          break;
        case "pollenstorm":
          move.basePower *= 2;
          break;
		case "duststorm":
          move.basePower *= 2;
          break;
		case "pheromones":
          move.basePower *= 2;
          break;
		case "sandstorm":
          move.basePower *= 2;
          break;
        case "battleaura":
          move.basePower *= 2;
          break;
		case "hail":
        case "snow":
          move.basePower *= 2;
          break;
		case "darkness":
		case "eclipse":
          move.basePower *= 2;
          break;
		case "cursedwinds":
          move.basePower *= 2;
          break;
		case "psychicfield":
          move.basePower *= 2;
          break;
		case "acidrain":
		case "smog":
          move.basePower *= 2;
          break;
		case "dragonforce":
          move.basePower *= 2;
          break;
		case "magnetosphere":
          move.basePower *= 2;
          break;
		case "fairydust":
          move.basePower *= 2;
          break;
		case "fallout":
          move.basePower *= 2;
          break;
		case "thunderstorm":
          move.basePower *= 2;
          break;
		case "shadowyaura":
          move.basePower *= 2;
          break;
      }
      this.debug("BP: " + move.basePower);
    }
  },
  webball: {
    num: 914,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Web Ball",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Bug",
    contestType: "Tough"
  },
  weepywail: {
    num: 1212,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Weepy Wail",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Water",
    contestType: "Cute"
  },
  whirlpool: {
    inherit: true,
	flags: { protect: 1, mirror: 1, hm: 1 }
  },
  whirlwindwind: {
    num: 1091,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Whirlwind Wind",
    pp: 20,
    priority: -6,
    flags: { reflectable: 1, mirror: 1, bypasssub: 1, allyanim: 1, wind: 1, noassist: 1, failcopycat: 1 },
    forceSwitch: true,
    secondary: null,
    target: "normal",
    type: "Wind",
    zMove: { boost: { spd: 1 } },
    contestType: "Clever"
  },
  wickedblow: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, punch: 1, legendary: 1 }
  },
  wickedlash: {
    num: 1192,
    accuracy: 100,
    basePower: 110,
    category: "Physical",
    name: "Wicked Lash",
    pp: 10,
    priority: 0,
    flags: { contact: 1, charge: 1, protect: 1, mirror: 1, slicing: 1, nosleeptalk: 1, failinstruct: 1 },
	critRatio: 2,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      if (["darkness", "eclipse"].includes(attacker.effectiveWeather())) {
        this.attrLastMove("[still]");
        this.addMove("-anim", attacker, move.name, defender);
        return;
      }
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Cool"
  },
  wildboltstorm: {
    inherit: true,
	flags: { protect: 1, mirror: 1, metronome: 1, wind: 1, legendary: 1 }
  },
  wilddance: {
    num: 1236,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Wild Dance",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, failinstruct: 1, sound: 1 },
    self: {
      volatileStatus: "lockedmove"
    },
    onAfterMove(pokemon) {
      if (pokemon.volatiles["lockedmove"] && pokemon.volatiles["lockedmove"].duration === 1) {
        pokemon.removeVolatile("lockedmove");
      }
    },
    secondary: null,
    target: "randomNormal",
    type: "Sound",
    contestType: "Cool"
  },
  wildroar: {
    num: 1204,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Wild Roar",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  wildroarsound: {
    num: 1206,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Wild Roar Sound",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1 },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Sound",
    contestType: "Cool"
  },
  windshear: {
    num: 915,
    accuracy: 100,
    basePower: 45,
    basePowerCallback(pokemon, target, move) {
      if (target.newlySwitched || this.queue.willMove(target)) {
        this.debug("Wind Shear damage boost");
        return move.basePower * 2;
      }
      this.debug("Wind Shear NOT boosted");
      return move.basePower;
    },
    category: "Special",
    name: "Wind Shear",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Flying"
  },
  wormhole: {
    num: 971,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "wormhole",
    pp: 30,
    priority: 1,
    flags: { speed: 1, legendary: 1 },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  wormholecosmic: {
    num: 1098,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "wormhole Cosmic",
    pp: 30,
    priority: 1,
    flags: { speed: 1, legendary: 1 },
    secondary: null,
    target: "normal",
    type: "Cosmic",
    contestType: "Beautiful"
  },
  zenithbreak: {
    num: 1294,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Zenith Break",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    self: {
      boosts: {
        atk: -1,
        def: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Tough"
  },
  zippyzap: {
    inherit: true,
	flags: { contact: 1, protect: 1, mirror: 1, speed: 1 }
  },
  zombiestrike: {
    num: 970,
    accuracy: 90,
    basePower: 90,
    category: "Physical",
    name: "Zombie Strike",
    pp: 15,
    priority: 0,
    flags: { contact:1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Tough"
  }
};
//# sourceMappingURL=moves.js.map
