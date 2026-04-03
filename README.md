# Aman Joshi - Premium AI/ML Portfolio 2026

A sophisticated, professionally crafted portfolio website showcasing AI/ML expertise, patents, projects, and achievements. Built with React 18, Framer Motion, and Tailwind CSS for premium animations and responsive design.

## 🎯 Features

### Core Sections
- **Hero**: Scroll parallax background, animated statistics, and primary CTA
- **About**: Interactive timeline, circular animated profile photo, background animations
- **Work**: Intelligent filtering system (All/Products/Patents/Systems/Education) with impact metrics
- **Skills**: Animated skill cards with proficiency visualization and years of experience
- **Contact**: Real-time form validation with animated feedback and social links
- **Footer**: 3-column layout with animated icons and quick navigation

### Premium Enhancements ✨
✨ **Custom Animated Cursor** - Spring-physics cursor with interactive element detection
✨ **Scroll Progress Indicator** - Smooth gradient progress bar tracking page scroll
✨ **Keyboard Navigation** - Full keyboard support (H/A/W/S/C for sections, Arrow keys, Cmd+K)
✨ **Enhanced Form Validation** - Real-time validation with animated error states and success feedback
✨ **Mobile Optimization** - Responsive design with reduced motion on mobile, touch-friendly elements
✨ **Accessibility Features** - Focus states, ARIA labels, high contrast support, reduced motion support

## 🚀 Technology Stack

- **React 18** - UI framework with hooks and state management
- **Framer Motion 10.16.4** - GPU-accelerated animations with spring physics
- **Tailwind CSS 3.3.1** - Utility-first styling with dark theme
- **Vite 4.5.14** - Next-generation build tool with instant HMR
- **React Icons** - Premium icon library

## 📋 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amanjoshi/portfolio-2026.git
   cd portfolio-2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5175` with hot-reload enabled.

### Project Structure
```
src/
├── components/
│   ├── Header.jsx              # Fixed navigation bar
│   ├── Hero.jsx                # Full-screen hero with parallax
│   ├── About.jsx               # Interactive timeline & profile
│   ├── Work.jsx                # Project showcase with filtering
│   ├── Skills.jsx              # Technical skills visualization
│   ├── Contact.jsx             # Contact form & social links
│   ├── Footer.jsx              # Footer with quick navigation
│   ├── CustomCursor.jsx        # Animated cursor component
│   ├── ScrollProgressIndicator.jsx  # Scroll progress bar
│   ├── KeyboardNavigation.jsx  # Keyboard shortcuts handler
│   ├── AccessibilityEnhancer.jsx   # Accessibility features
│   └── ResponsiveOptimizer.jsx # Mobile optimization
├── hooks/
│   └── useFormValidation.js    # Form validation hook
├── App.jsx                     # Main app component
├── index.css                   # Global styles + animations
└── main.jsx                    # Entry point

public/
└── new.png                     # Circular profile photo
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `H` | Jump to Hero section |
| `A` | Jump to About section |
| `W` | Jump to Work section |
| `S` | Jump to Skills section |
| `C` | Jump to Contact section |
| `↑/↓` | Navigate between sections |
| `Home` | Jump to top |
| `End` | Jump to bottom |
| `Cmd+K` or `/` | Show navigation menu |

## 🎨 Design Philosophy

