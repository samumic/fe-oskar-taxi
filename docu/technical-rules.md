# Technical Rules

## Purpose

This file defines the technical implementation rules for the website.

The goal is to ensure the generated code is:

- production-ready
- clean
- maintainable
- performant
- readable
- structured like professional frontend code

The implementation should reflect the mindset of a **senior frontend developer**.

---

# Core Principles

Always prioritize:

1. clarity
2. maintainability
3. performance
4. readability
5. simplicity

Avoid unnecessary complexity.

The site is a **static website** and should remain lightweight.

---

# HTML Rules

## Semantic HTML

Use semantic HTML wherever possible.

Examples:

header  
nav  
main  
section  
article  
footer

Avoid excessive use of generic div elements when semantic elements are appropriate.

---

## Clean Structure

The HTML should follow a logical section order:

header  
hero  
services  
vehicles  
popular routes  
driver introduction  
why choose us  
contact  
footer

Each section should be clearly separated and readable.

---

## Accessibility

Basic accessibility should be included.

Requirements:

- meaningful alt attributes for images
- proper heading hierarchy
- descriptive button labels
- logical DOM structure

Avoid empty alt attributes unless the image is purely decorative.

---

## Image Handling

Use placeholder paths for images.

Examples:

images/hero.jpg  
images/bmw7.jpg  
images/sclass.jpg  
images/vclass.jpg  
images/driver.jpg

Do not generate random external image URLs.

---

# CSS Rules

## CSS Architecture

CSS should be structured and consistent.

Use logical grouping:

- root variables
- reset / base
- layout
- components
- utilities
- responsive rules

---

## CSS Variables

Use CSS variables for design tokens.

Example:


:root {
--color-bg: #ffffff;
--color-text: #1a1a1a;
--color-accent: #c6a76b;
--color-border: #ececec;

--radius-sm: 8px;
--radius-lg: 16px;

--shadow-soft: 0 10px 30px rgba(0,0,0,0.05);
--shadow-elevated: 0 20px 50px rgba(0,0,0,0.08);
}


This ensures consistent styling.

---

## Layout System

Use modern layout techniques.

Allowed:

- flexbox
- CSS grid

Avoid outdated techniques such as:

- float layouts
- table-based layout
- absolute positioning for main layout

---

## Container System

Use a consistent container pattern.

Example:


.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
}


Sections should use containers to control width.

---

## Responsive Design

The site must be responsive.

Use a **mobile-first approach**.

Recommended breakpoints:


480px
768px
1024px
1280px


Do not write desktop-first CSS.

---

## Component-Based Styling

Use component-based CSS classes.

Examples:

.hero  
.hero__content

.service-card  
.service-card__title

.vehicle-card  
.vehicle-card__features

.driver-section  
.driver-card

This keeps CSS structured.

---

## Avoid CSS Problems

Do not:

- create overly deep selectors
- duplicate styles unnecessarily
- add random inline styles
- use !important unless absolutely necessary

CSS must remain readable.

---

# JavaScript Rules

## Minimal JavaScript

JavaScript should remain minimal.

This is not a web application.

Only include functionality that improves UX.

---

## Allowed Features

The script may implement:

- sticky header on scroll
- mobile navigation toggle
- smooth scrolling for anchor links
- reveal on scroll animations
- floating mobile call button
- back to top button

Avoid unnecessary features.

---

## Code Style

JavaScript should be:

- clean
- readable
- modular
- commented when necessary

Avoid overly complex logic.

---

## Performance

Keep the script lightweight.

Do not:

- import large libraries
- add unnecessary dependencies
- build complex event chains

Use vanilla JavaScript.

---

# File Structure

The project should follow this structure.


oskar-taxi-website
├── docs
│ ├── design-constraints.md
│ ├── content-rules.md
│ └── technical-rules.md
│
├── index.html
├── css
│ └── style.css
├── js
│ └── script.js
└── images


---

# Code Quality

The final output should be:

- clean
- formatted
- easy to read
- properly spaced
- logically commented

Avoid code that looks auto-generated or messy.

The code should feel like something written by a professional frontend developer.

---

# Comments

Code comments should be used when helpful.

Good examples:

- explaining layout sections
- explaining interactive logic
- marking major component sections

Avoid commenting obvious code.

---

# Performance Guidelines

This site should load quickly.

Best practices:

- minimal JavaScript
- efficient CSS
- optimized layout
- no unnecessary DOM complexity

The goal is a fast static website.

---

# Final Technical Check

Before finishing the implementation, verify:

1. Is the HTML semantic and structured?
2. Is the CSS consistent and organized?
3. Is the JavaScript minimal and clean?
4. Is the layout responsive?
5. Is the code readable and maintainable?

If not, refine the implementation.

---

# Priority Order

When technical decisions conflict, prioritize:

1. clarity
2. maintainability
3. performance
4. simplicity
5. visual polish