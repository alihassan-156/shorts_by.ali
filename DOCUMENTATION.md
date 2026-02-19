
# AuraEdit Website Documentation

This document provides a guide for understanding, editing, and expanding the AuraEdit digital experience.

## Visual Identity: Liquid Glass

The website utilizes a "Liquid Glass" aesthetic, characterized by:
- **Glassmorphism:** Using `backdrop-filter: blur()` and semi-transparent backgrounds to create depth.
- **Liquid Motion:** Fluid transitions and floating background elements.
- **Accent Lighting:** A primary accent of `#00D4FF` (Cyan) used for glows and interactive states.

## Core Components

### 1. LiquidButton (`components/LiquidButton.tsx`)
This is the signature interaction element.
- **Bubble Effect:** Uses Framer Motion to track mouse position and animate a cyan glow behind the text.
- **Customization:** Modify the `width`, `height`, and `blur` values in the motion div to change the bubble size.

### 2. FloatingBubbles (`components/FloatingBubbles.tsx`)
Ambient background animation.
- **How to Edit:** Change the `Bubble` props in the component to adjust size, screen position (`x`, `y`), and animation `duration`.
- **Colors:** Adjust the `bg-gradient` classes to change the bubble colors.

### 3. ServiceCard (`components/ServiceCard.tsx`)
Glassmorphic cards used for showcasing offerings.
- **Hover State:** Automatically lifts the card and intensifies the glow.

## How to Edit Content

### Updating Services
All service data is located in `constants.tsx`. Update the `SERVICES` array to change titles, descriptions, icons, or details.

### Adding Portfolio Items
Add new objects to the `PORTFOLIO` array in `constants.tsx`. Ensure you provide a high-quality image URL for the thumbnail.

### Global Styles
Colors and fonts are defined in `index.html` via the Tailwind configuration and Google Fonts links.

## Customization Guidelines

### Changing the Main Color
If you want to move away from Cyan (#00D4FF):
1. Search and replace `#00D4FF` with your new hex code.
2. Update the `liquid-gradient` utility in `index.html`.

### Adjusting Animations
Framer Motion is used for all transitions. Easing functions are generally set to `easeInOut` or `spring` for a premium feel. Avoid `type: "tween"` with linear easing to maintain the cinematic quality.

### SEO & Performance
- Images use `picsum.photos` as placeholders. Replace these with optimized WebP/AVIF formats for production.
- Component-level lazy loading can be added for the Portfolio section if the gallery grows significantly.
