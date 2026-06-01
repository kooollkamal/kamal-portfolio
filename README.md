# A B Kamal - Professional Portfolio

A modern, responsive, and secure one-page portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## 🎨 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Security First**: 
  - XSS Protection (using `textContent` instead of `innerHTML`)
  - Secure email/phone links (mailto: and tel: protocols)
  - No inline scripts
  - Accessibility features (WCAG 2.1 compliant)
- **Performance Optimized**:
  - Lazy loading for images
  - Minified assets (production ready)
  - CSS animations for smooth experience
  - Reduced motion support for accessibility
- **SEO Friendly**: Proper semantic HTML structure
- **No Dependencies**: Pure vanilla HTML, CSS, and JavaScript

## 📁 File Structure

```
├── index.html       # Main HTML file with semantic structure
├── styles.css       # Responsive styling with accessibility features
├── script.js        # Secure JavaScript with XSS protection
├── profile.jpg      # Profile picture (replace with your own)
└── README.md        # This file
```

## 🚀 Setup Instructions

### 1. Add Your Profile Image

- Replace `profile.jpg` with your actual profile picture
- Recommended dimensions: **350x350px** or square aspect ratio
- Supported formats: JPG, PNG, WebP
- Keep file size under 500KB for optimal performance

### 2. Customize Content

Edit `index.html` and update:
- Your name and title
- Social links (LinkedIn, GitHub, etc.)
- Skills and education details
- Contact information

### 3. Deploy on GitHub Pages

1. Go to your repository settings → Pages
2. Set source to `main` branch, `/root` folder
3. Your site will be live at: `https://username.github.io/repository-name`

## 🔒 Security Features Implemented

### XSS Protection ✅
- Uses `textContent` instead of `innerHTML` for dynamic content
- No eval() or unsafe functions
- All external links properly validated

### Privacy ✅
- Contact info uses secure protocols (mailto:, tel:)
- No third-party tracking
- No external API calls

### Accessibility ✅
- Keyboard navigation support
- WCAG 2.1 Level A compliant
- Focus states for all interactive elements
- Reduced motion support
- Semantic HTML structure
- Image lazy loading

## 🛠️ Development & Deployment

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

Your changes will automatically deploy to GitHub Pages!

## 📝 License

Free to use and customize for personal use.

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**