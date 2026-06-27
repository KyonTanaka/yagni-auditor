# YAGNI Auditor — Real-World Audit Cases

## 🟢 Approved Examples

**Database Backup Tool**
```
/yagni-audit "sqlite-cloud-sync" "Cloud backup" "Losing my knowledge base would be catastrophic"
→ APPROVED (real problem, no native solution)
```

**Contract Analysis**
```
/yagni-audit "legal-analyzer" "Extract contract data" "Processing 20 contracts/month, 40min each"
→ APPROVED (13 hours/month saved, justified)
```

## 🔴 Rejected Examples

**UI Generator (Speculative)**
```
/yagni-audit "ai-ui-gen" "Generate UIs" "Might speed up prototyping someday"
→ REJECTED (speculative, Canvas native exists)
```

**Advanced Linter (Native)**
```
/yagni-audit "linter-pro" "Code linting" "Better quality"
→ REJECTED (pyright + eslint native, zero added value)
```

## 🔄 Redundant Examples

**Linting with code-review installed**
```
/yagni-audit "lint-master" "Linting" "Better quality" "code-review,frontend-design"
→ REDUNDANT (code-review already covers linting)
```

**Memory with auto-memory installed**
```
/yagni-audit "memory-vault" "Alternative persistence" "Different approach" "auto-memory"
→ REDUNDANT (auto-memory covers persistence)
```

---

See README.md for full documentation. See CONTRIBUTING.md for how to add cases.
