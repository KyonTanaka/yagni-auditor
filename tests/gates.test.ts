import { auditInstallation } from '../src/index';

describe('YAGNI Auditor — Gates', () => {
  test('REJECTS speculative needs', async () => {
    const report = await auditInstallation({ toolName: 'tool', description: 'test', useCase: 'Might be useful someday', installedSkills: [] });
    expect(report.verdict).toBe('REJECTED');
  });

  test('ACCEPTS critical problems', async () => {
    const report = await auditInstallation({ toolName: 'fix', description: 'Fixes issue', useCase: 'Work is broken and blocking', installedSkills: [] });
    expect(report.verdict).not.toBe('REJECTED');
  });

  test('REJECTS native capabilities', async () => {
    const report = await auditInstallation({ toolName: 'ui-tool', description: 'Create UIs', useCase: 'Need UI builder', installedSkills: [] });
    expect(report.verdict).toBe('REJECTED');
  });

  test('DETECTS redundancy', async () => {
    const report = await auditInstallation({ toolName: 'linter', description: 'Linting', useCase: 'Better quality', installedSkills: ['code-review'] });
    expect(report.verdict).toBe('REDUNDANT');
  });

  test('Returns structured report', async () => {
    const report = await auditInstallation({ toolName: 'test', description: 'test', useCase: 'test' });
    expect(report).toHaveProperty('verdict');
    expect(report).toHaveProperty('reason');
    expect(report).toHaveProperty('alternative');
    expect(['APPROVED', 'REJECTED', 'REDUNDANT']).toContain(report.verdict);
  });
});
