# Deployment Guide

This guide covers multiple deployment options for the PDF Tools website.

## Prerequisites

- A GitHub account (for most deployment options)
- A domain name (optional, for custom domain)
- Basic knowledge of Git (recommended)

## Option 1: GitHub Pages (Free)

### Steps

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pdf-tools.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Click Save

3. **Access Your Site**
   - URL: `https://YOUR_USERNAME.github.io/pdf-tools/`
   - Custom domain: Add CNAME file with your domain

### Custom Domain Setup
```bash
# Create CNAME file
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## Option 2: Netlify (Free Tier)

### Method 1: Drag and Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag and drop your project folder
3. Site is live instantly!

### Method 2: Git Integration
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `.` (root)
4. Deploy site

### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Option 3: Vercel (Free Tier)

### Steps

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Or via GitHub
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework Preset: Other
4. Deploy

## Option 4: Cloudflare Pages (Free Tier)

### Steps

1. Go to Cloudflare Dashboard
2. Navigate to Pages
3. Connect GitHub repository
4. Build settings:
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: `/`
5. Save and Deploy

## Option 5: Firebase Hosting (Free Tier)

### Steps

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```
   - Select your project
   - Public directory: `.`
   - Single-page app: No
   - GitHub auto-deploy: Optional

4. **Deploy**
   ```bash
   firebase deploy
   ```

## Option 6: Traditional Web Hosting

### FTP Upload
1. Connect to your hosting via FTP client (FileZilla, etc.)
2. Upload all files to `public_html` or `www` directory
3. Access via your domain

### cPanel File Manager
1. Login to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files
5. Extract if zipped

## Post-Deployment Checklist

### SEO Setup
- [ ] Update canonical URLs in HTML files
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership
- [ ] Set up Google Analytics

### Performance
- [ ] Enable gzip/brotli compression (usually automatic)
- [ ] Configure caching headers
- [ ] Test with Google PageSpeed Insights
- [ ] Verify mobile-friendliness

### Security
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Add security headers (CSP, X-Frame-Options)
- [ ] Test for mixed content warnings

### Monetization
- [ ] Apply for Google AdSense
- [ ] Add ad slots (already in HTML)
- [ ] Set up payment processing (if premium features)

## Custom Domain Setup

### DNS Configuration
Add these records to your DNS provider:

```
Type    Name    Value
A       @       YOUR_SERVER_IP
CNAME   www     yourdomain.com
```

### For GitHub Pages
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

## Environment Variables

This project doesn't require environment variables since it's 100% client-side.

## Troubleshooting

### Common Issues

**404 Errors on Tool Pages**
- Ensure all HTML files are in correct directories
- Check file paths in navigation links

**CDN Libraries Not Loading**
- Check internet connection
- Verify CDN URLs are accessible
- Consider self-hosting libraries

**Dark Mode Not Persisting**
- localStorage requires HTTPS
- Check browser privacy settings

**File Upload Not Working**
- Ensure JavaScript is enabled
- Check browser console for errors

## Monitoring

### Recommended Tools
- Google Search Console - SEO monitoring
- Google Analytics - Traffic analysis
- PageSpeed Insights - Performance monitoring
- Uptime monitoring service

## Support

For deployment issues:
- Check platform-specific documentation
- Create an issue on GitHub
- Contact support@example.com
