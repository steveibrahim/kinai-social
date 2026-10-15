# GitHub Pages Deployment for Landing

1. In repo Settings → Pages → Source: Deploy from branch `main` / root or `/docs` if preferred.
2. Custom domain is set via the CNAME file (kinaisocial.com).
3. Configure DNS at your registrar:
   - Apex (kinaisocial.com): A records to GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - www: CNAME to steveibrahim.github.io
4. Wait for DNS propagation and HTTPS provisioning.
5. Replace YOUR_FORM_ID in kinaisocial-landing.html with a real Formspree ID.

Landing is ready for immediate deployment.