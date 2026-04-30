# OpenAN Dark Theme UI Upgrade Specification

## Overview

Upgrade OpenAN website to a dark theme style matching Linux Foundation projects (Nephio, Anuket). Deep blue-black backgrounds with light text, creating a professional tech-focused aesthetic.

## Color Palette

### Primary Colors
- Primary blue: `#3b82f6`
- Primary dark: `#2563eb`
- Primary light: `#60a5fa`

### Background Colors
- Main background: `#0f172a` (deep blue-black)
- Alternate background: `#1e293b` (deep gray-blue)
- Card background: `#1e293b`
- Border: `#334155` (medium gray-blue)

### Text Colors
- Primary text: `#f1f5f9` (bright white)
- Secondary text: `#94a3b8` (light gray)
- Muted text: `#64748b` (medium gray)

## CSS Variables Update

Update `src/styles.css` :root variables:

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

## Component Styles

### LF Banner
- Background: `#0f172a` (matching main background)
- Banner image: unchanged

### Navigation
- Background: `rgba(15, 23, 42, 0.95)` with `backdrop-filter: blur(12px)`
- Logo text: white (`#f1f5f9`)
- Logo SVG: primary blue (`#3b82f6`)
- Nav links: light gray (`#94a3b8`), hover → blue
- Dropdown menu: background `#1e293b`, border `#334155`
- Join button: primary blue, hover brighter with glow effect

### Hero Section
- Background: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`
- Title (h1): white, 4rem font-size, bold (700-800)
- Description: light gray (`#94a3b8`)
- Buttons: 
  - Primary: blue with glow hover
  - Secondary: dark background (`#1e293b`) with blue border
- LF Networking branding: logo unchanged, text light gray

### Members Section
- Background: `#0f172a`
- Title: white
- Logo containers: 
  - Background: `#1e293b`
  - Border: `#334155`
  - Hover: border → blue, slight glow
- Carousel: unchanged animation
- Join button: primary blue

### Get Involved Section
- Background: `linear-gradient(180deg, #0f172a 0%, #1e293b 100%)`
- Title: white
- Cards:
  - Background: `#1e293b`
  - Border: `#334155`
  - Hover: border → blue, shadow glow
  - Title: white
  - Description: light gray
- Links: primary blue, hover brighter

### Events Page
- Events hero: `linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)`
- Title: white, 2.5rem
- Description: light gray
- Event cards:
  - Background: `#1e293b`
  - Border: `#334155`, hover → blue
  - Date badge: primary blue background, white text
  - Title: white
  - Location: light gray
  - Description: light gray
  - Button: secondary style (dark bg + blue border)

### Footer
- Background: `#0f172a`
- LF Networking logo: unchanged
- Copyright text: light gray
- Links columns:
  - Headers: white, uppercase
  - Links: light gray, hover → white
- Social icons: light gray, hover → blue

### Buttons
- `.btn-primary`: 
  - Background: `#3b82f6`
  - Hover: `#60a5fa` with `box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4)`
- `.btn-secondary`:
  - Background: `#1e293b`
  - Border: `#3b82f6`
  - Hover: background → blue, text → white

### Mobile Toggle
- Lines: white
- Active state: transform to X icon

## Responsive Design

### Mobile (<768px)
- Navigation slide-in: dark background (`#0f172a`)
- All cards: maintain dark theme
- Text sizes: reduced appropriately
- Footer: stacked columns, centered text

## Files to Modify

1. `src/styles.css` - Update all color variables and component styles
2. `index.html` - No changes needed (HTML structure unchanged)
3. `events.html` - No changes needed (HTML structure unchanged)

## Implementation Approach

1. Update CSS variables in :root
2. Update navbar styles for dark theme
3. Update hero section with gradient
4. Update members section
5. Update get-involved section
6. Update events page styles
7. Update footer styles
8. Update button styles
9. Update responsive styles for dark theme
10. Test and verify all pages