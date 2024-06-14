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
    num: 331
  },
  acceleration: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["speed"]) {
        this.debug("Acceleration boost");
        return this.chainModify(1.5);
      }
    },
    name: "Acceleration",
    rating: 3.5,
    num: 331
  },
  adrenaline: {
    onDamage(damage, target, source, effect) {
      if (effect.effectType === "Move" && !effect.multihit && (!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility("sheerforce")))) {
        this.effectState.checkedAdrenaline = false;
      } else {
        this.effectState.checkedAdrenaline = true;
      }
    },
    onTryEatItem(item) {
      const healingItems = [
        "aguavberry",
        "enigmaberry",
        "figyberry",
        "iapapaberry",
        "magoberry",
        "sitrusberry",
        "wikiberry",
        "oranberry",
        "berryjuice"
      ];
      if (healingItems.includes(item.id)) {
        return this.effectState.checkedAdrenaline;
      }
      return true;
    },
    onAfterMoveSecondary(target, source, move) {
      this.effectState.checkedAdrenaline = true;
      if (!source || source === target || !target.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
        this.boost({ spe: Math.floor(target.getStat('spe', false, false) / 2) }, target, target);
      }
    },
    name: "Adrenaline",
    rating: 4,
    num: 393
  },
  aircontrol: {
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
        move.type = "Flying";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Air Control",
    rating: 4,
    num: 373
  },
  alchemicpower: {
    onAllyFaint(target) {
      if (!this.effectState.target.hp)
        return;
      const ability = target.getAbility();
      const additionalBannedAbilities = [
        "alchemicpower",
		"noability",
        "flowergift",
        "forecast",
        "hungerswitch",
        "illusion",
        "imposter",
        "neutralizinggas",
        "powerofalchemy",
        "receiver",
        "trace",
        "wonderguard"
      ];
      if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability))
        return;
      if (this.effectState.target.setAbility(ability)) {
        this.add("-ability", this.effectState.target, ability, "[from] ability: Alchemic Power", "[of] " + target);
      }
    },
	name: "Alchemic POwer",
	rating: 2,
	num: 403
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
  amalgam: {
    onPrepareHit(source, target, move) {
      if (this.effectState.protean)
        return;
      if (move.hasBounced || move.flags["futuremove"] || move.sourceEffect === "snatch")
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.effectState.protean = true;
        this.add("-start", source, "typechange", type, "[from] ability: Amalgam");
      }
    },
    onSwitchIn(pokemon) {
      delete this.effectState.protean;
    },
    name: "Amalgam",
    rating: 4,
    num: 374
  },
  ambush: {
    onModifyMove(move) {
      if (this.field.isWeather("eclipse")) {
        move.accuracy = true;
      }
    },
    name: "Ambush",
    rating: 2.5,
    num: 387
  },
  amplifier: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Amplifier boost");
        return this.chainModify(1.25);
      }
    },
    name: "Amplifier",
    rating: 3.5,
    num: 314
  },
  ancientbody: {
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Normal" || move.type === "Fire" || move.type === "Poison" || move.type === "Flying" || move.type === "Crystal" || move.type === "Nuclear" || move.type === "Plastic") {
        this.debug("Ancient Body weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Normal" || move.type === "Fire" || move.type === "Poison" || move.type === "Flying" || move.type === "Crystal" || move.type === "Nuclear" || move.type === "Plastic") {
        this.debug("Ancient Body weaken");
        return this.chainModify(0.5);
      }
    },
	onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.type === "Rock") {
        this.debug("Ancient Body boost");
        return this.chainModify([4915, 4096]);
      }
    },
	onSourceBasePowerPriority: 17,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Water" || move.type === "Grass" || move.type === "Fighting" || move.type === "Ground" || move.type === "Steel" || move.type === "Shadow") {
        return this.chainModify(2);
      }
    },
	onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    flags: { breakable: 1 },
    name: "Ancient Body",
    rating: 3.5,
    num: 432
  },
  arcanum: {
    onStart(source) {
      this.field.setWeather("dragonforce");
    },
    name: "Arcanum",
    rating: 4,
    num: 442
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
  atomizate: {
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
        move.type = "Nuclear";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Atomizate",
    rating: 4,
    num: 332
  },
  badcompany: {
    onDamage(damage, target, source, effect) {
      if (effect.id === "recoil") {
        if (!this.activeMove)
          throw new Error("Battle.activeMove is null");
        if (this.activeMove.id !== "struggle")
          return null;
      }
    },
	onTryBoost(boost, target, source, effect) {
      if (source && target === source)
        return;
      let showMsg = false;
      let i;
      for (i in boost) {
        if (boost[i] < 0 && target === source) {
          delete boost[i];
          showMsg = true;
        }
      }
      if (showMsg && !effect.secondaries && effect.id !== "octolock") {
        this.add("-fail", target, "unboost", "[from] ability: Bad Company", "[of] " + target);
      }
    },
    isBreakable: true,
    name: "Bad Company",
    rating: 2,
    num: 404
  },
  barbednest: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target, true)) {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
	onSourceModifyDamage(damage, source, target, move) {
      let mod = 1;
      if (move.type === "Fire")
        mod *= 2;
      if (move.flags["contact"])
        mod /= 2;
      return this.chainModify(mod);
    },
    isBreakable: true,
    name: "Barbed Nest",
    rating: 3.5,
    num: 363
  },
  blackhole: {
    onFoeTrapPokemon(pokemon) {
      if (pokemon.hasType("Psychic", "Cosmic") && pokemon.isAdjacent(this.effectState.target)) {
        pokemon.tryTrap(true);
      }
    },
    onFoeMaybeTrapPokemon(pokemon, source) {
      if (!source)
        source = this.effectState.target;
      if (!source || !pokemon.isAdjacent(source))
        return;
      if (!pokemon.knownType || pokemon.hasType("Psychic", "Cosmic")) {
        pokemon.maybeTrapped = true;
      }
    },
    name: "Black Hole",
    rating: 4,
    num: 347
  },
  blazingsoul: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.type === "Fire" && pokemon.hp === pokemon.maxhp) {
        return priority + 1;
      }
    },
    name: "Blazing Soul",
    rating: 4,
    num: 405
  },
  bloodthirst: {
    onModifyMove(move) {
      if (move.flags["bite"]) {
        if (!move.drain) {
          move.drain = [1, 8]; // Drains 1/8 of the damage dealt
        }
      }
    },
	name: "Bloodthirst",
	rating: 2,
	num: 353
  },
  bloomspring: {
    onWeather(target, source, effect) {
      if (target.hasItem("utilityumbrella"))
        return;
      if (effect.id === "pollenstorm") {
        this.heal(target.baseMaxhp / 16);
      }
    },
    flags: {},
    name: "Bloomspring",
    rating: 1.5,
    num: 436
  },
  blubberdefense: {
    onSourceModifyDamage(damage, source, target, move) {
      if (target.hp >= target.maxhp) {
        this.debug("Blubber Defense weaken");
        return this.chainModify(0.5);
      }
    },
    isBreakable: true,
    name: "blubber Defense",
    rating: 3.5,
    num: 406
  },
  bouncy: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target, true)) {
        const damageDealt = Math.floor(damage / 3);
		this.damage(damageDealt, source, target);
      }
    },
    name: "Bouncy",
    rating: 2.5,
    num: 353
  },
  braveheart: {
    onFoeAfterBoost(boost, target, source, effect) {
      if (effect?.name === "Brave Heart" || effect?.name === "Mirror Herb")
      return;
    
      const user = this.effectState.target;
      const opponent = target;

      let numBoosts = 0;

      for (const stat in boost) {
        if (boost[stat] > 0) {
            numBoosts += boost[stat];
        }
      }

      if (numBoosts > 0) {
        // Increase the user's Attack stat for each stat the opponent raised
        this.boost({ atk: numBoosts }, user);
      }
    },
    name: "Brave Heart",
    rating: 3,
    num: 394
  },
  brutalize: {
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
        move.type = "Dark";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Brutalize",
    rating: 4,
    num: 385
  },
  busybee: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.type === "Bug") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    name: "Busy Bee",
    rating: 4,
    num: 419
  },
  cashsplash: {
    onUpdate(pokemon) {
      if (pokemon.status === "brn") {
        this.add("-activate", pokemon, "ability: Cash Splash");
        pokemon.cureStatus();
      }
    },
    onSetStatus(status, target, source, effect) {
      if (status.id !== "brn")
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Cash Splash");
      }
      return false;
    },
	onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        this.debug("Cash Splash weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fire") {
        this.debug("Cash Splash weaken");
        return this.chainModify(0.5);
      }
    },
	onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Cash Splash boost");
        return this.chainModify(2);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Water") {
        this.debug("Cash Splash boost");
        return this.chainModify(2);
      }
    },
    name: "Cash Splash",
    rating: 3.5,
    num: 407
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
  chargedwool: {
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
        move.type = "Electric";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Charged Wool",
    rating: 4,
    num: 375
  },
  chernobyl: {
    onStart(source) {
      this.field.setWeather("fallout");
    },
    name: "Chernobyl",
    rating: 4,
    num: 333
  },
  chlorophyll: {
    onModifySpe(spe, pokemon) {
      if (["sunnyday", "desolateland", "pollenstorm"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(2);
      }
    },
    flags: {},
    name: "Chlorophyll",
    rating: 3,
    num: 34
  },
  circusprops: {
    onStart(source) {
      this.field.setTerrain("trickroom");
    },
    name: "Circus Props",
    rating: 4,
    num: 429
  },
  climatechange: {
    onStart(source) {
      const weathers = [
        "acidrain", "battleaura", "cursedwinds", "darkness", "duststorm",
        "dragonforce", "eclipse", "fairydust", "fallout", "fog",
        "hail", "magnetosphere", "pheromones", "pollenstorm", "psychicfield",
        "raindance", "sandstorm", "shadowyaura", "smog", "snow",
        "sunnyday", "thunderstorm"
      ];
      const randomWeather = this.sample(weathers);
      this.field.setWeather(randomWeather);
      this.add(`-weather`, randomWeather, `[from] ability: Climate Change`, `[of] ${source}`);
	},
	onImmunity(type, pokemon) {
      if (type === "sandstorm" || type === "hail" || type === "acidrain" || type === "fallout" || type === "shadowyaura" || type === "cursedwinds" || type === "smog")
        return false;
    },
    name: "climatechange",
    rating: 4,
    num: 377
  },
  coldwave: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(15, 100)) {
          source.trySetStatus("frz", target);
        }
      }
    },
    name: "Cold Wave",
    rating: 1.5,
    num: 334
  },
  composed: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["charge"]) {
        this.debug("Composed boost");
        return this.chainModify(1.5);
      }
    },
    name: "Composed",
    rating: 3.5,
    num: 365
  },
  condensation: {
    onStart(source) {
      this.field.setWeather("fog");
    },
    name: "Condensation",
    rating: 4,
    num: 431
  },
  conditioning: {
    onPrepareHit(target, source, move) {
    if (target.side !== source.side && target.lastMove === move.id) {
      // Reduce damage by 25% if the same move is used against the user in succession
      this.debug('Conditioning reduces damage');
      this.effectState.conditioningReduce = 0.75;
      } else {
      this.effectState.conditioningReduce = 1;
      }
	},
	onModifyDamage(damage, source, target, move) {
      // Apply the damage reduction
      return this.chainModify(this.effectState.conditioningReduce);
	},
	name: "Conditioning",
    rating: 4.5,
    num: 395
  },
  confident: {
    onSourceAfterFaint(length, target, source, effect) {
      if (effect && effect.effectType === "Move") {
        this.boost({ spa: length }, source);
      }
    },
    name: "Confident",
    rating: 3,
    num: 420
  },
  contamination: {
    onStart(source) {
      this.field.setWeather("smog");
    },
    name: "Contamination",
    rating: 4,
    num: 437
  },
  content: {
    onAfterMove(target, source, move) {
      if (move.category !== 'Physical' && move.category !== 'Special') {
        this.heal(source.baseMaxhp / 16, source, source);
      }
    },
    name: "Content",
    rating: 1,
    num: 396
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
  cosmicpresence: {
    onStart(source) {
      this.field.setTerrain("gravity");
    },
    name: "Cosmic Presence",
    rating: 4,
    num: 350
  },
  crystalcase: {
    onImmunity(type, pokemon) {
      if (type === "water")
        return false;
    },
	onDamagingHit(damage, target, source, move) {
      if (["Fire"].includes(move.type)) {
        this.boost({ spa: 2 });
      }
    },
	onSourceBasePowerPriority: 18,
    onSourceBasePower(basePower, attacker, defender, move) {
      if (move.type === "Fire") {
        return this.chainModify(1.5);
      }
    },
    isBreakable: true,
    name: "Crystal Case",
    rating: 3,
    num: 364
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
  deepfreeze: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("frz", target);
        }
      }
    },
    name: "Deep Freeze",
    rating: 1.5,
    num: 343
  },
  deepsleep: {
    onDamagePriority: 1,
    onDamage(damage, target, source, effect) {
      if (effect.id === "slp") {
        this.heal(target.baseMaxhp / 8);
        return false;
      }
    },
    name: "Deep Sleep",
    rating: 4,
    num: 344
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
  disenchant: {
    onTryHit(target, source, move) {
      if (move.type === "Fairy") {
        this.add("-immune", target, "[from] ability: Disenchant");
        return null;
      }
    },
    name: "Disenchant",
    rating: 2,
    num: 335
  },
  dragonarmor: {
    onModifyMove(move) {
      move.stab = 2;
    },
    name: "Dragon Armor",
    rating: 4,
    num: 359
  },
  dustdevil: {
    onStart(source) {
      this.field.setWeather("duststorm");
    },
    name: "Dust Devil",
    rating: 4,
    num: 433
  },
  eccentric: {
    onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify(1.5);
    },
    onModifyMovePriority: 1,
    onModifyMove(move) {
      // Only apply the accuracy reduction to special moves
      if (move.category === 'Special') {
        move.accuracy = this.chainModify(0.8);
      }
    },
    name: "Eccentric",
    rating: 5,
    num: 397
  },
  elusive: {
    onModifyMove(move) {
      if (move.category === "Status" && this.randomChance(5, 10)) {
        // Boost evasion stat for status moves
        move.self = move.self || {};
        move.self.boosts = move.self.boosts || {};
        move.self.boosts.evasion = 1;
	  }
    },
	name: "Elusive",
	rating: 2,
	num: 376
  },
  empathy: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target, true)) {
        this.add("-ability", target, "Empathy");
        this.boost({ spa: -1, atk: -1 }, source, target, null, true);
      }
    },
    name: "Empathy",
    rating: 2,
    num: 366
  },
  energyshield: {
    onTryHit(pokemon, target, move) {
      if (move.flags["beam"]) {
        this.add("-immune", pokemon, "[from] ability: Energy Shield");
        return null;
      }
    },
    isBreakable: true,
    name: "Energy Shield",
    rating: 3,
    num: 390
  },
  escapevelocity: {
    onModifySpe(spe) {
      if (this.field.isTerrain("gravity")) {
        return this.chainModify(2);
      }
    },
    name: "Escape Velocity",
    rating: 3,
    num: 352
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
  explode: {
    name: "Explode",
    onFaint(target, source, effect) {
		this.useMove("explosion", source);
    },
	rating: 4,
    num: 345
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
  feisty: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      // Check if the opponent's level is higher
      const opponentLevel = pokemon.side.foe.active[0].level;
      if (opponentLevel > pokemon.level) {
        return this.chainModify(1.5);
      }
    },
    name: "Feisty",
    rating: 5,
    num: 398
  },
  felineprowess: {
    onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify(2);
    },
    name: "Feline Prowess",
    rating: 5,
    num: 408
  },
  flameeater: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Fire") {
        if (!this.heal(target.baseMaxhp / 4)) {
          this.add("-immune", target, "[from] ability: Flame Eater");
        }
        return null;
      }
    },
    isBreakable: true,
    name: "Flame Eater",
    rating: 3.5,
    num: 355
  },
  flowergift: {
    onStart(pokemon) {
      this.singleEvent("WeatherChange", this.effect, this.effectState, pokemon);
    },
    onWeatherChange(pokemon) {
      if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== "Cherrim" || pokemon.transformed)
        return;
      if (!pokemon.hp)
        return;
      if (["sunnyday", "desolateland", "pollenstorm"].includes(pokemon.effectiveWeather())) {
        if (pokemon.species.id !== "cherrimsunshine") {
          pokemon.formeChange("Cherrim-Sunshine", this.effect, false, "[msg]");
        }
      } else {
        if (pokemon.species.id === "cherrimsunshine") {
          pokemon.formeChange("Cherrim", this.effect, false, "[msg]");
        }
      }
    },
    onAllyModifyAtkPriority: 3,
    onAllyModifyAtk(atk, pokemon) {
      if (this.effectState.target.baseSpecies.baseSpecies !== "Cherrim")
        return;
      if (["sunnyday", "desolateland", "pollenstorm"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    onAllyModifySpDPriority: 4,
    onAllyModifySpD(spd, pokemon) {
      if (this.effectState.target.baseSpecies.baseSpecies !== "Cherrim")
        return;
      if (["sunnyday", "desolateland", "pollenstorm"].includes(pokemon.effectiveWeather())) {
        return this.chainModify(1.5);
      }
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, breakable: 1 },
    name: "Flower Gift",
    rating: 1,
    num: 122
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
  foulshroud: {
    onImmunity(type, pokemon) {
      if (type === "eclipse")
        return false;
    },
    onModifyAccuracyPriority: -1,
    onModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      if (this.field.isWeather("eclipse")) {
        this.debug("Foul Shroud - decreasing accuracy");
        return this.chainModify([3277, 4096]);
      }
    },
    isBreakable: true,
    name: "Foul Shroud",
    rating: 1.5,
    num: 388
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
  frighten: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Frighten", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spe: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Frighten",
    rating: 3.5,
    num: 346
  },
  fruitrition: {
    onTryHealPriority: 19,
    onTryHeal(damage, target, source, effect) {
      if (source === target) {
        this.debug("Fruitrition boost");
        return this.chainModify([3277, 4096]);
      }
    },
    name: "Fruitrition",
    rating: 3.5,
    num: 392
  },
  glacialize: {
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
        move.type = "Ice";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Glacialize",
    rating: 4,
    num: 378
  },
  grasspelt: {
    onModifyDefPriority: 6,
    onModifyDef(pokemon) {
      if (this.field.isTerrain("grassyterrain") || this.field.isWeather("pollenstorm"))
        return this.chainModify(1.5);
    },
    flags: { breakable: 1 },
    name: "Grass Pelt",
    rating: 0.5,
    num: 179
  },
  hailwarning: {
    onStart(source) {
      this.field.setWeather("hail");
    },
    name: "Hail Warning",
    rating: 4,
    num: 362
  },
  harvest: {
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (this.field.isWeather(["sunnyday", "desolateland", "pollenstorm"]) || this.randomChance(1, 2)) {
        if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
          pokemon.setItem(pokemon.lastItem);
          pokemon.lastItem = "";
          this.add("-item", pokemon, pokemon.getItem(), "[from] ability: Harvest");
        }
      }
    },
    flags: {},
    name: "Harvest",
    rating: 2.5,
    num: 139
  },
  hayfever: {
    onStart(source) {
      this.field.setWeather("pollenstorm");
    },
    name: "Hay Fever",
    rating: 4,
    num: 434
  },
  hazysurge: {
    onStart(pokemon) {
      const side = pokemon.side;
      const mist = side.sideConditions["mist"];
      if (!mist) {
        this.add("-activate", pokemon, "ability: Hazy Surge");
        side.addSideCondition("mist", pokemon);
      }
    },
    name: "Hazy Surge",
    rating: 4,
    num: 428
  },
  headache: {
    onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      if (pokemon.volatileStatus === "confusion") {
        return this.chainModify(2);
      }
    },
    name: "Headache",
    rating: 3.5,
    num: 421
  },
  heliophobia: {
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
    name: "Heliophobia",
    rating: 3,
    num: 319
  },
  highnoon: {
    onModifyPriority(priority, pokemon, target, move) {
        if (move && !['Detect', 'Endure', 'Protect', 'Quick Guard', 'Wide Guard'].includes(move.name)) {
            return 0;
        }
        return priority;
    },
    name: "High Noon",
    rating: 4,
    num: 312
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
  iceslick: {
    onImmunity(type, pokemon) {
      if (type === "hail")
        return false;
    },
	onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["hail", "snow"])) {
        return this.chainModify(2);
      }
    },
    name: "Ice Slick",
    rating: 3,
    num: 399
  },
  incantation: {
    onStart(source) {
      this.field.setWeather("fairydust");
    },
    name: "Incantation",
    rating: 4,
    num: 438
  },
  insatiable: {
    onBasePowerPriority: 8,
    onBasePower(basePower, attacker, defender, move) {
      // Check if the move is a draining move
      if (move.drain) {
        // Boost the base power by 50%
        this.debug("Insatiable boost");
        return this.chainModify(1.5);
      }
    },
    name: "Insatiable",
    rating: 3,
    num: 379
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
  invigorate: {
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
        move.type = "Fighting";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Invigorate",
    rating: 4,
    num: 358
  },
  ironjaw: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bite"]) {
        return this.chainModify(1.5);
      }
    },
    name: "Iron Jaw",
    rating: 3.5,
    num: 400
  },
  irrelephant: {
    onStart(pokemon) {
      this.add("-ability", pokemon, "Irrelephant");
    },
    onModifyMove(move) {
      move.ignoreAbility = true;
    },
    name: "Irrelephant",
    rating: 3,
    num: 415
  },
  junglespirit: {
    onModifyMove(move) {
      move.stab = 2;
    },
    name: "Jungle Spirit",
    rating: 4,
    num: 360
  },
  laserfocus: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["beam"]) {
        this.debug("Laser Focus boost");
        return this.chainModify(1.5);
      }
    },
    name: "Laser Focus",
    rating: 3.5,
    num: 389
  },
  lazy: {
    onStart(pokemon) {
      if (!pokemon.status) {
        pokemon.setStatus('slp', null, this.ability, true);
        pokemon.statusState.time = 2;
      }
    },
    name: "Lazy",
    rating: 1,
    num: 336
  },
  leadskin: {
    onTryHit(target, source, move) {
      if (move.type === "Nuclear") {
        this.add("-immune", target, "[from] ability: Lead Skin");
        return null;
      }
    },
    name: "Lead Skin",
    rating: 2,
    num: 337
  },
  leafguard: {
    onSetStatus(status, target, source, effect) {
      if (["sunnyday", "desolateland", "pollenstorm"].includes(target.effectiveWeather())) {
        if (effect?.status) {
          this.add("-immune", target, "[from] ability: Leaf Guard");
        }
        return false;
      }
    },
    onTryAddVolatile(status, target) {
      if (status.id === "yawn" && ["sunnyday", "desolateland", "pollenstorm"].includes(target.effectiveWeather())) {
        this.add("-immune", target, "[from] ability: Leaf Guard");
        return null;
      }
    },
    flags: { breakable: 1 },
    name: "Leaf Guard",
    rating: 0.5,
    num: 102
  },
  levinskin: {
    onTryHit(target, source, move) {
      if (target !== source && move.type === "Electric") {
        if (!this.boost({ atk: 1 })) {
          this.add("-immune", target, "[from] ability: Levin skin");
        }
        return null;
      }
    },
    isBreakable: true,
    name: "Levin Skin",
    rating: 3,
    num: 367
  },
  lithe: {
    onModifySpePriority: 5,
    onModifySpe(spe, pokemon) {
      if (pokemon.status) {
        return this.chainModify(2);
      }
    },
    name: "Lithe",
    rating: 3.5,
    num: 368
  },
  luckystar: {
    onModifyAccuracyPriority: 5,
    onModifyAccuracy(accuracy) {
      return this.chainModify(1.3);
    },
    name: "Lucky Star",
    rating: 5,
    num: 369
  },
  magicianshat: {
    onStart(source) {
      this.field.setTerrain("magicroom");
    },
    name: "Magician's Hat",
    rating: 4,
    num: 430
  },
  majesticaura: {
    onFoeTryMove(target, source, move) {
      const targetAllExceptions = ["perishsong", "flowershield", "rototiller"];
      if (move.target === "foeSide" || move.target === "all" && !targetAllExceptions.includes(move.id)) {
        return;
      }
      const dazzlingHolder = this.effectState.target;
      if ((source.isAlly(dazzlingHolder) || move.target === "all") && move.priority > 0.1) {
        this.attrLastMove("[still]");
        this.add("cant", dazzlingHolder, "ability: Majestic Aura", move, "[of] " + target);
        return false;
      }
    },
    isBreakable: true,
    name: "Majestic Aura",
    rating: 2.5,
    num: 414
  },
  icecleats: {
    onImmunity(type, pokemon) {
      if (type === "hail")
        return false;
    },
	onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["hail", "snow"])) {
        return this.chainModify(2);
      }
    },
    name: "Ice Cleats",
    rating: 2,
    num: 409
  },
  naturaltoxin: {
    onSourceModifyAtkPriority: 6,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Poison") {
        this.debug("Natural Toxin weaken");
        return this.chainModify(0.5);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.type === "Poison") {
        this.debug("Natural Toxin weaken");
        return this.chainModify(0.5);
      }
    },
    isBreakable: true,
    name: "Natural Toxin",
    rating: 3.5,
    num: 422
  },
  nefarious: {
    onModifyPriority(priority, pokemon, target, move) {
      if (move?.category === "Status") {
        move.pranksterBoosted = true;
        return priority + 1;
      }
    },
    name: "Nefarious",
    rating: 4,
    num: 380
  },
  noctem: {
    onStart(source) {
      this.field.setWeather("darkness");
    },
    name: "Noctem",
    rating: 4,
    num: 322
  },
  oraoraoraora: {
    onPrepareHit(target, source, move) {
      if (move.flags["punch"]) {
        move.multihit = 2; // Hit twice
      }
	},
    name: "ORAORAORAORA!",
    rating: 3,
    num: 410
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
  petrify: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Petrify", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ spe: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Petrify",
    rating: 3.5,
    num: 338
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
  powerfist: {
    onBasePowerPriority: 23,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["punch"]) {
        this.debug("Power Fist boost");
        return this.chainModify([4915, 4096]);
      }
    },
    name: "Power Fist",
    rating: 3,
    num: 381
  },
  powerofalchemy: {
    onAllyFaint(target) {
      if (!this.effectState.target.hp)
        return;
      const ability = target.getAbility();
      const additionalBannedAbilities = [
        "alchemicpower",
		"noability",
        "flowergift",
        "forecast",
        "hungerswitch",
        "illusion",
        "imposter",
        "neutralizinggas",
        "powerofalchemy",
        "receiver",
        "trace",
        "wonderguard"
      ];
      if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability))
        return;
      if (this.effectState.target.setAbility(ability)) {
        this.add("-ability", this.effectState.target, ability, "[from] ability: Power of Alchemy", "[of] " + target);
      }
    },
    name: "Power of Alchemy",
    rating: 0,
    num: 223
  },
  prismatichue: {
    onStart(pokemon) {
      const side = pokemon.side;
      const reflect = side.sideConditions["reflect"];
      if (!reflect) {
        this.add("-activate", pokemon, "ability: Prismatic Hue");
        side.addSideCondition("reflect", pokemon);
      }
    },
    name: "Prismatic Hue",
    rating: 4,
    num: 426
  },
  prismguard: {
    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (!move.flags.contact && move.category !== "Status") {
        this.damage(source.baseMaxhp / 8, source, target);
      }
    },
    name: "Prism Guard",
    rating: 2.5,
    num: 416
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
  receiver: {
    onAllyFaint(target) {
      if (!this.effectState.target.hp)
        return;
      const ability = target.getAbility();
      const additionalBannedAbilities = [
        "alchemicpower",
		"noability",
        "flowergift",
        "forecast",
        "hungerswitch",
        "illusion",
        "imposter",
        "neutralizinggas",
        "powerofalchemy",
        "receiver",
        "trace",
        "wonderguard"
      ];
      if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability))
        return;
      if (this.effectState.target.setAbility(ability)) {
        this.add("-ability", this.effectState.target, ability, "[from] ability: Receiver", "[of] " + target);
      }
    },
    name: "Receiver",
    rating: 0,
    num: 222
  },
  regalia: {
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
        move.type = "Fairy";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    name: "Regalia",
    rating: 4,
    num: 382
  },
  resolute: {
    onTryHit(pokemon, target, move) {
      if (move.ohko) {
        this.add("-immune", pokemon, "[from] ability: Resolute");
        return null;
      }
    },
    onDamagePriority: -30,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        this.add("-ability", target, "Resolute");
        return target.hp - 1;
      }
    },
    isBreakable: true,
    name: "Resolute",
    rating: 3,
    num: 383
  },
  rosesthorns: {
    onDamagingHit(damage, target, source, move) {
      const side = source.isAlly(target) ? source.side.foe : source.side;
      const toxicSpikes = side.sideConditions["toxicspikes"];
      if (move.flags === "contact" && (!toxicSpikes || toxicSpikes.layers < 2 || this.randomChance(1, 2))) {
        this.add("-activate", target, "ability: Rose's Thorns");
        side.addSideCondition("toxicspikes", target);
      }
    },
    name: "Rose's Thorns",
    rating: 3.5,
    num: 423
  },
  sandforce: {
    onBasePowerPriority: 21,
    onBasePower(basePower, attacker, defender, move) {
      if (this.field.isWeather(["sandstorm", "duststorm"])) {
        if (move.type === "Rock" || move.type === "Ground" || move.type === "Steel") {
          this.debug("Sand Force boost");
          return this.chainModify([5325, 4096]);
        }
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    flags: {},
    name: "Sand Force",
    rating: 2,
    num: 159
  },
  sandman: {
    onDamagingHit(damage, target, source, move) {
      if (this.checkMoveMakesContact(move, source, target)) {
        if (this.randomChance(3, 10)) {
          source.trySetStatus("slp", target);
        }
      }
    },
    name: "Sandman",
    rating: 1.5,
    num: 356
  },
  sandpit: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Intimidate", "boost");
          activated = true;
        }
        if (target.isGrounded()) {
          this.add("-immune", target);
        } else {
          this.boost({ spe: -1 }, target, pokemon, null, true);
        }
      }
    },
    name: "Sand PIt",
    rating: 3.5,
    num: 424
  },
  sandrush: {
    onModifySpe(spe, pokemon) {
      if (this.field.isWeather(["sandstorm", "duststorm"])) {
        return this.chainModify(2);
      }
    },
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    flags: {},
    name: "Sand Rush",
    rating: 3,
    num: 146
  },
  sandveil: {
    onImmunity(type, pokemon) {
      if (type === "sandstorm")
        return false;
    },
    onModifyAccuracyPriority: -1,
    onModifyAccuracy(accuracy) {
      if (typeof accuracy !== "number")
        return;
      if (this.field.isWeather(["sandstorm", "sandstorm"])) {
        this.debug("Sand Veil - decreasing accuracy");
        return this.chainModify([3277, 4096]);
      }
    },
    flags: { breakable: 1 },
    name: "Sand Veil",
    rating: 1.5,
    num: 8
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
  scarecrow: {
    onTryHit(target, source, move) {
      if (move.type === "Flying") {
        this.add("-immune", target, "[from] ability: Scarecrow");
        return null;
      }
	},
	name: "Scarecrow",
	rating: 2,
    num: 357
  },
  secretion: {
    onStart(source) {
      this.field.setWeather("pheromones");
    },
    name: "secretion",
    rating: 4,
    num: 437
  },
  selfsufficient: {
    onResidualOrder: 5,
    onResidualSubOrder: 4,
    onResidual(pokemon) {
      this.heal(pokemon.baseMaxhp / 16);
    },
    name: "Self Sufficient",
    rating: 3,
    num: 411
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
    name: "Shadow Synergy",
    rating: 3.5,
    num: 327
  },
  sharpcoral: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk) {
      return this.chainModify(2);
    },
	onModifyDefPriority: 5,
    onModifyDef(def) {
      return this.chainModify(0.5);
    },
	onModifySpAPriority: 5,
    onModifySpA(spa) {
      return this.chainModify(2);
    },
	onModifySpDPriority: 5,
    onModifySpD(spd) {
      return this.chainModify(2);
    },
    name: "Sharp Coral",
    rating: 5,
    num: 339
  },
  siegedrive: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["bullet"]) {
        this.debug("Siege Drive boost");
        return this.chainModify(1.5);
      }
    },
    name: "Siege Drive",
    rating: 3.5,
    num: 384
  },
  siphon: {
    onModifyMove(move) {
      if (move.flags["contact"] && this.randomChance(3, 10)) {
        if (!move.drain) {
          move.drain = [1, 2]; // Drains 1/2 of the damage dealt
        }
      }
    },
	name: "Siphon",
	rating: 2,
	num: 401
  },
  skyscourge: {
    onStart(source) {
      this.field.setWeather("eclipse");
    },
    name: "Sky Scourge",
    rating: 4,
    num: 386
  },
  specialist: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["hm"]) {
        this.debug("Specialist boost");
        return this.chainModify(1.5);
      }
    },
    name: "Specialist",
    rating: 3.5,
    num: 391
  },
  spectraljaws: {
    onModifyMove(move) {
      if (move.flags["bite"]) {
        move.category = "Special";
      }
    },
    name: "Spectral Jaws",
    rating: 3.5,
    num: 417
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
    num: 340
  },
  sprint: {
    onDamagingHit(damage, target, source, effect) {
      this.boost({ spe: 1 });
    },
    name: "Sprint",
    rating: 3.5,
    num: 348
  },
  soundboost: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Sound Boost boost");
        return this.chainModify(1.3);
      }
    },
    name: "Sound Boost",
    rating: 3.5,
    num: 341
  },
  standoff: {
    onStart(source) {
      this.field.setWeather("battleaura");
    },
    name: "Stand Off",
    rating: 4,
    num: 439
  },
  seance: {
    onStart(source) {
      this.field.setWeather("cursedwinds");
    },
    name: "Seance",
    rating: 4,
    num: 440
  },
  stormbringer: {
    onStart(source) {
      this.field.setWeather("thunderstorm");
    },
    name: "Stormbringer",
    rating: 4,
    num: 342
  },
  striker: {
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["kick"]) {
        this.debug("Striker boost");
        return this.chainModify(1.5);
      }
    },
    name: "Striker",
    rating: 3.5,
    num: 412
  },
  stubborn: {
    onDamage(damage, target, source, effect) {
      if (effect.effectType === "Move" && !effect.multihit && (!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility("sheerforce")))) {
        this.effectState.checkedAdrenaline = false;
      } else {
        this.effectState.checkedAdrenaline = true;
      }
    },
    onTryEatItem(item) {
      const healingItems = [
        "aguavberry",
        "enigmaberry",
        "figyberry",
        "iapapaberry",
        "magoberry",
        "sitrusberry",
        "wikiberry",
        "oranberry",
        "berryjuice"
      ];
      if (healingItems.includes(item.id)) {
        return this.effectState.checkedAdrenaline;
      }
      return true;
    },
    onAfterMoveSecondary(target, source, move) {
      this.effectState.checkedAdrenaline = true;
      if (!source || source === target || !target.hp || !move.totalDamage)
        return;
      const lastAttackedBy = target.getLastAttackedBy();
      if (!lastAttackedBy)
        return;
      const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
      if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
        this.boost({ atk: 1 }, target, target);
      }
    },
    name: "stubborn",
    rating: 4,
    num: 402
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
  tactician: {
    onBasePowerPriority: 8,
    onBasePower(basePower, attacker, defender, move) {
      if (move.typeMod === 0 || move.typeMod === 2) {
        this.debug("Tactician boost");
        return this.chainModify(2);
      }
    },
    name: "Tactician",
    rating: 5,
    num: 370,
  },
  tenacious: {
    onModifyDefPriority: 5,
    onModifyDef(def) {
      return this.chainModify(2);
    },
    name: "Tenacious",
    rating: 5,
    num: 371
  },
  tenacity: {
    // upokecenter says this is implemented as an added secondary effect
    onModifyMove(move) {
      if (!move?.flags["contact"] || move.target === "self")
        return;
      if (!move.secondaries) {
        move.secondaries = [];
      }
      move.secondaries.push({
        chance: 30,
        volatileStatus: "flinch",
        ability: this.dex.abilities.get("tenacity")
      });
    },
    name: "Tenacity",
    rating: 2,
    num: 349
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
  },
  trace: {
    onStart(pokemon) {
      if (pokemon.adjacentFoes().some((foeActive) => foeActive.ability === "noability")) {
        this.effectState.gaveUp = true;
      }
      if (pokemon.hasItem("Ability Shield")) {
        this.add("-block", pokemon, "item: Ability Shield");
        this.effectState.gaveUp = true;
      }
    },
    onUpdate(pokemon) {
      if (!pokemon.isStarted || this.effectState.gaveUp)
        return;
      const additionalBannedAbilities = [
        // Zen Mode included here for compatability with Gen 5-6
        "alchemicpower",
		"noability",
        "flowergift",
        "forecast",
        "hungerswitch",
        "illusion",
        "imposter",
        "neutralizinggas",
        "powerofalchemy",
        "receiver",
        "trace",
        "zenmode"
      ];
      const possibleTargets = pokemon.adjacentFoes().filter((target2) => !target2.getAbility().isPermanent && !additionalBannedAbilities.includes(target2.ability));
      if (!possibleTargets.length)
        return;
      const target = this.sample(possibleTargets);
      const ability = target.getAbility();
      if (pokemon.setAbility(ability)) {
        this.add("-ability", pokemon, ability, "[from] ability: Trace", "[of] " + target);
      }
    },
    name: "Trace",
    rating: 2.5,
    num: 36
  },
  transcendence: {
    onStart(source) {
      this.field.setWeather("psychicfield");
    },
    name: "Transcendence",
    rating: 4,
    num: 441
  },
  unstable: {
    onPrepareHit(source, target, move) {
      if (this.effectState.unstable)
        return;
      if (move.hasBounced || move.flags["futuremove"] || move.sourceEffect === "snatch")
        return;
      const type = move.type;
      if (type && type !== "???" && source.getTypes().join() !== type) {
        if (!source.setType(type))
          return;
        this.effectState.unstable = true;
        this.add("-start", source, "typechange", type, "[from] ability: Unstable");
      }
    },
	onAfterMoveSecondary(target, source, move) {
      if (!target.hp)
        return;
      const type = move.type;
      if (target.isActive && move.effectType === "Move" && move.category !== "Status" && type !== "???" && !target.hasType(type)) {
        if (!target.setType(type))
          return false;
        this.add("-start", target, "typechange", type, "[from] ability: Unstable");
        if (target.side.active.length === 2 && target.position === 1) {
          const action = this.queue.willMove(target);
          if (action && action.move.id === "curse") {
            action.targetLoc = -1;
          }
        }
      }
    },
    onSwitchIn(pokemon) {
      delete this.effectState.unstable;
    },
    name: "Unstable",
    rating: 4,
    num: 354
  },
  valiantshield: {
    onStart(pokemon) {
      this.boost({def: 1}, pokemon);
	  this.add("-ability", pokemon, "Valiant Shield");
    },
    name: "Valiant Shield",
    rating: 3.5,
    num: 413
  },
  vampiric: {
    onModifyMove(move) {
      if (move.flags["contact"]) {
        if (!move.drain) {
          move.drain = [1, 8]; // Drains 1/8 of the damage dealt
        }
      }
    },
	name: "vampiric",
	rating: 2,
	num: 418
  },
  vibranthue: {
    onStart(pokemon) {
      const side = pokemon.side;
      const lightscreen = side.sideConditions["lightscreen"];
      if (!lightscreen) {
        this.add("-activate", pokemon, "ability: Vibrant Hue");
        side.addSideCondition("lightscreen", pokemon);
      }
    },
    name: "Vibrant Hue",
    rating: 4,
    num: 427
  },
  visionary: {
    onModifyMovePriority: -5,
    onModifyMove(move) {
      if (!move.ignoreImmunity)
        move.ignoreImmunity = {};
      if (move.ignoreImmunity !== true) {
        move.ignoreImmunity["Psychic"] = true;
        move.ignoreImmunity["Normal"] = true;
      }
    },
    onTryBoost(boost, target, source, effect) {
      if (effect.name === "Psych Out" && boost.spa) {
        delete boost.spa;
        this.add("-fail", target, "unboost", "Special Attack", "[from] ability: Visionary", "[of] " + target);
      }
    },
    name: "Visionary",
    rating: 3,
    num: 372
  },
  voicetuning: {
    onModifyMove(move) {
      move.stab = 2;
    },
    name: "Voice Tuning",
    rating: 4,
    num: 361
  },
  warpmist: {
    onTryHit(target, source, move) {
      if (target !== source && move.ignoreImmunity !== true) {
        this.add("-immune", target, "[from] ability: Warp Mist");
        return null;
      }
    },
	onModifyAtk(atk, attacker) {
      if (this.field.isWeather("fog")) {
        this.debug("Warp Mist fog boost");
        return this.chainModify(1.2);
      }
    },
    name: "Warp Mist",
    rating: 4,
    num: 435
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
  windturbine: {
    onStart(pokemon) {
      const side = pokemon.side;
      const tailwind = side.sideConditions["tailwind"];
      if (!tailwind) {
        this.add("-activate", pokemon, "ability: Wind Turbine");
        side.addSideCondition("tailwind", pokemon);
      }
    },
    name: "Wind Turbine",
    rating: 4,
    num: 425
  },
  wizardstome: {
    onStart(source) {
      this.field.setTerrain("wonderroom");
    },
    name: "Wizard's Tome",
    rating: 4,
    num: 430
  },
  xenoforce: {
    onModifyAtk(atk) {
      if (this.field.isTerrain("gravity")) {
        return this.chainModify(1.3);
      }
    },
	onModifySpa(Spa) {
      if (this.field.isTerrain("gravity")) {
        return this.chainModify(1.3);
      }
    },
    name: "Xenoforce",
    rating: 3,
    num: 351
  }
};
//# sourceMappingURL=abilities.js.map
