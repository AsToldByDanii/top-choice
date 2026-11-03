# Top Choice Companies, Inc. — GitHub Pages website

A complete responsive static website built with HTML, CSS and JavaScript. No build step, npm install, paid theme, or framework required.

## Files
- `index.html`: homepage
- `about.html`, `services.html`, `industries.html`, `companies.html`, `quote.html`, `contact.html`: primary pages
- `legal-administration.html`, `corporate-document-services.html`, `compliance-workforce.html`, `back-office.html`: detailed service pages
- `privacy.html`, `terms.html`: **draft legal disclosures requiring review**
- `css/styles.css`: colors, typography, responsive design
- `js/site.js`: shared navigation, footer, page content and inquiry forms
- `js/chat-config.js`: optional live chat embed location
- `assets/logo-original.png`: user-provided original Top Choice logo
- `CNAME`, `robots.txt`, `sitemap.xml`: domain and search setup

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a **public** GitHub repository (e.g. `top-choice-website`).
2. Upload **the contents of this folder** to the repository root (not a nested folder).
3. Open repository Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
4. Verify the temporary `https://YOUR-USERNAME.github.io/top-choice-website/` URL. Note: links in this website are root-folder-relative and will work on the custom domain; test on the temporary project URL before connecting the domain.
5. In Settings → Pages, enter custom domain `topchoicecompanies.com` and save. `CNAME` is already included.
6. At your DNS host, set apex A records for GitHub Pages to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Remove conflicting apex A/AAAA records. Optionally set `www` CNAME to `YOUR-USERNAME.github.io` (replace username). Confirm the current GitHub Pages instructions before changing live DNS. Enable **Enforce HTTPS** when available.
7. Ensure the domain's existing email MX, SPF, DKIM, and DMARC records remain intact. **Do not replace email DNS records when changing website hosting.**

## Form delivery — ACTION REQUIRED
Forms are configured to POST to `https://formsubmit.co/support@topchoicecompanies.com` (FormSubmit third-party service). This is not a private backend. Before production use:
1. Ensure the mailbox is active and can receive messages.
2. Submit a **non-sensitive test inquiry** from the deployed site.
3. Look for a FormSubmit activation/verification email in the support mailbox; follow its activation instructions.
4. Test another submission to confirm delivery, including spam folder.
5. Review FormSubmit's current terms, privacy, anti-spam features, and suitability before using it with real customer information. For a more controlled solution, replace with an approved form provider/backend.
6. The website deliberately warns visitors **not** to send sensitive legal, identity, or personnel records through public forms.

## Free live chat — ACTION REQUIRED
No live chat provider is installed or active by default. Recommended: create a free Tawk.to account, create a property for `topchoicecompanies.com`, and paste the provided embed script into `js/chat-config.js`. Configure operator notifications, privacy disclosures, business hours, and test on mobile. **Never commit account passwords or private API keys.** Free plan details may change.

## Content and launch checklist
- Confirm the full address (city, state, ZIP). The website intentionally says those details are pending; do not publish this placeholder if it would confuse clients.
- Confirm Toon Truck & Trailer Repair's parent/subsidiary relationship and approve the description.
- Obtain owner approval of all service offerings, including registered agent, apostille/embassy, legal support, DOT, I-9, and proctoring. Confirm any required professional supervision, authorization, jurisdictional limitations, and data-handling practices.
- Review and replace the draft privacy policy and terms with legally reviewed versions reflecting actual practices and vendors.
- Test forms and chat on mobile and desktop.
- The site uses remote Google Fonts and Unsplash images; check licensing, privacy and performance requirements. For production reliability, consider hosting approved images locally.
- Confirm `support@topchoicecompanies.com`, phone number, business hours and domain before publishing.
- Verify that the original logo is approved for web use. Its white background is displayed as provided.
- Optionally add an analytics provider after updating the privacy disclosures.

## Customization
Edit `:root` in `css/styles.css` for colors. Edit the service content and shared page sections in `js/site.js`. The site intentionally does not invent customer testimonials, certifications, founding dates, business registration details, or performance metrics.

## Important
The design and static pages are complete. Form email delivery and live chat require the external activation steps above; a zip file alone cannot configure those third-party accounts. The domain is not automatically published by receiving these files.


## November 2026 content update
- Address: 1550 Matassino Rd, New Castle, DE 19720
- Service cards and industry tiles now use professional photographic images instead of icons.
- Toon Truck & Trailer Repair uses the provided emblem stored at `assets/toon-truck-trailer-repair.png`.
- Homepage includes an Our Companies feature.
- All page content is stored directly in HTML and can be edited on GitHub.
- Photography currently uses external Unsplash URLs and requires internet access. Replace image URLs with locally hosted licensed assets if desired.
- Contact forms and chat still require activation and testing.
