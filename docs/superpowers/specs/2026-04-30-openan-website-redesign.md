# OpenAN Website Redesign Specification

## Overview

Redesign the A2A-T website as OpenAN, a Linux Foundation Networking (LFN) sub-project, following the visual style and structure of peer LFN projects like Nephio and Anuket.

## Project Rename

- Old name: A2A-T (Agent to Agent Transaction Protocol)
- New name: OpenAN
- Description: OpenAN is a suite of open-source projects for autonomous networks. It supports the development and deployment of telecom agents, enabling multi-vendor, cross-layer, and cross-domain integration, and accelerating the evolution of autonomous network towards L4-L5.

## Pages

### 1. Homepage (index.html)

#### LF Projects Banner
- Top banner with "THE LINUX FOUNDATION PROJECTS" logo
- Clickable link to linuxfoundation.org/projects
- Consistent with Nephio/Anuket style

#### Navigation Bar
- Logo: OpenAN with simple graphic icon
- About (dropdown): About OpenAN, Charter, Contact
- Resources (dropdown): Wiki
- Use Cases (link)
- News (dropdown): Announcements, Blog, Events
- Join (button style, links to membership page)
- Mobile: hamburger menu with dropdown expansion

#### Hero Section
- Title: OpenAN (large font)
- Description: OpenAN is a suite of open-source projects for autonomous networks. It supports the development and deployment of telecom agents, enabling multi-vendor, cross-layer, and cross-domain integration, and accelerating the evolution of autonomous network towards L4-L5.
- Buttons: 
  - Get Started (primary)
  - View Specification (secondary)
- LF Networking logo + "OpenAN is part of LF Networking" + Learn More link

#### Supporting Members Section
- Title: Supporting members
- Content: Horizontal scrolling logo carousel with 8 organizations
  - China Mobile (中国移动)
  - Huawei (华为)
  - Vodafone
  - Orange
  - Telefonica (Telefónica)
  - ZTE (中兴)
  - Infovista
  - Inspur (浪潮)
- Logo source: fetched from network URLs (official company logos)
- Scrolling behavior: smooth infinite scroll, pause on hover
- Button: Join Now (links to membership page)

#### Get Involved Section
- Three cards in grid layout:
  1. Join the Community - Connect with developers and organizations building autonomous network solutions. Link: Join Now
  2. Contribute Code - Help shape the open-source projects by contributing to our implementations. Link: View on GitHub
  3. Read the Wiki - Explore documentation and guides to get started with OpenAN. Link: Read Wiki

#### Footer
- LF Networking logo
- Copyright: Copyright © OpenAN Project a Series of LF Projects, LLC.
- LF Projects policy links (lfprojects.org): terms of use, trademark policy
- Footer navigation columns:
  - About: Charter, Contact
  - Resources: Wiki
  - News: Announcements, Blog, Events
- Social links: GitHub, LinkedIn

### 2. Events Page (events.html)

#### Structure
- LF Projects banner + Navigation bar (same as homepage)
- Hero: Events title with brief description
- Content: Event card list (2-3 placeholder cards initially)
  - Card format: Event name, Date, Location, Description, Register/Learn More link
- Footer (same as homepage)

#### Placeholder Events
- 2-3 sample event cards for demonstration
- To be replaced with real event data later

## Removed Sections

The following sections from the original A2A-T site will be removed:
- Why A2A-T (Features section)
- Stats section (numbers/stats display)
- Use Cases section

## Visual Style

Follow Nephio/Anuket styling:
- Clean, professional LFN project aesthetic
- LF Projects banner at top
- Consistent navigation patterns
- Member/supporter logo display
- LF Networking branding and copyright

## Files to Create/Modify

1. Modify: index.html - complete redesign
2. Modify: src/styles.css - new styling for LFN style
3. Create: events.html - new events page
4. Modify: src/main.js - navigation interactions, scroll carousel

## Implementation Notes

- Logo images fetched from network URLs (company official logos)
- Ensure responsive design for mobile devices
- Smooth scroll animations for member carousel
- Consistent LF branding across all pages