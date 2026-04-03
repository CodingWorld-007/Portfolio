# Deploying to Vercel 🚀

## Quick Deploy (Recommended)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Legendary portfolio ready for deployment"
git remote add origin https://github.com/yourusername/portfolio-2026.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Import"**
5. Keep default settings (Vite will auto-detect)
6. Click **"Deploy"**
7. Wait ~3 minutes for deployment
8. Your portfolio is LIVE! 🎉

**Your URL**: `https://your-project-name.vercel.app`

## Environment Variables (Optional)

If using email or analytics:

1. In Vercel project settings
2. Go to **Settings → Environment Variables**
3. Add any sensitive keys (though not needed for EmailJS)
4. Redeploy

## Custom Domain (Optional)

1. In Vercel project
2. Go to **Settings → Domains**
3. Add your domain (e.g., amanjoshi.dev)
4. Follow DNS setup instructions
5. Wait for SSL certificate (~30 min)

## Post-Deployment Checklist

- ✅ Test contact form (should receive email)
- ✅ Check scroll animations on desktop
- ✅ Check mobile responsiveness
- ✅ Verify keyboard shortcuts (H/A/W/S/C)
- ✅ Test custom cursor
- ✅ Share on LinkedIn (should show OG preview)
- ✅ Check favicon in browser tab
- ✅ Test on different devices/browsers
- ✅ Submit to Google Search Console
- ✅ Add to your GitHub profile

## Performance Tips

### Image Optimization
- Keep hero images under 200KB
- Use WebP format if possible
- Vercel can auto-optimize images

### Vercel Analytics
- Already enabled in `index.html`
- View dashboard: Project → Analytics
- See visitor stats, page views, etc.

### Build Time
- Current build: ~30 seconds
- Next.js/SSG would be faster
- Current setup is optimal for SPA

## Troubleshooting

### Site not loading
- Check build logs in Vercel (Deployments tab)
- Verify all imports are correct
- Check console for errors (F12)

### Contact form not working
- Make sure EmailJS keys are set in Contact.jsx
- Check your email spam folder
- Verify EmailJS account is active

### Animations not smooth
- Usually browser cache issue
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser supports ES6+ features

### Custom domain not resolving
- DNS changes take up to 48 hours
- Check Vercel's DNS settings match your registrar

## Continuous Deployment

After setup:
- Every `git push` to `main` branch auto-deploys
- Build logs available in Vercel dashboard
- Rollback to previous versions anytime

## Analytics Setup

### Vercel Analytics (Built-in)
- Already active, no setup needed
- Vercel Dashboard → Analytics

### Google Analytics (Optional)
1. Create Google Analytics account
2. Get measurement ID
3. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

## Monitoring

### Uptime Monitoring
Vercel automatically monitors uptime. Your site only goes down during:
- Vercel platform issues (rare)
- Your account suspension (won't happen)

### Error Tracking
- Check Vercel logs: Project → Deployments → Logs
- Browser console for frontend errors
- EmailJS dashboard for email failures

## Scaling

Your portfolio on Vercel includes:
- ✅ Global CDN (fast worldwide)
- ✅ Automatic SSL/HTTPS
- ✅ 100% uptime guarantee
- ✅ Unlimited bandwidth
- ✅ Free tier (no credit card needed!)

Perfect for portfolio sites! 🚀

---

## Quick Commands

```bash
# Deploy immediately
git push origin main

# Preview build locally
npm run build
npm run preview

# Check build size
npm run build -- --report
```

---

**Questions?** Check [Vercel Docs](https://vercel.com/docs) or contact Vercel support!
