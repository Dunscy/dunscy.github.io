"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
exports.__esModule = true;

var util_1 = require("../util");
var RBY = {
    '(No Move)': { bp: 0, category: 'Status', type: 'Normal' },
    Absorb: { bp: 20, type: 'Grass', drain: [1, 2] },
    Acid: { bp: 40, type: 'Poison' },
    Amnesia: { bp: 0, category: 'Status', type: 'Psychic' },
    'Aurora Beam': { bp: 65, type: 'Ice' },
    Barrage: { bp: 15, type: 'Normal', multihit: [2, 5] },
    Bide: { bp: 0, type: '???' },
    Bind: { bp: 15, type: 'Normal' },
    Bite: { bp: 60, type: 'Normal' },
    Blizzard: { bp: 120, type: 'Ice' },
    Bonemerang: { bp: 50, type: 'Ground', multihit: 2 },
    Bubble: { bp: 20, type: 'Water' },
    'Bubble Beam': { bp: 65, type: 'Water' },
    Clamp: { bp: 35, type: 'Water' },
    'Comet Punch': { bp: 18, type: 'Normal', multihit: [2, 5] },
    Constrict: { bp: 10, type: 'Normal' },
    Conversion: { bp: 0, category: 'Status', type: 'Normal' },
    Counter: { bp: 1, type: 'Fighting' },
    Crabhammer: { bp: 90, type: 'Water' },
    'Defense Curl': { bp: 0, category: 'Status', type: 'Normal' },
    Dig: { bp: 100, type: 'Ground' },
    Disable: { bp: 0, category: 'Status', type: 'Normal' },
    'Dizzy Punch': { bp: 70, type: 'Normal' },
    'Double-Edge': { bp: 100, type: 'Normal', recoil: [25, 100] },
    'Double Kick': { bp: 30, type: 'Fighting', multihit: 2 },
    'Double Slap': { bp: 15, type: 'Normal', multihit: [2, 5] },
    'Dragon Rage': { bp: 1, type: 'Dragon' },
    'Dream Eater': { bp: 100, type: 'Psychic', drain: [1, 2] },
    Earthquake: { bp: 100, type: 'Ground' },
    Explosion: { bp: 170, type: 'Normal' },
    'Fire Blast': { bp: 120, type: 'Fire' },
    'Fire Spin': { bp: 15, type: 'Fire' },
    Fissure: { bp: 0, type: 'Ground' },
    Fly: { bp: 70, type: 'Flying' },
    'Focus Energy': { bp: 0, category: 'Status', type: 'Normal' },
    'Fury Attack': { bp: 15, type: 'Normal', multihit: [2, 5] },
    'Fury Swipes': { bp: 18, type: 'Normal', multihit: [2, 5] },
    Glare: { bp: 0, category: 'Status', type: 'Normal' },
    Growth: { bp: 0, category: 'Status', type: 'Normal' },
    Guillotine: { bp: 0, type: 'Normal' },
    Gust: { bp: 40, type: 'Normal' },
    Haze: { bp: 0, category: 'Status', type: 'Ice' },
    'High Jump Kick': { bp: 85, type: 'Fighting', hasCrashDamage: true },
    'Horn Drill': { bp: 0, type: 'Normal' },
    'Hyper Beam': { bp: 150, type: 'Normal' },
    'Jump Kick': { bp: 70, type: 'Fighting', hasCrashDamage: true },
    'Karate Chop': { bp: 50, type: 'Normal' },
    'Leech Seed': { bp: 0, category: 'Status', type: 'Grass' },
    'Light Screen': { bp: 0, category: 'Status', type: 'Psychic' },
    Metronome: { bp: 0, category: 'Status', type: 'Normal' },
    Mimic: { bp: 0, category: 'Status', type: 'Normal' },
    Minimize: { bp: 0, category: 'Status', type: 'Normal' },
    'Mirror Move': { bp: 0, category: 'Status', type: 'Flying' },
    Mist: { bp: 0, category: 'Status', type: 'Ice' },
    'Night Shade': { bp: 1, type: 'Ghost' },
    'Petal Dance': { bp: 70, type: 'Grass' },
    'Pin Missile': { bp: 14, type: 'Bug', multihit: [2, 5] },
    'Poison Sting': { bp: 15, type: 'Poison' },
    Psychic: { bp: 90, type: 'Psychic' },
    Psywave: { bp: 1, type: 'Psychic' },
    Rage: { bp: 20, type: 'Normal' },
    'Razor Leaf': { bp: 55, type: 'Grass' },
    'Razor Wind': { bp: 80, type: 'Normal' },
    Recover: { bp: 0, category: 'Status', type: 'Normal' },
    Reflect: { bp: 0, category: 'Status', type: 'Psychic' },
    Rest: { bp: 0, category: 'Status', type: 'Psychic' },
    Roar: { bp: 0, category: 'Status', type: 'Normal' },
    'Rock Slide': { bp: 75, type: 'Rock' },
    'Rock Throw': { bp: 50, type: 'Rock' },
    'Sand Attack': { bp: 0, category: 'Status', type: 'Normal' },
    'Seismic Toss': { bp: 1, type: 'Fighting' },
    'Self-Destruct': { bp: 130, type: 'Normal' },
    'Skull Bash': { bp: 100, type: 'Normal' },
    Slash: { bp: 70, type: 'Normal' },
    Sludge: { bp: 65, type: 'Poison' },
    'Soft-Boiled': { bp: 0, category: 'Status', type: 'Normal' },
    'Solar Beam': { bp: 120, type: 'Grass' },
    'Sonic Boom': { bp: 1, type: 'Normal' },
    'Spike Cannon': { bp: 20, type: 'Normal', multihit: [2, 5] },
    Stomp: { bp: 65, type: 'Normal' },
    Struggle: { bp: 50, type: 'Normal', recoil: [1, 2] },
    'Stun Spore': { bp: 0, category: 'Status', type: 'Grass' },
    Submission: { bp: 80, type: 'Fighting', recoil: [1, 4] },
    Substitute: { bp: 0, category: 'Status', type: 'Normal' },
    'Super Fang': { bp: 1, type: 'Normal' },
    Swift: { bp: 60, type: 'Normal' },
    'Take Down': { bp: 90, type: 'Normal', recoil: [1, 4] },
    Thrash: { bp: 90, type: 'Normal' },
    Thunder: { bp: 120, type: 'Electric' },
    'Thunder Wave': { bp: 0, category: 'Status', type: 'Electric' },
    Transform: { bp: 0, category: 'Status', type: 'Normal' },
    'Tri Attack': { bp: 80, type: 'Normal' },
    Twineedle: { bp: 25, type: 'Bug', multihit: 2 },
    Whirlwind: { bp: 0, category: 'Status', type: 'Normal' },
    'Wing Attack': { bp: 35, type: 'Flying' },
    Wrap: { bp: 15, type: 'Normal' },
    Growl: { bp: 0, category: 'Status', type: 'Normal' },
    Leer: { bp: 0, category: 'Status', type: 'Normal' },
    'Low Kick': { bp: 50, type: 'Fighting' },
    'Poison Gas': { bp: 0, category: 'Status', type: 'Poison' },
    'Poison Powder': { bp: 0, category: 'Status', type: 'Poison' },
    'Sky Attack': { bp: 140, type: 'Flying' },
    'String Shot': { bp: 0, category: 'Status', type: 'Bug' },
    Surf: { bp: 95, type: 'Water' },
    'Tail Whip': { bp: 0, category: 'Status', type: 'Normal' },
    Toxic: { bp: 0, category: 'Status', type: 'Poison' },
    Flash: { bp: 0, category: 'Status', type: 'Normal' },
    Hypnosis: { bp: 0, category: 'Status', type: 'Psychic' },
    'Leech Life': { bp: 20, type: 'Bug', drain: [1, 2] },
    'Mega Drain': { bp: 40, type: 'Grass', drain: [1, 2] },
    'Vine Whip': { bp: 35, type: 'Grass' },
    Waterfall: { bp: 80, type: 'Water' },
    Tackle: { bp: 35, type: 'Normal' },
    'Acid Armor': { bp: 0, category: 'Status', type: 'Poison' },
    Barrier: { bp: 0, category: 'Status', type: 'Psychic' },
    'Body Slam': { bp: 85, type: 'Normal' },
    Flamethrower: { bp: 95, type: 'Fire' },
    'Hydro Pump': { bp: 120, type: 'Water' },
    'Ice Beam': { bp: 95, type: 'Ice' },
    Lick: { bp: 20, type: 'Ghost' },
    Screech: { bp: 0, category: 'Status', type: 'Normal' },
    Sing: { bp: 0, category: 'Status', type: 'Normal' },
    'Sleep Powder': { bp: 0, category: 'Status', type: 'Grass' },
    Smog: { bp: 20, type: 'Poison' },
    Spore: { bp: 0, category: 'Status', type: 'Grass' },
    Supersonic: { bp: 0, category: 'Status', type: 'Normal' },
    'Swords Dance': { bp: 0, category: 'Status', type: 'Normal' },
    Thunderbolt: { bp: 95, type: 'Electric' },
    'Bone Club': { bp: 65, type: 'Ground' },
    'Egg Bomb': { bp: 100, type: 'Normal' },
    'Hyper Fang': { bp: 80, type: 'Normal' },
    Kinesis: { bp: 0, category: 'Status', type: 'Psychic' },
    'Lovely Kiss': { bp: 0, category: 'Status', type: 'Normal' },
    Meditate: { bp: 0, category: 'Status', type: 'Psychic' },
    'Rolling Kick': { bp: 60, type: 'Fighting' },
    Sharpen: { bp: 0, category: 'Status', type: 'Normal' },
    Teleport: { bp: 0, category: 'Status', type: 'Psychic' },
    Agility: { bp: 0, category: 'Status', type: 'Psychic' },
    'Confuse Ray': { bp: 0, category: 'Status', type: 'Ghost' },
    Confusion: { bp: 50, type: 'Psychic' },
    Cut: { bp: 50, type: 'Normal' },
    'Double Team': { bp: 0, category: 'Status', type: 'Normal' },
    'Drill Peck': { bp: 80, type: 'Flying' },
    Ember: { bp: 40, type: 'Fire' },
    'Fire Punch': { bp: 75, type: 'Fire' },
    Harden: { bp: 0, category: 'Status', type: 'Normal' },
    Headbutt: { bp: 70, type: 'Normal' },
    'Horn Attack': { bp: 65, type: 'Normal' },
    'Ice Punch': { bp: 75, type: 'Ice' },
    'Mega Kick': { bp: 120, type: 'Normal' },
    'Mega Punch': { bp: 80, type: 'Normal' },
    'Paleo Wave': { bp: 85, type: 'Rock' },
    'Pay Day': { bp: 40, type: 'Normal' },
    Peck: { bp: 35, type: 'Flying' },
    Pound: { bp: 40, type: 'Normal' },
    Psybeam: { bp: 65, type: 'Psychic' },
    'Quick Attack': { bp: 40, type: 'Normal', priority: 1 },
    Scratch: { bp: 40, type: 'Normal' },
    'Shadow Strike': { bp: 80, type: 'Ghost' },
    Slam: { bp: 80, type: 'Normal' },
    Smokescreen: { bp: 0, category: 'Status', type: 'Normal' },
    Splash: { bp: 0, category: 'Status', type: 'Normal' },
    Strength: { bp: 80, type: 'Normal' },
    'Thunder Punch': { bp: 75, type: 'Electric' },
    'Thunder Shock': { bp: 40, type: 'Electric' },
    'Vise Grip': { bp: 55, type: 'Normal' },
    'Water Gun': { bp: 40, type: 'Water' },
    Withdraw: { bp: 0, category: 'Status', type: 'Water' }
};
var GSC_PATCH = {
    Bide: { type: 'Normal' },
    Counter: { bp: 0 },
    Dig: { bp: 60 },
    'Double-Edge': { bp: 120 },
    Explosion: { bp: 250 },
    Gust: { type: 'Flying' },
    'Karate Chop': { type: 'Fighting' },
    Psywave: { bp: 0 },
    'Self-Destruct': { bp: 200 },
    Struggle: { recoil: [1, 4] },
    'Dragon Rage': { bp: 0 },
    Bite: { type: 'Dark' },
    'Night Shade': { bp: 0 },
    'Sand Attack': { type: 'Ground' },
    'Seismic Toss': { bp: 0 },
    'Sonic Boom': { bp: 0 },
    'Super Fang': { bp: 0 },
    'Wing Attack': { bp: 60 },
    Aeroblast: { bp: 100, type: 'Flying' },
    Attract: { bp: 0, category: 'Status', type: 'Normal' },
    'Beat Up': { bp: 10, type: 'Dark' },
    'Belly Drum': { bp: 0, category: 'Status', type: 'Normal' },
    'Conversion 2': { bp: 0, category: 'Status', type: 'Normal' },
    'Cross Chop': { bp: 100, type: 'Fighting' },
    Curse: { bp: 0, category: 'Status', type: '???' },
    'Destiny Bond': { bp: 0, category: 'Status', type: 'Ghost' },
    Detect: { bp: 0, category: 'Status', type: 'Fighting', priority: 2 },
    Encore: { bp: 0, category: 'Status', type: 'Normal' },
    Endure: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    Flail: { bp: 0, type: 'Normal' },
    Foresight: { bp: 0, category: 'Status', type: 'Normal' },
    'Future Sight': { bp: 80, type: 'Psychic' },
    'Heal Bell': { bp: 0, category: 'Status', type: 'Normal' },
    'Icy Wind': { bp: 55, type: 'Ice' },
    'Lock-On': { bp: 0, category: 'Status', type: 'Normal' },
    'Mind Reader': { bp: 0, category: 'Status', type: 'Normal' },
    'Mirror Coat': { bp: 0, type: 'Psychic' },
    Moonlight: { bp: 0, category: 'Status', type: 'Normal' },
    'Morning Sun': { bp: 0, category: 'Status', type: 'Normal' },
    Nightmare: { bp: 0, category: 'Status', type: 'Ghost' },
    Outrage: { bp: 90, type: 'Dragon' },
    'Powder Snow': { bp: 40, type: 'Ice' },
    Present: { bp: 0, type: 'Normal' },
    Protect: { bp: 0, category: 'Status', type: 'Normal', priority: 2 },
    'Psych Up': { bp: 0, category: 'Status', type: 'Normal' },
    Pursuit: { bp: 40, type: 'Dark' },
    'Rain Dance': { bp: 0, category: 'Status', type: 'Water' },
    Reversal: { bp: 0, type: 'Fighting' },
    Safeguard: { bp: 0, category: 'Status', type: 'Normal' },
    Sandstorm: { bp: 0, category: 'Status', type: 'Rock' },
    Sketch: { bp: 0, category: 'Status', type: 'Normal' },
    'Sleep Talk': { bp: 0, category: 'Status', type: 'Normal' },
    Spikes: { bp: 0, category: 'Status', type: 'Ground' },
    Spite: { bp: 0, category: 'Status', type: 'Ghost' },
    'Sunny Day': { bp: 0, category: 'Status', type: 'Fire' },
    Swagger: { bp: 0, category: 'Status', type: 'Normal' },
    'Sweet Scent': { bp: 0, category: 'Status', type: 'Normal' },
    Synthesis: { bp: 0, category: 'Status', type: 'Grass' },
    Thief: { bp: 40, type: 'Dark' },
    'Triple Kick': { bp: 10, type: 'Fighting', multihit: [1, 3] },
    Twister: { bp: 40, type: 'Dragon' },
    'Ancient Power': { bp: 60, type: 'Rock' },
    'Bone Rush': { bp: 25, type: 'Ground', multihit: [2, 5] },
    Crunch: { bp: 80, type: 'Dark' },
    'Feint Attack': { bp: 60, type: 'Dark' },
    'Giga Drain': { bp: 60, type: 'Grass', drain: [1, 2] },
    'Hidden Power': { bp: 0, type: 'Normal' },
    'Mean Look': { bp: 0, category: 'Status', type: 'Normal' },
    'Rapid Spin': { bp: 20, type: 'Normal' },
    'Rock Smash': { bp: 20, type: 'Fighting' },
    'Spider Web': { bp: 0, category: 'Status', type: 'Bug' },
    Whirlpool: { bp: 15, type: 'Water' },
    'Zap Cannon': { bp: 100, type: 'Electric' },
    'Cotton Spore': { bp: 0, category: 'Status', type: 'Grass' },
    'Extreme Speed': { bp: 80, type: 'Normal', priority: 1 },
    'Fury Cutter': { bp: 10, type: 'Bug' },
    Magnitude: { bp: 0, type: 'Ground' },
    'Milk Drink': { bp: 0, category: 'Status', type: 'Normal' },
    'Scary Face': { bp: 0, category: 'Status', type: 'Normal' },
    Charm: { bp: 0, category: 'Status', type: 'Normal' },
    'Hidden Power Bug': { bp: 70, type: 'Bug' },
    'Hidden Power Dark': { bp: 70, type: 'Dark' },
    'Hidden Power Dragon': { bp: 70, type: 'Dragon' },
    'Hidden Power Electric': { bp: 70, type: 'Electric' },
    'Hidden Power Fighting': { bp: 70, type: 'Fighting' },
    'Hidden Power Fire': { bp: 70, type: 'Fire' },
    'Hidden Power Flying': { bp: 70, type: 'Flying' },
    'Hidden Power Ghost': { bp: 70, type: 'Ghost' },
    'Hidden Power Grass': { bp: 70, type: 'Grass' },
    'Hidden Power Ground': { bp: 70, type: 'Ground' },
    'Hidden Power Ice': { bp: 70, type: 'Ice' },
    'Hidden Power Poison': { bp: 70, type: 'Poison' },
    'Hidden Power Psychic': { bp: 70, type: 'Psychic' },
    'Hidden Power Rock': { bp: 70, type: 'Rock' },
    'Hidden Power Steel': { bp: 70, type: 'Steel' },
    'Hidden Power Water': { bp: 70, type: 'Water' },
    'Perish Song': { bp: 0, category: 'Status', type: 'Normal' },
    Snore: { bp: 40, type: 'Normal' },
    'Sweet Kiss': { bp: 0, category: 'Status', type: 'Normal' },
    Rollout: { bp: 30, type: 'Rock' },
    Frustration: { bp: 0, type: 'Normal' },
    Return: { bp: 0, type: 'Normal' },
    'Sacred Fire': { bp: 100, type: 'Fire' },
    'Baton Pass': { bp: 0, category: 'Status', type: 'Normal' },
    'Dragon Breath': { bp: 60, type: 'Dragon' },
    'Dynamic Punch': { bp: 100, type: 'Fighting' },
    'False Swipe': { bp: 40, type: 'Normal' },
    'Flame Wheel': { bp: 60, type: 'Fire' },
    'Iron Tail': { bp: 100, type: 'Steel' },
    'Mach Punch': { bp: 40, type: 'Fighting', priority: 1 },
    Megahorn: { bp: 120, type: 'Bug' },
    'Metal Claw': { bp: 50, type: 'Steel' },
    'Mud-Slap': { bp: 20, type: 'Ground' },
    Octazooka: { bp: 65, type: 'Water' },
    'Pain Split': { bp: 0, category: 'Status', type: 'Normal' },
    'Shadow Ball': { bp: 80, type: 'Ghost' },
    'Sludge Bomb': { bp: 90, type: 'Poison' },
    Spark: { bp: 65, type: 'Electric' },
    'Steel Wing': { bp: 70, type: 'Steel' },
    'Vital Throw': { bp: 70, type: 'Fighting' }
};
var GSC = (0, util_1.extend)(true, {}, RBY, GSC_PATCH);
var ADV_PATCH = {
    Acid: { target: 'allAdjacentFoes' },
    'Ancient Power': { makesContact: true },
    Bide: { makesContact: true },
    Bind: { makesContact: true },
    Blizzard: { target: 'allAdjacentFoes' },
    Clamp: { makesContact: true },
    'Comet Punch': { makesContact: true },
    Counter: { makesContact: true },
    Crunch: { makesContact: true },
    Detect: { priority: 3 },
    Endure: { priority: 4 },
    Protect: { priority: 3 },
    Dig: { makesContact: true },
    'Double Kick': { makesContact: true },
    'Double Slap': { makesContact: true },
    Explosion: { target: 'allAdjacent' },
    Flail: { makesContact: true },
    Fly: { makesContact: true },
    'Fury Attack': { makesContact: true },
    'Fury Swipes': { makesContact: true },
    'High Jump Kick': { makesContact: true },
    'Jump Kick': { makesContact: true },
    'Leech Life': { makesContact: true },
    Outrage: { makesContact: true },
    'Petal Dance': { makesContact: true },
    Pursuit: { makesContact: true },
    Rage: { makesContact: true },
    'Rapid Spin': { makesContact: true },
    'Razor Wind': { target: 'allAdjacentFoes' },
    Reversal: { makesContact: true },
    'Rock Smash': { makesContact: true },
    'Self-Destruct': { target: 'allAdjacent' },
    'Skull Bash': { makesContact: true },
    Stomp: { makesContact: true },
    Struggle: { makesContact: true },
    Surf: { target: 'allAdjacentFoes' },
    Thief: { makesContact: true },
    Thrash: { makesContact: true },
    'Triple Kick': { makesContact: true, multihit: 3 },
    'Vine Whip': { makesContact: true },
    Waterfall: { makesContact: true },
    Wrap: { makesContact: true },
    Crabhammer: { makesContact: true },
    'Double-Edge': { recoil: [1, 3], makesContact: true },
    Earthquake: { target: 'allAdjacent' },
    'Extreme Speed': { makesContact: true },
    'Fury Cutter': { makesContact: true },
    'Heal Bell': { isSound: true },
    Magnitude: { target: 'allAdjacent' },
    Roar: { isSound: true },
    Submission: { makesContact: true },
    Tackle: { makesContact: true },
    'Take Down': { makesContact: true },
    Twister: { target: 'allAdjacentFoes' },
    'Body Slam': { makesContact: true },
    Bubble: { target: 'allAdjacentFoes' },
    Growl: { isSound: true, target: 'allAdjacentFoes' },
    Lick: { makesContact: true },
    'Perish Song': { isSound: true },
    Screech: { isSound: true },
    Sing: { isSound: true },
    Snore: { isSound: true },
    'String Shot': { target: 'allAdjacentFoes' },
    Supersonic: { isSound: true },
    'Sweet Scent': { target: 'allAdjacentFoes' },
    Rollout: { makesContact: true },
    Constrict: { makesContact: true },
    'Dizzy Punch': { makesContact: true },
    Frustration: { makesContact: true },
    'Hyper Fang': { makesContact: true },
    'Karate Chop': { makesContact: true },
    'Low Kick': { bp: 0, makesContact: true },
    Return: { makesContact: true },
    'Rolling Kick': { makesContact: true },
    Bite: { makesContact: true },
    'Cross Chop': { makesContact: true },
    Cut: { makesContact: true },
    'Drill Peck': { makesContact: true },
    'Dynamic Punch': { makesContact: true },
    'False Swipe': { makesContact: true },
    'Fire Punch': { makesContact: true },
    'Flame Wheel': { makesContact: true },
    Guillotine: { makesContact: true },
    Headbutt: { makesContact: true },
    'Horn Attack': { makesContact: true },
    'Horn Drill': { makesContact: true },
    'Ice Punch': { makesContact: true },
    'Icy Wind': { target: 'allAdjacentFoes' },
    'Iron Tail': { makesContact: true },
    Leer: { target: 'allAdjacentFoes' },
    'Mach Punch': { makesContact: true },
    Megahorn: { makesContact: true },
    'Mega Kick': { makesContact: true },
    'Mega Punch': { makesContact: true },
    'Metal Claw': { makesContact: true },
    Peck: { makesContact: true },
    Pound: { makesContact: true },
    'Powder Snow': { target: 'allAdjacentFoes' },
    'Quick Attack': { makesContact: true },
    'Razor Leaf': { target: 'allAdjacentFoes' },
    'Rock Slide': { target: 'allAdjacentFoes' },
    Scratch: { makesContact: true },
    'Seismic Toss': { makesContact: true },
    'Shadow Strike': { makesContact: true },
    Slam: { makesContact: true },
    Slash: { makesContact: true },
    Spark: { makesContact: true },
    'Steel Wing': { makesContact: true },
    Strength: { makesContact: true },
    'Super Fang': { makesContact: true },
    Swift: { target: 'allAdjacentFoes' },
    'Tail Whip': { target: 'allAdjacentFoes' },
    'Thunder Punch': { makesContact: true },
    'Vise Grip': { makesContact: true },
    'Vital Throw': { makesContact: true },
    'Wing Attack': { makesContact: true },
    'Arm Thrust': {
        bp: 15,
        type: 'Fighting',
        multihit: [2, 5],
        makesContact: true
    },
    Assist: { bp: 0, category: 'Status', type: 'Normal' },
    Astonish: { bp: 30, type: 'Ghost', makesContact: true },
    Block: { bp: 0, category: 'Status', type: 'Normal' },
    Bounce: { bp: 85, type: 'Flying', makesContact: true },
    'Bullet Seed': { bp: 10, type: 'Grass', multihit: [2, 5] },
    Camouflage: { bp: 0, category: 'Status', type: 'Normal' },
    Charge: { bp: 0, category: 'Status', type: 'Electric' },
    Covet: { bp: 40, type: 'Normal' },
    Dive: { bp: 60, type: 'Water', makesContact: true },
    'Doom Desire': { bp: 120, type: 'Steel' },
    Extrasensory: { bp: 80, type: 'Psychic' },
    'Fake Out': { bp: 40, type: 'Normal', priority: 1 },
    'Follow Me': { bp: 0, category: 'Status', type: 'Normal', priority: 3 },
    Hail: { bp: 0, category: 'Status', type: 'Ice' },
    'Icicle Spear': { bp: 10, type: 'Ice', multihit: [2, 5] },
    Ingrain: { bp: 0, category: 'Status', type: 'Grass' },
    'Knock Off': { bp: 20, type: 'Dark', makesContact: true },
    'Leaf Blade': { bp: 70, type: 'Grass', makesContact: true },
    'Magic Coat': { bp: 0, category: 'Status', type: 'Psychic', priority: 4 },
    Memento: { bp: 0, category: 'Status', type: 'Dark' },
    'Nature Power': { bp: 0, category: 'Status', type: 'Normal' },
    'Needle Arm': { bp: 60, type: 'Grass', makesContact: true },
    'Odor Sleuth': { bp: 0, category: 'Status', type: 'Normal' },
    Overheat: { bp: 140, type: 'Fire', self: { boosts: { spa: -2 } }, makesContact: true },
    Revenge: { bp: 60, type: 'Fighting', makesContact: true },
    'Rock Blast': { bp: 25, type: 'Rock', multihit: [2, 5] },
    'Role Play': { bp: 0, category: 'Status', type: 'Psychic' },
    'Sand Tomb': { bp: 15, type: 'Ground' },
    'Skill Swap': { bp: 0, category: 'Status', type: 'Psychic' },
    'Smelling Salts': { bp: 60, type: 'Normal', makesContact: true },
    'Spit Up': { bp: 0, type: 'Normal' },
    Stockpile: { bp: 0, category: 'Status', type: 'Normal' },
    Swallow: { bp: 0, category: 'Status', type: 'Normal' },
    Taunt: { bp: 0, category: 'Status', type: 'Dark' },
    'Teeter Dance': { bp: 0, category: 'Status', type: 'Normal', target: 'allAdjacent' },
    Tickle: { bp: 0, category: 'Status', type: 'Normal' },
    Trick: { bp: 0, category: 'Status', type: 'Psychic' },
    Uproar: { bp: 50, type: 'Normal', isSound: true },
    'Volt Tackle': { bp: 120, type: 'Electric', recoil: [1, 3], makesContact: true },
    'Weather Ball': { bp: 50, type: 'Normal' },
    Aromatherapy: { bp: 0, category: 'Status', type: 'Grass' },
    'Brick Break': { bp: 75, type: 'Fighting', makesContact: true },
    Endeavor: { bp: 0, type: 'Normal', makesContact: true },
    'Focus Punch': { bp: 150, type: 'Fighting', makesContact: true },
    Imprison: { bp: 0, category: 'Status', type: 'Psychic' },
    'Mud Sport': { bp: 0, category: 'Status', type: 'Ground' },
    Recycle: { bp: 0, category: 'Status', type: 'Normal' },
    'Secret Power': { bp: 70, type: 'Normal' },
    'Sky Uppercut': { bp: 85, type: 'Fighting', makesContact: true },
    'Slack Off': { bp: 0, category: 'Status', type: 'Normal' },
    Snatch: { bp: 0, category: 'Status', type: 'Dark', priority: 4 },
    'Tail Glow': { bp: 0, category: 'Status', type: 'Bug' },
    Torment: { bp: 0, category: 'Status', type: 'Dark' },
    'Water Sport': { bp: 0, category: 'Status', type: 'Water' },
    Wish: { bp: 0, category: 'Status', type: 'Normal' },
    'Air Cutter': { bp: 55, type: 'Flying', target: 'allAdjacentFoes' },
    Facade: { bp: 70, type: 'Normal', makesContact: true },
    'Grass Whistle': { bp: 0, category: 'Status', type: 'Grass', isSound: true },
    'Heat Wave': { bp: 100, type: 'Fire', target: 'allAdjacentFoes' },
    'Hyper Voice': { bp: 90, type: 'Normal', isSound: true, target: 'allAdjacentFoes' },
    'Metal Sound': { bp: 0, category: 'Status', type: 'Steel', isSound: true },
    'Meteor Mash': { bp: 100, type: 'Steel', makesContact: true },
    'Muddy Water': { bp: 95, type: 'Water', target: 'allAdjacentFoes' },
    'Poison Fang': { bp: 50, type: 'Poison', makesContact: true },
    'Rock Tomb': { bp: 50, type: 'Rock' },
    'Will-O-Wisp': { bp: 0, category: 'Status', type: 'Fire' },
    'Ice Ball': { bp: 30, type: 'Ice', makesContact: true },
    'Sheer Cold': { bp: 0, type: 'Ice' },
    Howl: { bp: 0, category: 'Status', type: 'Normal' },
    'Luster Purge': { bp: 70, type: 'Psychic' },
    'Mist Ball': { bp: 70, type: 'Psychic' },
    'Psycho Boost': { bp: 140, type: 'Psychic', self: { boosts: { spa: -2 } } },
    Refresh: { bp: 0, category: 'Status', type: 'Normal' },
    'Signal Beam': { bp: 75, type: 'Bug' },
    'Silver Wind': { bp: 60, type: 'Bug' },
    'Aerial Ace': { bp: 60, type: 'Flying', makesContact: true },
    'Blast Burn': { bp: 150, type: 'Fire' },
    'Blaze Kick': { bp: 85, type: 'Fire', makesContact: true },
    'Bulk Up': { bp: 0, category: 'Status', type: 'Fighting' },
    'Calm Mind': { bp: 0, category: 'Status', type: 'Psychic' },
    'Cosmic Power': { bp: 0, category: 'Status', type: 'Psychic' },
    'Crush Claw': { bp: 75, type: 'Normal', makesContact: true },
    'Dragon Claw': { bp: 80, type: 'Dragon', makesContact: true },
    'Dragon Dance': { bp: 0, category: 'Status', type: 'Dragon' },
    Eruption: { bp: 150, type: 'Fire', target: 'allAdjacentFoes' },
    'Fake Tears': { bp: 0, category: 'Status', type: 'Dark' },
    'Feather Dance': { bp: 0, category: 'Status', type: 'Flying' },
    Flatter: { bp: 0, category: 'Status', type: 'Dark' },
    'Frenzy Plant': { bp: 150, type: 'Grass' },
    Grudge: { bp: 0, category: 'Status', type: 'Ghost' },
    'Helping Hand': { bp: 0, category: 'Status', type: 'Normal', priority: 5 },
    'Hydro Cannon': { bp: 150, type: 'Water' },
    'Iron Defense': { bp: 0, category: 'Status', type: 'Steel' },
    'Magical Leaf': { bp: 60, type: 'Grass' },
    'Mud Shot': { bp: 55, type: 'Ground' },
    'Poison Tail': { bp: 50, type: 'Poison', makesContact: true },
    'Shadow Punch': { bp: 60, type: 'Ghost', makesContact: true },
    'Shock Wave': { bp: 60, type: 'Electric' },
    Superpower: { bp: 120, type: 'Fighting', self: { boosts: { atk: -1, def: -1 } }, makesContact: true },
    'Water Pulse': { bp: 60, type: 'Water' },
    'Water Spout': { bp: 150, type: 'Water', target: 'allAdjacentFoes' },
    Yawn: { bp: 0, category: 'Status', type: 'Normal' }
};
var ADV = (0, util_1.extend)(true, {}, GSC, ADV_PATCH);
var DPP_PATCH = {
    Absorb: { category: 'Special' },
    'Arm Thrust': { category: 'Physical' },
    Barrage: { category: 'Physical' },
    'Beat Up': { category: 'Physical' },
    Bide: { priority: 1, category: 'Physical' },
    Bind: { category: 'Physical' },
    'Bone Rush': { category: 'Physical' },
    Bonemerang: { category: 'Physical' },
    Bounce: { category: 'Physical' },
    'Brick Break': { category: 'Physical' },
    'Bullet Seed': { category: 'Physical' },
    Clamp: { category: 'Physical' },
    'Comet Punch': { isPunch: true, category: 'Physical' },
    Counter: { category: 'Physical' },
    Covet: { makesContact: true, category: 'Physical' },
    Crabhammer: { category: 'Physical' },
    Dig: { bp: 80, category: 'Physical' },
    Dive: { bp: 80, category: 'Physical' },
    'Doom Desire': { category: 'Special' },
    'Double-Edge': { category: 'Physical' },
    'Double Kick': { category: 'Physical' },
    'Double Slap': { category: 'Physical' },
    'Dream Eater': { category: 'Special' },
    Earthquake: { category: 'Physical' },
    Endeavor: { category: 'Physical' },
    Explosion: { category: 'Physical' },
    'Extreme Speed': { category: 'Physical' },
    'Fake Out': { makesContact: true, category: 'Physical' },
    'Fire Spin': { category: 'Special' },
    Flail: { category: 'Physical' },
    Fly: { bp: 90, category: 'Physical' },
    'Focus Punch': { isPunch: true, category: 'Physical' },
    'Fury Attack': { category: 'Physical' },
    'Fury Cutter': { category: 'Physical' },
    'Fury Swipes': { category: 'Physical' },
    'Future Sight': { category: 'Special' },
    'Giga Drain': { category: 'Special' },
    Gust: { category: 'Special' },
    'High Jump Kick': { bp: 100, category: 'Physical' },
    'Icicle Spear': { category: 'Physical' },
    'Jump Kick': { bp: 85, category: 'Physical' },
    'Knock Off': { category: 'Physical' },
    'Leech Life': { category: 'Physical' },
    Magnitude: { category: 'Physical' },
    'Mega Drain': { category: 'Special' },
    'Mirror Coat': { category: 'Special' },
    Outrage: { bp: 120, category: 'Physical' },
    'Petal Dance': { bp: 90, category: 'Special' },
    'Pin Missile': { category: 'Physical' },
    Psywave: { category: 'Special' },
    Pursuit: { category: 'Physical' },
    'Rapid Spin': { category: 'Physical' },
    'Razor Wind': { category: 'Special' },
    Revenge: { category: 'Physical' },
    Reversal: { category: 'Physical' },
    'Rock Blast': { category: 'Physical' },
    'Sand Tomb': { category: 'Physical' },
    'Secret Power': { category: 'Physical' },
    'Self-Destruct': { category: 'Physical' },
    'Sky Uppercut': { isPunch: true, category: 'Physical' },
    'Smelling Salts': { category: 'Physical' },
    'Solar Beam': { category: 'Special' },
    'Spike Cannon': { category: 'Physical' },
    'Spit Up': { category: 'Special' },
    Stomp: { category: 'Physical' },
    Struggle: { category: 'Physical', struggleRecoil: true },
    Submission: { category: 'Physical' },
    Surf: { target: 'allAdjacent', category: 'Special' },
    Tackle: { category: 'Physical' },
    'Take Down': { category: 'Physical' },
    Thief: { category: 'Physical' },
    Thrash: { category: 'Physical' },
    Thunder: { category: 'Special' },
    'Triple Kick': { category: 'Physical' },
    Twineedle: { category: 'Physical' },
    Twister: { category: 'Special' },
    Uproar: { category: 'Special' },
    'Volt Tackle': { category: 'Physical' },
    Whirlpool: { category: 'Special' },
    Wrap: { category: 'Physical' },
    'Air Cutter': { category: 'Special' },
    Blizzard: { category: 'Special' },
    'Body Slam': { category: 'Physical' },
    Bubble: { category: 'Special' },
    Extrasensory: { category: 'Special' },
    Facade: { category: 'Physical' },
    'Fire Blast': { category: 'Special' },
    Flamethrower: { category: 'Special' },
    'Heat Wave': { category: 'Special' },
    'Hidden Power': { category: 'Special' },
    'Hidden Power Bug': { category: 'Special' },
    'Hidden Power Dark': { category: 'Special' },
    'Hidden Power Dragon': { category: 'Special' },
    'Hidden Power Electric': { category: 'Special' },
    'Hidden Power Fighting': { category: 'Special' },
    'Hidden Power Fire': { category: 'Special' },
    'Hidden Power Flying': { category: 'Special' },
    'Hidden Power Ghost': { category: 'Special' },
    'Hidden Power Grass': { category: 'Special' },
    'Hidden Power Ground': { category: 'Special' },
    'Hidden Power Ice': { category: 'Special' },
    'Hidden Power Poison': { category: 'Special' },
    'Hidden Power Psychic': { category: 'Special' },
    'Hidden Power Rock': { category: 'Special' },
    'Hidden Power Steel': { category: 'Special' },
    'Hidden Power Water': { category: 'Special' },
    'Hydro Pump': { category: 'Special' },
    'Hyper Voice': { category: 'Special' },
    'Ice Beam': { category: 'Special' },
    Lick: { category: 'Physical' },
    'Meteor Mash': { isPunch: true, category: 'Physical' },
    'Muddy Water': { category: 'Special' },
    Overheat: { category: 'Special', makesContact: false },
    'Poison Fang': { isBite: true, category: 'Physical' },
    'Rock Tomb': { category: 'Physical' },
    'Skull Bash': { category: 'Physical' },
    Smog: { category: 'Special' },
    Snore: { category: 'Special' },
    Thunderbolt: { category: 'Special' },
    'Vine Whip': { category: 'Physical' },
    'Weather Ball': { category: 'Special' },
    'Ice Ball': { category: 'Physical' },
    Rollout: { category: 'Physical' },
    'Sheer Cold': { category: 'Special' },
    Aeroblast: { category: 'Special' },
    'Bone Club': { category: 'Physical' },
    Constrict: { category: 'Physical' },
    'Dizzy Punch': { isPunch: true, category: 'Physical' },
    'Dragon Rage': { category: 'Special' },
    'Egg Bomb': { category: 'Physical' },
    'Feint Attack': { makesContact: true, category: 'Physical' },
    Frustration: { category: 'Physical' },
    'Hyper Fang': { isBite: true, category: 'Physical' },
    'Karate Chop': { category: 'Physical' },
    'Low Kick': { category: 'Physical' },
    'Luster Purge': { category: 'Special' },
    'Mist Ball': { category: 'Special' },
    'Needle Arm': { category: 'Physical' },
    'Psycho Boost': { category: 'Special' },
    Rage: { category: 'Physical' },
    Return: { category: 'Physical' },
    'Rolling Kick': { category: 'Physical' },
    'Sacred Fire': { category: 'Physical' },
    'Signal Beam': { category: 'Special' },
    'Silver Wind': { category: 'Special' },
    'Sonic Boom': { category: 'Special' },
    Acid: { category: 'Special' },
    'Aerial Ace': { category: 'Physical' },
    'Ancient Power': { category: 'Special', makesContact: false },
    Astonish: { category: 'Physical' },
    'Aurora Beam': { category: 'Special' },
    Bite: { isBite: true, category: 'Physical' },
    'Blast Burn': { category: 'Special' },
    'Blaze Kick': { category: 'Physical' },
    'Bubble Beam': { category: 'Special' },
    Confusion: { category: 'Special' },
    'Cross Chop': { category: 'Physical' },
    Crunch: { isBite: true, category: 'Physical' },
    'Crush Claw': { category: 'Physical' },
    Cut: { category: 'Physical' },
    'Dragon Breath': { category: 'Special' },
    'Dragon Claw': { category: 'Physical' },
    'Drill Peck': { category: 'Physical' },
    'Dynamic Punch': { isPunch: true, category: 'Physical' },
    Ember: { category: 'Special' },
    Eruption: { category: 'Special' },
    'False Swipe': { category: 'Physical' },
    'Fire Punch': { isPunch: true, category: 'Physical' },
    Fissure: { category: 'Physical' },
    'Flame Wheel': { category: 'Physical' },
    'Frenzy Plant': { category: 'Special' },
    Guillotine: { category: 'Physical' },
    Headbutt: { category: 'Physical' },
    'Horn Attack': { category: 'Physical' },
    'Horn Drill': { category: 'Physical' },
    'Hydro Cannon': { category: 'Special' },
    'Hyper Beam': { category: 'Special' },
    'Ice Punch': { isPunch: true, category: 'Physical' },
    'Icy Wind': { category: 'Special' },
    'Iron Tail': { category: 'Physical' },
    'Leaf Blade': { bp: 90, category: 'Physical' },
    'Mach Punch': { isPunch: true, category: 'Physical' },
    'Magical Leaf': { category: 'Special' },
    Megahorn: { category: 'Physical' },
    'Mega Kick': { category: 'Physical' },
    'Mega Punch': { isPunch: true, category: 'Physical' },
    'Metal Claw': { category: 'Physical' },
    'Mud Shot': { category: 'Special' },
    'Mud-Slap': { category: 'Special' },
    'Night Shade': { category: 'Special' },
    Octazooka: { category: 'Special' },
    'Paleo Wave': { category: 'Special' },
    'Pay Day': { category: 'Physical' },
    Peck: { category: 'Physical' },
    'Poison Sting': { category: 'Physical' },
    'Poison Tail': { category: 'Physical' },
    Pound: { category: 'Physical' },
    'Powder Snow': { category: 'Special' },
    Present: { category: 'Physical' },
    Psybeam: { category: 'Special' },
    Psychic: { category: 'Special' },
    'Quick Attack': { category: 'Physical' },
    'Razor Leaf': { category: 'Physical' },
    'Rock Slide': { category: 'Physical' },
    'Rock Smash': { bp: 40, category: 'Physical' },
    'Rock Throw': { category: 'Physical' },
    Scratch: { category: 'Physical' },
    'Seismic Toss': { category: 'Physical' },
    'Shadow Ball': { category: 'Special' },
    'Shadow Punch': { isPunch: true, category: 'Physical' },
    'Shadow Strike': { category: 'Physical' },
    'Shock Wave': { category: 'Special' },
    'Sky Attack': { category: 'Physical' },
    Slam: { category: 'Physical' },
    Slash: { category: 'Physical' },
    Sludge: { category: 'Special' },
    'Sludge Bomb': { category: 'Special' },
    Spark: { category: 'Physical' },
    'Steel Wing': { category: 'Physical' },
    Strength: { category: 'Physical' },
    'Super Fang': { category: 'Physical' },
    Superpower: { category: 'Physical' },
    Swift: { category: 'Special' },
    'Thunder Punch': { isPunch: true, category: 'Physical' },
    'Thunder Shock': { category: 'Special' },
    'Tri Attack': { category: 'Special' },
    'Vise Grip': { category: 'Physical' },
    'Vital Throw': { category: 'Physical' },
    Waterfall: { category: 'Physical' },
    'Water Gun': { category: 'Special' },
    'Water Pulse': { category: 'Special' },
    'Water Spout': { category: 'Special' },
    'Wing Attack': { category: 'Physical' },
    'Zap Cannon': { bp: 120, category: 'Special' },
    Acupressure: { bp: 0, type: 'Normal' },
    'Aqua Ring': { bp: 0, type: 'Water' },
    Assurance: {
        bp: 50,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    Avalanche: {
        bp: 60,
        type: 'Ice',
        makesContact: true,
        category: 'Physical'
    },
    'Brave Bird': {
        bp: 120,
        type: 'Flying',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Bug Bite': {
        bp: 60,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    Chatter: { bp: 60, type: 'Flying', isSound: true, category: 'Special' },
    Copycat: { bp: 0, type: 'Normal' },
    'Crush Grip': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    Defog: { bp: 0, type: 'Flying' },
    'Double Hit': {
        bp: 35,
        type: 'Normal',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    'Drain Punch': {
        bp: 60,
        type: 'Fighting',
        drain: [1, 2],
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    Embargo: { bp: 0, type: 'Dark' },
    Feint: {
        bp: 50,
        type: 'Normal',
        priority: 2,
        breaksProtect: true,
        category: 'Physical'
    },
    'Fire Fang': {
        bp: 65,
        type: 'Fire',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Flare Blitz': {
        bp: 120,
        type: 'Fire',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    Fling: { bp: 0, type: 'Dark', category: 'Physical' },
    Gravity: { bp: 0, type: 'Psychic' },
    'Head Smash': {
        bp: 150,
        type: 'Rock',
        recoil: [1, 2],
        makesContact: true,
        category: 'Physical'
    },
    'Heal Block': { bp: 0, type: 'Psychic', target: 'allAdjacentFoes' },
    'Healing Wish': { bp: 0, type: 'Psychic' },
    'Heal Order': { bp: 0, type: 'Bug' },
    'Last Resort': {
        bp: 130,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Lucky Chant': { bp: 0, type: 'Normal' },
    'Lunar Dance': { bp: 0, type: 'Psychic' },
    'Magma Storm': { bp: 120, type: 'Fire', category: 'Special' },
    'Magnet Rise': { bp: 0, type: 'Electric' },
    'Me First': { bp: 0, type: 'Normal' },
    'Metal Burst': { bp: 0, type: 'Steel', category: 'Physical' },
    'Miracle Eye': { bp: 0, type: 'Psychic' },
    'Natural Gift': { bp: 0, type: 'Normal', category: 'Physical' },
    Payback: {
        bp: 50,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    Pluck: {
        bp: 60,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Power Trick': { bp: 0, type: 'Psychic' },
    Roost: { bp: 0, type: 'Flying' },
    'Stealth Rock': { bp: 0, type: 'Rock' },
    'Sucker Punch': {
        bp: 80,
        type: 'Dark',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    Switcheroo: { bp: 0, type: 'Dark' },
    Tailwind: { bp: 0, type: 'Flying' },
    'Toxic Spikes': { bp: 0, type: 'Poison' },
    'Trick Room': { bp: 0, type: 'Psychic' },
    'U-turn': {
        bp: 70,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Wake-Up Slap': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Wood Hammer': {
        bp: 120,
        type: 'Grass',
        recoil: [1, 3],
        makesContact: true,
        category: 'Physical'
    },
    'Worry Seed': { bp: 0, type: 'Grass' },
    'Wring Out': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Special'
    },
    'Air Slash': { bp: 75, type: 'Flying', category: 'Special' },
    'Aura Sphere': { bp: 90, type: 'Fighting', category: 'Special' },
    'Bug Buzz': { bp: 90, type: 'Bug', isSound: true, category: 'Special' },
    'Draco Meteor': { bp: 140, type: 'Dragon', self: { boosts: { spa: -2 } }, category: 'Special' },
    'Dragon Pulse': { bp: 90, type: 'Dragon', category: 'Special' },
    'Dragon Rush': {
        bp: 100,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical'
    },
    'Energy Ball': { bp: 80, type: 'Grass', category: 'Special' },
    'Gunk Shot': { bp: 120, type: 'Poison', category: 'Physical' },
    'Gyro Ball': {
        bp: 0,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Leaf Storm': { bp: 140, type: 'Grass', self: { boosts: { spa: -2 } }, category: 'Special' },
    'Power Gem': { bp: 70, type: 'Rock', category: 'Special' },
    'Psycho Shift': { bp: 0, type: 'Psychic' },
    'Shadow Force': {
        bp: 120,
        type: 'Ghost',
        breaksProtect: true,
        makesContact: true,
        category: 'Physical'
    },
    'Dark Void': { bp: 0, type: 'Dark', target: 'allAdjacentFoes' },
    'Gastro Acid': { bp: 0, type: 'Poison' },
    Captivate: { bp: 0, type: 'Normal', target: 'allAdjacentFoes' },
    'Grass Knot': {
        bp: 0,
        type: 'Grass',
        makesContact: true,
        category: 'Special'
    },
    'Heart Swap': { bp: 0, type: 'Psychic' },
    Judgment: { bp: 100, type: 'Normal', category: 'Special' },
    'Magnet Bomb': { bp: 60, type: 'Steel', category: 'Physical' },
    'Mirror Shot': { bp: 65, type: 'Steel', category: 'Special' },
    'Mud Bomb': { bp: 65, type: 'Ground', category: 'Special' },
    'Ominous Wind': { bp: 60, type: 'Ghost', category: 'Special' },
    Punishment: {
        bp: 0,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Roar of Time': { bp: 150, type: 'Dragon', category: 'Special' },
    'Rock Climb': {
        bp: 90,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Seed Flare': { bp: 120, type: 'Grass', category: 'Special' },
    'Spacial Rend': { bp: 100, type: 'Dragon', category: 'Special' },
    'Trump Card': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Special'
    },
    'Aqua Jet': {
        bp: 40,
        type: 'Water',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Aqua Tail': {
        bp: 90,
        type: 'Water',
        makesContact: true,
        category: 'Physical'
    },
    'Attack Order': { bp: 90, type: 'Bug', category: 'Physical' },
    Brine: { bp: 65, type: 'Water', category: 'Special' },
    'Bullet Punch': {
        bp: 40,
        type: 'Steel',
        priority: 1,
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Charge Beam': { bp: 50, type: 'Electric', category: 'Special' },
    'Close Combat': {
        bp: 120,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Cross Poison': {
        bp: 70,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Dark Pulse': { bp: 80, type: 'Dark', category: 'Special' },
    'Defend Order': { bp: 0, type: 'Bug' },
    Discharge: {
        bp: 80,
        type: 'Electric',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Earth Power': { bp: 90, type: 'Ground', category: 'Special' },
    'Flash Cannon': { bp: 80, type: 'Steel', category: 'Special' },
    'Focus Blast': { bp: 120, type: 'Fighting', category: 'Special' },
    'Force Palm': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Giga Impact': {
        bp: 150,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Guard Swap': { bp: 0, type: 'Psychic' },
    'Hammer Arm': {
        bp: 100,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical'
    },
    'Ice Fang': {
        bp: 65,
        type: 'Ice',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Ice Shard': { bp: 40, type: 'Ice', priority: 1, category: 'Physical' },
    'Iron Head': {
        bp: 80,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Lava Plume': {
        bp: 80,
        type: 'Fire',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Nasty Plot': { bp: 0, type: 'Dark' },
    'Night Slash': {
        bp: 70,
        type: 'Dark',
        makesContact: true,
        category: 'Physical'
    },
    'Poison Jab': {
        bp: 80,
        type: 'Poison',
        makesContact: true,
        category: 'Physical'
    },
    'Power Swap': { bp: 0, type: 'Psychic' },
    'Power Whip': {
        bp: 120,
        type: 'Grass',
        makesContact: true,
        category: 'Physical'
    },
    'Psycho Cut': { bp: 70, type: 'Psychic', category: 'Physical' },
    'Rock Polish': { bp: 0, type: 'Rock' },
    'Rock Wrecker': { bp: 150, type: 'Rock', category: 'Physical' },
    'Seed Bomb': { bp: 80, type: 'Grass', category: 'Physical' },
    'Shadow Claw': {
        bp: 70,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical'
    },
    'Shadow Sneak': {
        bp: 40,
        type: 'Ghost',
        priority: 1,
        makesContact: true,
        category: 'Physical'
    },
    'Stone Edge': { bp: 100, type: 'Rock', category: 'Physical' },
    'Thunder Fang': {
        bp: 65,
        type: 'Electric',
        makesContact: true,
        isBite: true,
        category: 'Physical'
    },
    'Vacuum Wave': {
        bp: 40,
        type: 'Fighting',
        priority: 1,
        category: 'Special'
    },
    'X-Scissor': {
        bp: 80,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Zen Headbutt': {
        bp: 80,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical'
    }
};
var DPP = (0, util_1.extend)(true, {}, ADV, DPP_PATCH);
var BW_PATCH = {
    'Air Slash': { secondaries: true },
    Blizzard: { secondaries: true },
    'Body Slam': { secondaries: true },
    Bounce: { secondaries: true },
    Bubble: { secondaries: true },
    'Brave Bird': { recoil: [33, 100] },
    'Bug Buzz': { secondaries: true },
    Chatter: { secondaries: true },
    Covet: { bp: 60 },
    'Dragon Rush': { secondaries: true },
    'Drain Punch': { bp: 75 },
    'Energy Ball': { secondaries: true },
    Extrasensory: { secondaries: true },
    Feint: { bp: 30 },
    Detect: { priority: 4 },
    'Double-Edge': { recoil: [33, 100] },
    Protect: { priority: 4 },
    'Fire Blast': { secondaries: true },
    'Fire Spin': { bp: 35 },
    Flamethrower: { secondaries: true },
    'Fury Cutter': { bp: 20 },
    'Future Sight': { bp: 100, type: 'Psychic' },
    'Giga Drain': { bp: 75 },
    'Gunk Shot': { secondaries: true },
    'Heat Wave': { secondaries: true },
    'Ice Beam': { secondaries: true },
    Lick: { secondaries: true },
    'Meteor Mash': { secondaries: true },
    'Muddy Water': { secondaries: true },
    Overheat: {},
    'Poison Fang': { secondaries: true },
    'Poison Gas': { target: 'allAdjacentFoes' },
    'Rock Tomb': { secondaries: true },
    'Sand Tomb': { bp: 35 },
    'Secret Power': { secondaries: true },
    Smog: { secondaries: true },
    Snore: { secondaries: true },
    Stomp: { secondaries: true },
    Thunder: { secondaries: true },
    Thunderbolt: { secondaries: true },
    Uproar: { bp: 90 },
    Whirlpool: { bp: 35 },
    'Petal Dance': { bp: 120 },
    Tackle: { bp: 50 },
    Thrash: { bp: 120 },
    'Bone Club': { secondaries: true },
    Constrict: { secondaries: true },
    'Dizzy Punch': { secondaries: true },
    'Hyper Fang': { secondaries: true },
    'Jump Kick': { bp: 100 },
    'Luster Purge': { secondaries: true },
    'Mirror Shot': { secondaries: true },
    'Mist Ball': { secondaries: true },
    'Mud Bomb': { secondaries: true },
    'Needle Arm': { secondaries: true },
    'Ominous Wind': { secondaries: true },
    'Rock Climb': { secondaries: true },
    'Rolling Kick': { secondaries: true },
    'Sacred Fire': { secondaries: true },
    'Seed Flare': { secondaries: true },
    'Signal Beam': { secondaries: true },
    'Silver Wind': { secondaries: true },
    Twineedle: { secondaries: true },
    Acid: { secondaries: true },
    'Ancient Power': { secondaries: true },
    Astonish: { secondaries: true },
    'Aurora Beam': { secondaries: true },
    'Beat Up': { bp: 0 },
    Bite: { secondaries: true },
    'Blaze Kick': { secondaries: true },
    'Bubble Beam': { secondaries: true },
    'Bullet Seed': { bp: 25 },
    'Charge Beam': { secondaries: true },
    Confusion: { secondaries: true },
    'Cross Poison': { secondaries: true },
    Crunch: { secondaries: true },
    'Crush Claw': { secondaries: true },
    Curse: { type: 'Ghost' },
    'Dark Pulse': { secondaries: true },
    Discharge: { secondaries: true },
    'Doom Desire': { bp: 140 },
    'Dragon Breath': { secondaries: true },
    'Dynamic Punch': { secondaries: true },
    'Earth Power': { secondaries: true },
    'Extreme Speed': { priority: 2 },
    Ember: { secondaries: true },
    'Fake Out': { secondaries: true, priority: 3 },
    'Fire Fang': { secondaries: true },
    'Fire Punch': { secondaries: true },
    'Flame Wheel': { secondaries: true },
    'Flare Blitz': { secondaries: true, recoil: [33, 100] },
    'Flash Cannon': { secondaries: true },
    'Focus Blast': { secondaries: true },
    'Force Palm': { secondaries: true },
    Headbutt: { secondaries: true },
    'High Jump Kick': { bp: 130 },
    'Ice Fang': { secondaries: true },
    'Ice Punch': { secondaries: true },
    'Icicle Spear': { bp: 25 },
    'Icy Wind': { secondaries: true },
    'Iron Head': { secondaries: true },
    'Iron Tail': { secondaries: true },
    'Last Resort': { bp: 140 },
    'Lava Plume': { secondaries: true },
    'Metal Claw': { secondaries: true },
    'Mud Shot': { secondaries: true },
    'Mud-Slap': { secondaries: true },
    Octazooka: { secondaries: true },
    'Paleo Wave': { secondaries: true },
    'Poison Jab': { secondaries: true },
    'Poison Sting': { secondaries: true },
    'Poison Tail': { secondaries: true },
    'Powder Snow': { secondaries: true },
    Psybeam: { secondaries: true },
    Psychic: { secondaries: true },
    'Rock Slide': { secondaries: true },
    'Rock Smash': { secondaries: true },
    'Shadow Ball': { secondaries: true },
    'Shadow Strike': { secondaries: true },
    'Sky Attack': { secondaries: true },
    Sludge: { secondaries: true },
    'Sludge Bomb': { secondaries: true },
    Spark: { secondaries: true },
    'Steel Wing': { secondaries: true },
    'Thunder Fang': { secondaries: true },
    'Thunder Punch': { secondaries: true },
    'Thunder Shock': { secondaries: true },
    'Tri Attack': { secondaries: true },
    Twister: { secondaries: true },
    'Volt Tackle': { secondaries: true, recoil: [33, 100] },
    'Wood Hammer': { recoil: [33, 100] },
    Waterfall: { secondaries: true },
    'Water Pulse': { secondaries: true },
    'Zap Cannon': { secondaries: true },
    'Zen Headbutt': { secondaries: true },
    Autotomize: { bp: 0, type: 'Steel' },
    Bestow: { bp: 0, type: 'Normal' },
    'Echoed Voice': { bp: 40, type: 'Normal', isSound: true, category: 'Special' },
    'Electro Ball': { bp: 0, type: 'Electric', category: 'Special' },
    Entrainment: { bp: 0, type: 'Normal' },
    'Final Gambit': {
        bp: 0,
        type: 'Fighting',
        makesContact: true,
        category: 'Special'
    },
    'Fire Pledge': { bp: 50, type: 'Fire', category: 'Special' },
    'Frost Breath': { bp: 40, type: 'Ice', willCrit: true, category: 'Special' },
    'Grass Pledge': { bp: 50, type: 'Grass', category: 'Special' },
    'Heal Pulse': { bp: 0, type: 'Psychic' },
    'Heat Crash': {
        bp: 0,
        type: 'Fire',
        makesContact: true,
        category: 'Physical'
    },
    Hex: { bp: 50, type: 'Ghost', category: 'Special' },
    'Horn Leech': {
        bp: 75,
        type: 'Grass',
        drain: [1, 2],
        makesContact: true,
        category: 'Physical'
    },
    Hurricane: {
        bp: 120,
        type: 'Flying',
        category: 'Special',
        secondaries: true
    },
    Incinerate: { bp: 30, type: 'Fire', target: 'allAdjacentFoes', category: 'Special' },
    'Low Sweep': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Magic Room': { bp: 0, type: 'Psychic' },
    'Quick Guard': { bp: 0, type: 'Fighting', priority: 3 },
    'Rage Powder': { bp: 0, type: 'Bug', priority: 3 },
    'Relic Song': {
        bp: 75,
        type: 'Normal',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Round: { bp: 60, type: 'Normal', isSound: true, category: 'Special' },
    'Sacred Sword': {
        bp: 90,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true
    },
    Scald: {
        bp: 80,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    'Simple Beam': { bp: 0, type: 'Normal' },
    'Sky Drop': {
        bp: 60,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    Snarl: {
        bp: 55,
        type: 'Dark',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Soak: { bp: 0, type: 'Water' },
    Steamroller: {
        bp: 65,
        type: 'Bug',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Storm Throw': {
        bp: 40,
        type: 'Fighting',
        willCrit: true,
        makesContact: true,
        category: 'Physical'
    },
    'Struggle Bug': {
        bp: 30,
        type: 'Bug',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    Synchronoise: {
        bp: 70,
        type: 'Psychic',
        target: 'allAdjacent',
        category: 'Special'
    },
    'Techno Blast': { bp: 85, type: 'Normal', category: 'Special' },
    Telekinesis: { bp: 0, type: 'Psychic' },
    'Water Pledge': { bp: 50, type: 'Water', category: 'Special' },
    'Wide Guard': { bp: 0, type: 'Rock', priority: 3 },
    'Wonder Room': { bp: 0, type: 'Psychic' },
    'Ally Switch': { bp: 0, type: 'Psychic', priority: 1 },
    'Flame Burst': { bp: 70, type: 'Fire', category: 'Special' },
    'Heavy Slam': {
        bp: 0,
        type: 'Steel',
        makesContact: true,
        category: 'Physical'
    },
    'Reflect Type': { bp: 0, type: 'Normal' },
    'Volt Switch': { bp: 70, type: 'Electric', category: 'Special' },
    'Chip Away': {
        bp: 70,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true
    },
    'Fiery Dance': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Head Charge': {
        bp: 120,
        type: 'Normal',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Heart Stamp': {
        bp: 60,
        type: 'Psychic',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Quash: { bp: 0, type: 'Dark' },
    'Searing Shot': {
        bp: 100,
        type: 'Fire',
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true
    },
    'Acid Spray': {
        bp: 40,
        type: 'Poison',
        category: 'Special',
        secondaries: true
    },
    Acrobatics: {
        bp: 55,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'After You': { bp: 0, type: 'Normal' },
    'Blue Flare': {
        bp: 130,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Bolt Strike': {
        bp: 130,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Bulldoze: {
        bp: 60,
        type: 'Ground',
        target: 'allAdjacent',
        category: 'Physical',
        secondaries: true
    },
    'Circle Throw': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Clear Smog': { bp: 50, type: 'Poison', category: 'Special' },
    Coil: { bp: 0, type: 'Poison' },
    'Cotton Guard': { bp: 0, type: 'Grass' },
    'Dragon Tail': {
        bp: 60,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical'
    },
    'Drill Run': {
        bp: 80,
        type: 'Ground',
        makesContact: true,
        category: 'Physical'
    },
    'Dual Chop': {
        bp: 40,
        type: 'Dragon',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    Electroweb: {
        bp: 55,
        type: 'Electric',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    'Flame Charge': {
        bp: 50,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Foul Play': {
        bp: 95,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        overrideOffensivePokemon: 'target'
    },
    'Freeze Shock': {
        bp: 140,
        type: 'Ice',
        category: 'Physical',
        secondaries: true
    },
    'Fusion Bolt': { bp: 100, type: 'Electric', category: 'Physical' },
    'Fusion Flare': { bp: 100, type: 'Fire', category: 'Special' },
    'Gear Grind': {
        bp: 50,
        type: 'Steel',
        multihit: 2,
        makesContact: true,
        category: 'Physical'
    },
    Glaciate: {
        bp: 65,
        type: 'Ice',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true
    },
    'Guard Split': { bp: 0, type: 'Psychic' },
    'Hone Claws': { bp: 0, type: 'Dark' },
    'Ice Burn': {
        bp: 140,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Icicle Crash': {
        bp: 85,
        type: 'Ice',
        category: 'Physical',
        secondaries: true
    },
    Inferno: {
        bp: 100,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Leaf Tornado': {
        bp: 65,
        type: 'Grass',
        category: 'Special',
        secondaries: true
    },
    'Night Daze': {
        bp: 85,
        type: 'Dark',
        category: 'Special',
        secondaries: true
    },
    'Power Split': { bp: 0, type: 'Psychic' },
    Psyshock: {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    Psystrike: {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    'Quiver Dance': { bp: 0, type: 'Bug' },
    'Razor Shell': {
        bp: 75,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    Retaliate: {
        bp: 70,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Secret Sword': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        overrideDefensiveStat: 'def'
    },
    'Shell Smash': { bp: 0, type: 'Normal' },
    'Shift Gear': { bp: 0, type: 'Steel' },
    'Sludge Wave': {
        bp: 95,
        type: 'Poison',
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true
    },
    'Smack Down': { bp: 50, type: 'Rock', category: 'Physical' },
    'Stored Power': { bp: 20, type: 'Psychic', category: 'Special' },
    'Tail Slap': {
        bp: 25,
        type: 'Normal',
        multihit: [2, 5],
        makesContact: true,
        category: 'Physical'
    },
    'V-create': {
        bp: 180,
        type: 'Fire',
        makesContact: true,
        category: 'Physical'
    },
    Venoshock: { bp: 65, type: 'Poison', category: 'Special' },
    'Wild Charge': {
        bp: 90,
        type: 'Electric',
        recoil: [1, 4],
        makesContact: true,
        category: 'Physical'
    },
    'Work Up': { bp: 0, type: 'Normal' }
};
var BW = (0, util_1.extend)(true, {}, DPP, BW_PATCH);
delete BW['Faint Attack'];
var XY_PATCH = {
    'Ice Ball': { isBullet: true },
    'Knock Off': { bp: 65 },
    Thief: { bp: 60 },
    Barrage: { isBullet: true },
    Bubble: { bp: 40 },
    Chatter: { bp: 65 },
    'Egg Bomb': { isBullet: true },
    'Follow Me': { priority: 2 },
    Hurricane: { bp: 110 },
    'Hidden Power': { bp: 60 },
    'Hidden Power Bug': { bp: 60 },
    'Hidden Power Dark': { bp: 60 },
    'Hidden Power Dragon': { bp: 60 },
    'Hidden Power Electric': { bp: 60 },
    'Hidden Power Fighting': { bp: 60 },
    'Hidden Power Fire': { bp: 60 },
    'Hidden Power Flying': { bp: 60 },
    'Hidden Power Ghost': { bp: 60 },
    'Hidden Power Grass': { bp: 60 },
    'Hidden Power Ground': { bp: 60 },
    'Hidden Power Ice': { bp: 60 },
    'Hidden Power Poison': { bp: 60 },
    'Hidden Power Psychic': { bp: 60 },
    'Hidden Power Rock': { bp: 60 },
    'Hidden Power Steel': { bp: 60 },
    'Hidden Power Water': { bp: 60 },
    'Magma Storm': { bp: 100 },
    'Magnet Bomb': { isBullet: true },
    'Mist Ball': { isBullet: true },
    Moonlight: { type: 'Fairy' },
    'Mud Bomb': { isBullet: true },
    'Searing Shot': { isBullet: true },
    'Smelling Salts': { bp: 70 },
    Synchronoise: { bp: 120 },
    'Techno Blast': { bp: 120 },
    Thunder: { bp: 110 },
    'Wake-Up Slap': { bp: 70 },
    'Acid Spray': { isBullet: true },
    'Air Cutter': { bp: 60 },
    'Ancient Power': {},
    Assurance: { bp: 60 },
    'Aura Sphere': { bp: 80, isBullet: true, isPulse: true },
    Blizzard: { bp: 110 },
    'Bullet Seed': { isBullet: true },
    Charm: { type: 'Fairy' },
    'Cotton Spore': { target: 'allAdjacentFoes' },
    Crabhammer: { bp: 100 },
    'Dark Pulse': { isPulse: true },
    'Draco Meteor': { bp: 130 },
    'Dragon Pulse': { bp: 85, isPulse: true },
    'Electro Ball': { isBullet: true },
    'Energy Ball': { bp: 90, isBullet: true },
    'Final Gambit': { makesContact: false },
    'Fire Blast': { bp: 110 },
    'Fire Pledge': { bp: 80 },
    Flamethrower: { bp: 90 },
    'Focus Blast': { isBullet: true },
    'Frost Breath': { bp: 60 },
    'Fury Cutter': { bp: 40 },
    'Future Sight': { bp: 120 },
    'Grass Pledge': { bp: 80 },
    'Gyro Ball': { isBullet: true },
    'Heal Pulse': { isPulse: true },
    'Heat Wave': { bp: 95 },
    Hex: { bp: 65 },
    'Hydro Pump': { bp: 110 },
    'Ice Beam': { bp: 90 },
    Incinerate: { bp: 60 },
    'Leaf Storm': { bp: 130 },
    Lick: { bp: 30 },
    'Low Sweep': { bp: 65 },
    'Meteor Mash': { bp: 90 },
    'Muddy Water': { bp: 90 },
    Octazooka: { isBullet: true },
    Overheat: { bp: 130 },
    'Pin Missile': { bp: 25 },
    'Power Gem': { bp: 80 },
    'Rage Powder': { priority: 2 },
    'Rock Tomb': { bp: 60 },
    'Rock Wrecker': { isBullet: true },
    'Seed Bomb': { isBullet: true },
    'Shadow Ball': { isBullet: true },
    'Skull Bash': { bp: 130 },
    'Sludge Bomb': { isBullet: true },
    Smog: { bp: 30 },
    Snore: { bp: 50 },
    'Storm Throw': { bp: 60 },
    'Struggle Bug': { bp: 50 },
    Surf: { bp: 90 },
    'Sweet Kiss': { type: 'Fairy' },
    Thunderbolt: { bp: 90 },
    'Vine Whip': { bp: 45 },
    'Water Pledge': { bp: 80 },
    'Water Pulse': { isPulse: true },
    'Weather Ball': { isBullet: true },
    'Zap Cannon': { isBullet: true },
    'Diamond Storm': {
        bp: 100,
        type: 'Rock',
        target: 'allAdjacentFoes',
        category: 'Physical',
        secondaries: true
    },
    'Fell Stinger': {
        bp: 30,
        type: 'Bug',
        makesContact: true,
        category: 'Physical'
    },
    'Flying Press': {
        bp: 80,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical'
    },
    'Hyperspace Fury': {
        bp: 100,
        type: 'Dark',
        breaksProtect: true,
        category: 'Physical'
    },
    'Hyperspace Hole': {
        bp: 80,
        type: 'Psychic',
        breaksProtect: true,
        category: 'Special'
    },
    'King\'s Shield': { bp: 0, type: 'Steel', priority: 4 },
    'Misty Terrain': { bp: 0, type: 'Fairy' },
    'Mystical Fire': {
        bp: 65,
        type: 'Fire',
        category: 'Special',
        secondaries: true
    },
    'Parabolic Charge': {
        bp: 50,
        type: 'Electric',
        drain: [1, 2],
        target: 'allAdjacent',
        category: 'Special'
    },
    'Parting Shot': { bp: 0, type: 'Dark', isSound: true },
    'Phantom Force': {
        bp: 90,
        type: 'Ghost',
        breaksProtect: true,
        makesContact: true,
        category: 'Physical'
    },
    Powder: { bp: 0, type: 'Bug', priority: 1 },
    'Spiky Shield': { bp: 0, type: 'Grass', priority: 4 },
    'Thousand Arrows': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Thousand Waves': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Water Shuriken': {
        bp: 15,
        type: 'Water',
        multihit: [2, 5],
        priority: 1,
        category: 'Physical'
    },
    'Dragon Ascent': {
        bp: 120,
        type: 'Flying',
        makesContact: true,
        category: 'Physical'
    },
    'Electric Terrain': { bp: 0, type: 'Electric' },
    Geomancy: { bp: 0, type: 'Fairy' },
    'Grassy Terrain': { bp: 0, type: 'Grass' },
    'Ion Deluge': { bp: 0, type: 'Electric', priority: 1 },
    'Land\'s Wrath': { bp: 90, type: 'Ground', target: 'allAdjacentFoes', category: 'Physical' },
    'Light of Ruin': { bp: 140, type: 'Fairy', recoil: [1, 2], category: 'Special' },
    'Oblivion Wing': {
        bp: 80,
        type: 'Flying',
        drain: [3, 4],
        category: 'Special'
    },
    'Origin Pulse': {
        bp: 110,
        type: 'Water',
        target: 'allAdjacentFoes',
        category: 'Special',
        isPulse: true
    },
    'Precipice Blades': {
        bp: 120,
        type: 'Ground',
        target: 'allAdjacentFoes',
        category: 'Physical'
    },
    Rototiller: { bp: 0, type: 'Ground' },
    'Steam Eruption': {
        bp: 110,
        type: 'Water',
        category: 'Special',
        secondaries: true
    },
    'Aromatic Mist': { bp: 0, type: 'Fairy' },
    'Baby-Doll Eyes': { bp: 0, type: 'Fairy', priority: 1 },
    Belch: { bp: 120, type: 'Poison', category: 'Special' },
    Boomburst: {
        bp: 140,
        type: 'Normal',
        isSound: true,
        target: 'allAdjacent',
        category: 'Special'
    },
    Celebrate: { bp: 0, type: 'Normal' },
    Confide: { bp: 0, type: 'Normal', isSound: true },
    'Crafty Shield': { bp: 0, type: 'Fairy', priority: 3 },
    'Dazzling Gleam': { bp: 80, type: 'Fairy', target: 'allAdjacentFoes', category: 'Special' },
    'Disarming Voice': {
        bp: 40,
        type: 'Fairy',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special'
    },
    'Draining Kiss': {
        bp: 50,
        type: 'Fairy',
        drain: [3, 4],
        makesContact: true,
        category: 'Special'
    },
    'Eerie Impulse': { bp: 0, type: 'Electric' },
    Electrify: { bp: 0, type: 'Electric' },
    'Fairy Lock': { bp: 0, type: 'Fairy' },
    'Fairy Wind': { bp: 40, type: 'Fairy', category: 'Special' },
    'Flower Shield': { bp: 0, type: 'Fairy' },
    'Forest\'s Curse': { bp: 0, type: 'Grass' },
    'Freeze-Dry': {
        bp: 70,
        type: 'Ice',
        category: 'Special',
        secondaries: true
    },
    'Happy Hour': { bp: 0, type: 'Normal' },
    'Hold Back': {
        bp: 40,
        type: 'Normal',
        makesContact: true,
        category: 'Physical'
    },
    'Hold Hands': { bp: 0, type: 'Normal' },
    Infestation: { bp: 20, type: 'Bug', makesContact: true, category: 'Special' },
    'Magnetic Flux': { bp: 0, type: 'Electric' },
    'Mat Block': { bp: 0, type: 'Fighting' },
    Moonblast: {
        bp: 95,
        type: 'Fairy',
        category: 'Special',
        secondaries: true
    },
    'Noble Roar': { bp: 0, type: 'Normal', isSound: true },
    Nuzzle: {
        bp: 20,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Petal Blizzard': {
        bp: 90,
        type: 'Grass',
        target: 'allAdjacent',
        category: 'Physical'
    },
    'Play Nice': { bp: 0, type: 'Normal' },
    'Play Rough': {
        bp: 90,
        type: 'Fairy',
        makesContact: true,
        category: 'Physical',
        secondaries: true
    },
    'Power-Up Punch': {
        bp: 40,
        type: 'Fighting',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true
    },
    'Sticky Web': { bp: 0, type: 'Bug' },
    'Topsy-Turvy': { bp: 0, type: 'Dark' },
    'Trick-or-Treat': { bp: 0, type: 'Ghost' },
    'Venom Drench': { bp: 0, type: 'Poison', target: 'allAdjacentFoes' }
};
var XY = (0, util_1.extend)(true, {}, BW, XY_PATCH);
var SM_PATCH = {
    'Ally Switch': { priority: 2 },
    Aeroblast: { zp: 180 },
    Barrage: { zp: 100 },
    Bide: { zp: 100 },
    'Bone Club': { zp: 120 },
    Bonemerang: { zp: 100 },
    Bubble: { zp: 100 },
    Chatter: { zp: 120 },
    'Chip Away': { zp: 140 },
    Clamp: { zp: 100 },
    'Comet Punch': { zp: 100 },
    Constrict: { zp: 100 },
    'Crush Grip': { zp: 190 },
    'Diamond Storm': { zp: 180 },
    'Dizzy Punch': { zp: 140 },
    'Double Slap': { zp: 100 },
    'Dragon Ascent': { zp: 190 },
    'Dragon Rage': { zp: 100 },
    'Egg Bomb': { zp: 180 },
    'Feint Attack': { zp: 120 },
    'Fiery Dance': { zp: 160 },
    'Flame Burst': { zp: 140 },
    Frustration: { zp: 160 },
    'Grass Knot': { zp: 160 },
    'Head Charge': { zp: 190 },
    'Heart Stamp': { zp: 120 },
    'Heat Crash': { zp: 160 },
    'Heavy Slam': { zp: 160 },
    Hurricane: { zp: 185 },
    'Hidden Power': { zp: 120 },
    'Hidden Power Bug': { zp: 120 },
    'Hidden Power Dark': { zp: 120 },
    'Hidden Power Dragon': { zp: 120 },
    'Hidden Power Electric': { zp: 120 },
    'Hidden Power Fighting': { zp: 120 },
    'Hidden Power Fire': { zp: 120 },
    'Hidden Power Flying': { zp: 120 },
    'Hidden Power Ghost': { zp: 120 },
    'Hidden Power Grass': { zp: 120 },
    'Hidden Power Ground': { zp: 120 },
    'Hidden Power Ice': { zp: 120 },
    'Hidden Power Poison': { zp: 120 },
    'Hidden Power Psychic': { zp: 120 },
    'Hidden Power Rock': { zp: 120 },
    'Hidden Power Steel': { zp: 120 },
    'Hidden Power Water': { zp: 120 },
    'Hyper Fang': { zp: 160 },
    'Hyperspace Fury': { zp: 180 },
    'Hyperspace Hole': { zp: 160 },
    'Ice Ball': { zp: 100 },
    Judgment: { zp: 180 },
    'Jump Kick': { zp: 180 },
    'Karate Chop': { zp: 100 },
    'Knock Off': { zp: 120 },
    'Land\'s Wrath': { zp: 185 },
    'Light of Ruin': { zp: 200 },
    'Low Kick': { zp: 160 },
    'Luster Purge': { zp: 140 },
    'Magma Storm': { zp: 180 },
    'Magnet Bomb': { zp: 120 },
    Magnitude: { zp: 140 },
    'Mirror Shot': { zp: 120 },
    'Mist Ball': { zp: 140 },
    'Mud Bomb': { zp: 120 },
    'Natural Gift': { zp: 160 },
    'Needle Arm': { zp: 120 },
    'Oblivion Wing': { zp: 160 },
    'Ominous Wind': { zp: 120 },
    'Origin Pulse': { zp: 185 },
    'Precipice Blades': { zp: 190 },
    'Psycho Boost': { zp: 200 },
    Psywave: { zp: 100 },
    Punishment: { zp: 160 },
    Pursuit: { zp: 100 },
    Rage: { zp: 100 },
    'Rapid Spin': { zp: 100 },
    'Razor Wind': { zp: 160 },
    'Relic Song': { zp: 140 },
    Return: { zp: 160 },
    'Roar of Time': { zp: 200 },
    'Rock Climb': { zp: 175 },
    'Rolling Kick': { zp: 120 },
    'Sacred Fire': { zp: 180 },
    'Searing Shot': { zp: 180 },
    'Secret Power': { zp: 140 },
    'Seed Flare': { zp: 190 },
    'Shadow Force': { zp: 190 },
    'Signal Beam': { zp: 140 },
    'Silver Wind': { zp: 120 },
    'Sky Drop': { zp: 120 },
    'Sky Uppercut': { zp: 160 },
    'Smelling Salts': { zp: 140 },
    'Solar Beam': { zp: 190 },
    'Sonic Boom': { zp: 100 },
    'Spacial Rend': { zp: 180 },
    'Spike Cannon': { zp: 120 },
    'Steam Eruption': { zp: 185 },
    Steamroller: { zp: 120 },
    Synchronoise: { zp: 190 },
    'Techno Blast': { zp: 190 },
    'Thousand Arrows': { zp: 180 },
    'Thousand Waves': { zp: 175 },
    'Trump Card': { zp: 160 },
    Thunder: { zp: 185 },
    Twineedle: { zp: 100 },
    'Wake-Up Slap': { zp: 140 },
    'Wring Out': { zp: 190 },
    Absorb: { zp: 100 },
    Acid: { zp: 100 },
    'Acid Spray': { zp: 100 },
    Acrobatics: { zp: 100 },
    'Aerial Ace': { zp: 120 },
    'Air Cutter': { zp: 120 },
    'Air Slash': { zp: 140 },
    'Ancient Power': { zp: 120 },
    'Aqua Jet': { zp: 100 },
    'Aqua Tail': { zp: 175 },
    'Arm Thrust': { zp: 100 },
    Assurance: { zp: 120 },
    Astonish: { zp: 100 },
    'Attack Order': { zp: 175 },
    'Aura Sphere': { zp: 160 },
    'Aurora Beam': { zp: 120 },
    Avalanche: { zp: 120 },
    'Beat Up': { zp: 100 },
    Belch: { zp: 190 },
    Bind: { zp: 100 },
    Bite: { zp: 120 },
    'Blast Burn': { zp: 200 },
    'Blaze Kick': { zp: 160 },
    Blizzard: { zp: 185 },
    'Blue Flare': { zp: 195 },
    'Body Slam': { zp: 160 },
    'Bolt Strike': { zp: 195 },
    'Bone Rush': { zp: 140 },
    Boomburst: { zp: 200 },
    Bounce: { zp: 160 },
    'Brave Bird': { zp: 190 },
    'Brick Break': { zp: 140 },
    Brine: { zp: 120 },
    'Bubble Beam': { zp: 120 },
    'Bug Bite': { zp: 120 },
    'Bug Buzz': { zp: 175 },
    Bulldoze: { zp: 120 },
    'Bullet Punch': { zp: 100 },
    'Bullet Seed': { zp: 140 },
    'Charge Beam': { zp: 100 },
    'Circle Throw': { zp: 120 },
    'Clear Smog': { zp: 100 },
    'Close Combat': { zp: 190 },
    Confusion: { zp: 100 },
    Counter: { zp: 100 },
    Covet: { zp: 120 },
    Crabhammer: { zp: 180 },
    'Cross Chop': { zp: 180 },
    'Cross Poison': { zp: 140 },
    Crunch: { zp: 160 },
    'Crush Claw': { zp: 140 },
    Cut: { zp: 100 },
    'Dark Pulse': { zp: 160 },
    'Dazzling Gleam': { zp: 160 },
    Dig: { zp: 160 },
    'Disarming Voice': { zp: 100 },
    Discharge: { zp: 160 },
    Dive: { zp: 160 },
    'Doom Desire': { zp: 200 },
    'Double-Edge': { zp: 190 },
    'Double Hit': { zp: 140 },
    'Double Kick': { zp: 100 },
    'Draco Meteor': { zp: 195 },
    'Dragon Breath': { zp: 120 },
    'Dragon Claw': { zp: 160 },
    'Dragon Pulse': { zp: 160 },
    'Dragon Rush': { zp: 180 },
    'Dragon Tail': { zp: 120 },
    'Draining Kiss': { zp: 100 },
    'Drain Punch': { zp: 140 },
    'Dream Eater': { zp: 180 },
    'Drill Peck': { zp: 160 },
    'Drill Run': { zp: 160 },
    'Dual Chop': { zp: 100 },
    'Dynamic Punch': { zp: 180 },
    'Earth Power': { zp: 175 },
    Earthquake: { zp: 180 },
    'Echoed Voice': { zp: 100 },
    'Electro Ball': { zp: 160 },
    Electroweb: { zp: 100 },
    Ember: { zp: 100 },
    Endeavor: { zp: 160 },
    'Energy Ball': { zp: 175 },
    Eruption: { zp: 200 },
    Explosion: { zp: 200 },
    Extrasensory: { zp: 160 },
    'Extreme Speed': { zp: 160 },
    Facade: { zp: 140 },
    'Fairy Wind': { zp: 100 },
    'Fake Out': { zp: 100 },
    'False Swipe': { zp: 100 },
    Feint: { zp: 100 },
    'Fell Stinger': { bp: 50, zp: 100 },
    'Final Gambit': { zp: 180 },
    'Fire Blast': { zp: 185 },
    'Fire Fang': { zp: 120 },
    'Fire Pledge': { zp: 160 },
    'Fire Punch': { zp: 140 },
    'Fire Spin': { zp: 100 },
    Fissure: { zp: 180 },
    Flail: { zp: 160 },
    'Flame Charge': { zp: 100 },
    'Flame Wheel': { zp: 120 },
    Flamethrower: { zp: 175 },
    'Flare Blitz': { zp: 190 },
    'Flash Cannon': { zp: 160 },
    Fling: { zp: 100 },
    Fly: { zp: 175 },
    'Flying Press': { bp: 100, zp: 170 },
    'Focus Blast': { zp: 190 },
    'Focus Punch': { zp: 200 },
    'Force Palm': { zp: 120 },
    'Foul Play': { zp: 175 },
    'Freeze-Dry': { zp: 140 },
    'Freeze Shock': { zp: 200 },
    'Frenzy Plant': { zp: 200 },
    'Frost Breath': { zp: 120 },
    'Fury Attack': { zp: 100 },
    'Fury Cutter': { zp: 100 },
    'Fury Swipes': { zp: 100 },
    'Fusion Bolt': { zp: 180 },
    'Fusion Flare': { zp: 180 },
    'Future Sight': { zp: 190 },
    'Gear Grind': { zp: 180 },
    'Giga Drain': { zp: 140 },
    'Giga Impact': { zp: 200 },
    Glaciate: { zp: 120 },
    'Grass Pledge': { zp: 160 },
    Guillotine: { zp: 180 },
    'Gunk Shot': { zp: 190 },
    Gust: { zp: 100 },
    'Gyro Ball': { zp: 160 },
    'Hammer Arm': { zp: 180 },
    Headbutt: { zp: 140 },
    'Head Smash': { zp: 200 },
    'Heat Wave': { zp: 175 },
    Hex: { zp: 160 },
    'High Jump Kick': { zp: 195 },
    'Hold Back': { zp: 100 },
    'Horn Attack': { zp: 120 },
    'Horn Drill': { zp: 180 },
    'Horn Leech': { zp: 140 },
    'Hydro Cannon': { zp: 200 },
    'Hydro Pump': { zp: 185 },
    'Hyper Beam': { zp: 200 },
    'Hyper Voice': { zp: 175 },
    'Ice Beam': { zp: 175 },
    'Ice Burn': { zp: 200 },
    'Ice Fang': { zp: 120 },
    'Ice Punch': { zp: 140 },
    'Ice Shard': { zp: 100 },
    'Icicle Crash': { zp: 160 },
    'Icicle Spear': { zp: 140 },
    'Icy Wind': { zp: 100 },
    Incinerate: { zp: 120 },
    Inferno: { zp: 180 },
    Infestation: { zp: 100 },
    'Iron Head': { zp: 160 },
    'Iron Tail': { zp: 180 },
    'Last Resort': { zp: 200 },
    'Lava Plume': { zp: 160 },
    'Leaf Blade': { zp: 175 },
    'Leaf Storm': { zp: 195 },
    'Leaf Tornado': { zp: 120 },
    'Leech Life': { bp: 80, zp: 160 },
    Lick: { zp: 100 },
    'Low Sweep': { zp: 120 },
    'Mach Punch': { zp: 100 },
    'Magical Leaf': { zp: 120 },
    'Mega Drain': { zp: 120 },
    Megahorn: { zp: 190 },
    'Mega Kick': { zp: 190 },
    'Mega Punch': { zp: 160 },
    'Metal Burst': { zp: 100 },
    'Metal Claw': { zp: 100 },
    'Meteor Mash': { zp: 175 },
    'Mirror Coat': { zp: 100 },
    Moonblast: { zp: 175 },
    'Mud Shot': { zp: 100 },
    'Mud-Slap': { zp: 100 },
    'Muddy Water': { zp: 175 },
    'Mystical Fire': { bp: 75, zp: 140 },
    'Night Daze': { zp: 160 },
    'Night Shade': { zp: 100 },
    'Night Slash': { zp: 140 },
    Nuzzle: { zp: 100 },
    Octazooka: { zp: 120 },
    Outrage: { zp: 190 },
    Overheat: { zp: 195 },
    'Paleo Wave': { zp: 160 },
    'Parabolic Charge': { bp: 65, zp: 120 },
    Payback: { zp: 100 },
    'Pay Day': { zp: 100 },
    Peck: { zp: 100 },
    'Petal Blizzard': { zp: 175 },
    'Petal Dance': { zp: 190 },
    'Phantom Force': { zp: 175 },
    'Pin Missile': { zp: 140 },
    'Play Rough': { zp: 175 },
    Pluck: { zp: 120 },
    'Poison Fang': { zp: 100 },
    'Poison Jab': { zp: 160 },
    'Poison Sting': { zp: 100 },
    'Poison Tail': { zp: 100 },
    Pound: { zp: 100 },
    'Powder Snow': { zp: 100 },
    'Power Gem': { zp: 160 },
    'Power-Up Punch': { zp: 100 },
    'Power Whip': { zp: 190 },
    Present: { zp: 100 },
    Psybeam: { zp: 120 },
    Psychic: { zp: 175 },
    'Psycho Cut': { zp: 140 },
    Psyshock: { zp: 160 },
    Psystrike: { zp: 180 },
    'Quick Attack': { zp: 100 },
    'Razor Leaf': { zp: 100 },
    'Razor Shell': { zp: 140 },
    Retaliate: { zp: 140 },
    Revenge: { zp: 120 },
    Reversal: { zp: 160 },
    'Rock Blast': { isBullet: true, zp: 140 },
    'Rock Slide': { zp: 140 },
    'Rock Smash': { zp: 100 },
    'Rock Throw': { zp: 100 },
    'Rock Tomb': { zp: 120 },
    'Rock Wrecker': { zp: 200 },
    Rollout: { zp: 100 },
    Round: { zp: 120 },
    'Sacred Sword': { zp: 175 },
    'Sand Tomb': { zp: 100 },
    Scald: { zp: 160 },
    Scratch: { zp: 100 },
    'Secret Sword': { zp: 160 },
    'Seed Bomb': { zp: 160 },
    'Seismic Toss': { zp: 100 },
    'Self-Destruct': { zp: 200 },
    'Shadow Ball': { zp: 160 },
    'Shadow Claw': { zp: 140 },
    'Shadow Punch': { zp: 120 },
    'Shadow Sneak': { zp: 100 },
    'Shadow Strike': { zp: 160 },
    'Sheer Cold': { zp: 180 },
    'Shock Wave': { zp: 120 },
    'Skull Bash': { zp: 195 },
    'Sky Attack': { zp: 200 },
    Slam: { zp: 160 },
    Slash: { zp: 140 },
    Sludge: { zp: 120 },
    'Sludge Bomb': { zp: 175 },
    'Sludge Wave': { zp: 175 },
    'Smack Down': { zp: 100 },
    Smog: { zp: 100 },
    Snarl: { zp: 100 },
    Snore: { zp: 100 },
    Spark: { zp: 120 },
    'Spit Up': { zp: 100 },
    'Steel Wing': { zp: 140 },
    Stomp: { zp: 120 },
    'Stone Edge': { zp: 180 },
    'Stored Power': { zp: 160 },
    'Storm Throw': { zp: 120 },
    Strength: { zp: 160 },
    'Struggle Bug': { zp: 100 },
    Submission: { zp: 160 },
    'Sucker Punch': { bp: 70, zp: 140 },
    'Super Fang': { zp: 100 },
    Superpower: { zp: 190 },
    Surf: { zp: 175 },
    Swift: { zp: 120 },
    Tackle: { bp: 40, zp: 100 },
    'Tail Slap': { zp: 140 },
    'Take Down': { zp: 175 },
    Thief: { zp: 120 },
    Thrash: { zp: 190 },
    Thunderbolt: { zp: 175 },
    'Thunder Fang': { zp: 120 },
    'Thunder Punch': { zp: 140 },
    'Thunder Shock': { zp: 100 },
    'Tri Attack': { zp: 160 },
    'Triple Kick': { zp: 120 },
    Twister: { zp: 100 },
    'U-turn': { zp: 140 },
    Uproar: { zp: 175 },
    'Vacuum Wave': { zp: 100 },
    'V-create': { zp: 220 },
    Venoshock: { zp: 120 },
    'Vine Whip': { zp: 100 },
    'Vise Grip': { zp: 100 },
    'Vital Throw': { zp: 140 },
    'Volt Switch': { zp: 140 },
    'Volt Tackle': { zp: 190 },
    Waterfall: { zp: 160 },
    'Water Gun': { zp: 100 },
    'Water Pledge': { zp: 160 },
    'Water Pulse': { zp: 120 },
    'Water Shuriken': { category: 'Special', zp: 100 },
    'Water Spout': { zp: 200 },
    'Weather Ball': { zp: 160 },
    Whirlpool: { zp: 100 },
    'Wild Charge': { zp: 175 },
    'Wing Attack': { zp: 120 },
    'Wood Hammer': { zp: 190 },
    Wrap: { zp: 100 },
    'X-Scissor': { zp: 160 },
    'Zap Cannon': { zp: 190 },
    'Zen Headbutt': { zp: 160 },
    '10,000,000 Volt Thunderbolt': { bp: 195, type: 'Electric', category: 'Special', isZ: true },
    'Acid Downpour': { bp: 1, type: 'Poison', category: 'Physical', isZ: true },
    'All-Out Pummeling': { bp: 1, type: 'Fighting', category: 'Physical', isZ: true },
    'Baddy Bad': { bp: 90, type: 'Dark', category: 'Special', zp: 175 },
    'Baneful Bunker': { bp: 0, type: 'Poison', priority: 4 },
    'Beak Blast': {
        bp: 100,
        type: 'Flying',
        category: 'Physical',
        isBullet: true,
        zp: 180
    },
    'Black Hole Eclipse': { bp: 1, type: 'Dark', category: 'Physical', isZ: true },
    'Bloom Doom': { bp: 1, type: 'Grass', category: 'Physical', isZ: true },
    'Bouncy Bubble': {
        bp: 90,
        type: 'Water',
        drain: [1, 2],
        category: 'Special',
        zp: 175
    },
    'Breakneck Blitz': { bp: 1, type: 'Normal', category: 'Physical', isZ: true },
    'Buzzy Buzz': {
        bp: 90,
        type: 'Electric',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    Catastropika: {
        bp: 210,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Clangorous Soulblaze': {
        bp: 185,
        type: 'Dragon',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Continental Crush': { bp: 1, type: 'Rock', category: 'Physical', isZ: true },
    'Core Enforcer': {
        bp: 100,
        type: 'Dragon',
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 140
    },
    'Corkscrew Crash': { bp: 1, type: 'Steel', category: 'Physical', isZ: true },
    'Devastating Drake': { bp: 1, type: 'Dragon', category: 'Physical', isZ: true },
    'Double Iron Bash': {
        bp: 60,
        type: 'Steel',
        multihit: 2,
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        secondaries: true,
        zp: 180
    },
    'Dragon Hammer': {
        bp: 90,
        type: 'Dragon',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Extreme Evoboost': { bp: 0, type: 'Normal', isZ: true },
    'Fleur Cannon': {
        bp: 130,
        type: 'Fairy',
        self: { boosts: { spa: -2 } },
        category: 'Special',
        zp: 195
    },
    'Floral Healing': { bp: 0, type: 'Fairy' },
    'Freezy Frost': { bp: 90, type: 'Ice', category: 'Special', zp: 175 },
    'Genesis Supernova': {
        bp: 185,
        type: 'Psychic',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Gigavolt Havoc': { bp: 1, type: 'Electric', category: 'Physical', isZ: true },
    'Glitzy Glow': { bp: 90, type: 'Psychic', category: 'Special', zp: 175 },
    'Guardian of Alola': { bp: 0, type: 'Fairy', category: 'Special', isZ: true },
    'Hydro Vortex': { bp: 1, type: 'Water', category: 'Physical', isZ: true },
    'Ice Hammer': {
        bp: 100,
        type: 'Ice',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        zp: 180
    },
    'Inferno Overdrive': { bp: 1, type: 'Fire', category: 'Physical', isZ: true },
    Instruct: { bp: 0, type: 'Psychic' },
    'Let\'s Snuggle Forever': {
        bp: 190,
        type: 'Fairy',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Light That Burns the Sky': {
        bp: 200,
        type: 'Psychic',
        category: 'Special',
        isZ: true
    },
    'Malicious Moonsault': {
        bp: 180,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Menacing Moonraze Maelstrom': { bp: 200, type: 'Ghost', category: 'Special', isZ: true },
    'Mind Blown': {
        bp: 150,
        type: 'Fire',
        mindBlownRecoil: true,
        target: 'allAdjacent',
        category: 'Special',
        zp: 200
    },
    'Multi-Attack': {
        bp: 90,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        zp: 185
    },
    'Nature\'s Madness': { bp: 0, type: 'Fairy', category: 'Special', zp: 100 },
    'Never-Ending Nightmare': { bp: 1, type: 'Ghost', category: 'Physical', isZ: true },
    'Oceanic Operetta': { bp: 195, type: 'Water', category: 'Special', isZ: true },
    'Psychic Terrain': { bp: 0, type: 'Psychic' },
    'Pulverizing Pancake': {
        bp: 210,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Revelation Dance': { bp: 90, type: 'Normal', category: 'Special', zp: 175 },
    'Sappy Seed': { bp: 90, type: 'Grass', category: 'Physical', zp: 175 },
    'Savage Spin-Out': { bp: 1, type: 'Bug', category: 'Physical', isZ: true },
    'Searing Sunraze Smash': {
        bp: 200,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Shadow Bone': {
        bp: 85,
        type: 'Ghost',
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Shattered Psyche': { bp: 1, type: 'Psychic', category: 'Physical', isZ: true },
    'Shore Up': { bp: 0, type: 'Ground' },
    'Sinister Arrow Raid': { bp: 180, type: 'Ghost', category: 'Physical', isZ: true },
    'Sizzly Slide': {
        bp: 90,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 175
    },
    'Solar Blade': {
        bp: 125,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        zp: 190
    },
    'Soul-Stealing 7-Star Strike': {
        bp: 195,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        isZ: true
    },
    'Sparkly Swirl': { bp: 90, type: 'Fairy', category: 'Special', zp: 175 },
    'Splintered Stormshards': { bp: 190, type: 'Rock', category: 'Physical', isZ: true },
    Spotlight: { bp: 0, type: 'Normal', priority: 3 },
    'Stoked Sparksurfer': {
        bp: 175,
        type: 'Electric',
        category: 'Special',
        secondaries: true,
        isZ: true
    },
    'Subzero Slammer': { bp: 1, type: 'Ice', category: 'Physical', isZ: true },
    'Supersonic Skystrike': { bp: 1, type: 'Flying', category: 'Physical', isZ: true },
    'Tectonic Rage': { bp: 1, type: 'Ground', category: 'Physical', isZ: true },
    'Throat Chop': {
        bp: 80,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Toxic Thread': { bp: 0, type: 'Poison' },
    'Twinkle Tackle': { bp: 1, type: 'Fairy', category: 'Physical', isZ: true },
    'Zippy Zap': {
        bp: 50,
        type: 'Electric',
        willCrit: true,
        priority: 2,
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    Accelerock: {
        bp: 40,
        type: 'Rock',
        priority: 1,
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    'Anchor Shot': {
        bp: 80,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Aurora Veil': { bp: 0, type: 'Ice' },
    'Brutal Swing': {
        bp: 60,
        type: 'Dark',
        makesContact: true,
        target: 'allAdjacent',
        category: 'Physical',
        zp: 120
    },
    'Burn Up': { bp: 130, type: 'Fire', category: 'Special', zp: 195 },
    'Clanging Scales': {
        bp: 110,
        type: 'Dragon',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 185
    },
    'Darkest Lariat': {
        bp: 85,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        ignoreDefensive: true,
        zp: 160
    },
    'Fire Lash': {
        bp: 80,
        type: 'Fire',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'First Impression': {
        bp: 90,
        type: 'Bug',
        priority: 2,
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Floaty Fall': {
        bp: 90,
        type: 'Flying',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 175
    },
    'Gear Up': { bp: 0, type: 'Steel' },
    'High Horsepower': {
        bp: 95,
        type: 'Ground',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Laser Focus': { bp: 0, type: 'Normal' },
    Leafage: { bp: 40, type: 'Grass', category: 'Physical', zp: 100 },
    Liquidation: {
        bp: 85,
        type: 'Water',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    Lunge: {
        bp: 80,
        type: 'Bug',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Moongeist Beam': { bp: 100, type: 'Ghost', category: 'Special', zp: 180 },
    'Photon Geyser': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        zp: 180
    },
    'Pika Papow': { bp: 0, type: 'Electric', category: 'Special', zp: 100 },
    'Plasma Fists': {
        bp: 100,
        type: 'Electric',
        makesContact: true,
        isPunch: true,
        category: 'Physical',
        zp: 180
    },
    'Pollen Puff': {
        bp: 90,
        type: 'Bug',
        category: 'Special',
        isBullet: true,
        zp: 175
    },
    'Power Trip': {
        bp: 20,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        zp: 160
    },
    'Prismatic Laser': { bp: 160, type: 'Psychic', category: 'Special', zp: 200 },
    'Psychic Fangs': {
        bp: 85,
        type: 'Psychic',
        makesContact: true,
        isBite: true,
        category: 'Physical',
        zp: 160
    },
    Purify: { bp: 0, type: 'Poison' },
    'Shell Trap': {
        bp: 150,
        type: 'Fire',
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 200
    },
    'Smart Strike': {
        bp: 70,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 140
    },
    'Sparkling Aria': {
        bp: 90,
        type: 'Water',
        isSound: true,
        target: 'allAdjacent',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    'Spectral Thief': {
        bp: 90,
        type: 'Ghost',
        makesContact: true,
        category: 'Physical',
        zp: 175
    },
    'Speed Swap': { bp: 0, type: 'Psychic' },
    'Spirit Shackle': {
        bp: 80,
        type: 'Ghost',
        category: 'Physical',
        secondaries: true,
        zp: 160
    },
    'Splishy Splash': {
        bp: 90,
        type: 'Water',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true,
        zp: 175
    },
    'Stomping Tantrum': {
        bp: 75,
        type: 'Ground',
        makesContact: true,
        category: 'Physical',
        zp: 140
    },
    'Strength Sap': { bp: 0, type: 'Grass' },
    'Sunsteel Strike': {
        bp: 100,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 180
    },
    'Tearful Look': { bp: 0, type: 'Normal' },
    'Trop Kick': {
        bp: 70,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 140
    },
    'Veevee Volley': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        category: 'Physical',
        zp: 100
    },
    'Zing Zap': {
        bp: 80,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 160
    }
};
var SM = (0, util_1.extend)(true, {}, XY, SM_PATCH);
var SS_PATCH = {
    'Apple Acid': {
        bp: 80,
        type: 'Grass',
        category: 'Special',
        secondaries: true,
        zp: 160,
        maxPower: 130
    },
    'Astral Barrage': {
        bp: 120,
        type: 'Ghost',
        category: 'Special',
        target: 'allAdjacentFoes',
        zp: 190,
        maxPower: 140
    },
    'Aura Wheel': {
        bp: 110,
        type: 'Electric',
        category: 'Physical',
        secondaries: true,
        zp: 185,
        maxPower: 140
    },
    'Behemoth Bash': {
        bp: 100,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 180,
        maxPower: 130
    },
    'Behemoth Blade': {
        bp: 100,
        type: 'Steel',
        makesContact: true,
        category: 'Physical',
        zp: 180,
        maxPower: 130
    },
    'Body Press': {
        bp: 80,
        type: 'Fighting',
        makesContact: true,
        category: 'Physical',
        overrideOffensiveStat: 'def',
        zp: 160,
        maxPower: 90
    },
    'Bolt Beak': {
        bp: 85,
        type: 'Electric',
        makesContact: true,
        category: 'Physical',
        zp: 160,
        maxPower: 130
    },
    'Branch Poke': {
        bp: 40,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        zp: 100,
        maxPower: 90
    },
    'Breaking Swipe': {
        bp: 60,
        type: 'Dragon',
        makesContact: true,
        target: 'allAdjacentFoes',
        category: 'Physical',
        secondaries: true,
        zp: 120,
        maxPower: 110
    },
    'Burning Jealousy': {
        bp: 70,
        type: 'Fire',
        target: 'allAdjacentFoes',
        category: 'Special',
        secondaries: true,
        zp: 140,
        maxPower: 120
    },
    'Clangorous Soul': { bp: 0, type: 'Dragon', isSound: true },
    'Coaching': {
        bp: 0,
        type: 'Fighting',
        category: 'Status'
    },
    'Corrosive Gas': {
        bp: 0,
        type: 'Poison',
        category: 'Status',
        target: 'allAdjacent'
    },
    'Court Change': { bp: 0, type: 'Normal' },
    Decorate: { bp: 0, type: 'Fairy' },
    'Dragon Darts': {
        bp: 50,
        type: 'Dragon',
        multihit: 2,
        category: 'Physical',
        zp: 100,
        maxPower: 130
    },
    'Dragon Energy': {
        bp: 150,
        type: 'Dragon',
        category: 'Special',
        target: 'allAdjacentFoes',
        zp: 200,
        maxPower: 150
    },
    'Drum Beating': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        secondaries: true,
        zp: 160,
        maxPower: 130
    },
    'Dual Wingbeat': {
        bp: 40,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        multihit: 2,
        zp: 100,
        maxPower: 130
    },
    'Dynamax Cannon': {
        bp: 100,
        type: 'Dragon',
        category: 'Special',
        zp: 180,
        maxPower: 130
    },
    'Eerie Spell': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        isSound: true,
        secondaries: true,
        zp: 160,
        maxPower: 130
    },
    Eternabeam: {
        bp: 160,
        type: 'Dragon',
        category: 'Special',
        zp: 200,
        maxPower: 150
    },
    'Expanding Force': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'False Surrender': {
        bp: 80,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        zp: 160,
        maxPower: 130
    },
    'Fiery Wrath': {
        bp: 90,
        type: 'Dark',
        category: 'Special',
        target: 'allAdjacentFoes',
        secondaries: true,
        zp: 175,
        maxPower: 130
    },
    'Fishious Rend': {
        bp: 85,
        type: 'Water',
        makesContact: true,
        isBite: true,
        category: 'Physical',
        zp: 160,
        maxPower: 130
    },
    'Flip Turn': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        zp: 120,
        maxPower: 110
    },
    'Freezing Glare': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        secondaries: true,
        zp: 175,
        maxPower: 130
    },
    'Glacial Lance': {
        bp: 130,
        type: 'Ice',
        category: 'Physical',
        target: 'allAdjacentFoes',
        zp: 195,
        maxPower: 140
    },
    'G-Max Befuddle': {
        bp: 10,
        type: 'Bug',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Centiferno': {
        bp: 10,
        type: 'Fire',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Cannonade': {
        bp: 10,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Chi Strike': {
        bp: 10,
        type: 'Fighting',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Cuddle': {
        bp: 10,
        type: 'Normal',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Depletion': {
        bp: 10,
        type: 'Dragon',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Drum Solo': {
        bp: 160,
        type: 'Grass',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Fireball': {
        bp: 160,
        type: 'Fire',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Finale': {
        bp: 10,
        type: 'Fairy',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Foam Burst': {
        bp: 10,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Gold Rush': {
        bp: 10,
        type: 'Normal',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Gravitas': {
        bp: 10,
        type: 'Psychic',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Hydrosnipe': {
        bp: 160,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Malodor': {
        bp: 10,
        type: 'Poison',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Meltdown': {
        bp: 10,
        type: 'Steel',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max One Blow': {
        bp: 10,
        type: 'Dark',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Rapid Flow': {
        bp: 10,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Replenish': {
        bp: 10,
        type: 'Normal',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Resonance': {
        bp: 10,
        type: 'Ice',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Sandblast': {
        bp: 10,
        type: 'Ground',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Smite': {
        bp: 10,
        type: 'Fairy',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Snooze': {
        bp: 10,
        type: 'Dark',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Steelsurge': {
        bp: 10,
        type: 'Steel',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Stonesurge': {
        bp: 10,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Stun Shock': {
        bp: 10,
        type: 'Electric',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Sweetness': {
        bp: 10,
        type: 'Grass',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Tartness': {
        bp: 10,
        type: 'Grass',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Terror': {
        bp: 10,
        type: 'Ghost',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Vine Lash': {
        bp: 10,
        type: 'Grass',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Volcalith': {
        bp: 10,
        type: 'Rock',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Volt Crash': {
        bp: 10,
        type: 'Electric',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Wildfire': {
        bp: 10,
        type: 'Fire',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'G-Max Wind Rage': {
        bp: 10,
        type: 'Flying',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Grassy Glide': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        makesContact: true,
        zp: 140,
        maxPower: 120
    },
    'Grav Apple': {
        bp: 80,
        type: 'Grass',
        category: 'Physical',
        secondaries: true,
        zp: 160,
        maxPower: 130
    },
    'Jaw Lock': {
        bp: 80,
        type: 'Dark',
        makesContact: true,
        isBite: true,
        category: 'Physical',
        zp: 160,
        maxPower: 130
    },
    'Jungle Healing': {
        bp: 0,
        type: 'Grass',
        category: 'Status'
    },
    'Lash Out': {
        bp: 75,
        type: 'Dark',
        makesContact: true,
        category: 'Physical',
        zp: 140,
        maxPower: 130
    },
    'Life Dew': { bp: 0, type: 'Water' },
    'Magic Powder': { bp: 0, type: 'Psychic' },
    'Max Airstream': {
        bp: 10,
        type: 'Flying',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Darkness': {
        bp: 10,
        type: 'Dark',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Flare': {
        bp: 100,
        type: 'Fire',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Flutterby': {
        bp: 10,
        type: 'Bug',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Geyser': {
        bp: 10,
        type: 'Water',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Guard': { bp: 0, type: 'Normal', priority: 4, isMax: true },
    'Max Hailstorm': {
        bp: 10,
        type: 'Ice',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Knuckle': {
        bp: 10,
        type: 'Fighting',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Lightning': {
        bp: 10,
        type: 'Electric',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Mindstorm': {
        bp: 10,
        type: 'Psychic',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Ooze': {
        bp: 10,
        type: 'Poison',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Overgrowth': {
        bp: 10,
        type: 'Grass',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Phantasm': {
        bp: 10,
        type: 'Ghost',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Quake': {
        bp: 10,
        type: 'Ground',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Rockfall': {
        bp: 10,
        type: 'Rock',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Starfall': {
        bp: 10,
        type: 'Fairy',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Steelspike': {
        bp: 10,
        type: 'Steel',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Strike': {
        bp: 10,
        type: 'Normal',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Max Wyrmwind': {
        bp: 10,
        type: 'Dragon',
        category: 'Physical',
        isMax: true,
        maxPower: 1
    },
    'Meteor Assault': {
        bp: 150,
        type: 'Fighting',
        category: 'Physical',
        zp: 200,
        maxPower: 100
    },
    'Meteor Beam': {
        bp: 120,
        type: 'Rock',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Misty Explosion': {
        bp: 100,
        type: 'Fairy',
        category: 'Special',
        target: 'allAdjacent',
        zp: 180,
        maxPower: 130
    },
    'No Retreat': { bp: 0, type: 'Fighting' },
    Obstruct: { bp: 0, type: 'Dark', priority: 4 },
    Octolock: { bp: 0, type: 'Fighting' },
    Overdrive: {
        bp: 80,
        type: 'Electric',
        isSound: true,
        target: 'allAdjacentFoes',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    Poltergeist: {
        bp: 110,
        type: 'Ghost',
        category: 'Physical',
        zp: 185,
        maxPower: 140
    },
    'Pyro Ball': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        secondaries: true,
        isBullet: true,
        zp: 190,
        maxPower: 140
    },
    'Rising Voltage': {
        bp: 70,
        type: 'Electric',
        category: 'Special',
        zp: 140,
        maxPower: 140
    },
    'Scale Shot': {
        bp: 25,
        type: 'Dragon',
        category: 'Physical',
        multihit: [2, 5],
        zp: 140,
        maxPower: 130
    },
    'Shell Side Arm': {
        bp: 90,
        type: 'Poison',
        category: 'Special',
        secondaries: true,
        zp: 175,
        maxPower: 90
    },
    'Snap Trap': {
        bp: 35,
        type: 'Grass',
        makesContact: true,
        category: 'Physical',
        zp: 100,
        maxPower: 90
    },
    'Snipe Shot': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Scorching Sands': {
        bp: 70,
        type: 'Ground',
        category: 'Special',
        secondaries: true,
        zp: 140,
        maxPower: 120
    },
    'Skitter Smack': {
        bp: 70,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        secondaries: true,
        zp: 140,
        maxPower: 120
    },
    'Spirit Break': {
        bp: 75,
        type: 'Fairy',
        makesContact: true,
        category: 'Physical',
        secondaries: true,
        zp: 140,
        maxPower: 130
    },
    'Steel Beam': {
        bp: 140,
        type: 'Steel',
        mindBlownRecoil: true,
        category: 'Special',
        zp: 200,
        maxPower: 140
    },
    'Steel Roller': {
        bp: 130,
        type: 'Steel',
        category: 'Physical',
        makesContact: true,
        zp: 195,
        maxPower: 140
    },
    'Strange Steam': {
        bp: 90,
        type: 'Fairy',
        category: 'Special',
        secondaries: true,
        zp: 175,
        maxPower: 130
    },
    'Surging Strikes': {
        bp: 25,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        willCrit: true,
        isPunch: true,
        multihit: 3,
        zp: 140,
        maxPower: 130
    },
    'Terrain Pulse': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        isPulse: true,
        zp: 160,
        maxPower: 130
    },
    'Triple Axel': {
        bp: 20,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        multihit: 3,
        zp: 120,
        maxPower: 140
    },
    'Wicked Blow': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        makesContact: true,
        willCrit: true,
        isPunch: true,
        zp: 160,
        maxPower: 130
    },
    'Stuff Cheeks': { bp: 0, type: 'Normal' },
    'Tar Shot': { bp: 0, type: 'Rock' },
    Teatime: { bp: 0, type: 'Normal' },
    'Thunder Cage': {
        bp: 80,
        type: 'Electric',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Thunderous Kick': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        secondaries: true,
        makesContact: true,
        zp: 175,
        maxPower: 90
    },
    '10,000,000 Volt Thunderbolt': { maxPower: 1 },
    Absorb: { maxPower: 90 },
    Accelerock: { maxPower: 90 },
    Acid: { maxPower: 70 },
    'Acid Downpour': { maxPower: 1 },
    'Acid Spray': { maxPower: 70 },
    Acrobatics: { maxPower: 110 },
    'Aerial Ace': { maxPower: 110 },
    Aeroblast: { maxPower: 130 },
    'Air Cutter': { maxPower: 110 },
    'Air Slash': { maxPower: 130 },
    'All-Out Pummeling': { maxPower: 1 },
    'Anchor Shot': { maxPower: 130 },
    'Ancient Power': { maxPower: 110 },
    'Aqua Jet': { maxPower: 90 },
    'Aqua Tail': { maxPower: 130 },
    'Arm Thrust': { maxPower: 70 },
    Assurance: { maxPower: 110 },
    Astonish: { maxPower: 90 },
    'Attack Order': { maxPower: 130 },
    'Aura Sphere': { maxPower: 90 },
    'Aurora Beam': { maxPower: 120 },
    Avalanche: { maxPower: 110 },
    Barrage: { maxPower: 90 },
    'Beak Blast': { maxPower: 130 },
    'Beat Up': { maxPower: 100 },
    Belch: { maxPower: 95 },
    Bide: { maxPower: 100 },
    Bind: { maxPower: 90 },
    Bite: { maxPower: 110 },
    'Black Hole Eclipse': { maxPower: 1 },
    'Blast Burn': { maxPower: 150 },
    'Blaze Kick': { maxPower: 130 },
    Blizzard: { maxPower: 140 },
    'Bloom Doom': { maxPower: 1 },
    'Blue Flare': { maxPower: 140 },
    'Body Slam': { maxPower: 130 },
    'Bolt Strike': { maxPower: 140 },
    'Bone Club': { maxPower: 120 },
    Bonemerang: { maxPower: 130 },
    'Bone Rush': { maxPower: 130 },
    Boomburst: { maxPower: 140 },
    Bounce: { maxPower: 130 },
    'Brave Bird': { maxPower: 140 },
    'Breakneck Blitz': { maxPower: 1 },
    'Brick Break': { maxPower: 90 },
    Brine: { maxPower: 120 },
    'Brutal Swing': { maxPower: 110 },
    Bubble: { maxPower: 90 },
    'Bubble Beam': { maxPower: 120 },
    'Bug Bite': { maxPower: 110 },
    'Bug Buzz': { maxPower: 130 },
    Bulldoze: { maxPower: 110 },
    'Bullet Punch': { maxPower: 90 },
    'Bullet Seed': { maxPower: 130 },
    'Burn Up': { maxPower: 140 },
    Catastropika: { maxPower: 1 },
    'Charge Beam': { maxPower: 100 },
    Chatter: { maxPower: 120 },
    'Chip Away': { maxPower: 120 },
    'Circle Throw': { maxPower: 80 },
    Clamp: { maxPower: 90 },
    'Clanging Scales': { maxPower: 140 },
    'Clangorous Soulblaze': { maxPower: 1 },
    'Clear Smog': { maxPower: 75 },
    'Close Combat': { maxPower: 95 },
    'Comet Punch': { maxPower: 100 },
    Confusion: { maxPower: 100 },
    Constrict: { maxPower: 90 },
    'Continental Crush': { maxPower: 1 },
    'Core Enforcer': { maxPower: 130 },
    'Corkscrew Crash': { maxPower: 1 },
    Counter: { maxPower: 75 },
    Covet: { maxPower: 110 },
    Crabhammer: { maxPower: 130 },
    'Cross Chop': { maxPower: 90 },
    'Cross Poison': { maxPower: 85 },
    Crunch: { maxPower: 130 },
    'Crush Claw': { maxPower: 130 },
    'Crush Grip': { maxPower: 140 },
    Cut: { maxPower: 100 },
    'Darkest Lariat': { maxPower: 130 },
    'Dark Pulse': { maxPower: 130 },
    'Dazzling Gleam': { maxPower: 130 },
    'Devastating Drake': { maxPower: 1 },
    'Diamond Storm': { maxPower: 130 },
    Dig: { maxPower: 130 },
    'Disarming Voice': { maxPower: 90 },
    Discharge: { maxPower: 130 },
    Dive: { maxPower: 130 },
    'Dizzy Punch': { maxPower: 120 },
    'Doom Desire': { maxPower: 140 },
    'Double-Edge': { maxPower: 140 },
    'Double Hit': { maxPower: 120 },
    'Double Iron Bash': { maxPower: 140 },
    'Double Kick': { maxPower: 80 },
    'Double Slap': { maxPower: 90 },
    'Draco Meteor': { maxPower: 140 },
    'Dragon Ascent': { maxPower: 140 },
    'Dragon Breath': { maxPower: 110 },
    'Dragon Claw': { maxPower: 130 },
    'Dragon Hammer': { maxPower: 130 },
    'Dragon Pulse': { maxPower: 130 },
    'Dragon Rage': { maxPower: 100 },
    'Dragon Rush': { maxPower: 130 },
    'Dragon Tail': { maxPower: 110 },
    'Draining Kiss': { maxPower: 100 },
    'Drain Punch': { maxPower: 90 },
    'Dream Eater': { maxPower: 130 },
    'Drill Peck': { maxPower: 130 },
    'Drill Run': { maxPower: 130 },
    'Dual Chop': { maxPower: 130 },
    'Dynamic Punch': { maxPower: 90 },
    'Earth Power': { maxPower: 130 },
    Earthquake: { maxPower: 130 },
    'Echoed Voice': { maxPower: 90 },
    'Egg Bomb': { maxPower: 130 },
    'Electro Ball': { maxPower: 130 },
    Electroweb: { maxPower: 110 },
    Ember: { maxPower: 90 },
    Endeavor: { maxPower: 130 },
    'Energy Ball': { maxPower: 130 },
    Eruption: { maxPower: 150 },
    Explosion: { maxPower: 150 },
    Extrasensory: { maxPower: 130 },
    'Extreme Speed': { maxPower: 130 },
    Facade: { maxPower: 120 },
    'Fairy Wind': { maxPower: 90 },
    'Fake Out': { maxPower: 90 },
    'False Swipe': { maxPower: 90 },
    Feint: { maxPower: 90 },
    'Feint Attack': { maxPower: 110 },
    'Fell Stinger': { maxPower: 100 },
    'Fiery Dance': { maxPower: 130 },
    'Final Gambit': { maxPower: 100 },
    'Fire Blast': { maxPower: 140 },
    'Fire Fang': { maxPower: 120 },
    'Fire Lash': { maxPower: 130 },
    'Fire Pledge': { maxPower: 130 },
    'Fire Punch': { maxPower: 130 },
    'Fire Spin': { maxPower: 90 },
    'First Impression': { maxPower: 130 },
    Fissure: { maxPower: 130 },
    Flail: { maxPower: 130 },
    'Flame Burst': { maxPower: 120 },
    'Flame Charge': { maxPower: 100 },
    'Flame Wheel': { maxPower: 110 },
    Flamethrower: { maxPower: 130 },
    'Flare Blitz': { maxPower: 140 },
    'Flash Cannon': { maxPower: 130 },
    'Fleur Cannon': { maxPower: 140 },
    Fling: { maxPower: 100 },
    Fly: { maxPower: 130 },
    'Flying Press': { maxPower: 90 },
    'Focus Blast': { maxPower: 95 },
    'Focus Punch': { maxPower: 100 },
    'Force Palm': { maxPower: 80 },
    'Foul Play': { maxPower: 130 },
    'Freeze-Dry': { maxPower: 120 },
    'Freeze Shock': { maxPower: 140 },
    'Frenzy Plant': { maxPower: 150 },
    'Frost Breath': { maxPower: 110 },
    Frustration: { maxPower: 130 },
    'Fury Attack': { maxPower: 90 },
    'Fury Cutter': { maxPower: 90 },
    'Fury Swipes': { maxPower: 100 },
    'Fusion Bolt': { maxPower: 130 },
    'Fusion Flare': { maxPower: 130 },
    'Future Sight': { maxPower: 140 },
    'Gear Grind': { maxPower: 130 },
    'Genesis Supernova': { maxPower: 1 },
    'Giga Drain': { maxPower: 130 },
    'Giga Impact': { maxPower: 150 },
    'Gigavolt Havoc': { maxPower: 1 },
    Glaciate: { maxPower: 120 },
    'Grass Knot': { maxPower: 130 },
    'Grass Pledge': { maxPower: 130 },
    'Guardian of Alola': { maxPower: 1 },
    Guillotine: { maxPower: 130 },
    'Gunk Shot': { maxPower: 95 },
    Gust: { maxPower: 90 },
    'Gyro Ball': { maxPower: 130 },
    'Hammer Arm': { maxPower: 90 },
    Headbutt: { maxPower: 120 },
    'Head Charge': { maxPower: 140 },
    'Head Smash': { maxPower: 150 },
    'Heart Stamp': { maxPower: 110 },
    'Heat Crash': { maxPower: 130 },
    'Heat Wave': { maxPower: 130 },
    'Heavy Slam': { maxPower: 130 },
    Hex: { maxPower: 120 },
    'Hidden Power': { maxPower: 110 },
    'Hidden Power Bug': { maxPower: 110 },
    'Hidden Power Dark': { maxPower: 110 },
    'Hidden Power Dragon': { maxPower: 110 },
    'Hidden Power Electric': { maxPower: 110 },
    'Hidden Power Fighting': { maxPower: 80 },
    'Hidden Power Fire': { maxPower: 110 },
    'Hidden Power Flying': { maxPower: 110 },
    'Hidden Power Ghost': { maxPower: 110 },
    'Hidden Power Grass': { maxPower: 110 },
    'Hidden Power Ground': { maxPower: 110 },
    'Hidden Power Ice': { maxPower: 110 },
    'Hidden Power Poison': { maxPower: 80 },
    'Hidden Power Psychic': { maxPower: 110 },
    'Hidden Power Rock': { maxPower: 110 },
    'Hidden Power Steel': { maxPower: 110 },
    'Hidden Power Water': { maxPower: 110 },
    'High Horsepower': { maxPower: 130 },
    'High Jump Kick': { maxPower: 95 },
    'Hold Back': { maxPower: 90 },
    'Horn Attack': { maxPower: 120 },
    'Horn Drill': { maxPower: 130 },
    'Horn Leech': { maxPower: 130 },
    Howl: { isSound: true },
    Hurricane: { maxPower: 140 },
    'Hydro Cannon': { maxPower: 150 },
    'Hydro Pump': { maxPower: 140 },
    'Hydro Vortex': { maxPower: 1 },
    'Hyper Beam': { maxPower: 150 },
    'Hyper Fang': { maxPower: 130 },
    'Hyperspace Fury': { maxPower: 130 },
    'Hyperspace Hole': { maxPower: 130 },
    'Hyper Voice': { maxPower: 130 },
    'Ice Ball': { maxPower: 90 },
    'Ice Beam': { maxPower: 130 },
    'Ice Burn': { maxPower: 140 },
    'Ice Fang': { maxPower: 120 },
    'Ice Hammer': { maxPower: 130 },
    'Ice Punch': { maxPower: 130 },
    'Ice Shard': { maxPower: 90 },
    'Icicle Crash': { maxPower: 130 },
    'Icicle Spear': { maxPower: 130 },
    'Icy Wind': { maxPower: 110 },
    Incinerate: { maxPower: 110 },
    Inferno: { maxPower: 130 },
    'Inferno Overdrive': { maxPower: 1 },
    Infestation: { maxPower: 90 },
    'Iron Head': { maxPower: 130 },
    'Iron Tail': { maxPower: 130 },
    Judgment: { maxPower: 130 },
    'Jump Kick': { maxPower: 90 },
    'Karate Chop': { maxPower: 75 },
    'Knock Off': { maxPower: 120 },
    'Land\'s Wrath': { maxPower: 130 },
    'Last Resort': { maxPower: 140 },
    'Lava Plume': { maxPower: 130 },
    Leafage: { maxPower: 90 },
    'Leaf Blade': { maxPower: 130 },
    'Leaf Storm': { maxPower: 140 },
    'Leaf Tornado': { maxPower: 120 },
    'Leech Life': { maxPower: 130 },
    'Let\'s Snuggle Forever': { maxPower: 1 },
    Lick: { maxPower: 90 },
    'Light of Ruin': { maxPower: 140 },
    'Light That Burns the Sky': { maxPower: 1 },
    Liquidation: { maxPower: 130 },
    'Low Kick': { maxPower: 100 },
    'Low Sweep': { maxPower: 85 },
    Lunge: { maxPower: 130 },
    'Luster Purge': { maxPower: 120 },
    'Mach Punch': { maxPower: 70 },
    'Magical Leaf': { maxPower: 110 },
    'Magma Storm': { maxPower: 130 },
    'Magnet Bomb': { maxPower: 110 },
    Magnitude: { maxPower: 140 },
    'Malicious Moonsault': { maxPower: 1 },
    'Mega Drain': { maxPower: 90 },
    Megahorn: { maxPower: 140 },
    'Mega Kick': { maxPower: 140 },
    'Mega Punch': { maxPower: 130 },
    'Menacing Moonraze Maelstrom': { maxPower: 1 },
    'Metal Burst': { maxPower: 100 },
    'Metal Claw': { maxPower: 100 },
    'Meteor Mash': { maxPower: 130 },
    'Mind Blown': { maxPower: 150 },
    'Mirror Coat': { maxPower: 100 },
    'Mirror Shot': { maxPower: 120 },
    'Mist Ball': { maxPower: 120 },
    Moonblast: { maxPower: 130 },
    'Moongeist Beam': { maxPower: 130 },
    'Mud Bomb': { maxPower: 120 },
    'Mud Shot': { maxPower: 110 },
    'Mud-Slap': { maxPower: 90 },
    'Muddy Water': { maxPower: 130 },
    'Multi-Attack': { bp: 120, maxPower: 95 },
    'Mystical Fire': { maxPower: 130 },
    'Natural Gift': { maxPower: 130 },
    'Nature\'s Madness': { maxPower: 100 },
    'Needle Arm': { maxPower: 110 },
    'Never-Ending Nightmare': { maxPower: 1 },
    'Night Daze': { maxPower: 130 },
    'Night Shade': { maxPower: 100 },
    'Night Slash': { maxPower: 120 },
    Nuzzle: { maxPower: 90 },
    'Oblivion Wing': { maxPower: 130 },
    'Oceanic Operetta': { maxPower: 1 },
    Octazooka: { maxPower: 120 },
    'Ominous Wind': { maxPower: 110 },
    'Origin Pulse': { maxPower: 140 },
    Outrage: { maxPower: 140 },
    Overheat: { maxPower: 140 },
    'Paleo Wave': { maxPower: 130 },
    'Parabolic Charge': { maxPower: 120 },
    Payback: { maxPower: 100 },
    'Pay Day': { maxPower: 90 },
    Peck: { maxPower: 90 },
    'Petal Blizzard': { maxPower: 130 },
    'Petal Dance': { maxPower: 140 },
    'Phantom Force': { maxPower: 130 },
    'Photon Geyser': { maxPower: 130 },
    'Pin Missile': { maxPower: 130 },
    'Plasma Fists': { maxPower: 130 },
    'Play Rough': { maxPower: 130 },
    Pluck: { maxPower: 110 },
    'Poison Fang': { maxPower: 75 },
    'Poison Jab': { maxPower: 90 },
    'Poison Sting': { maxPower: 70 },
    'Poison Tail': { maxPower: 75 },
    'Pollen Puff': { maxPower: 130 },
    Pound: { maxPower: 90 },
    'Powder Snow': { maxPower: 90 },
    'Power Gem': { maxPower: 130 },
    'Power Trip': { maxPower: 130 },
    'Power-Up Punch': { maxPower: 70 },
    'Power Whip': { maxPower: 140 },
    'Precipice Blades': { maxPower: 140 },
    Present: { maxPower: 100 },
    'Prismatic Laser': { maxPower: 150 },
    Psybeam: { maxPower: 120 },
    Psychic: { maxPower: 130 },
    'Psychic Fangs': { maxPower: 130 },
    'Psycho Boost': { maxPower: 140 },
    'Psycho Cut': { maxPower: 120 },
    Psyshock: { maxPower: 130 },
    Psystrike: { maxPower: 130 },
    Psywave: { maxPower: 100 },
    'Pulverizing Pancake': { maxPower: 1 },
    Punishment: { maxPower: 130 },
    Pursuit: { maxPower: 90 },
    'Quick Attack': { maxPower: 90 },
    Rage: { maxPower: 90 },
    'Rapid Spin': { bp: 50, secondaries: true, maxPower: 100 },
    'Razor Leaf': { maxPower: 110 },
    'Razor Shell': { maxPower: 130 },
    'Razor Wind': { maxPower: 130 },
    'Relic Song': { maxPower: 130 },
    Retaliate: { maxPower: 120 },
    Return: { maxPower: 130 },
    'Revelation Dance': { maxPower: 130 },
    Revenge: { maxPower: 80 },
    Reversal: { maxPower: 100 },
    'Roar of Time': { maxPower: 150 },
    'Rock Blast': { maxPower: 130 },
    'Rock Climb': { maxPower: 130 },
    'Rock Slide': { maxPower: 130 },
    'Rock Smash': { maxPower: 70 },
    'Rock Throw': { maxPower: 100 },
    'Rock Tomb': { maxPower: 110 },
    'Rock Wrecker': { maxPower: 150 },
    'Rolling Kick': { maxPower: 80 },
    Rollout: { maxPower: 90 },
    Round: { maxPower: 110 },
    'Sacred Fire': { maxPower: 130 },
    'Sacred Sword': { maxPower: 90 },
    'Sand Tomb': { maxPower: 90 },
    'Savage Spin-Out': { maxPower: 1 },
    Scald: { maxPower: 130 },
    Scratch: { maxPower: 90 },
    'Searing Shot': { maxPower: 130 },
    'Searing Sunraze Smash': { maxPower: 1 },
    'Secret Power': { maxPower: 120 },
    'Secret Sword': { maxPower: 90 },
    'Seed Bomb': { maxPower: 130 },
    'Seed Flare': { maxPower: 140 },
    'Seismic Toss': { maxPower: 75 },
    'Self-Destruct': { maxPower: 150 },
    'Shadow Ball': { maxPower: 130 },
    'Shadow Bone': { maxPower: 130 },
    'Shadow Claw': { maxPower: 120 },
    'Shadow Force': { maxPower: 140 },
    'Shadow Punch': { maxPower: 110 },
    'Shadow Sneak': { maxPower: 90 },
    'Shadow Strike': { maxPower: 130 },
    'Shattered Psyche': { maxPower: 1 },
    'Sheer Cold': { maxPower: 130 },
    'Shell Trap': { maxPower: 150 },
    'Shock Wave': { maxPower: 110 },
    'Signal Beam': { maxPower: 130 },
    'Silver Wind': { maxPower: 110 },
    'Sinister Arrow Raid': { maxPower: 1 },
    'Skull Bash': { maxPower: 140 },
    'Sky Attack': { maxPower: 140 },
    'Sky Drop': { maxPower: 110 },
    'Sky Uppercut': { maxPower: 90 },
    Slam: { maxPower: 130 },
    Slash: { maxPower: 120 },
    Sludge: { maxPower: 85 },
    'Sludge Bomb': { maxPower: 90 },
    'Sludge Wave': { maxPower: 90 },
    'Smack Down': { maxPower: 100 },
    'Smart Strike': { maxPower: 120 },
    'Smelling Salts': { maxPower: 120 },
    Smog: { maxPower: 70 },
    Snarl: { maxPower: 110 },
    Snore: { maxPower: 100 },
    'Solar Beam': { maxPower: 140 },
    'Solar Blade': { maxPower: 140 },
    'Sonic Boom': { maxPower: 100 },
    'Soul-Stealing 7-Star Strike': { maxPower: 1 },
    'Spacial Rend': { maxPower: 130 },
    Spark: { maxPower: 120 },
    'Sparkling Aria': { maxPower: 130 },
    'Spectral Thief': { maxPower: 130 },
    'Spike Cannon': { maxPower: 120 },
    'Spirit Shackle': { maxPower: 130 },
    'Spit Up': { maxPower: 100 },
    'Splintered Stormshards': { maxPower: 1 },
    'Steam Eruption': { maxPower: 140 },
    Steamroller: { maxPower: 120 },
    'Steel Wing': { maxPower: 120 },
    'Stoked Sparksurfer': { maxPower: 1 },
    Stomp: { maxPower: 120 },
    'Stomping Tantrum': { maxPower: 130 },
    'Stone Edge': { maxPower: 130 },
    'Stored Power': { maxPower: 130 },
    'Storm Throw': { maxPower: 80 },
    Strength: { maxPower: 130 },
    'Struggle Bug': { maxPower: 100 },
    Submission: { maxPower: 90 },
    'Subzero Slammer': { maxPower: 1 },
    'Sucker Punch': { maxPower: 120 },
    'Sunsteel Strike': { maxPower: 130 },
    'Super Fang': { maxPower: 100 },
    Superpower: { maxPower: 95 },
    'Supersonic Skystrike': { maxPower: 1 },
    Surf: { maxPower: 130 },
    Swift: { maxPower: 110 },
    Synchronoise: { maxPower: 140 },
    Tackle: { maxPower: 90 },
    'Tail Slap': { maxPower: 130 },
    'Take Down': { maxPower: 130 },
    'Techno Blast': { maxPower: 140 },
    'Tectonic Rage': { maxPower: 1 },
    Thief: { maxPower: 110 },
    'Thousand Arrows': { maxPower: 130 },
    'Thousand Waves': { maxPower: 130 },
    Thrash: { maxPower: 140 },
    'Throat Chop': { maxPower: 130 },
    Thunder: { maxPower: 140 },
    Thunderbolt: { maxPower: 130 },
    'Thunder Fang': { maxPower: 120 },
    'Thunder Punch': { maxPower: 130 },
    'Thunder Shock': { maxPower: 90 },
    'Tri Attack': { maxPower: 130 },
    'Triple Kick': { maxPower: 80 },
    'Trop Kick': { maxPower: 120 },
    'Trump Card': { maxPower: 130 },
    Twineedle: { maxPower: 100 },
    'Twinkle Tackle': { maxPower: 1 },
    Twister: { maxPower: 90 },
    'U-turn': { maxPower: 120 },
    Uproar: { maxPower: 130 },
    'Vacuum Wave': { maxPower: 70 },
    'V-create': { maxPower: 150 },
    Venoshock: { maxPower: 85 },
    'Vine Whip': { maxPower: 100 },
    'Vise Grip': { maxPower: 110 },
    'Vital Throw': { maxPower: 85 },
    'Volt Switch': { maxPower: 120 },
    'Volt Tackle': { maxPower: 140 },
    'Wake-Up Slap': { maxPower: 85 },
    Waterfall: { maxPower: 130 },
    'Water Gun': { maxPower: 90 },
    'Water Pledge': { maxPower: 130 },
    'Water Pulse': { maxPower: 110 },
    'Water Shuriken': { maxPower: 90 },
    'Water Spout': { maxPower: 150 },
    'Weather Ball': { maxPower: 130 },
    Whirlpool: { maxPower: 90 },
    'Wild Charge': { maxPower: 130 },
    'Wing Attack': { maxPower: 110 },
    'Wood Hammer': { maxPower: 140 },
    Wrap: { maxPower: 90 },
    'Wring Out': { maxPower: 140 },
    'X-Scissor': { maxPower: 130 },
    'Zap Cannon': { maxPower: 140 },
    'Zen Headbutt': { maxPower: 130 },
    'Zing Zap': { maxPower: 130 }
};
var SS = (0, util_1.extend)(true, {}, SM, SS_PATCH);
var LGPE_MOVES = [
    'Baddy Bad',
    'Bouncy Bubble',
    'Buzzy Buzz',
    'Freezy Frost',
    'Glitzy Glow',
    'Sappy Seed',
    'Sizzly Slide',
    'Sparkly Swirl',
    'Zippy Zap',
    'Floaty Fall',
    'Pika Papow',
    'Splishy Splash',
    'Veevee Volley',
];
try {
    for (var LGPE_MOVES_1 = __values(LGPE_MOVES), LGPE_MOVES_1_1 = LGPE_MOVES_1.next(); !LGPE_MOVES_1_1.done; LGPE_MOVES_1_1 = LGPE_MOVES_1.next()) {
        var m = LGPE_MOVES_1_1.value;
        delete SS[m];
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (LGPE_MOVES_1_1 && !LGPE_MOVES_1_1.done && (_a = LGPE_MOVES_1["return"])) _a.call(LGPE_MOVES_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var SV_PATCH = {
    'Aerial Ace': { isSlicing: true },
    Aeroblast: { isWind: true },
    'Air Cutter': { isSlicing: true, isWind: true },
    'Air Slash': { isSlicing: true },
    'Behemoth Blade': { isSlicing: true },
    Blizzard: { isWind: true },
    'Cross Poison': { isSlicing: true },
    Cut: { isSlicing: true },
    'Fairy Wind': { isWind: true },
    'Fury Cutter': { isSlicing: true },
    'Glacial Lance': { bp: 120, zp: 190 },
    'Grassy Glide': { bp: 55, zp: 100, maxPower: 110 },
    Gust: { isWind: true },
    'Heat Wave': { isWind: true },
    Hurricane: { isWind: true },
    'Icy Wind': { isWind: true },
    'Leaf Blade': { isSlicing: true },
    'Luster Purge': { bp: 95, zp: 175, maxPower: 130 },
    'Mist Ball': { bp: 95, zp: 175, maxPower: 130 },
    'Night Slash': { isSlicing: true },
    'Petal Blizzard': { isWind: true },
    'Psycho Cut': { isSlicing: true },
    'Razor Leaf': { isSlicing: true },
    'Razor Shell': { isSlicing: true },
    'Sacred Sword': { isSlicing: true },
    'Secret Sword': { isSlicing: true },
    Sandstorm: { isWind: true },
    Slash: { isSlicing: true },
    'Solar Blade': { isSlicing: true },
    Tailwind: { isWind: true },
    Twister: { isWind: true },
    Whirlwind: { isWind: true },
    'Wicked Blow': { bp: 75, zp: 140 },
    'X-Scissor': { isSlicing: true },
    'Aqua Cutter': {
        bp: 70,
        type: 'Water',
        category: 'Physical',
        zp: 140,
        maxPower: 120,
        isSlicing: true
    },
    'Alluring Voice': {
        bp: 80,
        type: 'Fairy',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        isSound: true,
        makesContact: true
    },
    'Aqua Step': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        makesContact: true
    },
    'Armor Cannon': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Axe Kick': {
        bp: 120,
        type: 'Fighting',
        category: 'Physical',
        zp: 190,
        maxPower: 95,
        secondaries: true,
        hasCrashDamage: true,
        makesContact: true
    },
    'Barb Barrage': {
        bp: 60,
        type: 'Poison',
        category: 'Physical',
        zp: 120,
        maxPower: 80,
        secondaries: true
    },
    'Bitter Blade': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        zp: 175,
        maxPower: 130,
        makesContact: true,
        isSlicing: true,
        drain: [1, 2]
    },
    'Bitter Malice': {
        bp: 75,
        type: 'Ghost',
        category: 'Special',
        zp: 140,
        maxPower: 130,
        secondaries: true
    },
    'Blazing Torque': {
        bp: 80,
        type: 'Fire',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Bleakwind Storm': {
        bp: 100,
        type: 'Flying',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Blood Moon': {
        bp: 140,
        type: 'Normal',
        category: 'Special',
        zp: 200,
        maxPower: 140
    },
    'Burning Bulwark': { bp: 0, type: 'Fire', priority: 4 },
    'Ceaseless Edge': {
        bp: 65,
        type: 'Dark',
        category: 'Physical',
        zp: 120,
        maxPower: 120,
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    'Chilling Water': {
        bp: 50,
        type: 'Water',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        secondaries: true
    },
    'Chilly Reception': {
        bp: 0,
        type: 'Ice',
        category: 'Status'
    },
    'Chloroblast': {
        bp: 150,
        type: 'Grass',
        mindBlownRecoil: true,
        category: 'Special',
        zp: 200,
        maxPower: 150
    },
    'Collision Course': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        makesContact: true
    },
    'Combat Torque': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        secondaries: true
    },
    Comeuppance: {
        bp: 0,
        type: 'Dark',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    Doodle: {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Double Shock': {
        bp: 120,
        type: 'Electric',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true
    },
    'Dire Claw': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        zp: 160,
        maxPower: 90,
        makesContact: true,
        secondaries: true
    },
    'Dragon Cheer': { bp: 0, type: 'Dragon' },
    'Electro Drift': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        makesContact: true
    },
    'Electro Shot': {
        bp: 130,
        type: 'Electric',
        category: 'Special',
        zp: 195,
        maxPower: 140
    },
    'Esper Wing': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Fickle Beam': {
        bp: 80,
        type: 'Dragon',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Fillet Away': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Flower Trick': {
        bp: 70,
        type: 'Grass',
        category: 'Physical',
        willCrit: true,
        zp: 140,
        maxPower: 120
    },
    'Gigaton Hammer': {
        bp: 160,
        type: 'Steel',
        category: 'Physical',
        zp: 200,
        maxPower: 150
    },
    'Glaive Rush': {
        bp: 120,
        type: 'Dragon',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true
    },
    'Hard Press': {
        bp: 0,
        type: 'Steel',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    'Headlong Rush': {
        bp: 120,
        type: 'Ground',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true,
        isPunch: true
    },
    'Hydro Steam': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Hyper Drill': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        makesContact: true,
        breaksProtect: true
    },
    'Ice Spinner': {
        bp: 80,
        type: 'Ice',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true
    },
    'Infernal Parade': {
        bp: 60,
        type: 'Ghost',
        category: 'Special',
        zp: 120,
        maxPower: 110,
        secondaries: true
    },
    'Ivy Cudgel': {
        bp: 100,
        type: 'Grass',
        category: 'Physical',
        zp: 180,
        maxPower: 130
    },
    'Jet Punch': {
        bp: 60,
        type: 'Water',
        category: 'Physical',
        zp: 120,
        maxPower: 110,
        makesContact: true,
        isPunch: true,
        priority: 1
    },
    'Kowtow Cleave': {
        bp: 85,
        type: 'Dark',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true,
        isSlicing: true
    },
    'Last Respects': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
        zp: 100,
        maxPower: 100
    },
    'Lumina Crash': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Lunar Blessing': {
        bp: 0,
        type: 'Psychic',
        category: 'Status'
    },
    'Magical Torque': {
        bp: 100,
        type: 'Fairy',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        secondaries: true
    },
    'Make It Rain': {
        bp: 120,
        type: 'Steel',
        category: 'Special',
        zp: 190,
        maxPower: 140,
        target: 'allAdjacentFoes',
        self: { boosts: { spa: -1 } }
    },
    'Malignant Chain': {
        bp: 100,
        type: 'Poison',
        category: 'Special',
        zp: 180,
        maxPower: 90,
        secondaries: true
    },
    'Matcha Gotcha': {
        bp: 80,
        type: 'Grass',
        category: 'Special',
        target: 'allAdjacentFoes',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        drain: [1, 2]
    },
    'Mighty Cleave': {
        bp: 95,
        type: 'Rock',
        category: 'Physical',
        zp: 175,
        maxPower: 130,
        makesContact: true,
        isSlicing: true
    },
    'Mortal Spin': {
        bp: 30,
        type: 'Poison',
        category: 'Physical',
        zp: 100,
        maxPower: 70,
        makesContact: true,
        secondaries: true,
        target: 'allAdjacentFoes'
    },
    'Mountain Gale': {
        bp: 100,
        type: 'Ice',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        secondaries: true
    },
    'Mystical Power': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        zp: 140,
        maxPower: 120,
        secondaries: true
    },
    'Noxious Torque': {
        bp: 100,
        type: 'Poison',
        category: 'Physical',
        zp: 180,
        maxPower: 90,
        secondaries: true
    },
    'Order Up': {
        bp: 80,
        type: 'Dragon',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        isPulse: true
    },
    'Psychic Noise': {
        bp: 75,
        type: 'Psychic',
        category: 'Special',
        zp: 140,
        maxPower: 130,
        secondaries: true,
        isSound: true
    },
    'Population Bomb': {
        bp: 20,
        type: 'Normal',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        makesContact: true,
        isSlicing: true,
        multihit: 10
    },
    Pounce: {
        bp: 50,
        type: 'Bug',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true,
        secondaries: true
    },
    'Power Shift': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Psyblade: {
        bp: 80,
        type: 'Psychic',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        makesContact: true,
        isSlicing: true
    },
    'Psyshield Bash': {
        bp: 70,
        type: 'Psychic',
        category: 'Physical',
        zp: 140,
        maxPower: 120,
        makesContact: true,
        secondaries: true
    },
    'Rage Fist': {
        bp: 50,
        type: 'Ghost',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true,
        isPunch: true
    },
    'Raging Bull': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        zp: 175,
        maxPower: 130,
        makesContact: true
    },
    'Raging Fury': {
        bp: 120,
        type: 'Fire',
        category: 'Physical',
        zp: 190,
        maxPower: 140
    },
    'Revival Blessing': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Ruination: {
        bp: 0,
        type: 'Dark',
        category: 'Special',
        zp: 100,
        maxPower: 100
    },
    'Salt Cure': {
        bp: 40,
        type: 'Rock',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        secondaries: true
    },
    'Sandsear Storm': {
        bp: 100,
        type: 'Ground',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Shed Tail': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    Shelter: {
        bp: 0,
        type: 'Steel',
        category: 'Status'
    },
    'Silk Trap': {
        bp: 0,
        type: 'Bug',
        category: 'Status',
        priority: 4
    },
    Snowscape: {
        bp: 0,
        type: 'Ice',
        category: 'Status'
    },
    'Spicy Extract': {
        bp: 0,
        type: 'Grass',
        category: 'Status'
    },
    'Spin Out': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        makesContact: true
    },
    'Springtide Storm': {
        bp: 100,
        type: 'Fairy',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Stone Axe': {
        bp: 65,
        type: 'Rock',
        category: 'Physical',
        zp: 120,
        maxPower: 120,
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    'Supercell Slam': {
        bp: 100,
        type: 'Electric',
        category: 'Physical',
        zp: 180,
        maxPower: 130,
        makesContact: true,
        hasCrashDamage: true
    },
    'Syrup Bomb': {
        bp: 60,
        type: 'Grass',
        category: 'Special',
        zp: 120,
        maxPower: 110,
        isBullet: true,
        secondaries: true
    },
    'Tachyon Cutter': {
        bp: 50,
        type: 'Steel',
        category: 'Special',
        zp: 180,
        maxPower: 140,
        multihit: 2,
        isSlicing: true
    },
    'Take Heart': {
        bp: 0,
        type: 'Psychic',
        category: 'Status'
    },
    'Temper Flare': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        zp: 140,
        maxPower: 130,
        makesContact: true
    },
    'Tera Blast': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        zp: 160,
        maxPower: 130
    },
    'Tera Starstorm': {
        bp: 120,
        type: 'Normal',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Thunderclap': {
        bp: 70,
        type: 'Electric',
        category: 'Special',
        zp: 140,
        maxPower: 120,
        priority: 1
    },
    'Tidy Up': {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Torch Song': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        zp: 160,
        maxPower: 130,
        secondaries: true,
        isSound: true
    },
    Trailblaze: {
        bp: 50,
        type: 'Grass',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        secondaries: true,
        makesContact: true
    },
    'Triple Arrows': {
        bp: 90,
        type: 'Fighting',
        category: 'Physical',
        zp: 175,
        maxPower: 90,
        secondaries: true
    },
    'Triple Dive': {
        bp: 30,
        type: 'Water',
        category: 'Physical',
        zp: 100,
        maxPower: 90,
        makesContact: true,
        multihit: 3
    },
    'Twin Beam': {
        bp: 40,
        type: 'Psychic',
        category: 'Special',
        zp: 100,
        maxPower: 90,
        multihit: 2
    },
    'Upper Hand': {
        bp: 65,
        type: 'Fighting',
        category: 'Physical',
        zp: 120,
        maxPower: 85,
        makesContact: true,
        secondaries: true,
        priority: 3
    },
    'Victory Dance': {
        bp: 0,
        type: 'Fighting',
        category: 'Status'
    },
    'Wave Crash': {
        bp: 120,
        type: 'Water',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true,
        recoil: [33, 100]
    },
    'Wicked Torque': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        zp: 160,
        maxPower: 130,
        secondaries: true
    },
    'Wildbolt Storm': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        zp: 180,
        maxPower: 130,
        secondaries: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Ancient Roar': {
        bp: 80,
        type: 'Rock',
        category: 'Special',
        zp: 100,
        target: 'allAdjacentFoes',
        isSound: true
    },
    'Achilles Heel': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        zp: 100,
        target: 'normal',
        makesContact: true
    },
    'Corrode': {
        bp: 70,
        type: 'Poison',
        category: 'Special',
        zp: 100,
        target: 'normal'
    },
    'Crystal Rush': {
        bp: 45,
        type: 'Crystal',
        category: 'Physical',
        zp: 100,
        target: 'normal',
        makesContact: true,
        priority: 1
    },
    'Custom Move': {
        bp: 70,
        type: '???',
        category: 'Physical',
        zp: 100,
        target: 'normal',
        makesContact: true
    },
    'Dark Matter': {
        bp: 150,
        type: 'Dark',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Draco Jet': {
        bp: 40,
        type: 'Dragon',
        category: 'Physical',
        zp: 100,
        target: 'normal',
        makesContact: true,
        priority: 1
    },
    'Dragonify': {
        bp: 0,
        type: 'Dragon',
        category: 'Status',
        target: 'normal'
    },
    'Drakon Voice': {
        bp: 105,
        type: 'Dragon',
        category: 'Special',
        zp: 150,
        target: 'allAdjacentFoes',
        isSound: true
    },
    'Jet Stream': {
        bp: 0,
        type: 'Dragon',
        category: 'Status',
        target: 'normal'
    },
    'Livewire': {
        bp: 0,
        type: 'Electric',
        category: 'Status',
        target: 'normal'
    },
    'Lunar Cannon': {
        bp: 105,
        type: 'Dark',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Medusa Ray': {
        bp: 0,
        type: 'Rock',
        category: 'Status',
        target: 'normal'
    },
    'Morph': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        target: 'normal'
    },
    'Nanorepair': {
        bp: 0,
        type: 'Steel',
        category: 'Status',
        target: 'normal'
    },
    'New Moon': {
        bp: 0,
        type: 'Dark',
        category: 'Status',
        target: 'normal'
    },
    'Permafrost': {
        bp: 0,
        type: 'Ice',
        category: 'Status',
        target: 'normal'
    },
    'Retrograde': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        target: 'normal'
    },
    'Spirit Away': {
        bp: 100,
        type: 'Fairy',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        makesContact: true
    },
    'Wildfire': {
        bp: 0,
        type: 'Fire',
        category: 'Status',
        target: 'normal'
    },
    'Wormhole': {
        bp: 40,
        type: 'Psychic',
        category: 'Special',
        zp: 100,
        target: 'normal',
        priority: 1
    },
    'Zombie Strike': {
        bp: 90,
        type: 'Ghost',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        makesContact: true
    },
    'Atomic Punch': {
        bp: 90,
        type: 'Nuclear',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        makesContact: true,
        isPunch: true,
        secondaries: true
    },
    'Caustic Breath': {
        bp: 60,
        type: 'Dragon',
        category: 'Special',
        zp: 200,
        target: 'allAdjacentFoes',
        secondaries: true
    },
    'Coral Break': {
        bp: 80,
        type: 'Water',
        category: 'Special',
        zp: 200,
        target: 'normal',
        makesContact: true,
        overrideDefensiveStat: 'def'
    },
    'Drain Life': {
        bp: 75,
        type: 'Dark',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        secondaries: true,
        makesContact: true,
        drain: [1, 2]
    },
    'Expunge': {
        bp: 70,
        type: 'Nuclear',
        category: 'Physical',
        zp: 200,
        target: 'normal'
    },
    'Fallout': {
        bp: 0,
        type: 'Nuclear',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Fission Burst': {
        bp: 150,
        type: 'Nuclear',
        category: 'Physical',
        zp: 200,
        target: 'allAdjacent'
    },
    'Flame Impact': {
        bp: 65,
        type: 'Fire',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        makesContact: true,
        priority: 2
    },
    'Gamma Ray': {
        bp: 40,
        type: 'Nuclear',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Gemstone Glimmer': {
        bp: 75,
        type: 'Dark',
        category: 'Special',
        zp: 200,
        target: 'normal',
        secondaries: true
    },
    'Get Lucky': {
        bp: 75,
        type: 'Psychic',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Golden Fist': {
        bp: 70,
        type: 'Fighting',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        isPunch: true,
        makesContact: true
    },
    'Half-Life': {
        bp: 0,
        type: 'Nuclear',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Infernal Blade': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        isSlicing: true,
        makesContact: true,
        secondaries: true
    },
    'Instant Crush': {
        bp: 60,
        type: 'Psychic',
        category: 'Special',
        zp: 200,
        target: 'normal',
        priority: 1
    },
    'Laser Pulse': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        zp: 200,
        target: 'normal',
        isPulse: true
    },
    'Metal Cruncher': {
        bp: 120,
        type: 'Steel',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        isBite: true,
        makesContact: true,
        secondaries: true
    },
    'Metal Whip': {
        bp: 90,
        type: 'Steel',
        category: 'Physical',
        zp: 200,
        target: 'normal'
    },
    'Nuclear Slash': {
        bp: 55,
        type: 'Nuclear',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        isSlicing: true,
        makesContact: true
    },
    'Nuclear Waste': {
        bp: 0,
        type: 'Nuclear',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Nuclear Wind': {
        bp: 65,
        type: 'Nuclear',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Ocean\'s Wrath': {
        bp: 90,
        type: 'Water',
        category: 'Special',
        zp: 200,
        target: 'normal'
    },
    'Proton Bream': {
        bp: 100,
        type: 'Nuclear',
        category: 'Special',
        zp: 200,
        target: 'normal',
        self: { boosts: { spa: -2 } }
    },
    'Quantum Leap': {
        bp: 100,
        type: 'Nuclear',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        makesContact: true
    },
    'Radio Acid': {
        bp: 60,
        type: 'Nuclear',
        category: 'Special',
        zp: 200,
        target: 'normal',
        secondaries: true
    },
    'Sky Fall': {
        bp: 85,
        type: 'Flying',
        category: 'Special',
        zp: 200,
        target: 'normal',
        secondaries: true,
        makesContact: true
    },
    'Subduction': {
        bp: 140,
        type: 'Ground',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        isSound: true,
        secondaries: true
    },
    'Sudden Strike': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        zp: 200,
        target: 'normal',
        priority: 1
    },
    'Thunderstorm': {
        bp: 0,
        type: 'Electric',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Nail Flick': {
        bp: 50,
        type: 'Normal',
        category: 'Physical',
        zp: 0,
        target: 'normal'
    },
    'Nostril Flare': {
        bp: 55,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        priority: 1
    },
    'Barbed Tackle': {
        bp: 45,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Thorn Whip': {
        bp: 50,
        type: 'Grass',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Nimbus Fist': {
        bp: 35,
        type: 'Grass',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isPunch: true
    },
    'Foggy Strike': {
        bp: 55,
        type: 'Water',
        category: 'Physical',
        zp: 0,
        target: 'normal'
    },
    'Ice Slash': {
        bp: 70,
        type: 'Ice',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isSlicing: true
    },
    'Dry Needles': {
        bp: 18,
        type: 'Grass',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        multihit: [2, 5]
    },
    'Focused Ram': {
        bp: 100,
        type: 'Psychic',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        recoil: [25, 100]
    },
    'Searing Slash': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isSlicing: true,
        secondaries: true
    },
    'Thunder Slash': {
        bp: 95,
        type: 'Electric',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isSlicing: true
    },
    'Typhoon': {
        bp: 80,
        type: 'Flying',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Draco Blitz': {
        bp: 100,
        type: 'Dragon',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        recoil: [33, 100],
        secondaries: true
    },
    'Faeng Rush': {
        bp: 80,
        type: 'Fairy',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isBite: true,
        secondaries: true
    },
    'Ambush': {
        bp: 40,
        type: 'Dark',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Groom Guard': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Astral Shot': {
        bp: 50,
        type: 'Cosmic',
        category: 'Special',
        zp: 0,
        target: 'normal',
        priority: 1
    },
    'Cosmic Ray': {
        bp: 95,
        type: 'Cosmic',
        category: 'Special',
        zp: 0,
        target: 'normal',
        isPulse: true,
        secondaries: true
    },
    'Comet Shower': {
        bp: 80,
        type: 'Cosmic',
        category: 'Physical',
        zp: 0,
        target: 'allAdjacent',
        secondaries: true
    },
    'Decap Attack': {
        bp: 120,
        type: 'Bug',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        recoil: [33, 100],
        isBullet: true
    },
    'Tar-Tantrum': {
        bp: 115,
        type: 'Rock',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isPunch: true,
        secondaries: true
    },
    'Bone Sweep': {
        bp: 90,
        type: 'Ground',
        category: 'Physical',
        zp: 0,
        target: 'allAdjacentFoes'
    },
    'Venom Swipe': {
        bp: 100,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Pressurize': {
        bp: 0,
        type: 'Rock',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Vanish': {
        bp: 0,
        type: 'Ghost',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Cactus Smash': {
        bp: 115,
        type: 'Grass',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        recoil: [33, 100],
        makesContact: true,
        secondaries: true
    },
    'Eevoboost': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        zp: 0,
        target: 'normal',
        priority: -2
    },
    'Deja-vu': {
        bp: 105,
        type: 'Psychic',
        category: 'Special',
        zp: 0,
        target: 'normal'
    },
    'Big Bang': {
        bp: 105,
        type: 'Cosmic',
        category: 'Physical',
        zp: 0,
        target: 'allAdjacent',
        secondaries: true
    },
    'Boom Bubble': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Pepper Breath': {
        bp: 65,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Cinder Breath': {
        bp: 55,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Nova Blast': {
        bp: 75,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true,
        isPulse: true
    },
    'Giga Destroyer': {
        bp: 55,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        multihit: 2
    },
    'Terra Force': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'allAdjacent'
    },
    'Flash Flood': {
        bp: 40,
        type: 'Water',
        category: 'Special',
        zp: 0,
        target: 'normal',
        priority: 1
    },
    'Brain Freeze': {
        bp: 85,
        type: 'Psychic',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Brain Storm': {
        bp: 70,
        type: 'Psychic',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Dino Kick': {
        bp: 70,
        type: 'Fighting',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Dark Shot': {
        bp: 80,
        type: 'Ghost',
        category: 'Special',
        zp: 0,
        target: 'normal',
        isPulse: true,
        isBullet: true
    },
    'Death Nail': {
        bp: 85,
        type: 'Ghost',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Hyper-Stink-Shot': {
        bp: 95,
        type: 'Poison',
        category: 'Special',
        zp: 0,
        target: 'normal'
    },
    'Yucky Tongue': {
        bp: 80,
        type: 'Dark',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Ice Blast': {
        bp: 70,
        type: 'Ice',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Fin Cutter': {
        bp: 70,
        type: 'Water',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isSlicing: true
    },
    'Charming Tweety': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        zp: 0,
        target: 'normal',
        isSound: true
    },
    'Horn Buster': {
        bp: 90,
        type: 'Bug',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Mugen Cannon': {
        bp: 90,
        type: 'Steel',
        category: 'Special',
        zp: 0,
        target: 'normal',
        isPulse: true,
        secondaries: true
    },
    'Blue Blaster': {
        bp: 50,
        type: 'Ice',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Lion Sword': {
        bp: 75,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        isSlicing: true
    },
    'Infinity Arrow': {
        bp: 65,
        type: 'Electric',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Nail Crusher': {
        bp: 90,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Excalibur': {
        bp: 105,
        type: 'Fairy',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        isSlicing: true
    },
    'Beam Shield': {
        bp: 0,
        type: 'Fairy',
        category: 'Status',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Ice Wolf Claw': {
        bp: 35,
        type: 'Ice',
        category: 'Special',
        zp: 0,
        target: 'normal',
        multihit: [2, 5]
    },
    'omniblast': {
        bp: 100,
        type: 'Electric',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Vulcan\'s Hammer': {
        bp: 100,
        type: 'Rock',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Anvil Smash': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        zp: 0,
        target: 'normal'
    },
    'Compost Bomber': {
        bp: 95,
        type: 'Poison',
        category: 'Special',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Heaven\'s Knuckle': {
        bp: 90,
        type: 'Fairy',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        isPunch: true
    },
    'Air Slam': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Duo Scissor Claw': {
        bp: 105,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Nuclear Punch': {
        bp: 105,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isPunch: true,
        secondaries: true
    },
    'Devil\'s Deed': {
        bp: 0,
        type: 'Dark',
        category: 'Status',
        zp: 0,
        target: 'normal'
    },
    'Evil Wing': {
        bp: 85,
        type: 'Flying',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Concert Crush': {
        bp: 0,
        type: 'Dark',
        category: 'Status',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Bug Blaster': {
        bp: 70,
        type: 'Poison',
        category: 'Special',
        zp: 0,
        target: 'normal',
        isPulse: true,
        secondaries: true
    },
    'Poison Bubbles': {
        bp: 40,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        secondaries: true
    },
    'Garuru-Kick': {
        bp: 70,
        type: 'Ice',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Virus Skater': {
        bp: 70,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        secondaries: true
    },
    'Page Fault': {
        bp: 120,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Cable Crusher': {
        bp: 70,
        type: 'Poison',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true
    },
    'Web Wrecker': {
        bp: 50,
        type: 'Dark',
        category: 'Special',
        zp: 0,
        target: 'normal'
    },
    'Transcendent Sword': {
        bp: 240,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        makesContact: true,
        isSlicing: true
    },
    'Omni Howl': {
        bp: 140,
        type: 'Normal',
        category: 'Special',
        zp: 0,
        target: 'normal'
    },
    'Dark Network': {
        bp: 130,
        type: 'Poison',
        category: 'Special',
        zp: 0,
        target: 'normal',
        self: { boosts: { spa: -2 } }
    },
    'Supreme Cannon': {
        bp: 95,
        type: 'Ice',
        category: 'Special',
        zp: 0,
        target: 'allAdjacentFoes',
        secondaries: true
    },
    'Sizzle Slam': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        zp: 0,
        target: 'normal'
    },
    'Necro Magic': {
        bp: 80,
        type: 'Psychic',
        category: 'Special',
        zp: 0,
        target: 'normal',
        makesContact: true,
        drain: [1, 2]
    },
    'Kablow!': {
        bp: 155,
        type: 'Steel',
        category: 'Physical',
        zp: 0,
        target: 'normal'
    },
    'Hammer Throws': {
        bp: 25,
        type: 'Normal',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        multihit: [2, 5]
    },
    'Fireball': {
        bp: 25,
        type: 'Fire',
        category: 'Special',
        zp: 0,
        target: 'normal',
        multihit: 3,
        secondaries: true
    },
    'Boomerang': {
        bp: 45,
        type: 'Flying',
        category: 'Physical',
        zp: 0,
        target: 'normal',
        multihit: 2,
        secondaries: true
    },
    'Ice Toss': {
        bp: 25,
        type: 'Ice',
        category: 'Special',
        zp: 0,
        target: 'normal',
        multihit: 3,
        secondaries: true
    },
    'Blooms Day': {
        bp: 150,
        type: 'Grass',
        category: 'Special',
        zp: 100,
        maxPower: 90,
        target: 'allAdjacentFoes'
    },
    'Box In': {
        bp: 70,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        zp: 100,
        maxPower: 90
    },
    Bulwark: {
        bp: 0,
        type: 'Psychic',
        category: 'Status',
        priority: -1
    },
    'Desert Tempest': {
        bp: 80,
        type: 'Rock',
        category: 'Special',
        zp: 100,
        maxPower: 90
    },
    'Subzero Storm': {
        bp: 80,
        type: 'Ice',
        category: 'Special',
        zp: 100,
        maxPower: 90
    },
    'Fiery Maelstrom': {
        bp: 80,
        type: 'Fire',
        category: 'Special',
        zp: 100,
        maxPower: 90
    },
    'Full Heal': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        priority: -7,
        zp: 100,
        maxPower: 90
    },
    Heal: {
        bp: 0,
        type: 'Normal',
        category: 'Status'
    },
    'Hyper Heal': {
        bp: 0,
        type: 'Normal',
        category: 'Status',
        priority: -5,
        zp: 100,
        maxPower: 90
    },
    'Runtime Exception': {
        bp: 0,
        type: 'Steel',
        category: 'Status',
        zp: 100,
        maxPower: 90
    },
    'Fibre Graft': {
        bp: 0,
        type: 'Fighting',
        category: 'Status',
        zp: 100,
        maxPower: 90
    },
    'Pixie Trick': {
        bp: 70,
        type: 'Fairy',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    Mudslide: {
        bp: 95,
        type: 'Ground',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        secondaries: true
    },
    'Pack In': {
        bp: 0,
        type: 'Ice',
        category: 'Status',
        zp: 100,
        maxPower: 90
    },
    'Foul Strike': {
        bp: 100,
        type: 'Steel',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true,
        isPunch: true
    },
    'Siren Song': {
        bp: 120,
        type: 'Normal',
        category: 'Special',
        isSound: true,
        zp: 100,
        maxPower: 100
    },
    'Mindwipe': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        secondaries: true
    },
    'Twin Gust': {
        bp: 40,
        type: 'Flying',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        multihit: 2
    },
    'Currency Flow': {
        bp: 85,
        type: 'Ground',
        category: 'Physical',
        zp: 100,
        maxPower: 100
    },
    'Rocket Grab': {
        bp: 90,
        type: 'Steel',
        category: 'Physical',
        zp: 100,
        maxPower: 100
    },
    'Jump Ship': {
        bp: 0,
        type: 'Ghost',
        category: 'Status',
        zp: 100,
        maxPower: 90
    },
    'Molten Glaze': {
        bp: 60,
        type: 'Fire',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        target: 'allAdjacentFoes'
    },
    'Psycho Barrage': {
        bp: 120,
        type: 'Psychic',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    'Severing Wind': {
        bp: 90,
        type: 'Flying',
        category: 'Special',
        zp: 100,
        maxPower: 100,
        isSlicing: true,
        isWind: true,
        target: 'allAdjacentFoes'
    },
    'Mindtrap': {
        bp: 40,
        type: 'Psychic',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    'Megaton Slice': {
        bp: 120,
        type: 'Dark',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        isSlicing: true
    },
    'Lycan Pounce': {
        bp: 100,
        type: 'Fighting',
        category: 'Physical',
        zp: 100,
        maxPower: 100,
        makesContact: true
    },
    'Spud Mortar': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        zp: 100,
        maxPower: 100
    },
    'Gorgon Fang': {
        bp: 75,
        type: 'Rock',
        makesContact: true,
        isBite: true,
        secondaries: true,
        category: 'Physical'
    },
    'Quaking Thrust': {
        bp: 75,
        type: 'Ground',
        makesContact: true,
        isSlicing: true,
        category: 'Physical'
    },
    'Rift Jump': {
        bp: 0,
        type: 'Electric',
        category: 'Status',
        zp: 100,
        maxPower: 90
    },
    'Superheated Crash': {
        bp: 90,
        type: 'Fire',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true,
        recoil: [33, 100]
    },
    'Grounding Stomp': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        makesContact: true
    },
    'Spirit Siphon': {
        bp: 65,
        type: 'Ghost',
        category: 'Special',
        zp: 190,
        maxPower: 140,
        drain: [1, 2]
    },
    'Comet Strike': {
        bp: 130,
        type: 'Rock',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Shock Bombs': {
        bp: 25,
        type: 'Electric',
        category: 'Physical',
        isBullet: true,
        zp: 190,
        maxPower: 140,
        multihit: [2, 5]
    },
    'Jagged Shot': {
        bp: 70,
        type: 'Rock',
        category: 'Special',
        zp: 190,
        maxPower: 140
    },
    'Shadow Bound': {
        bp: 95,
        type: 'Ghost',
        category: 'Special',
        zp: 190,
        maxPower: 140,
        overrideOffensivePokemon: 'target'
    },
    'Fae Quills': {
        bp: 25,
        type: 'Fairy',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        multihit: [2, 5]
    },
    'Venomous Roar': {
        bp: 90,
        type: 'Dragon',
        category: 'Special',
        zp: 190,
        maxPower: 140,
        isSound: true,
        secondaries: true
    },
    'Scarabs Sting': {
        bp: 50,
        type: 'Bug',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        multihit: 2,
        makesContact: true,
        secondaries: true
    },
    'Void Tentacle': {
        bp: 80,
        type: 'Poison',
        category: 'Physical',
        zp: 190,
        maxPower: 140,
        secondaries: true
    },
    'Flame Axe': {
        bp: 80,
        type: 'Fire',
        category: 'Physical',
        zp: 120,
        maxPower: 120,
        makesContact: true,
        isSlicing: true
    },
    'Shrouded Blows': {
        bp: 85,
        type: 'Fighting',
        category: 'Special',
        zp: 120,
        maxPower: 120,
        isPunch: true
    }
};
var SV = (0, util_1.extend)(true, {}, SS, SV_PATCH);
exports.MOVES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];
var Moves = (function () {
    function Moves(gen) {
        this.gen = gen;
    }
    Moves.prototype.get = function (id) {
        return MOVES_BY_ID[this.gen][id];
    };
    Moves.prototype[Symbol.iterator] = function () {
        var _a, _b, _c, _i, id;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = MOVES_BY_ID[this.gen];
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 1;
                case 1:
                    if (!(_i < _b.length)) return [3, 4];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3, 3];
                    id = _c;
                    return [4, this.get(id)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Moves;
}());
exports.Moves = Moves;
var Move = (function () {
    function Move(name, data, gen) {
        this.kind = 'Move';
        this.id = (0, util_1.toID)(name);
        this.name = name;
        this.flags = {};
        if (data.makesContact)
            this.flags.contact = 1;
        if (data.isPunch)
            this.flags.punch = 1;
        if (data.isBite)
            this.flags.bite = 1;
        if (data.isBullet)
            this.flags.bullet = 1;
        if (data.isSound)
            this.flags.sound = 1;
        if (data.isPulse)
            this.flags.pulse = 1;
        if (data.isSlicing)
            this.flags.slicing = 1;
        if (data.isWind)
            this.flags.wind = 1;
        (0, util_1.assignWithout)(this, data, Move.FLAGS);
        this.basePower = data.bp;
        if (data.zp)
            this.zMove = { basePower: data.zp };
        if (data.maxPower)
            this.maxMove = { basePower: data.maxPower };
        if (!this.category && gen >= 4)
            this.category = 'Status';
        if (this.struggleRecoil)
            delete this.recoil;
    }
    Move.FLAGS = new Set([
        'bp',
        'makesContact',
        'isPunch',
        'isBite',
        'isBullet',
        'isSound',
        'isPulse',
        'zp',
        'maxPower',
        'isSlicing',
        'isWind',
    ]);
    return Move;
}());
var MOVES_BY_ID = [];
var gen = 0;
try {
    for (var MOVES_1 = __values(exports.MOVES), MOVES_1_1 = MOVES_1.next(); !MOVES_1_1.done; MOVES_1_1 = MOVES_1.next()) {
        var moves = MOVES_1_1.value;
        var map = {};
        for (var move in moves) {
            var data = moves[move];
            var m = new Move(move, data, gen);
            map[m.id] = m;
        }
        MOVES_BY_ID.push(map);
        gen++;
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (MOVES_1_1 && !MOVES_1_1.done && (_b = MOVES_1["return"])) _b.call(MOVES_1);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=moves.js.map