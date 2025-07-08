# Deployment Guide for Kaarthik's Portfolio

## 🚀 Vercel Deployment

### Quick Deploy

1. **Push to GitHub** (if not already done)
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository

### Automatic Configuration

The `vercel.json` file is already configured for:

- ✅ Static site generation
- ✅ Serverless API functions
- ✅ Proper routing for SPA
- ✅ Optimized build process

### Build Settings (Vercel Dashboard)

- **Framework Preset:** Vite
- **Build Command:** `npm run vercel-build`
- **Output Directory:** `dist/spa`
- **Install Command:** `npm install`

### Environment Variables (Optional)

If you add email functionality later:

```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

### Custom Domain (Optional)

1. Go to your project in Vercel
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration steps

## 🌟 Features Deployed

- ✨ Stunning animated portfolio
- 📱 Fully responsive design
- 🎨 GSAP animations
- 📞 WhatsApp integration
- 💼 Services with INR pricing
- 🎯 Professional contact forms

## 📝 Post-Deployment Checklist

- [ ] Test all pages and animations
- [ ] Verify WhatsApp links work
- [ ] Check contact form functionality
- [ ] Test responsive design on mobile
- [ ] Verify all navigation links
- [ ] Test service page interactions

Your portfolio is now live and ready to impress clients! 🚀
