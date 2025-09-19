# Testing Scripts

This folder contains scripts and documentation for testing dependency updates and maintaining the project.

## 📁 Files Overview

### 🤖 Dependabot Testing Scripts

- **`test-dependabot.sh`** - Automated testing of all Dependabot branches
  - Tests each Dependabot recommendation individually
  - Runs build tests for each update
  - Provides summary of successful/failed updates
  - Usage: `./testing/test-dependabot.sh`

## 🚀 Quick Start

### Test All Dependabot Recommendations
```bash
./testing/test-dependabot.sh
```

## 📋 Before Running Scripts

1. Ensure you're on your main development branch
2. Commit any pending changes
3. Make sure `pnpm` is installed and working
4. Verify your app currently builds: `pnpm build`

## 🛠️ Maintenance

These scripts can be updated as needed for your project. They're designed to work with:
- pnpm package manager
- React applications using react-scripts
- Git workflows with Dependabot