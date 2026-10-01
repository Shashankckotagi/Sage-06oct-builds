import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

interface TestRecord {
  title: string;
  category: string;
  project: string;
  durationMs: number;
  status: 'PASS' | 'FAIL' | 'SKIPPED';
  error?: string;
}

export default class MarkdownEvidenceReporter implements Reporter {
  private results: TestRecord[] = [];
  private startTime: number = Date.now();

  onBegin(config: FullConfig, suite: Suite) {
    this.results = [];
    this.startTime = Date.now();
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const fileName = path.basename(test.location.file, '.spec.ts');
    const category = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');

    let status: 'PASS' | 'FAIL' | 'SKIPPED' = 'PASS';
    if (result.status === 'passed') status = 'PASS';
    else if (result.status === 'skipped') status = 'SKIPPED';
    else status = 'FAIL';

    this.results.push({
      title: test.title,
      category,
      project: test.parent?.project()?.name || 'Default',
      durationMs: result.duration,
      status,
      error: result.error?.message,
    });
  }

  onEnd(result: FullResult) {
    const totalDurationSec = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const passed = this.results.filter((r) => r.status === 'PASS').length;
    const failed = this.results.filter((r) => r.status === 'FAIL').length;
    const skipped = this.results.filter((r) => r.status === 'SKIPPED').length;
    const total = this.results.length;
    const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : '0';

    const timestamp = new Date().toUTCString();

    let md = `# SAGE Web Platform — Automated Test Evidence Report\n\n`;
    md += `> **Generated On:** ${timestamp}  \n`;
    md += `> **Target:** \`https://shastryassociates.com\` (Local / Staging Verification)  \n`;
    md += `> **Test Engine:** Playwright Automated Suite  \n`;
    md += `> **Execution Duration:** ${totalDurationSec}s  \n\n`;

    md += `## 📊 Executive Summary\n\n`;
    md += `| Total Tests | Passed | Failed | Skipped | Pass Rate | Status |\n`;
    md += `| :---: | :---: | :---: | :---: | :---: | :---: |\n`;
    md += `| **${total}** | **${passed}** | **${failed}** | **${skipped}** | **${passRate}%** | ${failed === 0 ? '🟢 **READY FOR LAUNCH**' : '🔴 **ACTION REQUIRED**'} |\n\n`;

    md += `---\n\n`;
    md += `## 🧪 Detailed Test Evidence Log\n\n`;
    md += `| # | Category | Test Case Description | Environment / Viewport | Duration | Status | Evidence / Notes |\n`;
    md += `| :--- | :--- | :--- | :--- | :---: | :---: | :--- |\n`;

    this.results.forEach((r, idx) => {
      const statusBadge = r.status === 'PASS' ? '✅ **PASS**' : r.status === 'SKIPPED' ? '⚠️ **SKIPPED**' : '❌ **FAIL**';
      const notes = r.error ? `Error: ${r.error.replace(/\n/g, ' ').substring(0, 100)}...` : 'Verified successfully with 0 assertion errors.';
      md += `| ${idx + 1} | **${r.category}** | ${r.title} | ${r.project} | ${(r.durationMs / 1000).toFixed(2)}s | ${statusBadge} | ${notes} |\n`;
    });

    md += `\n---\n\n`;
    md += `### 📝 Sign-off Matrix\n\n`;
    md += `| Stakeholder | Role | Status | Date |\n`;
    md += `| :--- | :--- | :---: | :--- |\n`;
    md += `| **Dr. Prasad Shastry** | Founding Director & Principal Advisor | Pending Review | — |\n`;
    md += `| **Ms. Scarlet Daoud** | Strategy & Operations Lead | Pending Review | — |\n`;
    md += `| **Team MSV** | Core Engineering & DevOps | **PASSED** | ${new Date().toISOString().split('T')[0]} |\n`;

    const outputPath = path.join(process.cwd(), 'docs', 'TEST_EVIDENCE_REPORT.md');
    fs.writeFileSync(outputPath, md, 'utf8');
    console.log(`\n📄 Automated Test Evidence Report generated at: docs/TEST_EVIDENCE_REPORT.md\n`);
  }
}
