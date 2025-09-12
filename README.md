# Playwright Qase Reporter - Sharding and Parallel Execution Demo

This repository demonstrates how to properly configure the Playwright Qase Reporter for parallel test execution and sharding scenarios. Please find the accompanying article at the link below:

> https://developers.qase.io/update/docs/parallel-test-runs-and-sharding#/


## Table of Contents

1. [Quick Start](#quick-start)
2. [Sharding and Parallel Execution](#sharding-and-parallel-execution)
3. [GitHub Workflows](#github-workflows)
4. [Local Testing](#local-testing)
5. [Configuration](#configuration)
6. [FAQ](#frequently-asked-questions)

## Quick Start

1. Clone the repository:
   ```bash
   git clone --single-branch --branch sharding https://github.com/cskmnrpt/qase-playwright.git
   cd qase-playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

3. Configure Qase credentials in `qase.config.json` or environment variables.

4. Run tests:
   ```bash
   npm test
   ```

## Sharding and Parallel Execution

### The Problem

When running Playwright tests in parallel or with sharding, each process instance creates its own test run in Qase, resulting in fragmented results across multiple runs instead of a single consolidated report.

### The Solution

Use two key Qase reporter options:

- `QASE_TESTOPS_RUN_ID`: Pre-created run ID that all shards will report to
- `QASE_TESTOPS_RUN_COMPLETE`: Set to `false` to prevent individual shards from completing the run

## GitHub Workflows

This repository includes three workflows demonstrating different approaches:

### 1. Standard Sharding with HTML Reporter
**File:** `.github/workflows/1-standard-sharding.yml`

Demonstrates standard Playwright sharding with HTML reporter and blob report merging. No Qase integration.

### 2. Qase Reporter - Multiple Runs (Incorrect)
**File:** `.github/workflows/2-qase-multiple-runs.yml`

Shows what happens when using Qase reporter without proper sharding configuration. Each shard creates its own test run.

### 3. Qase Reporter - Proper Setup (Correct)
**File:** `.github/workflows/3-qase-proper-setup.yml`

Demonstrates the correct approach:
1. Create a single test run before sharding
2. All shards report to the same run ID
3. Complete the run after all shards finish

**Required Secrets:**
- `QASE_TESTOPS_API_TOKEN`: Your Qase API token
- `QASE_TESTOPS_PROJECT`: Your Qase project code

## Local Testing

### Parallel Execution
```bash
npm run test:parallel
```

### Sharding
```bash
# Run shard 1 of 4
npm run test:shard

# Or manually specify shard
npx playwright test --shard=2/4
```

### With Qase Reporter
```bash
QASE_MODE=testops npm run test:qase
```

### Proper Sharding with Qase (Manual)

1. Create a test run:
   ```bash
   curl -X POST "https://api.qase.io/v1/run/YOUR_PROJECT_CODE" \
     -H "Token: YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"title": "Manual Sharded Run"}'
   ```

2. Run shards with the returned run ID:
   ```bash
   QASE_TESTOPS_RUN_ID=123 QASE_TESTOPS_RUN_COMPLETE=false npx playwright test --shard=1/4
   QASE_TESTOPS_RUN_ID=123 QASE_TESTOPS_RUN_COMPLETE=false npx playwright test --shard=2/4
   # ... continue for all shards
   ```

3. Complete the run:
   ```bash
   curl -X PATCH "https://api.qase.io/v1/run/YOUR_PROJECT_CODE/123/complete" \
     -H "Token: YOUR_API_TOKEN"
   ```

## Configuration

### Environment Variables

- `QASE_MODE`: Set to `testops` to enable Qase reporting
- `QASE_TESTOPS_API_TOKEN`: Your Qase API token
- `QASE_TESTOPS_PROJECT`: Your Qase project code
- `QASE_TESTOPS_RUN_ID`: Pre-created run ID for sharding
- `QASE_TESTOPS_RUN_COMPLETE`: Set to `false` for sharding scenarios

### Playwright Configuration

The `playwright.config.js` is configured to:
- Enable sharding via environment variables
- Support parallel execution in CI
- Use multiple browser projects
- Optimize for CI environments

## Test Structure

The repository includes 100 realistic test cases across 10 feature areas:
- Authentication (10 tests)
- User Management (10 tests)
- Product Catalog (10 tests)
- Shopping Cart (10 tests)
- Checkout Process (10 tests)
- Payment Processing (10 tests)
- Order Management (10 tests)
- Inventory Management (10 tests)
- Reporting & Analytics (10 tests)
- API Integration (10 tests)

## Frequently Asked Questions

1. [Test with `test.skip` creates new test case](./FAQ/test.skip-creates-new-test-case.md)
2. [Projects result in duplicate cases](./FAQ/projects-result-in-duplicate-cases.md)
3. [Fetch test run ID of ongoing run](./FAQ/fetch-test-run-id-of-ongoing-run.md)

