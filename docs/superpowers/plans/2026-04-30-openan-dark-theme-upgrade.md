# OpenAN Dark Theme UI Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade OpenAN website to dark theme matching LF Foundation style.

**Architecture:** CSS-only changes to color variables and component styles. No HTML/JS changes required.

**Tech Stack:** Vite 5.x, vanilla CSS

---

## File Structure

```
web/
├── src/styles.css    # All styles (modify)
├── index.html        # Homepage (unchanged)
├── events.html       # Events page (unchanged)
```

---

### Task 1: Update CSS Variables

**Files:**
- Modify: `src/styles.css:1-30`

- [ ] **Step 1: Update :root color variables**

Replace the color variables in `src/styles.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;
  --color-secondary: #0f172a;
  --color-accent: #10b981;
  --color-text: #f1f5f9;
  --color-text-light: #94a3b8;
  --color-bg: #0f172a;
  --color-bg-alt: #1e293b;
  --color-border: #334155;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --container-max: 1200px;
  --header-height: 72px;
}
```

- [ ] **Step 2: Commit color variables**

```bash
git add src/styles.css
git commit -m "style: update CSS variables for dark theme"
```

---

### Task 2: Update LF Banner and Navigation Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update LF banner styles**

Replace `.lf-banner` styles:

```css
.lf-banner {
  background: var(--color-secondary);
  padding: 8px 16px;
  text-align: center;
}

.lf-banner-img {
  height: 32px;
  width: auto;
}
```

- [ ] **Step 2: Update navbar styles**

Replace `.navbar` styles:

```css
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-text);
}

.logo svg {
  color: var(--color-primary);
}

.logo:hover {
  color: var(--color-text);
}

.logo:hover svg {
  color: var(--color-primary-light);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 8px;
}

.nav-links > li {
  position: relative;
}

.nav-link {
  display: block;
  padding: 8px 16px;
  color: var(--color-text-light);
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.1);
}

.btn-nav {
  padding: 10px 20px;
  background: var(--color-primary);
  color: white;
  border-radius: 6px;
  font-weight: 600;
}

.btn-nav:hover {
  background: var(--color-primary-light);
  color: white;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all 0.2s;
  padding: 8px 0;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.dropdown-menu a:hover {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.1);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

- [ ] **Step 3: Commit navigation styles**

```bash
git add src/styles.css
git commit -m "style: update navigation for dark theme"
```

---

### Task 3: Update Hero Section Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update hero styles**

Replace `.hero` and related styles:

```css
main {
  padding-top: 0;
}

.hero {
  padding: 100px 0 80px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-light);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: var(--color-bg-alt);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}

.hero-lfn-branding {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.lfn-logo {
  height: 40px;
  width: auto;
}

.hero-lfn-branding p {
  font-size: 1rem;
  color: var(--color-text-light);
}
```

- [ ] **Step 2: Commit hero styles**

```bash
git add src/styles.css
git commit -m "style: update hero section for dark theme with gradient"
```

---

### Task 4: Update Members Section Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update members styles**

Replace `.members` and related styles:

```css
.members {
  padding: 60px 0;
  background: var(--color-bg);
  text-align: center;
}

.members h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 32px;
}

.members-carousel {
  overflow: hidden;
  margin-bottom: 24px;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 48px;
  animation: scroll 20s linear infinite;
}

.carousel-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.member-logo {
  flex: 0 0 auto;
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s;
}

.member-logo:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
}

.member-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.members-action {
  margin-top: 24px;
}
```

- [ ] **Step 2: Commit members styles**

```bash
git add src/styles.css
git commit -m "style: update members section for dark theme"
```

---

### Task 5: Update Get Involved Section Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update get-involved styles**

Replace `.get-involved` and related styles:

```css
.get-involved {
  padding: 80px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
}

.get-involved h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 48px;
}

.involved-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.involved-card {
  padding: 32px;
  background: var(--color-bg-alt);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s;
}

.involved-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
}

