# 🚀 Netlify Deployment Guide

## Prerequisites
- ✅ Netlify CLI installed globally (`npm install -g netlify-cli`)
- ✅ Netlify account (sign up at https://netlify.com)
- ✅ Git repository pushed to GitHub

## Quick Deployment Steps

### 1. Login to Netlify
```bash
netlify login
```
This will open a browser window for authentication.

### 2. Initialize Netlify Site (First Time Only)
```bash
netlify init
```

Follow the prompts:
- **Create & configure a new site**
- **Choose your team**
- **Site name**: codegx-portfolio (or your preferred name)
- **Build command**: `npm run build:netlify`
- **Publish directory**: `dist/public`

### 3. Deploy to Production
```bash
netlify deploy --prod
```

Or use the npm script:
```bash
npm run deploy:netlify && netlify deploy --prod --dir=dist/public
```

## Alternative: Manual Build & Deploy

### Build the project
```bash
npm run build:netlify
```

### Deploy the built files
```bash
netlify deploy --prod --dir=dist/public
```

## Environment Variables (Optional)

If you need to set environment variables on Netlify:

```bash
# Set via CLI
netlify env:set VITE_API_URL "https://your-api.com"

# Or set via Netlify Dashboard:
# Site Settings > Environment Variables
```

## Continuous Deployment (Recommended)

For automatic deployments on every git push:

1. Go to Netlify Dashboard
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build:netlify`
   - **Publish directory**: `dist/public`
   - **Node version**: 18
5. Click "Deploy site"

## Configuration Files

### netlify.toml
Already configured with:
- ✅ Build settings
- ✅ SPA redirects
- ✅ Security headers
- ✅ Cache optimization
- ✅ Environment variables

### package.json
Build scripts available:
- `npm run build` - Standard build
- `npm run build:netlify` - Build with sitemap generation
- `npm run deploy:netlify` - Build for Netlify

## Verify Deployment

After deployment, check:
1. Site URL (e.g., https://codegx-portfolio.netlify.app)
2. All routes work correctly
3. Assets load properly
4. No console errors

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build:netlify
```

### Deploy fails
```bash
# Check Netlify status
netlify status

# View deploy logs
netlify deploy --prod --debug
```

### Environment issues
```bash
# List all environment variables
netlify env:list
```

## Custom Domain (Optional)

To add a custom domain:
```bash
netlify domains:add yourdomain.com
```

Or configure via Netlify Dashboard:
Site Settings > Domain Management > Add custom domain

## Useful Commands

```bash
# Check deployment status
netlify status

# View site info
netlify sites:list

# Open site in browser
netlify open:site

# View deploy logs
netlify watch

# Unlink site (if needed)
netlify unlink
```

## Production Checklist

Before deploying to production:
- [ ] All environment variables set
- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] All dependencies installed
- [ ] Sitemap generated
- [ ] Security headers configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify CLI Docs: https://cli.netlify.com
- Community Forum: https://answers.netlify.com
