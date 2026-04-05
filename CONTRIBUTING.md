# Contributing to vgc-speed-tiers

Thank you for helping maintain this VGC speed tier reference!

## How to Contribute

### Adding a New Pokémon

1. Fork this repository
2. Open `data/speed-tiers.json`
3. Add a new entry following the schema below
4. Run `npm run validate` to confirm valid JSON
5. Open a Pull Request with a clear description

### Schema for a New Entry

```json
{
  "name": "Pokémon Name",
  "dex": 000,
  "base_speed": 00,
  "role": ["Role 1", "Role 2"],
  "usage_tier": "S / A / B / C",
  "spreads": [
    {
      "id": "pokemon-name-spread-label",
      "label": "Human-readable label",
      "nature": "Nature",
      "evs": 0,
      "ivs": 31,
      "speed_stat": 000,
      "item": "Item Name",
      "outspeeds": ["Pokémon X at stat Y"],
      "note": "Why this spread is used"
    }
  ]
}
```

### Verifying Speed Stats

Use the formula:
```
Speed = floor((floor((2×base + iv + floor(ev/4)) × 50 / 100) + 5) × nature_modifier)
```

Or verify with the [pokestats.cc IV/EV Calculator](https://pokestats.cc/pokedex/iv-calculator).

### Updating for New Regulations

When a new Regulation becomes active, open an issue with the tag `regulation-update` and list which Pokémon usage tiers have shifted.

## Guidelines

- All speed stats must be mathematically verified
- Include at least one `outspeeds` benchmark per spread
- Use the `id` format: `pokemon-name-descriptor` (kebab-case, lowercase)
- Keep notes concise — one sentence explaining the competitive purpose
