# OpenAN Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign A2A-T website as OpenAN, an LFN sub-project, following Nephio/Anuket visual style.

**Architecture:** Static website with Vite build system. Homepage with LF branding, member carousel, get-involved section. Events page with card list. Pure CSS + vanilla JS.

**Tech Stack:** Vite 5.x, vanilla HTML/CSS/JS

---

## File Structure

```
web/
├── index.html          # Homepage (modify)
├── events.html         # Events page (create)
├── src/
│   ├── styles.css      # All styles (modify)
│   └── main.js         # Navigation + carousel JS (modify)
├── public/             # Static assets (exists)
└── vite.config.js      # Build config (unchanged)
```

---

### Task 1: LF Projects Banner and Navigation

**Files:**
- Modify: `index.html:1-50`

- [ ] **Step 1: Add LF Projects banner at top of body**

Replace the opening `<body>` section with LF banner:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenAN - Open Autonomous Network</title>
  <link rel="stylesheet" href="./src/styles.css">
</head>
<body>
  <div class="lf-banner">
    <a href="https://www.linuxfoundation.org/projects" target="_blank" rel="noopener">
      <img src="https://nephio.org/wp-content/uploads/banners/lfprojects_banner_other.svg" alt="The Linux Foundation Projects" class="lf-banner-img">
    </a>
  </div>
```

- [ ] **Step 2: Update navigation structure**

Replace the navbar section with new OpenAN navigation:

```html
  <nav class="navbar">
    <div class="container nav-container">
      <a href="#" class="logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2"/>
          <path d="M8 16h16M16 8v16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>OpenAN</span>
      </a>
      <button class="mobile-toggle" id="mobileToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li class="dropdown">
          <a href="#about" class="nav-link">About</a>
          <div class="dropdown-menu">
            <a href="#about-openan">About OpenAN</a>
            <a href="#charter">Charter</a>
            <a href="#contact">Contact</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="#resources" class="nav-link">Resources</a>
          <div class="dropdown-menu">
            <a href="https://wiki.openan.io" target="_blank">Wiki</a>
          </div>
        </li>
        <li><a href="#use-cases" class="nav-link">Use Cases</a></li>
        <li class="dropdown">
          <a href="#news" class="nav-link">News</a>
          <div class="dropdown-menu">
            <a href="#announcements">Announcements</a>
            <a href="#blog">Blog</a>
            <a href="events.html">Events</a>
          </div>
        </li>
        <li><a href="https://www.lfnetworking.org/membership/join/" class="btn btn-nav" target="_blank">Join</a></li>
      </ul>
    </div>
  </nav>
```

- [ ] **Step 3: Commit navigation changes**

```bash
git add index.html
git commit -m "feat: add LF banner and update navigation structure"
```

---

### Task 2: Hero Section and LF Networking Branding

**Files:**
- Modify: `index.html:main section`

- [ ] **Step 1: Replace hero section**

Replace the existing `<section class="hero">` with new OpenAN hero:

```html
  <main>
    <section class="hero">
      <div class="container">
        <h1>OpenAN</h1>
        <p class="hero-description">OpenAN is a suite of open-source projects for autonomous networks. It supports the development and deployment of telecom agents, enabling multi-vendor, cross-layer, and cross-domain integration, and accelerating the evolution of autonomous network towards L4-L5.</p>
        <div class="hero-buttons">
          <a href="#get-started" class="btn btn-primary">Get Started</a>
          <a href="#spec" class="btn btn-secondary">View Specification</a>
        </div>
        <div class="hero-lfn-branding">
          <img src="https://nephio.org/wp-content/uploads/sites/6/2023/11/lfnetworking-color.svg" alt="LF Networking" class="lfn-logo">
          <p>OpenAN is part of <a href="https://lfnetworking.org" target="_blank">LF Networking</a></p>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Remove old features, stats, and use-cases sections**

