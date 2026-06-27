/**
 * YAGNI Auditor Skill
 * Installation auditor: Real Need → Native Capability → Redundancy → Cost-Benefit
 */

import Anthropic from "@anthropic-ai/sdk";

interface AuditRequest {
  toolName: string;
  description: string;
  useCase: string;
  installedSkills?: string[];
}

interface AuditReport {
  verdict: "APPROVED" | "REJECTED" | "REDUNDANT";
  reason: string;
  alternative: string;
  costBenefit: string;
  timestamp: string;
}

const client = new Anthropic();

// Gate 1: Real Need vs Speculative
function evaluateNeed(useCase: string): boolean {
  const critical = ["broken", "fails", "error", "block", "critical"];
  const speculative = ["might", "could", "nice-to-have", "someday"];
  return (
    critical.some((k) => useCase.toLowerCase().includes(k)) ||
    !speculative.some((k) => useCase.toLowerCase().includes(k))
  );
}

// Gate 2: Native Capabilities
const nativeCapabilities: Record<string, string[]> = {
  UI: ["Canvas JSON", "Markdown", "HTML native"],
  memory: ["auto-memory SQLite"],
  testing: ["playwright"],
  "code-review": ["code-review skill"],
  documentation: ["markdown"],
  security: ["security-guidance"],
};

function checkNativeCapability(toolName: string, description: string): string | null {
  for (const [category, natives] of Object.entries(nativeCapabilities)) {
    if (description.toLowerCase().includes(category) || toolName.toLowerCase().includes(category)) {
      return `Native: ${natives.join(", ")}`;
    }
  }
  return null;
}

// Gate 3: Redundancy Check
const skillCoverage: Record<string, string[]> = {
  "code-review": ["linting", "analysis", "quality"],
  "frontend-design": ["UI", "styling", "layout"],
  playwright: ["testing", "browser"],
  superpowers: ["brainstorming", "debugging"],
};

function checkRedundancy(toolName: string, description: string, installed: string[]): string | null {
  for (const skill of installed) {
    const topics = skillCoverage[skill] || [];
    if (topics.some((t) => description.toLowerCase().includes(t) || toolName.toLowerCase().includes(t))) {
      return `${skill} covers 80%+`;
    }
  }
  return null;
}

// Gate 4: Cost-Benefit
async function analyzeCostBenefit(toolName: string, description: string, useCase: string): Promise<string> {
  const response = await client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 100,
    messages: [{ role: "user", content: `Cost-benefit: "${toolName}" — ${description}. Use: ${useCase}. One sentence about token overhead vs benefit.` }],
  });
  return (response.content[0] as { text: string }).text;
}

export async function auditInstallation(request: AuditRequest): Promise<AuditReport> {
  const { toolName, description, useCase, installedSkills = [] } = request;

  if (!evaluateNeed(useCase)) {
    return { verdict: "REJECTED", reason: "Speculative need. Not a real problem.", alternative: "Revisit when critical. YAGNI.", costBenefit: "Avoids 15-50k tokens.", timestamp: new Date().toISOString() };
  }

  const native = checkNativeCapability(toolName, description);
  if (native) {
    return { verdict: "REJECTED", reason: `${native} already built-in.`, alternative: native, costBenefit: "Zero tokens.", timestamp: new Date().toISOString() };
  }

  const redundant = checkRedundancy(toolName, description, installedSkills);
  if (redundant) {
    return { verdict: "REDUNDANT", reason: `${redundant}. Bloat without new capability.`, alternative: "Deepen usage of existing skill.", costBenefit: "Saves 10-30k tokens.", timestamp: new Date().toISOString() };
  }

  const cost = await analyzeCostBenefit(toolName, description, useCase);
  return { verdict: "APPROVED", reason: `${toolName} fills genuine gap.`, alternative: "Install + document in CLAUDE.md.", costBenefit: cost, timestamp: new Date().toISOString() };
}
