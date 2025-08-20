# Chunxin Tang's Personal Website

A cozy, retro-style personal website with typing animations and vinyl player aesthetics. Built with HTML, CSS, and JavaScript.

## 🎵 Features

- **Typing Animations**: Retro typewriter-style text animations
- **Vinyl Player Design**: Animated vinyl disc and record player arm
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Elements**: Hover effects and animations throughout
- **Contact Form**: Functional contact form with validation
- **Loading Screen**: Beautiful loading animation with vinyl theme
- **Particle Effects**: Subtle ambient particle animations

## 📁 File Structure

```
Personal Web/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Prompt.ini          # Original project requirements
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:

- **Home section**: Update the main headline and subline
- **About section**: Modify your bio and interests
- **Projects section**: Add your actual projects
- **Blog section**: Add your blog posts
- **Contact section**: Update contact information

### Colors and Styling
The main color scheme is inspired by Taylor Swift's "Lover" album and defined in `styles.css`:
- Primary: `#ff69b4` (Lover Pink)
- Secondary: `#ff7f50` (Lover Coral)
- Accent: `#ffb3d9` (Lover Peach)
- Background: Soft pink gradient from `#ffeef8` to `#ffb3d9`

### Typography
The website uses two main fonts:
- **Special Elite**: For typewriter-style text (headlines, typing effects)
- **Inter**: For body text and general content

### Adding Your Photos
Replace the placeholder images in the Photos section:
1. Add your images to a folder (e.g., `images/`)
2. Update the `photo-frame` elements in `index.html`
3. Replace the gradient backgrounds with actual image URLs

### Customizing Projects
Update the project cards in the Projects section:
1. Modify project titles and descriptions
2. Change the icons (using Font Awesome classes)
3. Add links to your actual projects

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile navigation with hamburger menu
- Responsive grid layouts
- Optimized typography for different screen sizes
- Touch-friendly interactions

## 🎯 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🔧 Advanced Customization

### Adding Background Music
Uncomment the audio section in `script.js` and add your music file:
```javascript
const audio = new Audio('path-to-your-ambient-music.mp3');
```

### Modifying Animations
Adjust animation speeds and effects in `styles.css`:
- Typing speed: Modify the `animation` property in `.typing-text`
- Vinyl rotation: Change the `animation` duration in `.vinyl-disc`
- Particle effects: Adjust `particleCount` in `script.js`

### Adding More Sections
To add new sections:
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation menu
4. Add any JavaScript functionality in `script.js`

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)

### Netlify
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 📝 Content Guidelines

### Writing Style
- Keep text concise and engaging
- Use the typewriter aesthetic for headlines
- Maintain the cozy, retro vibe throughout

### Images
- Use high-quality images
- Optimize for web (compress if needed)
- Consider the retro aesthetic when choosing photos

### Projects
- Keep descriptions short and impactful
- Focus on the "what" and "why" of each project
- Include links to live demos or GitHub repositories

## 🛠️ Troubleshooting

### Typing Animation Not Working
- Check if JavaScript is enabled
- Ensure all files are in the same directory
- Check browser console for errors

### Mobile Menu Not Working
- Verify the hamburger menu JavaScript is loaded
- Check CSS for proper mobile styles
- Test on actual mobile device

### Images Not Loading
- Verify image paths are correct
- Check file permissions
- Ensure images are in the right format

## 🎨 Design Inspiration

This website draws inspiration from:
- Vintage typewriters and vinyl records
- Cozy coffee shop aesthetics
- Retro photography and Polaroid cameras
- Minimalist design principles

## 📞 Support

If you need help customizing your website:
1. Check this README first
2. Review the code comments
3. Test changes in a development environment
4. Use browser developer tools for debugging

## 🎵 Enjoy Your Website!

Your personal website is now ready! It captures the cozy, retro vibe you wanted with beautiful typing animations and a unique vinyl player aesthetic. Feel free to customize it further to make it truly yours.

---

*"Spinning ideas since 2000"* 🎵