Delete the following sections entirely from index.html:
- `<section class="features">` (Why A2A-T)
- `<section class="stats">`
- `<section class="use-cases">`

- [ ] **Step 3: Commit hero changes**

```bash
git add index.html
git commit -m "feat: update hero section with OpenAN branding and remove old sections"
```

---

### Task 3: Supporting Members Carousel Section

**Files:**
- Modify: `index.html:after hero`

- [ ] **Step 1: Add members carousel section after hero**

Insert after the hero section:

```html
    <section class="members">
      <div class="container">
        <h2>Supporting members</h2>
        <div class="members-carousel" id="membersCarousel">
          <div class="carousel-track">
            <div class="member-logo">
              <img src="https://www.chinamobileltd.com/wp-content/themes/china-mobile/images/logo.png" alt="China Mobile">
            </div>
            <div class="member-logo">
              <img src="https://www.huawei.com/etc/designs/huawei/themes/images/logo.png" alt="Huawei">
            </div>
            <div class="member-logo">
              <img src="https://www.vodafone.com/content/dam/vodafone-common/images/logo/vodafone-logo.svg" alt="Vodafone">
            </div>
            <div class="member-logo">
              <img src="https://www.orange.com/content/dam/orange-com/logos/logo-orange.svg" alt="Orange">
            </div>
            <div class="member-logo">
              <img src="https://www.telefonica.com/content/dam/telefonica-com/images/logo-telefonica.svg" alt="Telefonica">
            </div>
            <div class="member-logo">
              <img src="https://www.zte.com.cn/content/dam/zte-com/images/logo-zte.png" alt="ZTE">
            </div>
            <div class="member-logo">
              <img src="https://www.infovista.com/content/dam/infovista/images/logo-infovista.svg" alt="Infovista">
            </div>
            <div class="member-logo">
              <img src="https://www.inspur.com/content/dam/inspur-com/images/logo-inspur.png" alt="Inspur">
            </div>
          </div>
        </div>
        <a href="https://www.lfnetworking.org/membership/join/" class="btn btn-primary" target="_blank">Join Now</a>
      </div>
    </section>
```

- [ ] **Step 2: Commit members section**

```bash
git add index.html
git commit -m "feat: add supporting members carousel section"
```

---

### Task 4: Get Involved Section

**Files:**
- Modify: `index.html:after members`

- [ ] **Step 1: Replace get-involved section**

Replace the existing `<section class="get-involved">` with:

```html
    <section class="get-involved">
      <div class="container">
        <h2>Get Involved</h2>
        <div class="involved-grid">
          <div class="involved-card">
            <h3>Join the Community</h3>
            <p>Connect with developers and organizations building autonomous network solutions.</p>
            <a href="https://www.lfnetworking.org/membership/join/" class="link-arrow" target="_blank">Join Now</a>
          </div>
          <div class="involved-card">
            <h3>Contribute Code</h3>
            <p>Help shape the open-source projects by contributing to our implementations.</p>
            <a href="https://github.com/openan" class="link-arrow" target="_blank">View on GitHub</a>
          </div>
          <div class="involved-card">
            <h3>Read the Wiki</h3>
            <p>Explore documentation and guides to get started with OpenAN.</p>
            <a href="https://wiki.openan.io" class="link-arrow" target="_blank">Read Wiki</a>
          </div>
        </div>
      </div>
    </section>
  </main>
```

- [ ] **Step 2: Commit get-involved changes**

```bash
git add index.html
git commit -m "feat: update get involved section content"
```

---

### Task 5: Footer

**Files:**
- Modify: `index.html:footer`

- [ ] **Step 1: Replace footer with LFN-style footer**

Replace the existing `<footer>` with:

