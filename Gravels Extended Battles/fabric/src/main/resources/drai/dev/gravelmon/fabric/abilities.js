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
  pollution: {
    onStart(source) {
      this.field.setWeather("acidrain");
    },
    name: "Pollution",
    rating: 4,
    num: 302
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
