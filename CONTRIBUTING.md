# Contributing to YAGNI Auditor

Thank you for helping minimize tool bloat!

## Philosophy

YAGNI Auditor keeps gates strict:
- **Reject** when unsure (users can override with --force)
- **Add real cases**, not hypotheticals
- **Update decision maps**, not core logic
- **Never weaken** the four gates

## How to Contribute

### Report a Misclassification

```
Title: [AUDIT] Tool name — Verdict incorrect
Tool: [name]
Current verdict: [REJECTED | REDUNDANT | APPROVED]
Should be: [X]
Use case: [real problem]
Why: [explain gate failure]
```

### Add Native Capability or Skill

Edit `src/index.ts`:
```typescript
const nativeCapabilities = {
  "new-capability": ["tool1"],  // ADD THIS
};
const skillCoverage = {
  "skill-name": ["capability"],  // ADD THIS
};
```

### Fix a Bug

1. Open issue with tool name + verdict + error
2. Submit PR with test case + fix
3. Run `npm test` to verify

## Code Style

- TypeScript strict mode
- Minimal abstractions
- Comments only for **why**, not **what**

## Testing

```bash
npm test
```

Add test case to `tests/gates.test.ts`:
```typescript
test('REJECTS example', async () => {
  const r = await auditInstallation({toolName:'ex', description:'t', useCase:'speculative'});
  expect(r.verdict).toBe('REJECTED');
});
```

## License

By contributing, you agree your code is MIT licensed.

Made with minimalism in mind. Thank you!