```html
  <footer>
    <div class="container footer-container">
      <div class="footer-brand">
        <img src="https://nephio.org/wp-content/uploads/sites/6/2023/11/lfnetworking-color.svg" alt="LF Networking" class="footer-lfn-logo">
        <p>Copyright &copy; OpenAN Project a Series of LF Projects, LLC.</p>
        <p class="footer-links-small">For web site terms of use, trademark policy and other project policies please see <a href="https://lfprojects.org" target="_blank">lfprojects.org</a>.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="#charter">Charter</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://wiki.openan.io" target="_blank">Wiki</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>News</h4>
          <ul>
            <li><a href="#announcements">Announcements</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <a href="https://github.com/openan" target="_blank" aria-label="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/openan" target="_blank" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.267.792 23 1.771 23h20.451C22.792 23 23 22.267 23 21.271V1.729C23 .774 22.792 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
```

- [ ] **Step 2: Commit footer changes**

```bash
git add index.html
git commit -m "feat: update footer with LFN branding and structure"
```

---

### Task 6: Create Events Page

**Files:**
- Create: `events.html`

- [ ] **Step 1: Create events.html file**

Create complete events page with LF banner, navigation, hero, event cards, and footer:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Events - OpenAN</title>
  <link rel="stylesheet" href="./src/styles.css">
</head>
<body>
  <div class="lf-banner">
    <a href="https://www.linuxfoundation.org/projects" target="_blank" rel="noopener">
      <img src="https://nephio.org/wp-content/uploads/banners/lfprojects_banner_other.svg" alt="The Linux Foundation Projects" class="lf-banner-img">
    </a>
  </div>

  <nav class="navbar">
    <div class="container nav-container">
      <a href="index.html" class="logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2"/>
          <path d="M8 16h16M16 8v16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>OpenAN</span>
      </a>
      <button class="mobile-toggle" id="mobileToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li class="dropdown">
          <a href="index.html#about" class="nav-link">About</a>
          <div class="dropdown-menu">
            <a href="index.html#about-openan">About OpenAN</a>
            <a href="index.html#charter">Charter</a>
            <a href="index.html#contact">Contact</a>
          </div>
        </li>
        <li class="dropdown">
          <a href="index.html#resources" class="nav-link">Resources</a>
          <div class="dropdown-menu">
            <a href="https://wiki.openan.io" target="_blank">Wiki</a>
          </div>
        </li>
        <li><a href="index.html#use-cases" class="nav-link">Use Cases</a></li>
        <li class="dropdown">
          <a href="index.html#news" class="nav-link">News</a>
          <div class="dropdown-menu">
            <a href="index.html#announcements">Announcements</a>
            <a href="index.html#blog">Blog</a>
            <a href="events.html">Events</a>
          </div>
        </li>
        <li><a href="https://www.lfnetworking.org/membership/join/" class="btn btn-nav" target="_blank">Join</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <section class="events-hero">
      <div class="container">
        <h1>Events</h1>
        <p>Connect with the OpenAN community at conferences, workshops, and meetings.</p>
      </div>
    </section>

    <section class="events-list">
      <div class="container">
        <div class="events-grid">
          <div class="event-card">
            <div class="event-date">June 15, 2026</div>
            <h3>OpenAN Summit 2026</h3>
            <p class="event-location">San Francisco, CA</p>
            <p>Annual gathering of OpenAN contributors and users. Technical sessions, workshops, and networking opportunities.</p>
            <a href="#" class="btn btn-secondary">Register</a>
          </div>
          <div class="event-card">
            <div class="event-date">August 20, 2026</div>
            <h3>Autonomous Networks Workshop</h3>
            <p class="event-location">Virtual</p>
            <p>Hands-on workshop covering OpenAN implementation patterns and best practices.</p>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
          <div class="event-card">
            <div class="event-date">October 5, 2026</div>
            <h3>LFN Community Day</h3>
            <p class="event-location">Berlin, Germany</p>
            <p>Join LF Networking projects for a day of collaboration and knowledge sharing.</p>
            <a href="#" class="btn btn-secondary">Register</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-container">
      <div class="footer-brand">
        <img src="https://nephio.org/wp-content/uploads/sites/6/2023/11/lfnetworking-color.svg" alt="LF Networking" class="footer-lfn-logo">
        <p>Copyright &copy; OpenAN Project a Series of LF Projects, LLC.</p>
        <p class="footer-links-small">For web site terms of use, trademark policy and other project policies please see <a href="https://lfprojects.org" target="_blank">lfprojects.org</a>.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="index.html#charter">Charter</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://wiki.openan.io" target="_blank">Wiki</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>News</h4>
          <ul>
            <li><a href="index.html#announcements">Announcements</a></li>
            <li><a href="index.html#blog">Blog</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <a href="https://github.com/openan" target="_blank" aria-label="GitHub">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/openan" target="_blank" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.267.792 23 1.771 23h20.451C22.792 23 23 22.267 23 21.271V1.729C23 .774 22.792 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>

  <script src="./src/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit events page**