- **Premium Minimalist**: Pure black (#0a0a0a) with white/gray accents only
- **Purpose-Driven Animations**: Every animation serves a purpose, no disco effects
- **Spring Physics**: Natural, organic motion with proper damping and stiffness
- **Accessibility First**: Full keyboard support, focus states, reduced motion support
- **Mobile-First**: Responsive design optimized for all screen sizes

## ✨ Animation Patterns

### Scroll Parallax
```jsx
// Elements move at different speeds based on scroll position
y: scrollY * 0.5
```

### Spring Physics
```jsx
transition={{
  type: 'spring',
  stiffness: 60,
  damping: 15,
  mass: 0.5,
}}
```

### Shimmer Effects
```jsx
// Gradient sweep animation for premium glow
background: linear-gradient(...)
animation: moveGradient 8s ease infinite
```

### Staggered Animations
```jsx
// Children reveal in sequence
staggerChildren: 0.1,
delayChildren: 0.2,
```

## 📱 Responsive Breakpoints

- **Mobile** (< 768px): Single column, reduced animations, touch-optimized
- **Tablet** (768px - 1024px): 2-column layouts, optimized spacing
- **Desktop** (1024px+): Full animations, 3-column layouts
- **Large Display** (1920px+): Enhanced spacing and typography

## ♿ Accessibility Features

- ✅ Full keyboard navigation (Tab, Arrow keys, Enter)
- ✅ Focus visible states with clear indicators
- ✅ High contrast mode support
- ✅ Reduced motion support (respects `prefers-reduced-motion`)
- ✅ Semantic HTML structure
- ✅ ARIA labels and descriptions
- ✅ Skip navigation links
- ✅ Touch device optimizations

## 🔧 Customization

### Update Personal Information
Edit the data in each component to reflect your information:
- `About.jsx` - Timeline events, skills, bio
- `Work.jsx` - Projects and achievements
- `Contact.jsx` - Email and social links
- `Footer.jsx` - Footer links and info

### Color Scheme
Primary theme colors are defined in the CSS:
- Background: `#0a0a0a` (pure black)
- Text: White and gray shades
- Accents: Subtle gradients in animations

Modify these in `src/index.css` and Tailwind config.

### Animations
- Stiffness/damping values in Framer Motion props
- Animation durations in `index.css` keyframes
- Parallax effect multiplier in component `scroll` calculations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-2026",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit https://vercel.com/new
   - Select your GitHub repository
   - Deploy with one click

### Deploy to Netlify

1. **Connect GitHub**
   - Visit https://app.netlify.com
   - Select your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 📊 Performance Optimizations

- **Lazy Loading**: Images and sections load on demand
- **Code Splitting**: React components split for optimal bundle size
- **Animation Throttling**: GPU-accelerated animations via Framer Motion
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Responsive Images**: Optimized sizing for different devices
- **Reduced Motion**: Automatically respects user preferences

## 🔍 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## 📝 License

This portfolio is open source and available under the MIT License. Feel free to fork and customize for your own use.

## 🤝 Contributing

If you'd like to contribute improvements, please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Aman Joshi**
- Email: amanjoshi9891@gmail.com
- LinkedIn: [@amanajoshi](https://linkedin.com/in/amanajoshi)
- GitHub: [@amanjoshi](https://github.com/amanjoshi)

## 🎓 Learning Resources

### Animation Concepts
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Spring Physics in UI](https://popmotion.io/guides/basics/)
- [CSS Animation Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### React Best Practices
- [React Official Documentation](https://react.dev)
- [Hooks Guide](https://react.dev/reference/react)

### Accessibility
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Accessible Rich Internet Applications (ARIA)](https://www.w3.org/WAI/ARIA/apg/)

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Built with [Vite](https://vitejs.dev)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Last Updated**: 2026
**Version**: 2.0 (Premium Edition with Advanced Features)

Made with ❤️ by Aman Joshi
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd e:\Portfolio_2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - You'll see the portfolio in action!

## 🎨 Customization

### Update Personal Information
Edit the following components to add your information:

- **Hero.jsx** - Main heading and tagline
- **About.jsx** - Your bio and highlights
- **Projects.jsx** - Add your projects with links
- **Skills.jsx** - Your technical skills
- **Contact.jsx** - Your contact information
- **Footer.jsx** - Social links and details

### Customize Colors
Edit `tailwind.config.js` to change the neon colors:

```js
neon: {
  blue: '#00d9ff',      // Change cyan
  purple: '#b837f1',    // Change purple
  pink: '#ff006e',      // Change pink
  green: '#00ff41',     // Change green
}
```

### Add Your Projects
In `Projects.jsx`, update the projects array with your work:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    image: '🎨',
    tech: ['Tech1', 'Tech2'],
    href: 'https://your-project.com',
    github: 'https://github.com/...',
  },
  // ... more projects
]
```

## 📦 Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   The `dist/` folder contains optimized production files ready to deploy anywhere:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Push to GitHub
3. Enable GitHub Pages in settings

## 📊 Performance Optimization

- **Code Splitting** - Lazy load components
- **Image Optimization** - Use emojis instead of heavy images
- **CSS Purging** - Only ship used styles
- **Tree Shaking** - Remove unused code
- **Minification** - Automatic with Vite

### Lighthouse Score Target
- 🟢 Performance: 95+
- 🟢 Accessibility: 98+
- 🟢 Best Practices: 98+
- 🟢 SEO: 100

## 🔧 Advanced Configuration

### Add Google Analytics
Add to `index.html` inside `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Add Contact Form Backend
Replace the form submission in `Contact.jsx` with your backend API:
```jsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📝 SEO Best Practices

- Meta description in `index.html` ✓
- Open Graph tags ready to add
- Sitemap generation (add later if needed)
- Structured data schema (add if needed)
- Fast performance (core web vitals)

## 🐛 Troubleshooting

### Animations are laggy
- Check browser hardware acceleration is enabled
- Reduce the number of simultaneous animations
- Check for JavaScript errors in console

### Build fails
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)

## 📄 License

This portfolio is your personal project. Feel free to customize and use it.

## 🤝 Support

For issues or questions, check the component files or refer to the documentation links above.

---

**Built with 💜 and React** | **2026 Edition**

Let's build something extraordinary! 🚀✨
