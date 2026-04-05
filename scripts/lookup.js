#!/usr/bin/env node
/**
 * VGC Speed Tier Lookup CLI
 * Usage:
 *   node scripts/lookup.js                    # list all Pokémon
 *   node scripts/lookup.js kyogre             # show all spreads for Kyogre
 *   node scripts/lookup.js kyogre max-speed   # show specific spread
 *   node scripts/lookup.js --tr               # show Trick Room reference
 *   node scripts/lookup.js --tailwind         # show Tailwind reference
 *   node scripts/lookup.js --stat 156         # find Pokémon at a specific speed stat
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'speed-tiers.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));

const args = process.argv.slice(2);

function printHeader() {
  console.log('\n=== VGC Speed Tier Reference — Regulation F ===');
  console.log(`Last updated: ${data.meta.last_updated} | Level ${data.meta.level}\n`);
}

function listAll() {
  printHeader();
  console.log('Available Pokémon:\n');
  data.pokemon.forEach(p => {
    const speeds = p.spreads.map(s => `${s.speed_stat} (${s.nature} ${s.evs} EVs)`).join(' | ');
    console.log(`  [${p.usage_tier}] ${p.name.padEnd(24)} Base ${p.base_speed} → ${speeds}`);
  });
  console.log('\nUsage: node scripts/lookup.js <pokemon-name> [spread-id]');
  console.log('Flags:  --tr (Trick Room ref) | --tailwind | --stat <number>');
}

function findPokemon(name) {
  const query = name.toLowerCase().replace(/[\s_]/g, '-');
  return data.pokemon.find(p =>
    p.name.toLowerCase().replace(/[\s_]/g, '-').includes(query)
  );
}

function printSpread(pokemon, spread) {
  console.log(`\n--- ${pokemon.name} | ${spread.label} ---`);
  console.log(`  Speed Stat : ${spread.speed_stat}`);
  console.log(`  Nature     : ${spread.nature}`);
  console.log(`  EVs        : ${spread.evs} Speed EVs`);
  console.log(`  IVs        : ${spread.ivs}`);
  console.log(`  Item       : ${spread.item}`);
  console.log(`  Tier       : ${pokemon.usage_tier}`);
  if (spread.outspeeds && spread.outspeeds.length > 0) {
    console.log(`  Outspeeds  :`);
    spread.outspeeds.forEach(o => console.log(`               • ${o}`));
  }
  if (spread.note) {
    console.log(`  Note       : ${spread.note}`);
  }
}

function printTrickRoom() {
  printHeader();
  console.log('=== Trick Room Speed Benchmarks ===\n');
  console.log('Under Trick Room, lower speed = moves first.\n');
  data.trick_room_reference.benchmarks
    .sort((a, b) => a.speed_stat - b.speed_stat)
    .forEach(b => {
      console.log(`  Stat ${String(b.speed_stat).padStart(3)}: ${b.pokemon}`);
      console.log(`         ${b.note}\n`);
    });
}

function printTailwind() {
  printHeader();
  console.log('=== Tailwind Reference (Speed × 2) ===\n');
  console.log(data.tailwind_reference.note + '\n');
  data.tailwind_reference.benchmarks.forEach(b => {
    console.log(`  ${b.example}`);
    console.log(`  → ${b.note}\n`);
  });
}

function findByStat(targetStat) {
  printHeader();
  const target = parseInt(targetStat, 10);
  console.log(`=== Pokémon at or near Speed Stat ${target} ===\n`);
  const results = [];
  data.pokemon.forEach(p => {
    p.spreads.forEach(s => {
      if (Math.abs(s.speed_stat - target) <= 5) {
        results.push({ pokemon: p.name, tier: p.usage_tier, spread: s });
      }
    });
  });
  if (results.length === 0) {
    console.log('  No matches found within ±5 of that speed stat.');
  } else {
    results.sort((a, b) => a.spread.speed_stat - b.spread.speed_stat).forEach(r => {
      console.log(`  [${r.tier}] ${r.pokemon} — ${r.spread.speed_stat} (${r.spread.label})`);
    });
  }
}

// --- Main ---
if (args.length === 0) {
  listAll();
} else if (args[0] === '--tr' || args[0] === '--trick-room') {
  printTrickRoom();
} else if (args[0] === '--tailwind') {
  printTailwind();
} else if (args[0] === '--stat') {
  if (!args[1]) { console.error('Usage: --stat <number>'); process.exit(1); }
  findByStat(args[1]);
} else {
  const pokemon = findPokemon(args[0]);
  if (!pokemon) {
    console.error(`\nPokémon "${args[0]}" not found. Run without arguments to see all options.`);
    process.exit(1);
  }
  printHeader();
  if (args[1]) {
    const spread = pokemon.spreads.find(s => s.id.includes(args[1]));
    if (!spread) {
      console.error(`Spread "${args[1]}" not found for ${pokemon.name}.`);
      console.log('Available spreads:', pokemon.spreads.map(s => s.id).join(', '));
      process.exit(1);
    }
    printSpread(pokemon, spread);
  } else {
    console.log(`\n${pokemon.name} (Base Speed: ${pokemon.base_speed} | Tier: ${pokemon.usage_tier})`);
    console.log(`Role: ${pokemon.role.join(', ')}\n`);
    pokemon.spreads.forEach(s => printSpread(pokemon, s));
  }
}
console.log('');