```bash
git add events.html
git commit -m "feat: create events page with placeholder event cards"
```

---

### Task 7: CSS Base Styles and Variables

**Files:**
- Modify: `src/styles.css:1-50`

- [ ] **Step 1: Update CSS variables and base styles**

Replace the beginning of styles.css (lines 1-50) with:

```css
:root {
  --color-primary: #0066cc;
  --color-primary-dark: #004d99;
  --color-primary-light: #3399ff;
  --color-secondary: #1a1a2e;
  --color-accent: #10b981;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-bg: #ffffff;
  --color-bg-alt: #f5f5f5;
  --color-border: #e0e0e0;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --container-max: 1200px;
  --header-height: 72px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 24px;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--color-primary-dark);
}

img {
  max-width: 100%;
  height: auto;
}
```

- [ ] **Step 2: Commit base styles**

```bash
git add src/styles.css
git commit -m "style: update CSS variables and base styles"
```

---

### Task 8: CSS LF Banner and Navigation

**Files:**
- Modify: `src/styles.css:after base styles`

- [ ] **Step 1: Add LF banner and navbar styles**

Add after base styles:

```css
.lf-banner {
  background: #1a1a2e;
  padding: 8px 16px;
  text-align: center;
}

.lf-banner-img {
  height: 32px;
  width: auto;
}

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
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
  color: var(--color-secondary);
}

.logo svg {
  color: var(--color-primary);
}

.logo:hover {
  color: var(--color-primary);
}

.logo:hover svg {
  color: var(--color-primary-dark);
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
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-bg-alt);
}

.btn-nav {
  padding: 10px 20px;
  background: var(--color-primary);
  color: white;
  border-radius: 6px;
  font-weight: 600;
}

.btn-nav:hover {
  background: var(--color-primary-dark);
  color: white;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
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
  color: var(--color-text);
  font-size: 0.9rem;
}

.dropdown-menu a:hover {
  color: var(--color-primary);
  background: var(--color-bg-alt);
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

- [ ] **Step 2: Commit navigation styles**

```bash
git add src/styles.css
git commit -m "style: add LF banner and navigation styles"
```

---

### Task 9: CSS Hero and Members Sections

**Files:**
- Modify: `src/styles.css:after navigation`

- [ ] **Step 1: Add hero section styles**

Add after navigation styles:

```css
main {
  padding-top: 0;
}

