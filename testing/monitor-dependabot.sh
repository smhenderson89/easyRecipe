#!/bin/bash

# Monitor Dependabot Response Script
# Check how Dependabot responds to your package updates

echo "🔍 DEPENDABOT MONITORING REPORT"
echo "================================"
echo "Generated: $(date)"
echo ""

echo "📊 YOUR CURRENT PACKAGE VERSIONS:"
echo "--------------------------------"
echo "axios: $(grep '"axios"' package.json | cut -d'"' -f4)"
echo "react: $(grep '"react"' package.json | head -1 | cut -d'"' -f4)"
echo "react-dom: $(grep '"react-dom"' package.json | cut -d'"' -f4)"
echo "react-redux: $(grep '"react-redux"' package.json | cut -d'"' -f4)"
echo "redux: $(grep '"redux"' package.json | cut -d'"' -f4)"
echo ""

echo "🤖 DEPENDABOT BRANCHES STILL ACTIVE:"
echo "-----------------------------------"
BRANCH_COUNT=$(git branch -r | grep dependabot | wc -l | tr -d ' ')
echo "Total Dependabot branches: $BRANCH_COUNT"
echo ""

echo "Key branches that should close:"
echo "❓ axios-1.8.2 (you have 1.12.2) - Should close!"
git branch -r | grep "axios-1.8.2" && echo "   Status: Still exists" || echo "   Status: ✅ CLOSED"
echo ""

echo "🎯 EXPECTED BEHAVIOR:"
echo "--------------------"
echo "1. ✅ axios PR should auto-close (your version is newer)"
echo "2. ⏳ Indirect dependency PRs may remain (they're not in your package.json directly)"
echo "3. ⏳ Multi-package PRs may remain until ALL packages are updated"
echo "4. ⏳ Changes may need to be on default branch (main) to trigger closure"
echo ""

echo "⏰ TIMELINE:"
echo "-----------"
echo "- Immediate: No changes expected (feature branch)"
echo "- After merge to main: Dependabot should recheck and close applicable PRs"
echo "- Within 24 hours: Most outdated PRs should auto-close"
echo ""

echo "🔗 NEXT STEPS:"
echo "-------------"
echo "1. Monitor: Re-run this script periodically"
echo "2. Merge: Consider merging pnpm2025 to main branch"
echo "3. Manual: Close obviously outdated PRs manually if needed"
echo ""

echo "💡 Manual PR management:"
echo "  Open GitHub.com → Pull Requests → Filter by 'author:app/dependabot'"
echo "  Close PRs for packages where your version >= recommended version"