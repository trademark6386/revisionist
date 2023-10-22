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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  absolution: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      if (["darkness"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "darkness") {
        this.damage(target.baseMaxhp / 8, target, target);
      }
    },
    name: "Absolution",
    rating: 2,
    num: 313
  },
  allure: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Allure", "boost");
          activated = true;
        }
        if (pokemon.gender === "M" && target.gender === "F" || pokemon.gender === "F" && target.gender === "M") { 
		 if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ evasion: -1 }, target, pokemon, null, true);
        }
      }
	 }
    },
    name: "Allure",
    rating: 0,
    num: 309
  },
  amplifier: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Amplifier boost");
        return this.chainModify(1.5);
      }
    },
    name: "Amplifier",
    rating: 3.5,
    num: 314
  },
  athenian: {
    onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify(2);
    },
    name: "Athenian",
    rating: 5,
    num: 315
  },
  castlemoat: {
  onTryHitPriority: 1,
  onTryHit(target, source, move) {
    if (target !== source && move.type === "Water") {
      if (!this.boost({ spa: 1 })) {
        this.add("-immune", target, "[from] ability: Castle Moat");
      }
      return null;
    }
  },
  isBreakable: true,
  name: "Castle Moat",
  rating: 3,
  num: 316
  },
  conundrum: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(3, 10)) {
          source.addVolatile("confusion", this.effectState.target);
        }
      }
    },
    name: "Conundrum",
    rating: 1.5,
    num: 310
  },
  damp: {
    onAnyTryMove(target, source, effect) {
      if ([ "atomsplit", "explosion", "mindblown", "mistyexplosion", "selfdestruct"].includes(effect.id)) {
        this.attrLastMove("[still]");
        this.add("cant", this.effectState.target, "ability: Damp", effect, "[of] " + target);
        return false;
      }
    },
    onAnyDamage(damage, target, source, effect) {
      if (effect && effect.name === "Aftermath") {
        return false;
      }
    },
    isBreakable: true,
    name: "Damp",
    rating: 0.5,
    num: 6
  },
  digitize: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Digital";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Digitize",
    rating: 4,
    num: 307
  },
  eventhorizon: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(10, 10)) {
          source.addVolatile("trapped", target);
        }
      }
    },
  name: "Event Horizon",
  rating: 1.5,
  num: 317,
  },
  feedback: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
        if (!move.flags.contact && move.category !== "Status") {
            this.damage(source.baseMaxhp / 8, source, target);
        }
    },
    name: "Feedback",
    rating: 2.5,
    num: 311
  },
  fossilize: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Rock";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Fossilize",
    rating: 4,
    num: 308
  },
  foundry: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      if (move.type === "Rock" && !(move.isZ && move.category !== "Status")) {
        move.type = "Fire";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Foundry",
    rating: 4,
    num: 318
  },
  heliphobia: {
    onSourceBasePowerPriority: 17,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Light") {
        return this.chainModify(1.25);
      }
    },
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "darkness" || effect.id === "shadowyaura") {
        this.heal(target.baseMaxhp / 8);
      } else if (effect.id === "sunnyday" || effect.id === "desolateland") {
        this.damage(target.baseMaxhp / 8, target, target);
      }
    },
    isBreakable: true,
    name: "Heliphobia",
    rating: 3,
    num: 319
  },
  hubris: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spa: length }, source);
      }
    },
    name: "Hubris",
    rating: 3,
    num: 320
  },
  intoxicate: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Poison";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Intoxicate",
    rating: 4,
    num: 321
  },
  noctem: {
    onStart(source) {
      this.field.setWeather("darkness");
    },
    name: "Noctem",
    rating: 4,
    num: 322
  },
  orbitaltide: {
    onStart(source) {
      this.field.setTerrain("gravity");
    },
    name: "Orbital Tide",
    rating: 4,
    num: 299
  },
  perforate: {
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Ghost"] = true;
      }
    },
    name: "Perforate",
    rating: 3,
    num: 300
  },
  permafrost: {
    onModifyDef(def, pokemon) {
      if (this.field.isWeather(["hail", "snow"])) {
        return this.chainModify(1.5);
      }
    },
    name: "Permafrost",
    rating: 3,
    num: 301
  },
  phototroph: {
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella")) return;
        const weatherId = effect.id;
      if (weatherId === "sunnyday" || weatherId === "desolateland") {
        this.heal(target.baseMaxhp / 16);
      }
    },
    name: "phototroph",
    rating: 1.5,
    num: 323
  },
  pollution: {
    onStart(source) {
      this.field.setWeather("acidrain");
    },
    name: "Pollution",
    rating: 4,
    num: 302
  },
  psychocall: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Psychic" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Psycho Call boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Psychic" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Psycho Call boost");
        return this.chainModify(1.5);
      }
    },
    name: "Psycho Call",
    rating: 3.5,
    num: 324
  },
  psychout: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Psych Out", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spa: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Psych Out",
    rating: 3.5,
    num: 303
  },
  quickdraw: {
    onModifyPriority(priority, pokemon, target, move) {
        if (move && !['Detect', 'Endure', 'Protect', 'Quick Guard', 'Wide Guard'].includes(move.name)) {
            return 0;
        }
        return priority;
    },
    name: "Quickdraw",
    rating: 4,
    num: 312
  },
  scavenger: {
    onSourceAfterFaint(length, pokemon, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.heal(pokemon.baseMaxhp / 4);
      }
    },
    name: "Scavenger",
    rating: 3.5,
    num: 304
  },
  shadowcall: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Dark" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Shadow Call boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Dark" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Shadow Call boost");
        return this.chainModify(1.5);
      }
    },
    name: "Shadow Call",
    rating: 3.5,
    num: 325
  },
  shadowdance: {
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["darkness", "shadowyaura"])) {
        return this.chainModify(2);
      }
    },
    name: "Shadow Dance",
    rating: 3,
    num: 326
  },
  shadowsynergy: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Dark") {
        this.debug("Shadow Synergy boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Dark") {
        this.debug("Shadow Synergy boost");
        return this.chainModify(1.5);
      }
    },
    name: "Shadow Synergy ",
    rating: 3.5,
    num: 327
  },
  speedswap: {
    onStart(source) {
      if (this.field.isTerrain('trickroom')) {
       this.field.clearTerrain();
      } else {
       this.field.setTerrain('trickroom');
      }
    },
    name: "Speed Swap",
    rating: 4,
    num: 328
  },
  spiritcall: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Ghost" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Spirit Call boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Ghost" && attacker.hp <= attacker.maxhp / 2) {
        this.debug("Spirit Call boost");
        return this.chainModify(1.5);
      }
    },
    name: "Spirit Call",
    rating: 3.5,
    num: 329
  },
  windforce: {
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Flying" || move.type === "Wind") {
        if (!this.boost({ spe: 1 })) {
          this.add("-immune", target, "[from] ability: Wind Force");
        }
        return null;
      }
    },
    onAllyTryHitSide(target, source, move) {
      if (source === this.effectState.target || !target.isAlly(source))
        return;
      if (move.type === "Flying" || move.type === "Wind") {
        this.boost({ spe: 1 }, this.effectState.target);
      }
    },
    isBreakable: true,
    name: "Wind Force",
    rating: 3,
    num: 330
  },
  sunbathe: {
    onWeather(target, source, effect) {
      if (effect.id === "sunnyday" || effect.id === "desolateland") {
        this.heal(target.baseMaxhp / 16);
      }
    },
    name: "Sunbathe",
    rating: 1,
    num: 305
  },
  terrorize: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && !noModifyType.includes(move.id) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Ghost";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Terrorize",
    rating: 4,
    num: 306
  }
};
//# sourceMappingURL=abilities.js.map