.hero {
  padding: 80px 0 60px;
  background: linear-gradient(135deg, var(--color-bg-alt) 0%, #e8f4fc 100%);
  text-align: center;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-secondary);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 32px;
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
  background: var(--color-primary-dark);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.btn-secondary {
  background: white;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
  background: var(--color-bg-alt);
  color: var(--color-primary-dark);
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

- [ ] **Step 2: Add members carousel styles**

Add after hero styles:

```css
.members {
  padding: 60px 0;
  background: var(--color-bg);
  text-align: center;
}

.members h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-secondary);
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
  border-radius: 8px;
  padding: 12px;
}

.member-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```

- [ ] **Step 3: Commit hero and members styles**

```bash
git add src/styles.css
git commit -m "style: add hero and members carousel styles"
```

---

### Task 10: CSS Get Involved, Events, and Footer

**Files:**
- Modify: `src/styles.css:after members`

- [ ] **Step 1: Add get-involved section styles**

Add after members styles:

```css
.get-involved {
  padding: 60px 0;
  background: var(--color-bg-alt);
}

.get-involved h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-secondary);
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
  background: var(--color-bg);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s;
}

.involved-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.1);
}

.involved-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-secondary);
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
  color: var(--color-primary-dark);
}
```

- [ ] **Step 2: Add events page styles**

Add after get-involved styles:

```css
.events-hero {
  padding: 60px 0;
  background: linear-gradient(135deg, var(--color-bg-alt) 0%, #e8f4fc 100%);
  text-align: center;
}

.events-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-secondary);
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
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s;
}

.event-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 24px rgba(0, 102, 204, 0.1);
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
  color: var(--color-secondary);
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

- [ ] **Step 3: Add footer styles**

Add after events styles:

```css
footer {
  background: var(--color-secondary);
  color: white;
  padding: 48px 0 24px;
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
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.footer-links-small {
  font-size: 0.8rem;
}

.footer-links-small a {
  color: rgba(255, 255, 255, 0.7);
}

.footer-links-small a:hover {
  color: white;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
}

.footer-col h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
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
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.footer-col a:hover {
  color: white;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s;
}

.footer-social a:hover {
  color: white;
}
```

- [ ] **Step 4: Add responsive styles**

Add at the end of styles.css:

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
    background: var(--color-bg-alt);
  }

  .dropdown.active .dropdown-menu {
    display: block;
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
  }

  .footer-links {
    flex-direction: column;
    gap: 24px;
  }
}
```

- [ ] **Step 5: Commit all remaining styles**

```bash
git add src/styles.css
git commit -m "style: add get-involved, events, footer, and responsive styles"
```

---

### Task 11: JavaScript Carousel and Navigation

**Files:**
- Modify: `src/main.js`

- [ ] **Step 1: Replace main.js with carousel and navigation logic**

Replace entire file content:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initMembersCarousel();
});

function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('active'));
      }
    });
  }

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

function initMembersCarousel() {
  const carousel = document.getElementById('membersCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  if (!track) return;

  const logos = track.innerHTML;
  track.innerHTML = logos + logos;
}
```

- [ ] **Step 2: Commit JavaScript changes**

```bash
git add src/main.js
git commit -m "feat: add members carousel and mobile navigation logic"
```

---

### Task 12: Test and Final Verification

**Files:**
- Verify all files

- [ ] **Step 1: Start development server and verify**

Run: `npm run dev`
Expected: Server starts, opens browser at localhost:5173

- [ ] **Step 2: Verify homepage renders correctly**

Check:
- LF Projects banner visible at top
- Navigation with dropdowns works
- Hero section displays OpenAN branding
- Members carousel scrolls smoothly
- Get Involved section shows 3 cards
- Footer has LF Networking branding

- [ ] **Step 3: Verify events page**

Navigate to events.html
Check:
- LF banner and navigation consistent
- Hero displays Events title
- 3 event cards visible
- Footer matches homepage

- [ ] **Step 4: Verify mobile responsiveness**

Resize browser to <768px
Check:
- Mobile toggle appears
- Dropdown navigation works
- Carousel visible
- Footer reflows correctly

- [ ] **Step 5: Build production version**

Run: `npm run build`
Expected: dist folder created with optimized files

- [ ] **Step 6: Final commit**

```bash
git status
git add -A
git commit -m "feat: complete OpenAN website redesign"
```

---

## Self-Review Checklist

1. **Spec coverage:** All sections from spec implemented - LF banner, navigation, hero, members, get-involved, footer, events page.
2. **Placeholder scan:** No TBD/TODO. All logo URLs provided. All content specified.
3. **Type consistency:** CSS class names consistent across HTML and CSS files.