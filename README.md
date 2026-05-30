# PDF Tools - Free Online PDF Converter & Editor

A beautiful, modern, and completely free online PDF tools website. All processing happens client-side in the browser for maximum privacy and speed.

## Features

### Core PDF Tools

| Tool | Description |
|------|-------------|
| **Merge PDF** | Combine multiple PDF files into one document with drag-to-reorder |
| **Split PDF** | Extract specific pages or page ranges from a PDF |
| **Compress PDF** | Reduce PDF file size by removing metadata and optimizing structure |
| **PDF to Image** | Convert PDF pages to high-quality PNG or JPG images |
| **Image to PDF** | Convert JPG, PNG, GIF, WebP images into a single PDF |

### Key Features

- **100% Client-Side Processing** - Files never leave the user's browser
- **No File Size Limits** - Process unlimited files with no restrictions
- **Beautiful Modern UI** - Clean, professional design that competes with top PDF tools
- **Dark Mode** - Toggle between light and dark themes
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **SEO Optimized** - Meta tags, structured data, sitemap, and robots.txt
- **Fast Performance** - No server uploads means instant processing
- **Ad Ready** - Placeholder slots for Google AdSense integration

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **pdf-lib** - Client-side PDF manipulation
- **pdf.js** - PDF rendering and preview

### CDN Libraries

```html
<!-- PDF manipulation -->
<script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<!-- PDF rendering -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
```

## Project Structure

```
plan-d-pdf-tools/
├── index.html              # Homepage with tool cards
├── css/
│   └── style.css           # Complete styles (dark mode, responsive)
├── js/
│   └── common.js           # Shared utilities (theme, toast, file handling)
├── tools/
│   ├── merge.html          # Merge PDF tool
│   ├── split.html          # Split PDF tool
│   ├── compress.html       # Compress PDF tool
│   ├── pdf-to-image.html   # PDF to Image tool
│   └── image-to-pdf.html   # Image to PDF tool
├── assets/                 # Static assets (images, etc.)
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO
├── favicon.svg             # SVG favicon
├── README.md               # This file
└── DEPLOY.md               # Deployment instructions
```

## How to Use Each Tool

### Merge PDF
1. Click "Merge PDF" from the homepage
2. Drop or select multiple PDF files
3. Drag files to reorder them
4. Click "Merge PDFs" button
5. Download the merged PDF

### Split PDF
1. Click "Split PDF" from the homepage
2. Drop or select a PDF file
3. Choose split mode:
   - **Select Pages** - Click on page thumbnails to select/deselect
   - **Page Range** - Enter page ranges (e.g., 1-3, 5, 7-10)
   - **Every N Pages** - Split at intervals
   - **Single Pages** - Extract each page as separate PDF
4. Click "Split PDF" button
5. Download extracted pages

### Compress PDF
1. Click "Compress PDF" from the homepage
2. Drop or select a PDF file
3. Choose compression level (Low/Medium/High)
4. Optionally remove metadata and annotations
5. Click "Compress PDF" button
6. See size reduction and download

### PDF to Image
1. Click "PDF to Image" from the homepage
2. Drop or select a PDF file
3. Choose image format (PNG or JPG)
4. Set quality/scale (1x to 3x)
5. Select pages to convert
6. Click "Convert to Images" button
7. Download individual images or all at once

### Image to PDF
1. Click "Image to PDF" from the homepage
2. Drop or select image files (JPG, PNG, GIF, WebP)
3. Drag images to reorder
4. Set page size, orientation, and margins
5. Click "Create PDF" button
6. Download the PDF

## Deployment

See [DEPLOY.md](DEPLOY.md) for detailed deployment instructions.

### Quick Deploy Options

1. **GitHub Pages** (Free)
   - Push to GitHub repository
   - Enable GitHub Pages in settings
   - Custom domain support available

2. **Netlify** (Free tier)
   - Drag and drop the folder to Netlify
   - Automatic HTTPS and CDN
   - Custom domain support

3. **Vercel** (Free tier)
   - Connect GitHub repository
   - Automatic deployments
   - Edge network worldwide

4. **Cloudflare Pages** (Free tier)
   - Connect GitHub repository
   - Global CDN
   - Unlimited bandwidth

5. **Traditional Web Hosting**
   - Upload files via FTP/SFTP
   - Works with any static hosting

## Revenue Model

### Google AdSense
- Ad placeholder slots included in the design
- Strategic placement:
  - Below hero section
  - After tool content
  - In footer area
- Responsive ad units recommended

### Freemium Model (Future)
- **Free Tier**: All tools with basic features
- **Pro Tier** ($5-10/month):
  - Batch processing
  - Higher resolution exports
  - Priority processing
  - No ads
  - API access

### Other Revenue Streams
- Affiliate marketing for related software
- Sponsored content/blog posts
- Premium templates or presets
- White-label solutions for businesses

## SEO Optimization

### Included SEO Features
- Semantic HTML5 markup
- Meta title and description for each page
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- XML sitemap
- robots.txt
- Structured data (JSON-LD)
- Fast loading (no server dependencies)
- Mobile-friendly responsive design

### Recommended SEO Actions
1. Update canonical URLs in HTML files
2. Submit sitemap to Google Search Console
3. Build quality backlinks
4. Create blog content about PDF tips
5. Optimize images with alt tags
6. Monitor Core Web Vitals

## Customization

### Changing Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --primary-dark: #4f46e5;   /* Darker shade */
    --primary-light: #818cf8;  /* Lighter shade */
    --secondary: #8b5cf6;      /* Secondary color */
}
```

### Adding New Tools
1. Create new HTML file in `tools/` directory
2. Copy structure from existing tool page
3. Add tool card to `index.html`
4. Update `sitemap.xml`
5. Add navigation link in header

### Updating CDN Libraries
Check for newer versions:
- pdf-lib: https://unpkg.com/pdf-lib
- pdf.js: https://cdnjs.com/libraries/pdf.js

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## Security

- No server-side processing
- No file uploads to external servers
- No data collection or tracking (except optional analytics)
- Content Security Policy headers recommended
- HTTPS required for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across browsers
5. Submit a pull request

## License

MIT License - Free for personal and commercial use.

## Support

For issues or questions:
- Create an issue on GitHub
- Email: support@example.com

## Acknowledgments

- [pdf-lib](https://github.com/Hopding/pdf-lib) - PDF manipulation library
- [pdf.js](https://github.com/nicolo-ribaudo/pdf.js) - PDF rendering library
- [Inter](https://rsms.me/inter/) - Beautiful typeface
- Inspired by ILovePDF, SmallPDF, and PDF.io

---

**Made with care for PDF lovers worldwide**
