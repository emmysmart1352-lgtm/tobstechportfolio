# Tob's Tech — Portfolio Website

A fully animated, responsive portfolio for Toby (Tob's Tech) — plain HTML/CSS/JS, no build step, ready to deploy on Vercel.

## What's inside
```
tobstech/
├── index.html          Home
├── services.html        Services
├── shopify.html          Shopify
├── work.html            Portfolio
├── about.html            About
├── contact.html          Contact (working form via FormSubmit)
└── assets/
    ├── css/style.css     Design system + all styling/animations
    ├── js/main.js        Nav, scroll reveal, counters, typewriter, FAQ, etc.
    └── img/toby.png       Founder photo
```

## Features
- Dark glassmorphism theme with amber/violet glow, animated gradient background
- Animated hero with a typing "code window" and floating badges
- Scroll-triggered reveal animations on every section
- Animated number counters (stats, revenue metrics)
- Mobile slide-in nav, scroll progress bar, back-to-top button
- Working contact form (no backend needed — see note below)
- Fully responsive: desktop, tablet, mobile
- Respects `prefers-reduced-motion` for accessibility

## 1. Push to GitHub

```bash
cd tobstech
git init
git add .
git commit -m "Initial commit: Tob's Tech portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If you don't have a repo yet, create one at github.com/new first (don't initialize it with a README), then run the commands above.

## 2. Deploy on Vercel

1. Go to vercel.com and sign in (you can sign in with GitHub).
2. Click **Add New → Project**.
3. Select the GitHub repo you just pushed.
4. Framework Preset: choose **Other** (this is a static site — no build command or output directory needed).
5. Click **Deploy**. Vercel will give you a live `.vercel.app` URL within about a minute.

## 3. Connect your custom domain

1. In your Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `tobs-tech.online`) and click **Add**.
3. Vercel will show you DNS records to add. Go to your domain registrar (wherever you bought the domain) and either:
   - Point your **A record** to Vercel's IP, and **CNAME** for `www` to `cname.vercel-dns.com`, or
   - Change your **nameservers** to Vercel's, if you want Vercel to manage DNS entirely.
4. DNS changes can take a few minutes to a few hours to propagate. Vercel will show a green checkmark once it's verified and issues an SSL certificate automatically.

## Contact form note

The contact form posts to **FormSubmit** (formsubmit.co) — a free service that emails form submissions straight to `tobstech38@gmail.com` with no backend or database needed. 

**Important:** the first time someone submits the form, FormSubmit will send a one-time confirmation email to that address — click the activation link in it once, and every submission after that will land straight in the inbox.

## Making future edits

Since this is plain HTML/CSS/JS, you can edit any page directly — or come back to this chat (or a new one) and ask me to make changes. Every push to your `main` branch on GitHub will automatically redeploy on Vercel.
