---
name: Blueprint Narrative
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#adc7ff'
  primary: '#adc7ff'
  on-primary: '#002e68'
  primary-container: '#4a8eff'
  on-primary-container: '#00285b'
  inverse-primary: '#005bc0'
  secondary: '#ffecc0'
  on-secondary: '#3d2f00'
  secondary-container: '#fecb00'
  on-secondary-container: '#6e5700'
  tertiary: '#81cfff'
  on-tertiary: '#00344b'
  tertiary-container: '#009bd5'
  on-tertiary-container: '#002d41'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffe08b'
  secondary-fixed-dim: '#f1c100'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#c6e7ff'
  tertiary-fixed-dim: '#81cfff'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#004c6b'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-xl:
    fontFamily: Open Sans
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Open Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Open Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 120%
  headline-md:
    fontFamily: Open Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 130%
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-bold:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 100%
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid-unit: 20px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is visionary, technical, and inherently collaborative. It aims to evoke the feeling of "work in progress" meeting "polished execution," much like a master architect's blueprint. The UI should feel energetic yet structured, signaling a space where complex ideas are simplified and built together.

The design style is a hybrid of **Modern Corporate** and **Blueprint Tech**. It leverages a high-contrast primary palette against a structured grid background, using 3D organic shapes (spheres) to break the rigidity of the grid. This juxtaposition creates a dynamic sense of depth and motion, suggesting that the platform is a living, breathing workshop for digital builders.

## Colors

The palette is anchored by a vibrant **Electric Blue** that serves as the canvas for all interactions. This blue is deep enough to act as a primary background but saturated enough to maintain high energy. 

- **Primary (Electric Blue):** Used for main backgrounds and high-priority brand elements.
- **Secondary (Solar Yellow):** Reserved for "pop" elements, primary calls to action, and 3D accents to draw the eye.
- **Tertiary (Sky Cyan):** Used for decorative depth, secondary 3D elements, and subtle highlights.
- **Neutral (White & Alpha-White):** Used for the blueprint grid lines (low opacity) and primary typography (high opacity) to ensure maximum legibility against the saturated background.

## Typography

This design system utilizes **Open Sans** exclusively to provide a highly legible, neutral, and professional technical aesthetic. By using a widely recognized humanist sans-serif, the system prioritizes clarity and functional communication within the complex "blueprint" environment.

The typography scale is intentionally dramatic, featuring ultra-large display weights for hero sections to mirror the "ProjekBareng" impact. Headlines utilize heavy weights to feel grounded against the technical background. Body text maintains a generous line height to ensure readability against the background grid pattern. For mobile devices, the display sizes are aggressively scaled down to maintain visual hierarchy without overwhelming the smaller viewport.

## Layout & Spacing

The layout is governed by a **Fixed Grid** philosophy, visually represented by the "blueprint" background. The base unit is a 20px square grid which dictates all alignment and internal padding.

- **Grid System:** A 12-column system is used for desktop, 8-column for tablet, and 4-column for mobile.
- **Blueprint Pattern:** The background grid should be rendered as 1px lines at 10% opacity, creating a subtle texture that doesn't compete with content.
- **Rhythm:** Spacing follows a strict 8px-based scale for components, while layout-level spacing (stacking) uses larger increments of 32px or 64px to maintain an "airy" and spacious feel.

## Elevation & Depth

Hierarchy is established through **3D Layering** and **Ambient Shadows**. Instead of traditional material elevations, this system uses the Z-axis to "float" objects above the blueprint grid.

- **Floating Spheres:** Decorative 3D spheres use soft, extra-diffused shadows (blur: 40px-80px, opacity: 20%) to create a sense of significant distance from the background.
- **UI Layers:** Interactive cards and menus should use a semi-transparent "Glassmorphism" effect (backdrop-blur: 12px) to allow the blueprint grid to peek through, reinforcing the structural narrative.
- **Shadow Tinting:** Shadows are never pure black; they are tinted with a darker shade of the primary background blue to ensure a natural, luminous look.

## Shapes

The shape language is a contrast between **Geometric Rigidity** (the grid) and **Organic Softness** (the components). 

While the background is perfectly square, all interactive elements utilize a "Rounded" (Level 2) corner radius to feel friendly and modern. Decorative elements, specifically the floating spheres, are perfectly circular to provide a counterpoint to the sharp grid lines. Buttons and input fields follow the 0.5rem base radius, while larger cards scale up to 1.5rem (rounded-xl) to feel more like physical objects resting on the canvas.

## Components

- **Buttons:** Primary buttons use the Solar Yellow background with bold navy or black text for maximum contrast. They should have a subtle 3D lift on hover.
- **Input Fields:** Semi-transparent white backgrounds with a 1px solid white border at 20% opacity. Focus states should transition the border to the Tertiary Cyan.
- **Cards:** Use a "Glass-Blueprint" style—semi-transparent white (5-10% opacity) with a heavy backdrop blur. This keeps the grid visible while ensuring text is legible.
- **3D Accents:** Use CSS or SVG-based spheres with radial gradients (highlight to shadow) to act as visual anchors in corners or behind key value propositions.
- **Navigation:** Top-aligned, minimalist text links in White. Active states are indicated by a small Solar Yellow dot below the label, rather than an underline.