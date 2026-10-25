# Woviq website

A dependency-free, static website for https://woviqai.com. HTML, CSS and vanilla JavaScript. The supplied CNAME contains `woviqai.com` and is preserved byte for byte. Upload instructions are in START-HERE.txt.

## What changed

- Dark navy design with cyan, blue and violet branding; responsive layouts and reduced-motion support.
- Interactive capability tabs with keyboard navigation; clickable hero service nodes; a scripted chatbot concept.
- Eight separate service pages with distinct content, practical scope limits, four FAQs each and related links.
- Homepage, About, Contact, Privacy and branded 404. Both founder portraits are included as optimised WebP assets.
- Enquiry builder validates required fields, previews a message and opens the correct international WhatsApp URL. Editing the form invalidates an old draft. It does not claim a message was submitted.
- Unique metadata, canonical URLs, social cards, favicon set, manifest, sitemap, robots.txt, llms.txt and security.txt.
- Organization and WebSite schema; Person schema on About; Service and visible BreadcrumbList schema on service pages. No fabricated address, reviews, performance statistics, awards or affiliations.
- No third-party script, tracking SDK, remote font or runtime dependency. Analytics hooks dispatch local events only.

The original supplied JPEG logo remains intact in images/logo.jpg and logo.jpg. The navigation uses a lightweight flat vector interpretation of its emblem and wordmark in images/woviq-logo.svg for small-size legibility. Replace that SVG with an official vector asset if one is available. The original founder images remain intact; displayed portraits use optimised copies. Ahmad.png is used for Kanwar Ahmad Iqbal, not Abdullah Khan.

## Page and keyword map

| URL | Primary topic |
| --- | --- |
| / | AI automation and digital solutions company Lahore |
| /services/business-websites/ | Business website development Lahore |
| /services/ecommerce-online-ordering/ | Shopify development and online ordering |
| /services/web-applications/ | Custom web application development |
| /services/business-platforms/ | Multi-branch business software |
| /services/dashboards-analytics/ | Custom dashboard development |
| /services/pos-systems/ | POS software development |
| /services/ai-chatbots/ | WhatsApp chatbot development Pakistan |
| /services/business-automation/ | Business process automation |
| /about/ | Woviq leadership and company information |
| /contact/ | Woviq project enquiries |
| /privacy/ | Website privacy and enquiry handling |

404.html is noindex and excluded from the sitemap. Twelve indexable URLs are listed. No unfinished blog pages or location doorway pages are published. Blog work remains a later phase: publish an original, complete article before adding a blog index, navigation or sitemap entries.

## Search and AI discovery

Search foundations are implemented, not a promise of rankings, traffic, rich results, customers or AI citations. Visible service answers and FAQs help people understand each offer. JSON-LD reflects visible content. llms.txt is an optional discovery aid, not a confirmed ranking factor or inclusion mechanism.

Official references reviewed on 25 October 2026:

- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google, generative AI optimisation guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, structured data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google, Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Perplexity crawler documentation: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Anthropic crawler documentation: https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Google crawler controls: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers

robots.txt follows the supplied allow-all preference. Search and training are separate controls:

| Token | Purpose | Current choice |
| --- | --- | --- |
| OAI-SearchBot | ChatGPT search discovery | Allow |
| ChatGPT-User | Certain user-initiated page retrievals; robots rules may not apply | Allow |
| GPTBot | Content potentially used in OpenAI model training | Allow, separately configurable |
| PerplexityBot | Perplexity search discovery, not foundation-model training | Allow |
| Perplexity-User | User-requested retrieval | Allow |
| Claude-SearchBot | Claude search indexing | Allow |
| Claude-User | User-requested retrieval | Allow |
| ClaudeBot | Content potentially used in Anthropic model training | Allow |
| Google-Extended | Controls certain Gemini training/grounding uses; not Google Search ranking | Allow |
| * | Other crawlers that honour robots.txt | Allow |

To opt out of training while retaining search access, change only the relevant training groups, for example GPTBot and ClaudeBot, to `Disallow: /`. Robots directives are not access control and do not guarantee compliance by every requester. Do not put private information in a public repository.

## Owner setup after uploading

