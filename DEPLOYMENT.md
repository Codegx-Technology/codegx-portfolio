# Deployment Troubleshooting Guide

## Netlify Deployment Issues

### Common Problems and Solutions

#### 1. Deploy directory 'dist/public' does not exist
**Solution**: 
- Ensure the build command is running correctly
- Check that Vite is configured to output to `dist/public`
- Verify the build process completes successfully

#### 2. Build fails with dependency issues
**Solution**:
- Use `--legacy-peer-deps` flag in npm install
- Ensure Node.js version is specified in `.nvmrc`
- Check all dependencies are properly installed

#### 3. SPA routing not working
**Solution**:
- Ensure `_redirects` file is in the public directory
- Verify the redirect rule `/* /index.html 200` is in place
- Check that the `_redirects` file is copied to the build output

### Build Commands

```bash
# Local development
npm run dev

# Production build (with sitemap)
npm run build:sitemap

# Netlify build (with error handling)
npm run build:netlify

# Verify build output
node scripts/verify-build.js
```

### Environment Variables

Set these in Netlify's environment variables section:
- `NODE_VERSION=18`
- `NPM_FLAGS=--legacy-peer-deps`
- `VITE_BASE_PATH=/`

### File Structure After Build

```
dist/public/
├── index.html          # Main entry point
├── assets/             # Static assets (JS, CSS, fonts)
├── data/              # JSON data files
├── _redirects         # Netlify SPA routing
├── 404.html           # Custom 404 page
└── site.webmanifest   # PWA manifest
```

### Troubleshooting Steps

1. **Check Build Logs**: Look for specific error messages in Netlify's build logs
2. **Verify Local Build**: Run `npm run build:netlify` locally to ensure it works
3. **Check File Permissions**: Ensure all files have correct permissions
4. **Review Dependencies**: Make sure all packages in package.json are properly listed
5. **Environment Variables**: Verify all necessary environment variables are set in Netlify

### Support

If the deployment still fails:
1. Check the Netlify build logs for specific error messages
2. Verify the Node.js version matches `.nvmrc`
3. Ensure all build dependencies are in `package.json`
4. Test the build process locally first