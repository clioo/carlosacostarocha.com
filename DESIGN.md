---
name: carlosacostarocha.com
description: A production notebook about engineering, AI, and real systems.
colors:
  cobalt-signal: "oklch(54% 0.19 260)"
  cool-field: "oklch(97% 0.004 260)"
  cool-surface: "oklch(93% 0.006 260)"
  graphite: "oklch(22% 0.008 260)"
  graphite-muted: "oklch(45% 0.012 260)"
  graphite-line: "oklch(84% 0.008 260)"
  night-field: "oklch(20% 0.008 260)"
  night-surface: "oklch(26% 0.01 260)"
  night-ink: "oklch(94% 0.005 260)"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.875rem, 4.6vw, 4.25rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 5vw, 4.5rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  precise: "3px"
spacing:
  compact: "8px"
  standard: "16px"
  section: "clamp(5rem, 10vw, 9.375rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt-signal}"
    textColor: "{colors.cool-field}"
    rounded: "{rounded.precise}"
    padding: "0 21px"
    height: "48px"
  feature-surface:
    backgroundColor: "{colors.cool-surface}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.precise}"
    padding: "28px"
---

# Design System: carlosacostarocha.com

## Overview

**Creative North Star: "The Production Notebook"**

The site feels like the notebook of an engineer who has already operated real systems: precise, material, and open enough to explain decisions. The composition combines generous breathing room with concentrated blocks of evidence. Paper, aluminum, and the blue thread in the images turn abstract processes into tangible objects.

It is not generic AI-tool marketing, a pretentious portfolio, or a dense corporate résumé. Every visual decision should make the experience and thinking easier to find, understand, and remember.

**Key Characteristics:**

- Precise geometry and controlled asymmetry.
- Cobalt reserved for links, actions, and important signals.
- Medium-weight sans-serif typography with generous rhythm.
- Quantitative evidence presented with context.
- Light and dark modes with the same hierarchy.

## Colors

A graphite, aluminum, and cobalt palette drawn from the materials in the primary images.

### Primary

- **Cobalt signal:** primary action, active links, focus, and small points of emphasis. It never decorates entire surfaces.

### Neutral

- **Cool field:** primary background in light mode.
- **Aluminum surface:** groupings and secondary sections.
- **Graphite:** primary text and structure.
- **Muted graphite:** secondary text with AA contrast.
- **Assembly line:** functional separators.
- **Night field, night surface, and night ink:** dark-mode equivalents.

### Named Rules

**The Cobalt Signal Rule.** Cobalt appears only where there is an action, a link, or evidence that deserves attention.

**The One Material Rule.** Each page uses a single surface family. It does not alternate between disconnected color worlds.

## Typography

**Display Font:** Geist (with Arial and sans-serif)
**Body Font:** Geist (with Arial and sans-serif)
**Label/Mono Font:** Geist Mono (with monospace)

**Character:** A single primary family avoids theatricality and lets precision of scale, weight, and spacing communicate experience. Mono is limited to dates, metadata, and technical signals.

### Hierarchy

- **Display** (560, fluid up to 68px, 0.98): a single dominant statement per page.
- **Headline** (560, fluid up to 72px, 1): editorial section headings.
- **Title** (540-600, 23-34px, 1.2): projects, roles, and articles.
- **Body** (400, 16-19px, 1.6-1.8): prose with a maximum of 70 characters per line.
- **Label** (600, 12px, 0.1em): brief role and metadata. It is not repeated as a heading in every section.

### Named Rules

**The Four Percent Rule.** No heading uses tracking tighter than -0.04em.

**The Reading Width Rule.** Long-form prose never exceeds 70ch.

## Elevation

The system is flat by default. Depth comes from tonal changes, photographic crops, and one-pixel separators; there are no decorative ambient shadows.

### Named Rules

**The Flat Evidence Rule.** If a box needs a shadow to seem important, the hierarchy is unresolved.

## Components

### Buttons

- **Shape:** precise corners (3px).
- **Primary:** cobalt with light ink, 48px height, and 21px horizontal padding.
- **Hover / Focus:** slight luminance change and visible focus ring. The active state moves down one pixel.
- **Secondary / Ghost:** text link with an underline and external-link arrow where appropriate.

### Cards / Containers

- **Corner Style:** nearly square (3px).
- **Background:** primary field or aluminum surface.
- **Shadow Strategy:** none.
- **Border:** one functional line when separating content.
- **Internal Padding:** 28px for compact modules; editorial sections use outer spacing.

### Navigation

Desktop navigation is a quiet line of text within a 68px header. On mobile it becomes a persistent bottom bar with three destinations. The short name stays at the top for identity and a return to the home page.

### Evidence Row

Results use large numbers accompanied by a sentence that explains their meaning. They are never presented as scores, progress bars, or statistics without provenance.

## Do's and Don'ts

### Do:

- **Do** use real résumé evidence and link to the context that supports it.
- **Do** keep cobalt limited to actions, links, and focus.
- **Do** alternate density: broad statements followed by concentrated detail.
- **Do** preserve WCAG AA contrast and visible focus states.
- **Do** use real material images to represent abstract processes.

### Don't:

- **Don't** use generic AI-tool marketing with neon, purple gradients, robots, or brains.
- **Don't** create pretentious portfolios that prioritize poetic phrases over evidence.
- **Don't** turn the career into a dense corporate résumé or an endless list.
- **Don't** publish metrics without sources, inflated skills, or claims that cannot be verified.
- **Don't** use large shadows, corners of 24px or more, glassmorphism, or gradient text.
- **Don't** repeat small uppercase labels above every heading.
