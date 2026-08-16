# AQUA Website Update

A modernized, responsive and performance-focused website for **AQUA**, designed to present the company's work, capabilities, team, clients and multidisciplinary approach through a premium digital experience.

🌐 **Website:** https://www.aquabd.pro/

---

## Overview

This repository contains the updated version of the AQUA website.

The redesign builds on the existing AQUA visual identity while improving:

* User experience
* Responsive behavior
* Navigation
* Project presentation
* Client testimonials
* Team presentation
* Animation performance
* Accessibility
* SEO
* AEO
* Code maintainability

The website is designed as a modern multi-page React experience while preserving the existing AQUA brand language.

---

## Technology Stack

The project is built with:

* **React 19**
* **Vite**
* **Tailwind CSS v4**
* **React Router**
* **GSAP**
* **ScrollTrigger**
* **Lenis Smooth Scroll**
* **JavaScript / JSX**
* **ESLint**
* **Vercel**

---

## Core Design Direction

The website follows a premium editorial and experience-design approach.

### Visual Language

* AQUA cyan accent
* Dark cinematic backgrounds
* Large editorial typography
* Strong project imagery
* Minimal interface elements
* Controlled motion
* Responsive layouts
* Generous but intentional composition
* Interactive storytelling

### Brand Colors

```text
AQUA Cyan     #85FFFF
Deep Aqua     #0891B2
Dark          #0A0A0A
Light Aqua    #E0F4F8
Light Surface #F5F5F5
```

---

## Main Website Sections

### Home

The homepage includes:

1. Dynamic project imagery
2. **We Architect Experiences**
3. **Our Work in Motion**
4. **Integrated Solutions**
5. **Client Reviews & Testimonials**
6. **Clarity Creates...**
7. Featured Work
8. Team
9. Industries We Serve
10. Contact / conversion section

---

## Integrated Solutions

The services section uses an automatic right-to-left carousel to present AQUA's capabilities.

Key services include:

* Events & Activation
* Social Media Marketing
* Branding
* Video Production
* Content Creation
* Sports Marketing
* Website & Automation
* Architectural Design

The carousel pauses during interaction and supports reduced-motion accessibility preferences.

---

## About

The About page contains AQUA's strategic methodology and the **Four-Layer System**:

```text
01 — Insight
Listen

02 — Strategy
Define

03 — Design
Shape

04 — Execution
Deliver
```

The methodology was intentionally moved from the homepage to the About page to create a cleaner homepage information hierarchy.

---

## Work

The Work section presents selected AQUA projects through visual case-study cards and project pages.

Each project can contain:

* Client
* Project title
* Year
* Category
* Hero imagery
* Project description
* Challenge
* Strategic response
* Execution
* Gallery
* Related services
* External project links

---

## Client Reviews & Testimonials

The website includes a dedicated client-review experience featuring AQUA's work with corporate organizations and brands.

The testimonial architecture is designed to support:

* Social proof
* Search visibility
* Answer Engine Optimization
* Service relevance
* Industry relevance
* Internal linking

---

## Team

The homepage Team section uses an automatic right-to-left carousel displaying all team members.

The dedicated Team page provides a cleaner editorial presentation with:

* Team member image
* Name
* Designation
* Role information

---

## Navigation

The website uses a persistent minimal navigation system.

### Top Left

AQUA logo

* Always visible
* Returns users to the homepage
* Remains accessible while scrolling

### Top Right

Menu bars

* Always visible
* Opens the main navigation
* Remains accessible from every route

The navigation is designed to stay minimal while allowing users to move through the site from any scroll position.

---

## Dynamic Menu Interaction

When the navigation menu opens:

* The active website remains visible
* The page dynamically scales and shifts
* The menu opens beside the page
* The experience maintains visual continuity
* Navigation remains scrollable on smaller displays

---

## Hero Interaction

The homepage hero contains a dynamic cursor-driven image system.

On supported desktop devices:

* AQUA project images appear as the cursor moves
* Images dynamically layer around the hero typography
* Images cycle through a reusable visual pool
* Different image rotations and scale variations create organic movement

On mobile and touch devices the effect is disabled for performance and usability.

---

## Responsive Design

The website is designed for:

```text
Desktop
Laptop
Tablet
Mobile
```

