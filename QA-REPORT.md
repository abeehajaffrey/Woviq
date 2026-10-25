# Woviq rebuild — verification record

Checked 25 October 2026. Source: uploaded Woviq-main(1).zip, index(1).html, Pasted text(2).txt and Ahmad.png, plus the prior repository audit context.

## Completed and verified locally

| Check | Result |
| --- | --- |
| JavaScript syntax | `node --check script.js` passed |
| HTML page inventory | 13 HTML pages: home, 8 services, About, Contact, Privacy, 404 |
| Indexable sitemap | 12 canonical URLs; 404 excluded |
| Local link/asset references | 461 checked; zero missing targets |
| Fragment references | 71 checked; zero missing target IDs |
| Unique titles/descriptions | All unique; titles below 60 characters, descriptions below 160 |
| Main headings | Exactly one H1 on every page |
| IDs and form labels | No duplicate IDs; every label points to an existing control |
| JSON-LD | Parsed on all pages; exact script content matches each CSP hash |
| Inline handlers/styles | None found |
| External blank-target links | All include noopener noreferrer |
| Required image metadata | Alt, width and height present |
| Credential pattern scan | No likely matches; values were not printed |
| Original protected files | CNAME, unrelated project files and legacy JPEGs preserved byte for byte |

The HTML checks use a local parser and focused assertions. They are not an external W3C validation claim. The credential scan used common private-key, GitHub-token, AWS-access-key, OpenAI-key and assigned-secret patterns; it is not a complete security audit.

## Browser checks completed

- Desktop homepage inspected visually in Chrome at a 1363 × 936 viewport; no horizontal page overflow.
- Homepage rendered in frames with outer widths 320, 375, 768, 1024 and 1440 pixels. The browser's classic scrollbar consumed 15 pixels in each frame; no horizontal overflow at content widths 305, 360, 753, 1009 and 1425 pixels.
- All 12 additional pages rendered at exactly 320 pixels of available content width; none overflowed horizontally.
- Capability tabs changed the displayed panel. Arrow-key movement selected the next capability.
- Scripted concept questions changed the displayed response.
- Mobile Menu updated aria-expanded on opening and closed with Escape.
- Form produced the correct `https://wa.me/923015219002?text=...` draft, including encoded line breaks and test values. Status text clearly required a later Send action in WhatsApp.
- Editing a field hid the old draft so outdated text could not be sent accidentally.
- Chatbot service FAQ expanded and showed the expected answer.
- Both founder portraits loaded with correct identity labels on About.
- Contact layout and a representative service page inspected visually on desktop.
- No Woviq-origin script or CSP error was observed in the reviewed browser logs. The browser extension emitted its own metadata errors; these are outside the website's source.

One label conflict found during QA was fixed: the contact field originally shared an ID with the contact section. It now has its own `reply-contact` ID. The full static check was rerun after the fix.

## Implemented, not externally verified

Metadata, canonical tags, responsive styling, structured data, robots directives, optional llms.txt, accessible focus/reduced-motion styles, optimised portraits, CSP meta policies and privacy copy.

Production Lighthouse, field Core Web Vitals, assistive-technology testing, comprehensive computed-colour contrast testing, W3C HTML validation, Google Rich Results Test, Schema.org validator and real-device tests were not run. No score or full WCAG conformance is claimed.

## Awaiting owner input / account access

- Owner deployment to GitHub Pages and live URL/404/header verification.
- Actual receipt of an enquiry sent through WhatsApp.
- DNS, HTTPS, repository protection and security account settings.
- Search Console/Bing verification values and submission.
- Actual repository history, which is absent from the supplied ZIP.
- Backup confirmation before any unrelated-file cleanup.
- Official vector logo, if exact small-size vector reproduction is desired. Original supplied logo is retained.
- Any approved real client case studies; none were invented.

No messages were sent, no files were deleted from the existing repository and no production deployment was performed.
