# YAGNI Auditor

> **You Aren't Gonna Need It** — A Claude Code skill that audits tool/MCP/dependency installations before they clutter your environment.

Blocks speculative, redundant, and over-engineered tools using a strict **4-gate decision ladder**: Real Need → Native Capability → Redundancy → Cost-Benefit.

## Philosophy

Every tool you install is **technical debt**. YAGNI Auditor enforces minimalism by asking four gates before you commit:

1. **Real Problem?** — Is this blocking you today, or is it speculative?
2. **Native Capability?** — Does Claude Code, OS, or stdlib already do this?
3. **Redundant?** — Do you have another skill that covers 80%+ of this?
4. **Cost > Benefit?** — Does the value justify the tokens, maintenance, and complexity?

## Installation

```bash
git clone https://github.com/KyonTanaka/yagni-auditor.git ~/.claude/skills/yagni-auditor
cd ~/.claude/skills/yagni-auditor
npm install && npm run build && npm test
```

## Usage

```bash
/yagni-audit "tool-name" "what it does" "why you want it"
```

**Example:**
```
/yagni-audit "claude-mem" "MCP memory persistence" "I need to save context between sessions"

[ VERDICT ]: APPROVED

[ REASON ]: claude-mem fills a genuine gap. Auto-memory is built-in, 
but custom persistent graphs for cross-session recall goes beyond current.

[ ALTERNATIVE ]: Install + integrate with auto-memory layer.

[ COST-BENEFIT ]: Token overhead ~5k/session. Benefit: 20-30min time savings. Favorable.
```

## Documentation

- **[EXAMPLES.md](EXAMPLES.md)** — 16 real-world audit cases
- **[CONTRIBUTING.md](CONTRIBUTING.md)** — How to contribute

## Status

✅ Production-ready | 📚 Fully documented | 🧪 16+ test cases | 📖 16 real-world examples

MIT licensed. Open to contributions.

Made with minimalism in mind. 🚀