.involved-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.involved-card p {
  color: var(--color-text-light);
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.link-arrow {
  font-weight: 600;
  color: var(--color-primary);
}

.link-arrow:hover {
  color: var(--color-primary-light);
}
```

- [ ] **Step 2: Commit get-involved styles**

```bash
git add src/styles.css
git commit -m "style: update get involved section for dark theme"
```

---

### Task 6: Update Events Page Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update events styles**

Replace events-related styles:

```css
.events-hero {
  padding: 60px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  text-align: center;
}

.events-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 16px;
}

.events-hero p {
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.events-list {
  padding: 60px 0;
  background: var(--color-bg);
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.event-card {
  padding: 28px;
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s;
}

.event-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
}

.event-date {
  display: inline-block;
  padding: 4px 12px;
  background: var(--color-primary);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 12px;
}

.event-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 8px;
}

.event-location {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.event-card p {
  color: var(--color-text-light);
  font-size: 0.95rem;
  margin-bottom: 16px;
}
```

- [ ] **Step 2: Commit events styles**

```bash
git add src/styles.css
git commit -m "style: update events page for dark theme"
```

---

### Task 7: Update Footer Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update footer styles**

Replace footer-related styles:

```css
footer {
  background: var(--color-bg);
  color: var(--color-text);
  padding: 48px 0 24px;
  border-top: 1px solid var(--color-border);
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-brand {
  flex: 1;
  min-width: 280px;
}

.footer-lfn-logo {
  height: 32px;
  width: auto;
  margin-bottom: 16px;
}

.footer-brand p {
  color: var(--color-text-light);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.footer-links-small {
  font-size: 0.8rem;
}

.footer-links-small a {
  color: var(--color-text-light);
}

.footer-links-small a:hover {
  color: var(--color-text);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}

.footer-col h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-col ul {
  list-style: none;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.footer-col a:hover {
  color: var(--color-primary);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  color: var(--color-text-light);
  transition: color 0.2s;
}

.footer-social a:hover {
  color: var(--color-primary);
}
```

- [ ] **Step 2: Commit footer styles**

```bash
git add src/styles.css
git commit -m "style: update footer for dark theme"
```

---

### Task 8: Update Responsive Styles

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Update responsive styles**

Replace `@media (max-width: 768px)` block:

```css
@media (max-width: 768px) {
  .lf-banner {
    padding: 6px 12px;
  }

  .lf-banner-img {
    height: 24px;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: calc(var(--header-height) + 40px);
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-bg);
    flex-direction: column;
    padding: 16px;
    border-top: 1px solid var(--color-border);
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    overflow-y: auto;
  }

  .nav-links.active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    padding-left: 16px;
    display: none;
    background: rgba(59, 130, 246, 0.1);
  }

  .dropdown.active .dropdown-menu {
    display: block;
  }

  .hero {
    padding: 60px 0 40px;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
    padding: 0 16px;
  }

  .hero-lfn-branding {
    flex-direction: column;
  }

  .lfn-logo {
    height: 32px;
  }

  .members-carousel {
    padding: 0 16px;
  }

  .member-logo {
    width: 100px;
    height: 50px;
  }

  .footer-container {
    flex-direction: column;
    gap: 32px;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 24px;
  }

  .footer-social {
    justify-content: center;
  }
}
```

- [ ] **Step 2: Commit responsive styles**

```bash
git add src/styles.css
git commit -m "style: update responsive styles for dark theme"
```

---

### Task 9: Build and Verify

**Files:**
- Verify all files

- [ ] **Step 1: Build production version**

Run: `npm run build`
Expected: dist folder created successfully

- [ ] **Step 2: Verify dark theme**

Check in browser:
- Background is dark blue-black (#0f172a)
- Text is white/light gray
- Navigation has dark transparent background
- Hero has gradient background
- Cards have dark background with light borders
- All pages (index, events) show dark theme

- [ ] **Step 3: Final commit**

```bash
git status
git commit -m "feat: complete dark theme UI upgrade"
```

---

## Self-Review Checklist

1. **Spec coverage:** All sections from spec implemented - CSS variables, navbar, hero, members, get-involved, events, footer, responsive.
2. **Placeholder scan:** No TBD/TODO. All CSS code provided.
3. **Type consistency:** CSS class names consistent with existing HTML.