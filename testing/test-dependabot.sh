#!/bin/bash

# Dependabot Testing Script
# This script tests each Dependabot branch individually

set -e  # Exit on any error

echo "🚀 Starting Dependabot Testing Process..."

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# List of dependabot branches to test
DEPENDABOT_BRANCHES=(
    "origin/dependabot/npm_and_yarn/axios-1.8.2"
    "origin/dependabot/npm_and_yarn/babel/helpers-7.27.0"
    "origin/dependabot/npm_and_yarn/babel/runtime-7.27.0"
    "origin/dependabot/npm_and_yarn/babel/runtime-corejs3-7.26.10"
    "origin/dependabot/npm_and_yarn/cross-spawn-7.0.6"
    "origin/dependabot/npm_and_yarn/ejs-3.1.10"
    "origin/dependabot/npm_and_yarn/express-4.21.2"
    "origin/dependabot/npm_and_yarn/http-proxy-middleware-2.0.9"
    "origin/dependabot/npm_and_yarn/nanoid-3.3.8"
    "origin/dependabot/npm_and_yarn/rollup-2.79.2"
    "origin/dependabot/npm_and_yarn/serialize-javascript-6.0.2"
)

# Results tracking
SUCCESSFUL_UPDATES=()
FAILED_UPDATES=()

test_branch() {
    local branch=$1
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo ""
    echo "🧪 Testing: $branch_name"
    echo "----------------------------------------"
    
    # Create local branch and checkout
    git checkout -b "test-$branch_name" "$branch" 2>/dev/null || {
        git checkout "test-$branch_name"
        git reset --hard "$branch"
    }
    
    # Install dependencies
    echo "📦 Installing dependencies..."
    if pnpm install --frozen-lockfile; then
        echo "✅ Dependencies installed successfully"
    else
        echo "❌ Failed to install dependencies"
        FAILED_UPDATES+=("$branch_name (install failed)")
        git checkout "$CURRENT_BRANCH"
        git branch -D "test-$branch_name" 2>/dev/null || true
        return 1
    fi
    
    # Try to build
    echo "🔨 Building application..."
    if timeout 60s pnpm build; then
        echo "✅ Build successful"
        SUCCESSFUL_UPDATES+=("$branch_name")
    else
        echo "❌ Build failed"
        FAILED_UPDATES+=("$branch_name (build failed)")
        git checkout "$CURRENT_BRANCH"
        git branch -D "test-$branch_name" 2>/dev/null || true
        return 1
    fi
    
    # Return to original branch and cleanup
    git checkout "$CURRENT_BRANCH"
    git branch -D "test-$branch_name" 2>/dev/null || true
    
    echo "✅ Test completed for $branch_name"
}

# Test each branch
for branch in "${DEPENDABOT_BRANCHES[@]}"; do
    test_branch "$branch"
done

# Print results
echo ""
echo "📊 TEST RESULTS SUMMARY"
echo "========================"
echo ""
echo "✅ SUCCESSFUL UPDATES (${#SUCCESSFUL_UPDATES[@]}):"
for update in "${SUCCESSFUL_UPDATES[@]}"; do
    echo "  - $update"
done

echo ""
echo "❌ FAILED UPDATES (${#FAILED_UPDATES[@]}):"
for update in "${FAILED_UPDATES[@]}"; do
    echo "  - $update"
done

echo ""
echo "🏁 Testing complete!"
echo "💡 You can now apply the successful updates manually or merge those branches."