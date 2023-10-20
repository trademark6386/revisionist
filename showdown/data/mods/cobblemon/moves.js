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
  achillesheel: {
    num: 967,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Achilles Heel",
    pp: 15,
    priority: 0,
	onEffectiveness(typeMod, target, type) {
      if (type === "Normal" || type === "Fire" || type === "Water" || type === "Electric" || type === "Grass" || type === "Ice" || type === "Fighting" || type === "Poison" || type === "Ground" || type === "Flying" || type === "Psychic" || type === "Bug" || type === "Rock" || type === "Dragon" || type === "Dark" || type === "Steel" || type === "Fairy" || type === "Wind" || type === "Cosmic" || type === "Sound" || type === "Nuclear" || type === "Digital" || type === "Plastic" || type === "Light" || type === "Crystal" || type === "Slime")
        return 1;
    },
    flags: { protect: 1 },
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
  atomicpunch: {
    num: 972,
    accuracy: 95,
    basePower: 80,
    category: "Physical",
    name: "Atomic Punch",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
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
  bansheesscream: {
    num: 996,
    accuracy: 80,
    basePower: 100,
    category: "Special",
    name: "Banshee's Scream",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
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
    basePower: 80,
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
  bugbuzzsound: {
    num: 951,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Bug Out",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, distance: 1 },
    onModifyMove(move, pokemon, target) {
      const bugTypeEffectiveness = defender.runEffectiveness(move);
      move.type = "Sound";
      const soundTypeEffectiveness = defender.runEffectiveness(move);
      move.type = "Bug";
      if (bugTypeEffectiveness === soundTypeEffectiveness) {
        if(pokemon.getTypes(false, true).includes("Sound")){
          move.type = "Sound";
        }
      } else if(soundTypeEffectiveness>bugTypeEffectiveness){
        move.type = "Sound"
      }
    },
    recoil: [33, 100],
    secondary: null,
    target: "any",
    type: "Bug",
    contestType: "Cool"
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
  crystalrush: {
    num: 968,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Crystal Rush",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Crystal",
    contestType: "Beautiful"
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
      failinstruct: 1
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
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Beautiful"
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
      const sideConditions = ["spikes", "toxicspikes", "stealthrock", "stickyweb", "gmaxsteelsurge"];
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
      const sideConditions = ["spikes", "toxicspikes", "stealthrock", "stickyweb", "gmaxsteelsurge"];
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
    flags: { contact: 1, protect: 1, mirror: 1 },
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
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Fire",
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
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
  },
  flash: {
    inherit: true,
    type: "Light"
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
  flashpulse: {
    num: 996,
    accuracy: 90,
    basePower: 85,
    category: "Special",
    name: "Flash Pulse",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Light",
    contestType: "Clever"
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
  goldenfist: {
    num: 981,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Golden Fist",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Clever"
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
  growl: {
    inherit: true,
    type: "Sound"
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
  healbell: {
    inherit: true,
    type: "Sound"
  },
  howl: {
    inherit: true,
    type: "Sound"
  },
  hypervoice: {
    inherit: true,
    type: "Sound"
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
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  jetstrike: {
    num: 906,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Jet Strike",
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Flying",
    contestType: "Beautiful"
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
  lightscreen: {
    inherit: true,
    type: "Light"
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
  miraclewill: {
    num: 964,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Miracle Will",
    pp: 10,
    priority: 0,
    flags: { bullet: 1, protect: 1, mirror: 1, allyanim: 1 },
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
  nanorepair: {
    num: 925,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nanorepair",
    pp: 5,
    priority: 0,
    flags: { snatch: 1, heal: 1 },
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
  nobleroar: {
    inherit: true,
    type: "Sound"
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
  oceanswrath: {
    num: 989,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Ocean's Wrath",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Beautiful"
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
  perishsong: {
    inherit: true,
    type: "Sound"
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
  protonbeam: {
    num: 990,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Proton Beam",
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
    type: "Nuclear",
    contestType: "Beautiful"
  },
  psybolt: {
    num: 911,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Psybolt",
    pp: 30,
    priority: 1,
    flags: { protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
  },
  quantumleap: {
    num: 991,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Quantum Leap",
    pp: 5,
    priority: 0,
    flags: { contact: 1, charge: 1, mirror: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1 },
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
  reflect: {
    inherit: true,
    type: "Light"
  },
  relicsong: {
    inherit: true,
    type: "Sound"
  },
  roar: {
    inherit: true,
    type: "Sound"
  },
  round: {
    inherit: true,
    type: "Sound"
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
  screech: {
    inherit: true,
    type: "Sound"
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
  seedyrecede: {
    num: 956,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Seedy Recede",
    pp: 20,
    priority: -6,
    flags: { contact: 1, protect: 1, mirror: 1 },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Cute"
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
  sing: {
    inherit: true,
    type: "Sound"
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
  snore: {
    inherit: true,
    type: "Sound"
  },
  solarbeam: {
    inherit: true,
    onBasePower(basePower, pokemon, target) {
      const weakWeathers = ["raindance", "primordialsea", "sandstorm", "hail", "snow", "darkness"];
      if (weakWeathers.includes(pokemon.effectiveWeather())) {
        this.debug("weakened by weather");
        return this.chainModify(0.5);
      }
    }
  },
  spotlight: {
    inherit: true,
    type: "Light"
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
  suddenstrike: {
    num: 994,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Sudden Strike",
    pp: 30,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1 },
    secondary: null,
    target: "normal",
    type: "Dark",
    contestType: "Beautiful"
  },
  supersonic: {
    inherit: true,
    type: "Sound"
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
  thunder: {
    inherit: true,
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
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
      chance: 100,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Flying",
    contestType: "Tough"
  },
  uproar: {
    inherit: true,
    type: "Sound"
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
        case "sandstorm":
          move.type = "Rock";
          break;
        case "hail":
        case "snow":
          move.type = "Ice";
          break;
		case "darkness":
          move.type = "Dark";
          break;
		case "acidrain":
          move.type = "Poison";
          break;
		case "fallout":
          move.type = "Nuclear";
          break;
		case "thunderstorm":
          move.type = "Electric";
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
        case "sandstorm":
          move.basePower *= 2;
          break;
        case "hail":
        case "snow":
          move.basePower *= 2;
          break;
		case "darkness":
          move.basePower *= 2;
          break;
		case "acidrain":
          move.basePower *= 2;
          break;
		case "fallout":
          move.basePower *= 2;
          break;
		case "thunderstorm":
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
    flags: {},
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Beautiful"
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
