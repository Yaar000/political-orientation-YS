#!/bin/bash
set -e

echo "🚀 Building for Cloudflare Pages..."

# Clean previous build
rm -rf dist-static

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building static site..."
npx vite build --config vite.config.cloudflare.ts

echo "📁 Copying deployment files..."
cp _headers dist-static/
cp _redirects dist-static/

echo "✅ Build complete! Deploy the 'dist-static' folder to Cloudflare Pages."
echo ""
echo "📋 Cloudflare Pages Settings:"
echo "  Build command: npm install && npx vite build --config vite.config.cloudflare.ts"
echo "  Build output directory: dist-static"
echo "  Root directory: /"
echo ""
echo "🌐 Your app will be available at your Cloudflare Pages URL once deployed."