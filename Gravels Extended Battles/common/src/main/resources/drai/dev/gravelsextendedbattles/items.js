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
var items_exports = {};
__export(items_exports, {
  Items: () => Items
});
module.exports = __toCommonJS(items_exports);
const Items = {
  analysismap: {
    name: "Analysis Map",
    fling: {
      basePower: 0
    },
    spritenum: 3016,
    onModifyAtk(atk, user) {
      if (user.species.name === "Terubim") {
        return this.chainModify(2);
      }
	},
    itemUser: ["Terubim"],
    num: 3016,
    gen: 8,
    isNonstandard: "Past"
  },
  boltorb: {
    name: "Bolt Orb",
    spritenum: 3000,
    fling: {
      basePower: 30,
      status: "par"
    },
    onResidualOrder: 28,
    onResidualSubOrder: 3,
    onResidual(pokemon) {
      pokemon.trySetStatus("par", pokemon);
    },
    num: 3000,
    gen: 4
  },
  cacturnite: {
    name: "Cacturnite",
    spritenum: 3028,
    megaStone: "Cacturne-Mega",
    megaEvolves: "Cacturne",
    itemUser: ["Cacturne"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3028,
    gen: 6,
    isNonstandard: "Past"
  },
  chatotite: {
    name: "Chatotite",
    spritenum: 3029,
    megaStone: "Chatot-Mega",
    megaEvolves: "Chatot",
    itemUser: ["Chatot"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3029,
    gen: 6,
    isNonstandard: "Past"
  },
  clouddust: {
    name: "Cloud dust",
    fling: {
      basePower: 10
    },
    spritenum: 3001,
    onSwitchIn(pokemon) {
      this.effectState.switchingIn = true;
    },
    onStart(pokemon) {
      if (this.effectState.switchingIn) {
        this.add("-item", pokemon, "Cloud Dust");
        this.effectState.switchingIn = false;
      }
      this.eachEvent("WeatherChange", this.effect);
    },
    onEnd(pokemon) {
      this.eachEvent("WeatherChange", this.effect);
    },
    suppressWeather: true,
    num: 3001,
    gen: 9,
    isNonstandard: "Past"
  },
  corruptedseed: {
    name: "Corrupted Seed",
    spritenum: 3002,
    fling: {
      basePower: 30
    },
    onSourceTryHeal(damage, target, source, effect) {
      this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
      const canOoze = ["drain", "leechseed", "strengthsap"];
      if (canOoze.includes(effect.id)) {
        this.damage(damage);
        return 0;
      }
    },
    num: 3002,
    gen: 2
  },
  crawdite: {
    name: "Crawdite",
    spritenum: 3030,
    megaStone: "Crawdaunt-Mega",
    megaEvolves: "Crawdaunt",
    itemUser: ["Crawdaunt"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3030,
    gen: 6,
    isNonstandard: "Past"
  },
  cryogonite: {
    name: "Cryogonite",
    spritenum: 3031,
    megaStone: "Cryogonal-Mega",
    megaEvolves: "Cryogonal",
    itemUser: ["Cryogonal"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3031,
    gen: 6,
    isNonstandard: "Past"
  },
  crystalfragment: {
    name: "Crystal Fragment",
    spritenum: 3032,
    megaStone: "Metagross-Delta-Ruin-Crystal",
    megaEvolves: "Metagross-Delta-Ruin",
    itemUser: ["Metagross-Delta-Ruin"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3032,
    gen: 6,
    isNonstandard: "Past"
  },
  cursedsash: {
    name: "Cursed Sash",
    spritenum: 3018,
    fling: {
      basePower: 10
    },
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp) {
        this.add("-activate", target, "item: Cursed Sash");
        this.boost({ def: -2, spd: -2 }, target);
        target.useItem();
        return 0;
      }
	},
    num: 3018,
    gen: 4
  },
  darkrock: {
    name: "Dark Rock",
    spritenum: 3003,
    fling: {
      basePower: 60
    },
    num: 3003,
    gen: 4
  },
  deltabisharpite: {
    name: "Delta Bisharpite",
    spritenum: 3033,
    megaStone: "Bisharp-Delta-Mega",
    megaEvolves: "Bisharp-Delta",
    itemUser: ["Bisharp-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3033,
    gen: 6,
    isNonstandard: "Past"
  },
  deltablastoisinite: {
    name: "Delta Blastoisinite",
    spritenum: 3034,
    megaStone: "Blastoise-Delta-Mega",
    megaEvolves: "Blastoise-Delta",
    itemUser: ["Blastoise-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3034,
    gen: 6,
    isNonstandard: "Past"
  },
  deltacameruptite: {
    name: "Delta Cameruptite",
    spritenum: 3035,
    megaStone: "Camerupt-Delta-Mega",
    megaEvolves: "Camerupt-Delta",
    itemUser: ["Camerupt-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3035,
    gen: 6,
    isNonstandard: "Past"
  },
  deltacharizardite: {
    name: "Delta Charizardite",
    spritenum: 3036,
    megaStone: "Charizard-Delta-Mega",
    megaEvolves: "Charizard-Delta",
    itemUser: ["Charizard-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3036,
    gen: 6,
    isNonstandard: "Past"
  },
  deltaetigirafarigite: {
    name: "Delta Etigirafarigite",
    spritenum: 3037,
    megaStone: "Girafarig-Delta-Mega",
    megaEvolves: "Girafarig-Delta",
    itemUser: ["Girafarig-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3037,
    gen: 6,
    isNonstandard: "Past"
  },
  deltafroslassite: {
    name: "Delta Froslassite",
    spritenum: 3038,
    megaStone: "Froslass-Delta-Mega",
    megaEvolves: "Froslass-Delta",
    itemUser: ["Froslass-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3038,
    gen: 6,
    isNonstandard: "Past"
  },
  deltagalladite: {
    name: "Delta Galladite",
    spritenum: 3039,
    megaStone: "Gallade-Delta-Mega",
    megaEvolves: "Gallade-Delta",
    itemUser: ["Gallade-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3039,
    gen: 6,
    isNonstandard: "Past"
  },
  deltagardevoirite: {
    name: "Delta Gardevoirite",
    spritenum: 3040,
    megaStone: "Gardevoir-Delta-Mega",
    megaEvolves: "Gardevoir-Delta",
    itemUser: ["Gardevoir-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3040,
    gen: 6,
    isNonstandard: "Past"
  },
  deltaglalitite: {
    name: "Delta Glalitite",
    spritenum: 3041,
    megaStone: "Glalie-Delta-Mega",
    megaEvolves: "Glalie-Delta",
    itemUser: ["Glalie-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3041,
    gen: 6,
    isNonstandard: "Past"
  },
  deltalopunnite: {
    name: "Delta Lopunnite",
    spritenum: 3042,
    megaStone: "Lopunny-Delta-Mega",
    megaEvolves: "Lopunny-Delta",
    itemUser: ["Lopunny-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3042,
    gen: 6,
    isNonstandard: "Past"
  },
  deltalucarionite: {
    name: "Delta Lucarionite",
    spritenum: 3043,
    megaStone: "Lucario-Delta-Mega",
    megaEvolves: "Lucario-Delta",
    itemUser: ["Lucario-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3043,
    gen: 6,
    isNonstandard: "Past"
  },
  deltamawilite: {
    name: "Delta Mawilite",
    spritenum: 3044,
    megaStone: "Mawile-Delta-Mega",
    megaEvolves: "Mawile-Delta",
    itemUser: ["Mawile-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3044,
    gen: 6,
    isNonstandard: "Past"
  },
  deltamedichamite: {
    name: "Delta Medichamite",
    spritenum: 3045,
    megaStone: "Medicham-Delta-Mega",
    megaEvolves: "Medicham-Delta",
    itemUser: ["Medicham-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3045,
    gen: 6,
    isNonstandard: "Past"
  },
  deltametagrossiteruin: {
    name: "Delta Metagrossite Ruin",
    spritenum: 3046,
    megaStone: "Metagross-Delta-Ruin-Mega",
    megaEvolves: "Metagross-Delta-Ruin",
    itemUser: ["Metagross-Delta-Ruin"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3046,
    gen: 6,
    isNonstandard: "Past"
  },
  deltametagrossitespider: {
    name: "Delta Metagrossite Spider",
    spritenum: 3047,
    megaStone: "Metagross-Delta-Spider-Mega",
    megaEvolves: "Metagross-Delta-Spider",
    itemUser: ["Metagross-Delta-Spider"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3047,
    gen: 6,
    isNonstandard: "Past"
  },
  deltamilotite: {
    name: "Delta Milotite",
    spritenum: 3048,
    megaStone: "Milotic-Delta-Mega",
    megaEvolves: "Milotic-Delta",
    itemUser: ["Milotic-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3048,
    gen: 6,
    isNonstandard: "Past"
  },
  deltapidgeotite: {
    name: "Delta Pidgeotite",
    spritenum: 3049,
    megaStone: "Pidgeot-Delta-Mega",
    megaEvolves: "Pidgeot-Delta",
    itemUser: ["Pidgeot-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3049,
    gen: 6,
    isNonstandard: "Past"
  },
  deltasablenite: {
    name: "Delta Sablenite",
    spritenum: 3050,
    megaStone: "Sableye-Delta-Mega",
    megaEvolves: "Sableye-Delta",
    itemUser: ["Sableye-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3050,
    gen: 6,
    isNonstandard: "Past"
  },
  deltascizorite: {
    name: "Delta Scizorite",
    spritenum: 3051,
    megaStone: "Scizor-Delta-Mega",
    megaEvolves: "Scizor-Delta",
    itemUser: ["Scizor-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3051,
    gen: 6,
    isNonstandard: "Past"
  },
  deltasunflorite: {
    name: "Delta Sunflorite",
    spritenum: 3052,
    megaStone: "Sunflora-Delta-Mega",
    megaEvolves: "Sunflora-Delta",
    itemUser: ["Sunflora-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3052,
    gen: 6,
    isNonstandard: "Past"
  },
  deltatyphlosionite: {
    name: "Delta Typhlosionite",
    spritenum: 3053,
    megaStone: "Typhlosion-Delta-Mega",
    megaEvolves: "Typhlosion-Delta",
    itemUser: ["Typhlosion-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3053,
    gen: 6,
    isNonstandard: "Past"
  },
  deltavenusaurite: {
    name: "Delta Venusaurite",
    spritenum: 3054,
    megaStone: "Venusaur-Delta-Mega",
    megaEvolves: "Venusaur-Delta",
    itemUser: ["Venusaur-Delta"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3054,
    gen: 6,
    isNonstandard: "Past"
  },
  donphanite: {
    name: "Donphanite",
    spritenum: 3055,
    megaStone: "Donphan-Mega",
    megaEvolves: "Donphan",
    itemUser: ["Donphan"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3055,
    gen: 6,
    isNonstandard: "Past"
  },
  deltavolcaronaarmor: {
    name: "Delta Volcarona Armor",
    spritenum: 3026,
    onTakeItem(item, pokemon, source) {
      if (pokemon.baseSpecies.num === 637 && pokemon.species.name === "Volcarona-Delta-Armored") {
        // Revert to "Volcarona-Delta" if item is removed from "Volcarona-Delta-Armored"
        pokemon.formeChange("Volcarona-Delta", item, true);
        this.add('-formechange', pokemon, 'Volcarona-Delta');
        return true;
      }
      return false;
	},
    forcedForme: "Volcarona-Delta-Armored",
    itemUser: ["Volcarona-Delta-Armored"],
    num: 3026,
    gen: 8
  },
  eevite: {
    name: "Eevite",
    spritenum: 3062,
    megaStone: "Eevee-Mega",
    megaEvolves: "Eevee",
    itemUser: ["Eevee"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3062,
    gen: 6,
    isNonstandard: "Past"
  },
  etigirafarigite: {
    name: "Etigirafarigite",
    spritenum: 3056,
    megaStone: "Girafarig-Mega",
    megaEvolves: "Girafarig",
    itemUser: ["Girafarig"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3056,
    gen: 6,
    isNonstandard: "Past"
  },
  everlite: {
    name: "EVerlite",
    spritenum: 3004,
    fling: {
      basePower: 40
    },
    onModifyDefPriority: 2,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 3004,
    gen: 5
  },
  feraligatite: {
    name: "Feraligatite",
    spritenum: 3057,
    megaStone: "Feraligatr-Mega",
    megaEvolves: "Feraligatr",
    itemUser: ["Feraligatr"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3057,
    gen: 6,
    isNonstandard: "Past"
  },
  flygonarmor: {
    name: "Flygon Armor",
    spritenum: 3023,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 330 || pokemon.baseSpecies.num === 330) {
        return false;
      }
      return true;
    },
    forcedForme: "Flygon-Armored",
    itemUser: ["Flygon-Armored"],
    num: 3023,
    gen: 8
  },
  flygonite: {
    name: "Flygonite",
    spritenum: 3058,
    megaStone: "Flygon-Mega",
    megaEvolves: "Flygon",
    itemUser: ["Flygon"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3058,
    gen: 6,
    isNonstandard: "Past"
  },
  forecastmap: {
    name: "Forecast Map",
    fling: {
      basePower: 0
    },
    spritenum: 3017,
	onModifySpD(spd, user) {
      if (user.species.name === "Terubim") {
        return this.chainModify(2); // Doubles the Special Defense stat
      }
	},
    itemUser: ["Terubim"],
    num: 3017,
    gen: 8,
    isNonstandard: "Past"
  },
  foulrock: {
    name: "Foul Rock",
    spritenum: 3005,
    fling: {
      basePower: 60
    },
    num: 3005,
    gen: 4
  },
  froslassite: {
    name: "Froslassite",
    spritenum: 3059,
    megaStone: "Froslass-Mega",
    megaEvolves: "Froslass",
    itemUser: ["Froslass"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3059,
    gen: 6,
    isNonstandard: "Past"
  },
  gothitite: {
    name: "Gothitite",
    spritenum: 3060,
    megaStone: "Gothitelle-Mega",
    megaEvolves: "Gothitelle",
    itemUser: ["Gothitelle"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3060,
    gen: 6,
    isNonstandard: "Past"
  },
  hafliberry: {
    name: "Hafli Berry",
    spritenum: 3006,
    isBerry: true,
    naturalGift: {
      basePower: 60,
      type: "Nuclear"
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.type === "Nuclear" && target.getMoveHitData(move).typeMod > 0) {
        const hitSub = target.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target.eatItem()) {
          this.debug("-50% reduction");
          this.add("-enditem", target, this.effect, "[weaken]");
          return this.chainModify(0.5);
        }
      }
    },
    onEat() {
    },
    num: 3006,
    gen: 4
  },
  hailstone: {
    name: "Hailstone",
    spritenum: 3019,
    fling: {
      basePower: 60
    },
	onStart(source) {
      this.field.setWeather("hail");
    },
    num: 3019,
    gen: 8,
    isNonstandard: "Past"
  },
  haxorite: {
    name: "Haxorite",
    spritenum: 3061,
    megaStone: "Haxorus-Mega",
    megaEvolves: "Haxorus",
    itemUser: ["Haxorus"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3061,
    gen: 6,
    isNonstandard: "Past"
  },
  hydreigonite: {
    name: "Hydreigonite",
    spritenum: 3063,
    megaStone: "Hydreigon-Mega",
    megaEvolves: "Hydreigon",
    itemUser: ["Hydreigon"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3063,
    gen: 6,
    isNonstandard: "Past"
  },
  iceshard: {
    name: "Ice Shard",
    spritenum: 3007,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Ice") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3007,
    gen: 2
  },
  iveolite: {
    name: "Iveolite",
    spritenum: 3008,
    fling: {
      basePower: 40
    },
    onModifyAtkPriority: 2,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpaPriority: 2,
    onModifySpa(spa, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 3008,
    gen: 5
  },
  jirachite: {
    name: "Jirachite",
    spritenum: 3064,
    megaStone: "Jirachi-Mega",
    megaEvolves: "Jirachi",
    itemUser: ["Jirachi"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3064,
    gen: 6,
    isNonstandard: "Past"
  },
  leavannyarmor: {
    name: "Leavanny Armor",
    spritenum: 3024,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 542 || pokemon.baseSpecies.num === 542) {
        return false;
      }
      return true;
    },
    forcedForme: "Leavanny-Armored",
    itemUser: ["Leavanny-Armored"],
    num: 3024,
    gen: 8
  },
  longclub: {
    name: "Long Club",
    fling: {
      basePower: 60
    },
    spritenum: 3009,
    onModifyCritRatio(critRatio, user) {
      if (["terathwack"].includes(this.toID(user.baseSpecies.baseSpecies))) {
        return critRatio + 2;
      }
    },
    itemUser: ["Terathwack"],
    num: 3009,
    gen: 9,
    isNonstandard: "Past"
  },
  magcargonite: {
    name: "Magcargonite",
    spritenum: 3065,
    megaStone: "Magcargo-Mega",
    megaEvolves: "Magcargo",
    itemUser: ["Magcargo"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3065,
    gen: 6,
    isNonstandard: "Past"
  },
  marowite: {
    name: "Marowite",
    spritenum: 3066,
    megaStone: "Marowak-Mega",
    megaEvolves: "Marowak",
    itemUser: ["Marowak"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3066,
    gen: 6,
    isNonstandard: "Past"
  },
  meganiumite: {
    name: "Meganiumite",
    spritenum: 3067,
    megaStone: "Meganium-Mega",
    megaEvolves: "Meganium",
    itemUser: ["Meganium"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3067,
    gen: 6,
    isNonstandard: "Past"
  },
  mewtwoarmor: {
    name: "Mewtwo Armor",
    spritenum: 3027,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 150 || pokemon.baseSpecies.num === 150) {
        return false;
      }
      return true;
    },
    forcedForme: "Mewtwo-Armored",
    itemUser: ["Mewtwo-Armored"],
    num: 3027,
    gen: 8
  },
  milotite: {
    name: "Milotite",
    spritenum: 3068,
    megaStone: "Milotic-Mega",
    megaEvolves: "Milotic",
    itemUser: ["Milotic"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3068,
    gen: 6,
    isNonstandard: "Past"
  },
  miltankite: {
    name: "Miltankite",
    spritenum: 3069,
    megaStone: "Miltank-Mega",
    megaEvolves: "Miltank",
    itemUser: ["Miltank"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3069,
    gen: 6,
    isNonstandard: "Past"
  },
  mossshard: {
    name: "Moss Shard",
    spritenum: 3010,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Grass") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3010,
    gen: 2
  },
  polishedsphere: {
    name: "Polished Sphere",
    spritenum: 3013,
    fling: {
      basePower: 30
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmantis") {
        return this.chainModify(1.2);
      }
    },
	onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmantis") {
        return this.chainModify(1.2);
      }
    },
    itemUser: ["Enigmantis"],
    num: 3013,
    gen: 3
  },
  politoedite: {
    name: "Politoedite",
    spritenum: 3070,
    megaStone: "Politoed-Mega",
    megaEvolves: "Politoed",
    itemUser: ["Politoed"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3070,
    gen: 6,
    isNonstandard: "Past"
  },
  poliwrathite: {
    name: "Poliwrathite",
    spritenum: 3071,
    megaStone: "Poliwrath-Mega",
    megaEvolves: "Poliwrath",
    itemUser: ["Poliwrath"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3071,
    gen: 6,
    isNonstandard: "Past"
  },
  prettyribbon: {
    name: "Pretty Ribbon",
    spritenum: 3011,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Fairy") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3011,
    gen: 2
  },
  raggedpebble: {
    name: "Ragged Pebble",
    spritenum: 3012,
    fling: {
      basePower: 30
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmite") {
        return this.chainModify(1.2);
      }
    },
	onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmite") {
        return this.chainModify(1.2);
      }
    },
    itemUser: ["Enigmite"],
    num: 3012,
    gen: 3
  },
  reuniclite: {
    name: "Reuniclite",
    spritenum: 3072,
    megaStone: "Reuniclus-Mega",
    megaEvolves: "Reuniclus",
    itemUser: ["Reuniclus"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3072,
    gen: 6,
    isNonstandard: "Past"
  },
  shiftrite: {
    name: "Shiftrite",
    spritenum: 3073,
    megaStone: "Shiftry-Mega",
    megaEvolves: "Shiftry",
    itemUser: ["Shiftry"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3073,
    gen: 6,
    isNonstandard: "Past"
  },
  spicycurry: {
    name: "Spicy Curry",
    spritenum: 3021,
    fling: {
      basePower: 30,
      status: "brn"
    },
    onResidualOrder: 28,
    onResidualSubOrder: 3,
    onResidual(pokemon) {
      pokemon.trySetStatus("brn", pokemon);
    },
	onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Fire" && !user.hasType("Fire")) {
        return this.chainModify([5120, 4096]);
      }
	},
    num: 3021,
    gen: 4
  },
  spiritombite: {
    name: "Spiritombite",
    spritenum: 3074,
    megaStone: "Spiritomb-Mega",
    megaEvolves: "Spiritomb",
    itemUser: ["Spiritomb"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3074,
    gen: 6,
    isNonstandard: "Past"
  },
  steelixitefire: {
    name: "Steelixite Fire",
    spritenum: 3075,
    megaStone: "Steelix-Mega-Fire",
    megaEvolves: "Steelix",
    itemUser: ["Steelix"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3075,
    gen: 6,
    isNonstandard: "Past"
  },
  stunfiskite: {
    name: "Stunfiskite",
    spritenum: 3076,
    megaStone: "Stunfisk-Mega",
    megaEvolves: "Stunfisk",
    itemUser: ["Stunfisk"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3076,
    gen: 6,
    isNonstandard: "Past"
  },
  sudowoodite: {
    name: "Sudowoodite",
    spritenum: 3077,
    megaStone: "Sudowoodo-Mega",
    megaEvolves: "Sudowoodo",
    itemUser: ["Sudowoodo"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3077,
    gen: 6,
    isNonstandard: "Past"
  },
  sunflorite: {
    name: "Sunflorite",
    spritenum: 3078,
    megaStone: "Sunflora-Mega",
    megaEvolves: "Sunflora",
    itemUser: ["Sunflora"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3078,
    gen: 6,
    isNonstandard: "Past"
  },
  thirdeye: {
    name: "Third Eye",
    fling: {
      basePower: 20
    },
    spritenum: 3014,
    onStart(pokemon) {
      for (const target of pokemon.foes()) {
        if (target.ability) {
          this.add("-item", target, target.getAbility().name, "[from] item: X-Ray Specs", "[of] " + pokemon, "[identify]");
        }
      }
    },
    num: 3014,
    gen: 9,
    isNonstandard: "Past"
  },
  totemofundying: {
    name: "Totem of Undying",
    spritenum: 3020,
    fling: {
      basePower: 10
    },
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        if (target.useItem()) {
          return target.hp - 1;
        }
      }
    },
    num: 3020,
    gen: 4
  },
  typhlosionite: {
    name: "Typhlosionite",
    spritenum: 3079,
    megaStone: "Typhlosion-Mega",
    megaEvolves: "Typhlosion",
    itemUser: ["Typhlosion"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3079,
    gen: 6,
    isNonstandard: "Past"
  },
  tyranitararmor: {
    name: "Tyranitar Armor",
    spritenum: 3022,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 248 || pokemon.baseSpecies.num === 248) {
        return false;
      }
      return true;
    },
    forcedForme: "Tyranitar-Armored",
    itemUser: ["Tyranitar-Armored"],
    num: 3022,
    gen: 8
  },
  xrayspecs: {
    name: "X-Ray Specs",
    fling: {
      basePower: 10
    },
    spritenum: 3015,
    onStart(pokemon) {
      for (const target of pokemon.foes()) {
        if (target.item) {
          this.add("-item", target, target.getItem().name, "[from] item: X-Ray Specs", "[of] " + pokemon, "[identify]");
        }
      }
    },
    num: 3015,
    gen: 9,
    isNonstandard: "Past"
  },
  zebstrikite: {
    name: "Zebstrikite",
    spritenum: 3080,
    megaStone: "Zebstrika-Mega",
    megaEvolves: "Zebstrika",
    itemUser: ["Zebstrika"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3080,
    gen: 6,
    isNonstandard: "Past"
  },
  zekromarmor: {
    name: "Zekrom Armor",
    spritenum: 3025,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 644 || pokemon.baseSpecies.num === 644) {
        return false;
      }
      return true;
    },
    forcedForme: "Zekrom-Armored",
    itemUser: ["Zekrom-Armored"],
    num: 3025,
    gen: 8
  },
  zoronite: {
    name: "Zoronite",
    spritenum: 3081,
    megaStone: "Zoroark-Mega",
    megaEvolves: "Zoroark",
    itemUser: ["Zoroark"],
    onTakeItem(item, source) {
      if (item.megaEvolves === source.baseSpecies.baseSpecies)
        return false;
      return true;
    },
    num: 3081,
    gen: 6,
    isNonstandard: "Past"
  }
};
//# sourceMappingURL=items.js.map
