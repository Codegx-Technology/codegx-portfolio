#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../dist/public');

console.log('🔍 Verifying build output...');

// Check if build directory exists
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory does not exist:', buildDir);
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html does not exist in build directory');
  process.exit(1);
}

// Check if assets directory exists
const assetsPath = path.join(buildDir, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ assets directory does not exist in build directory');
  process.exit(1);
}

// Check if _redirects file exists (for Netlify)
const redirectsPath = path.join(buildDir, '_redirects');
if (!fs.existsSync(redirectsPath)) {
  console.warn('⚠️  _redirects file does not exist - SPA routing may not work correctly');
}

console.log('✅ Build verification successful!');
console.log('📂 Build directory:', buildDir);
console.log('📄 Index file:', indexPath);
console.log('📁 Assets directory:', assetsPath);

// List contents
const files = fs.readdirSync(buildDir);
console.log('📋 Build contents:', files);