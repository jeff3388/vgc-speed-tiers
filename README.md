# VGC Speed Tiers — Regulation F Reference Dataset

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Pokémon](https://img.shields.io/badge/format-VGC%202024-red.svg)
![Regulation](https://img.shields.io/badge/regulation-F-orange.svg)
![Level](https://img.shields.io/badge/level-50-green.svg)
![Last Commit](https://img.shields.io/github/last-commit/twjojo/vgc-speed-tiers)

A structured dataset of **VGC speed tiers for Regulation F**, covering the top 20 Pokémon with exact level-50 speed stats, common EV spreads, and benchmark comparisons. All data is available as JSON with a zero-dependency Node.js CLI for fast lookups during teambuilding.

Knowing which Pokémon your spread outspeeds — and which it doesn't — is one of the most important parts of competitive Pokémon EV training. This reference eliminates the guesswork.

---

## Quick Start

```bash
git clone https://github.com/twjojo/vgc-speed-tiers.git
cd vgc-speed-tiers

# List all Pokémon and their speed stats
node scripts/lookup.js

# Look up a specific Pokémon
node scripts/lookup.js kyogre

# Show a specific spread
node scripts/lookup.js kyogre max-speed

# Trick Room benchmarks
node scripts/lookup.js --tr

# Find Pokémon at a specific speed stat (±5)
node scripts/lookup.js --stat 156
```

---

## Speed Tier Quick Reference

| Speed Stat | Pokémon | Nature | EVs | Usage Tier |
|-----------|---------|--------|-----|-----------|
| 222 | Calyrex-Shadow | Timid | 252 | S |
| 205 | Flutter Mane / Koraidon / Miraidon / Chien-Pao | Timid/Jolly | 252 | S/A |
| 184 | Chi-Yu | Timid | 252 | A |
| 179 | Tornadus | Timid | 252 | S |
| 163 | Urshifu-Rapid-Strike | Jolly | 252 | A |
| 156 | Kyogre / Groudon | Timid/Jolly | 252 | S |
| 152 | Great Tusk | Jolly | 252 | A |
| 150 | Rillaboom | Jolly | 252 | A |
| 149 | Gholdengo | Timid | 252 | A |
| 121 | Kyogre (Choice Scarf base) | Timid | 0 | S |
| 105 | Cresselia / Rillaboom | — | 0 | A |
| 80 | Incineroar / Porygon2 | — | 0 | S/A |
| 70 | Iron Hands / Kingambit | — | 0 | S/A |
| 63 | Iron Hands / Calyrex-Ice | Brave | 0 | S |
| 50 | Amoonguss | — | 0 | S |
| 49 | Iron Hands / Calyrex-Ice | Brave | 0 IVs | S |

---

## Trick Room Speed Reference

Under Trick Room, **lower speed moves first**. Key benchmarks:

| Speed Stat | Pokémon | Note |
|-----------|---------|------|
| 49 | Iron Hands / Calyrex-Ice (0 IVs Brave) | Moves first in TR |
| 50 | Amoonguss (0 EVs) | Very slow support |
| 63 | Iron Hands / Calyrex-Ice (31 IVs Brave) | Standard TR attacker |
| 80 | Incineroar / Porygon2 (0 EVs) | Support pivot |
| 94 | Cresselia (0 IVs 0 EVs Sassy) | Min speed TR setter |
| 105 | Cresselia (31 IVs 0 EVs Sassy) | Standard setter |

---

## Data Format

Each Pokémon entry in `data/speed-tiers.json` follows this schema:

```json
{
  "name": "Kyogre",
  "dex": 382,
  "base_speed": 90,
  "role": ["Restricted Rain Setter", "Spread Attacker"],
  "usage_tier": "S",
  "spreads": [
    {
      "id": "kyogre-max-speed",
      "label": "Max Speed Timid",
      "nature": "Timid",
      "evs": 252,
      "ivs": 31,
      "speed_stat": 156,
      "item": "Choice Specs / Mystic Water",
      "outspeeds": ["Great Tusk 252 EVs Jolly (152)"],
      "note": "Ties Groudon at max speed"
    }
  ]
}
```

### Speed Stat Formula

```
Speed = floor((floor((2×base + iv + floor(ev/4)) × 50 / 100) + 5) × nature_modifier)
```

Where `nature_modifier` is `1.1` (+speed), `1.0` (neutral), or `0.9` (−speed).

---

## Coverage

| Pokémon | Base Speed | Spreads | Usage Tier |
|---------|-----------|---------|-----------|
| Calyrex-Shadow | 150 | 1 | S |
| Flutter Mane | 135 | 2 | S |
| Koraidon | 135 | 1 | S |
| Miraidon | 135 | 1 | S |
| Chien-Pao | 135 | 1 | A |
| Chi-Yu | 116 | 2 | A |
| Tornadus | 111 | 1 | S |
| Urshifu-Rapid-Strike | 97 | 1 | A |
| Kyogre | 90 | 2 | S |
| Groudon | 90 | 1 | S |
| Great Tusk | 87 | 1 | A |
| Rillaboom | 85 | 2 | A |
| Gholdengo | 84 | 1 | A |
| Cresselia | 85 | 2 | A |
| Incineroar | 60 | 1 | S |
| Porygon2 | 60 | 1 | A |
| Iron Hands | 50 | 2 | S |
| Calyrex-Ice | 50 | 2 | S |
| Kingambit | 50 | 1 | A |
| Amoonguss | 30 | 1 | S |
| Ting-Lu | 45 | 1 | B |

---

## Related Tools

- [VGC EV/IV Calculator on pokestats.cc](https://pokestats.cc/pokedex/iv-calculator) — Verify any speed stat benchmark interactively with custom nature, EVs, and IVs
- [VGC competitive guides on pokestats.cc](https://pokestats.cc/guides) — In-depth Pokémon-specific guides covering EV spreads, movesets, and team roles

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) to add new Pokémon, new regulation data, or correct benchmarks.

---

## License

MIT © [twjojo](https://github.com/twjojo)
