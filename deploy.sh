#!/bin/bash

echo "🚀 Starting deployment process..."

# Get the commit message
if [ -z "$1" ]; then
    echo "Please provide a commit message"
    echo "Usage: ./deploy.sh \"Your commit message\""
    exit 1
fi

# Store current branch
CURRENT_BRANCH=$(git branch --show-current)

echo "📦 Committing changes..."
git add .
git commit -m "$1"
git push origin $CURRENT_BRANCH

echo "🔄 Updating deployment branch..."
git checkout gh-pages
git merge $CURRENT_BRANCH
git push origin gh-pages

echo "⏪ Switching back to development branch..."
git checkout $CURRENT_BRANCH

echo "✅ Deployment complete! Changes should be live in a few minutes." 