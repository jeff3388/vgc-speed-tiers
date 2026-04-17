# VGC Speed Tiers — Regulation I Reference Dataset (2026)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Format](https://img.shields.io/badge/format-VGC%202026-red.svg)
![Regulation](https://img.shields.io/badge/regulation-I-brightgreen.svg)
![Level](https://img.shields.io/badge/level-50-green.svg)
![Last Commit](https://img.shields.io/github/last-commit/twjojo/vgc-speed-tiers)

A structured dataset of **VGC speed tiers for Regulation I**, covering restricted and non-restricted Pokémon with exact Level 50 speed stats, common EV spreads, and benchmark comparisons. Available as JSON with a zero-dependency Node.js CLI for fast lookups during teambuilding.

Knowing which Pokémon your spread outspeeds — and which it doesn't — is one of the most important EV decisions in competitive Pokémon. In **Regulation I**, where teams can carry 2 restricted Legendaries, speed benchmarks are more complex: you must account for two possible restricted threats across all 22 eligible picks.

**Last updated:** 2026-04-17

---

## Quick Start

```bash
git clone https://github.com/twjojo/vgc-speed-tiers.git
cd vgc-speed-tiers

# List all Pokémon and their speed stats
node scripts/lookup.js

# Look up a specific Pokémon
node scripts/lookup.js kyogre

# Restricted-only benchmarks
node scripts/lookup.js --restricted

# Trick Room benchmarks
node scripts/lookup.js --tr

# Find Pokémon at a specific speed stat (±5)
node scripts/lookup.js --stat 156
```

---

## Speed Tier Quick Reference — Regulation I

### Restricted Pokémon Speed Benchmarks

| Speed Stat | Pokémon | Nature | EVs | Reg I Usage |
|-----------|---------|--------|-----|------------|
| **222** | Calyrex-Shadow | Timid | 252 | S — fastest restricted |
| **200** | Zacian | Jolly | 252 | A — fastest Steel restricted |
| **188** | Eternatus | Timid | 252 | B — Speed benchmark for slower restricteds |
| **179** | Miraidon / Koraidon | Timid/Jolly | 252 | S — tied at 135 base |
| **156** | Kyogre / Groudon | Timid/Jolly | 252 | S — slower restricted cluster |
| **152** | Rayquaza / Kyurem | Timid | 252 | C |
| **148** | Solgaleo / Lunala / Necrozma-DW | Timid | 252 | B |
| **131** | Palkia | Timid | 252 | C |
| **128** | Dialga / Giratina / Reshiram / Zekrom | Timid | 252 | C |
| **121** | Kyogre / Groudon (0 EVs Timid) | Timid | 0 | S — Scarf base reference |
| **117** | Zamazenta | Jolly | 252 | B |
| **84** | Mewtwo (0 EVs) | — | 0 | A — support speed benchmark |
| **63** | Calyrex-Ice (Brave, 31 IVs) | Brave | 0 | S — TR mode |
| **49** | Calyrex-Ice (Brave, 0 IVs) | Brave | 0 | S — min speed TR |

### Non-Restricted Speed Benchmarks

| Speed Stat | Pokémon | Nature | EVs | Reg I Usage |
|-----------|---------|--------|-----|------------|
| **205** | Flutter Mane / Chien-Pao | Timid/Jolly | 252 | S/A |
| **184** | Chi-Yu | Timid | 252 | A |
| **179** | Tornadus | Timid | 252 | S — Tailwind setter benchmark |
| **175** | Farigiraf | Timid | 252 | A ↑ (new Reg I spike) |
| **163** | Urshifu-RS | Jolly | 252 | A |
| **152** | Great Tusk | Jolly | 252 | A |
| **150** | Rillaboom | Jolly | 252 | A |
| **149** | Gholdengo | Timid | 252 | A |
| **105** | Cresselia (0 EVs) | — | 0 | A |
| **80** | Incineroar / Porygon2 | — | 0 | S |
| **70** | Iron Hands / Kingambit | — | 0 | A |
| **63** | Iron Hands (Brave, 31 IVs) | Brave | 0 | S — TR attacker |
| **50** | Amoonguss | — | 0 | S |
| **49** | Iron Hands (Brave, 0 IVs) | Brave | 0 | S — min TR |

---

## Critical Speed Thresholds (Reg I)

These are the most common "am I faster than X?" questions in Regulation I teambuilding:

| Threshold | Why It Matters |
|-----------|---------------|
| Beat Calyrex-Shadow (222) | Only Timid 252 Pokémon with 135+ base reach this. Almost no non-restricted clears it naturally. |
| Beat Zacian (200) | Important for Pokémon that want to threaten Zacian before it attacks. Requires 135+ base + Timid 252. |
| Beat Miraidon/Koraidon (179) | The "Sun/Electric core" benchmark. 111+ base at Timid 252, or Scarf on 90+ base. |
| Beat Tornadus (179) | Relevant if your restricted outspeeds the Tailwind setter before it moves. |
| Beat Urshifu-RS (163) | Non-restricted speed threshold for fast Pokémon that contest Urshifu lead. |
| Underspeed Iron Hands TR (63) | Teams that run Trick Room want to move *after* Iron Hands. Requires Brave with ≤31 IVs. |
| Underspeed Calyrex-Ice TR (63) | Same threshold — Trick Room teams pair Calyrex-Ice with Brave 0 EV support. |

---

## Trick Room Speed Reference

Under Trick Room, **lower speed moves first**. Key benchmarks:

| Speed Stat | Pokémon | Note |
|-----------|---------|------|
| 49 | Calyrex-Ice / Iron Hands (Brave, 0 IVs) | Moves first in TR — fastest under TR |
| 50 | Amoonguss (0 EVs) | Very slow support — TR consistent |
| 63 | Calyrex-Ice / Iron Hands (Brave, 31 IVs) | Standard TR attacker |
| 77 | Necrozma-DM (Quiet, 0 EVs) | Slowest usable restricted under TR |
| 80 | Incineroar / Porygon2 (0 EVs) | Support pivot under TR |
| 94 | Cresselia (Sassy, 0 IVs 0 EVs) | Min speed TR setter |
| 105 | Cresselia (Sassy, 31 IVs 0 EVs) | Standard TR setter speed |

---

## What Changed from Regulation G

| Aspect | Reg G | Reg I |
|--------|-------|-------|
| Fastest threat | Calyrex-Shadow 222 | Calyrex-Shadow 222 (unchanged) |
| Second major speed threat | None (single restricted) | **Zacian 200, Miraidon/Koraidon 179** (second restricted slot) |
| Speed planning | Plan for 1 restricted | **Plan for 2 simultaneous restricted threats** |
| Farigiraf relevance | Niche (17% usage) | **Spiked to ~28%** — Armor Tail blocks Fake Out on turn 1 |
| Scarf strategy | Moderate | Higher value — outspeeding 2 restricted threats simultaneously |

---

## Data Format

Each Pokémon entry in `data/speed-tiers.json`:

```json
{
  "name": "Kyogre",
  "dex": 382,
  "base_speed": 90,
  "restricted": true,
  "regulation_i_usage": "S",
  "spreads": [
    {
      "id": "kyogre-max-speed",
      "label": "Max Speed Timid",
      "nature": "Timid",
      "evs": 252,
      "ivs": 31,
      "speed_stat": 156,
      "outspeeds": ["Great Tusk 252 Jolly (152)", "Rillaboom 252 Jolly (150)"],
      "note": "Ties Groudon at max speed; benchmark for mid-speed restricted cluster"
    },
    {
      "id": "kyogre-0ev",
      "label": "0 EV Timid (Scarf reference)",
      "nature": "Timid",
      "evs": 0,
      "ivs": 31,
      "speed_stat": 121,
      "note": "Choice Scarf reaches 181 — outspeeds Timid Flutter Mane at 205? No. Use as reference only."
    }
  ]
}
```

### Speed Stat Formula (Level 50)

```
Speed = floor((floor((2×base + iv + floor(ev/4)) × 50 / 100) + 5) × nature_modifier)
```

Where `nature_modifier` is `1.1` (+speed), `1.0` (neutral), or `0.9` (−speed).

---

## Interactive Speed Calculator

For custom EV/IV/nature calculations, use the interactive [VGC Speed Calculator on PokeStats.cc](https://pokestats.cc/pokedex/speed-calculator) — supports Tailwind (×2), Choice Scarf (×1.5), Paralysis (×0.5), and direct meta comparison.

---

## Pokémon Coverage

| Pokémon | Base Spd | Restricted | Reg I Usage |
|---------|---------|------------|------------|
| Calyrex-Shadow | 150 | ✅ | S |
| Zacian | 148 | ✅ | A |
| Eternatus | 130 | ✅ | B |
| Flutter Mane | 135 | ❌ | S |
| Koraidon | 135 | ✅ | S |
| Miraidon | 135 | ✅ | A |
| Chien-Pao | 135 | ❌ | A |
| Chi-Yu | 116 | ❌ | A |
| Zamazenta | 138 | ✅ | B |
| Tornadus | 111 | ❌ | S |
| Farigiraf | 101 | ❌ | A ↑ |
| Urshifu-RS | 97 | ❌ | A |
| Solgaleo / Lunala | 97 | ✅ | B |
| Rayquaza | 95 | ✅ | C |
| Kyurem | 95 | ✅ | C |
| Kyogre | 90 | ✅ | S |
| Groudon | 90 | ✅ | B |
| Great Tusk | 87 | ❌ | A |
| Rillaboom | 85 | ❌ | A |
| Gholdengo | 84 | ❌ | A |
| Cresselia | 85 | ❌ | A |
| Incineroar | 60 | ❌ | S |
| Iron Hands | 50 | ❌ | S |
| Calyrex-Ice | 50 | ✅ | A |
| Amoonguss | 30 | ❌ | S |

---

## Related Tools

- [VGC Speed Calculator](https://pokestats.cc/pokedex/speed-calculator) — Interactive Level 50 speed calc with Tailwind, Scarf, and meta comparison
- [EV Optimizer](https://pokestats.cc/pokedex/ev-optimizer) — Find minimum EVs to hit any speed benchmark
- [VGC competitive guides](https://pokestats.cc/guides) — In-depth strategy guides for Regulation I

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) to add new Pokémon, update regulation data, or correct benchmarks.

---

## License

MIT © [twjojo](https://github.com/twjojo)