Responsive behavior includes:

* Fluid typography
* Adaptive spacing
* Touch-friendly interactions
* Reduced desktop-only effects on mobile
* Responsive image handling
* Mobile navigation
* Horizontal carousels
* Reduced-motion support

---

## SEO & AEO

The website includes technical and content improvements for both traditional search engines and AI-powered answer engines.

### SEO

Implemented areas include:

* Unique page titles
* Meta descriptions
* Canonical URLs
* Semantic page structure
* Internal linking
* Project-specific URLs
* Crawlable navigation
* Sitemap
* Robots.txt
* Open Graph metadata

### AEO

Answer Engine Optimization includes:

* Clear question-and-answer content structures
* Descriptive service content
* Entity-oriented business information
* Client relationship context
* Structured FAQ content
* Semantic headings
* Structured data

---

## Structured Data

The project supports structured information such as:

* Organization
* Website
* PostalAddress
* Place
* FAQ
* Collection pages
* Item lists

Structured data should always reflect actual visible website content.

---

## Accessibility

Accessibility improvements include:

* Semantic HTML
* Keyboard navigation
* Accessible menu controls
* Focus management
* Larger interaction areas
* Reduced-motion support
* Improved text contrast
* Accessible carousel behavior
* Descriptive image alt text
* ARIA attributes where required

---

## Performance

Performance improvements include:

* Route-level lazy loading
* Optimized animations
* Reduced unnecessary requestAnimationFrame loops
* Reusable animation elements
* Responsive image delivery
* WebP image optimization
* Lazy-loaded media
* Deferred video loading
* Reduced motion on mobile
* GSAP and Lenis synchronization

---

## Project Structure

```text
src/
│
├── components/
│   ├── layout/
│   ├── common/
│   └── home/
│
├── data/
│   ├── projects.js
│   ├── services.js
│   ├── team.js
│   ├── testimonials.js
│   ├── industries.js
│   └── navigation.js
│
├── hooks/
│
├── pages/
│
├── App.jsx
├── index.css
└── main.jsx

public/
│
├── images/
├── robots.txt
└── sitemap.xml
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/Aqua-Website-Update.git
```

Enter the project:

```bash
cd Aqua-Website-Update
```

Install dependencies:

```bash
npm install
```

Or:

```bash
npm ci
```

---

## Development

Start the local development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173/
```

---

## Production Build

Before deployment run:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

The production output will be generated inside:

```text
dist/
```

---

## Deployment

The project is configured for deployment on **Vercel**.

The included `vercel.json` supports SPA routing so React Router routes resolve correctly.

Recommended deployment flow:

```text
Development Branch
        ↓
Testing / Preview
        ↓
Production Branch
        ↓
Vercel Deployment
```

---

## Git Workflow

Recommended workflow:

```bash
git checkout -b feature-name
```

After making changes:

```bash
git add -A
```

```bash
git commit -m "Describe the update"
```

```bash
git push origin feature-name
```

After validation, merge into the production branch.

---

## Important Development Principles

When extending the website:

### Preserve

* AQUA visual identity
* Existing typography
* Brand colors
* Premium design direction
* Responsive behavior
* Accessibility
* Motion performance

### Avoid

* Excessive animation
* Generic template sections
* Unnecessary dependencies
* Heavy UI frameworks
* Stock imagery where AQUA project imagery exists
* Large unoptimized images
* Breaking existing URLs unnecessarily

Every new interaction should support at least one of:

```text
State
Direction
Hierarchy
Story
Feedback
```

---

## Future Development Opportunities

Potential future improvements include:

* Full project case-study library
* Insights / knowledge platform
* CMS integration
* Advanced analytics
* Lead-generation dashboard
* Multilingual support
* Static prerendering
* Advanced structured data
* Client portal
* Project inquiry automation

These should be introduced only when there is a clear business requirement.

---

## Repository Status

**AQUA Website Modernization — 2026**

Current build includes the redesigned visual system, multi-page architecture, responsive interaction system, dynamic project presentation, team carousel, client testimonials, SEO/AEO improvements and optimized navigation.

---

## Maintained For

**AQUA**

Architecture × Brand × Experience × Technology

**Dhaka, Bangladesh**

© AQUA. All rights reserved.
