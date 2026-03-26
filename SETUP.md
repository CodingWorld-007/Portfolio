# Portfolio Setup Guide 🚀

## Quick Start (5 minutes)

### Step 1: Install Dependencies
```powershell
cd e:\Portfolio_2026
npm install
```

### Step 2: Start Development Server
```powershell
npm run dev
```

### Step 3: Open in Browser
Click the link shown in the terminal (usually `http://localhost:5173`)

---

## What You Have

A **fully functional, production-ready portfolio** with:

✅ **Stunning Design**
- Dark theme with neon accents (blue, purple, pink, green)
- Glassmorphism and gradient effects
- Smooth animations throughout

✅ **All Essential Sections**
- Hero with CTA buttons
- About with highlights
- Project showcase (6 example projects)
- Technical skills with proficiency bars
- Contact form
- Footer with social links

✅ **Performance Optimized**
- Vite for fast builds
- Code splitting ready
- Lazy loading animations
- Minified production builds

✅ **Mobile Responsive**
- Works perfectly on phones, tablets, desktops
- Touch-friendly interactive elements
- Responsive grid layouts

---

## Customization Checklist

### [ ] 1. Personal Information

**Edit: `src/components/Hero.jsx`**
- Change "Build Systems With Uniqueness" to your tagline
- Update the description paragraph
- Change social links

**Edit: `src/components/About.jsx`**
- Update the bio text
- Change the 5+ years experience section
- Update highlights list

**Edit: `src/components/Contact.jsx`**
- Replace example email with yours
- Update phone number
- Add real social links

### [ ] 2. Add Your Projects

**Edit: `src/components/Projects.jsx`**

Replace the example projects array with your actual projects. Template:
```jsx
{
  id: 1,
  title: 'Your Project Name',
  description: 'What does it do?',
  image: '🎨', // Change emoji
  tech: ['Tech1', 'Tech2', 'Tech3'],
  color: 'from-neon-blue', // from-neon-blue, from-neon-purple, etc.
  href: 'https://your-project.com',
  github: 'https://github.com/your/repo',
}
```

### [ ] 3. Update Skills

**Edit: `src/components/Skills.jsx`**
- Update skill names in `skillCategories`
- Update proficiency percentages in the bars section
- Change icons if desired

### [ ] 4. Customize Colors

**Edit: `tailwind.config.js`**

Some color options:
```js
neon: {
  blue: '#00d9ff',        // Cyan
  purple: '#b837f1',      // Purple
  pink: '#ff006e',        // Hot pink
  green: '#00ff41',       // Lime
  // Add more custom colors
}
```

### [ ] 5. Meta Tags & SEO

**Edit: `index.html`**
- Change title: `<title>Your Name - Your Title</title>`
- Update description meta tag
- Add your name to keywords

---

## Development Tips

### Hot Reload
Changes auto-refresh during `npm run dev` - just save files!

### Browser DevTools
- Press `F12` to open developer tools
- Check Console for any errors
- Test responsiveness with device emulation

### Performance
- No build optimization needed during dev
- Production build automatically optimizes everything

---

## Deployment

### Option 1: Vercel (Recommended)
```powershell
npm install -g vercel
vercel
```
Follow the prompts - it will auto-detect your project!

### Option 2: Netlify
```powershell
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
1. Push to GitHub repo
2. Settings → Pages → Deploy from GitHub Actions
3. Select `dist` folder

---

## Common Tasks

### Change Animation Speed
In any component using `transition`:
```jsx
transition={{ duration: 2 }} // Increase for slower
```

### Add New Section
1. Create `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add section ID in the JSX

### Disable Animations for Performance
In `tailwind.config.js`, disable:
```js
animation: {} // Empty object
```

### Change Font
In `src/index.css`, modify font-family:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## Production Build

```powershell
npm run build
```

Creates optimized files in `dist/` folder:
- HTML minified
- CSS purged & minified
- JS bundled & compressed
- Images optimized
- Ready to deploy anywhere!

---

## Troubleshooting

### Port 5173 in use?
```powershell
npm run dev -- --port 3000
```

### Styles not loading?
```powershell
rm -r node_modules
npm install
npm run dev
```

### Animations stuttering?
- Check browser performance in DevTools
- Reduce particle effects
- Use `will-change: auto` judiciously

---

## Next Steps

1. ✅ Install & run locally
2. ✅ Customize with your info
3. ✅ Add your projects
4. ✅ Test on mobile
5. ✅ Build & deploy
6. ✅ Share with the world!

---

**You're all set!** 🎉

Your portfolio is ready to impress. Make it uniquely yours and launch it! 🚀

Questions? Check README.md for more details.