1. Verify GitHub Pages uses the intended branch and root folder, custom domain and Enforce HTTPS. Keep apex as the canonical host. Check the www-to-apex redirect and DNS for dangling records.
2. Add woviqai.com as a Google Search Console domain property using the actual DNS verification value issued to you. Submit https://woviqai.com/sitemap.xml. Inspect the homepage and representative service URLs. No verification token was invented or installed.
3. Verify ownership in Bing Webmaster Tools using the token it provides; submit the same sitemap. A verified Search Console property can also be used if Bing offers import.
4. Run the Rich Results Test and Schema.org validator on production URLs. Not every schema type produces a Google rich result. Visible FAQ content has no promised FAQ rich-result eligibility.
5. Run PageSpeed Insights on the homepage, Contact and two service pages. Inspect real mobile performance after launch; targets are LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms. No Lighthouse score is claimed.
6. Test an actual WhatsApp message from a phone. QA verified the encoded draft link without sending a message. Confirm inbound receipt yourself.
7. Enable repository secret scanning/push protection and relevant dependency alerts where available. Protect main according to your collaboration workflow.

## Privacy and analytics

The form is local until the visitor opens the WhatsApp link. Its message appears in the URL sent to WhatsApp and may appear in browser history. Woviq receives it only after the visitor presses Send. There is no form-processing backend or success claim. Budget options are customer-selected ranges, not Woviq prices.

No analytics provider is active. For optional cookieless analytics, choose Cloudflare Web Analytics or GoatCounter, review its data handling and update Privacy before enabling it. Add only the real provider configuration and adjust the CSP to permit its specific script and collection host. Do not insert a fake token.

`script.js` emits a `woviq:interaction` CustomEvent with only `detail.name`: whatsapp_click, email_click, main_cta_click and form_start. A future adapter may listen to these; no form values are in event payloads. A click is not a verified enquiry submission. Sending/receiving a WhatsApp message is outside this static website's visibility.

## Security and maintenance

- The source ZIP contains no Git history; historical secret scanning was not possible. The local pattern scan found no likely credentials in the reviewed text files; this is not proof that credentials never existed. Audit the actual repository history separately without printing secret values. If anything is exposed, rotate it before considering history cleanup.
- Existing caesar_cipher.py, password_checker.py and phishing_analysis.md are retained unchanged, as are duplicate original portraits and logos. They are unlinked from the website. The earlier instruction required an owner backup before cleanup; no backup confirmation was received. Do not delete them until that condition is met.
- CSP is provided by a meta tag: scripts/styles/images/fonts are restricted to same-origin, inline executable code is blocked, connections and native form submission are blocked, and no object/base injection is allowed. Each page's JSON-LD has a matching SHA-256 allowance. Do not add inline handlers or styles.
- Meta CSP cannot enforce frame-ancestors and does not replace server headers. GitHub Pages does not offer repository-controlled arbitrary HTTP response headers. HSTS, X-Content-Type-Options, Permissions-Policy and frame protection need a hosting/proxy configuration that supports them. Referrer policy is set through a supported meta tag. No claim is made about the current live response headers.
- A Cloudflare proxy or a host supporting response-header configuration is a later option. A Cloudflare Pages `_headers` file does not configure GitHub Pages.
- When editing a JSON-LD script, recalculate its CSP SHA-256 allowance from the exact UTF-8 script text. The browser console will show policy violations if the hash becomes stale. The JSON must match visible content.
- Review security.txt before its expiry, 1 October 2027. Contact is hello@woviqai.com.
- The server must serve real directory index files for clean URLs and return the branded 404 page for missing paths. GitHub Pages supports those conventions. The site assumes deployment at the root of the custom domain, not a GitHub project subpath.

## Launch checklist

- [x] CNAME contents preserved and canonical host consistent.
- [x] Local link, fragment, metadata, JSON and CSP hash checks completed.
- [x] Required form labels and keyboard interactions checked.
- [x] Concept examples and sample data labelled honestly.
- [x] No external executable dependencies or embedded credentials found by local scan.
- [ ] Owner backup confirmed before removing unrelated original files.
- [ ] Actual Git history reviewed for exposed secrets.
- [ ] HTTPS, DNS, www redirect and GitHub account settings checked.
- [ ] Live clean URLs, custom 404, robots and sitemap verified after deployment.
- [ ] Actual WhatsApp delivery confirmed by owner.
- [ ] Search Console and Bing ownership verification completed.
- [ ] Production performance and external schema validation completed.

See QA-REPORT.md for what was actually run. This deliverable was not pushed to GitHub or deployed.
