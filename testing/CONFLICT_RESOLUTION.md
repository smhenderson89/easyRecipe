# Git Merge Conflict Resolution Guide

## 🚨 When You See "This branch has conflicts that must be resolved"

This happens when Git can't automatically merge changes because the same lines were modified in both branches.

## 🔍 How to See What Conflicts Exist

### 1. Check Git Status
```bash
git status
```
Look for files marked as "both modified" or "unmerged paths".

### 2. List Conflicted Files
```bash
git diff --name-only --diff-filter=U
```

### 3. See Conflict Details
```bash
git diff
```

## 🛠️ How to Resolve Conflicts

### Step 1: Open the Conflicted File
Conflict markers look like this:
```javascript
<<<<<<< HEAD (your current branch)
import ReactDOM from 'react-dom';
=======
import { createRoot } from 'react-dom/client';
>>>>>>> main (the branch you're merging)
```

### Step 2: Choose What to Keep
- **Keep yours**: Delete everything from `<<<<<<< HEAD` to `=======`
- **Keep theirs**: Delete everything from `=======` to `>>>>>>> branch-name`  
- **Keep both**: Manually combine the changes and remove all markers
- **Custom solution**: Write your own code and remove all markers

### Step 3: Remove ALL Conflict Markers
Make sure no lines starting with `<<<<<<<`, `=======`, or `>>>>>>>` remain.

### Step 4: Test Your Changes
```bash
# Install dependencies if needed
pnpm install

# Test that it builds
pnpm build

# Test that it runs
pnpm start
```

### Step 5: Commit the Resolution
```bash
git add .
git commit -m "resolve merge conflicts in [filename]"
```

## 🎯 Common Conflict Scenarios in Your Project

### React Rendering (index.js)
```javascript
// OLD (React 17)
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// NEW (React 18+) - Use this!
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Package.json Dependencies
- Choose the **higher version number**
- Or manually set to the version you want

### Redux Store Creation
```javascript
// OLD
import { createStore } from 'redux';

// NEW - Use this!
import { legacy_createStore as createStore } from 'redux';
```

## 🚀 Prevention Tips

1. **Pull before starting work**:
   ```bash
   git pull origin main
   ```

2. **Keep branches up to date**:
   ```bash
   git checkout main
   git pull
   git checkout your-feature-branch
   git merge main
   ```

3. **Smaller, frequent commits** reduce conflict likelihood

## ⚡ Quick Commands Reference

```bash
# See conflicts
git status
git diff --name-only --diff-filter=U

# Abort merge if you want to start over
git merge --abort

# After resolving conflicts
git add .
git commit -m "resolve merge conflicts"

# Continue with your pull request
git push origin your-branch-name
```