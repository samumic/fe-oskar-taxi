# AI Generation Rules

## Purpose

This file defines how code and design should be generated for this project.

The goal is to ensure the output is:

- efficient
- focused
- clean
- production-ready
- low-noise
- high-quality

These rules exist to reduce unnecessary verbosity and improve consistency.

Always follow these rules when generating code.

---

## General Generation Behavior

When generating output:

- follow all files in the `/docs` folder
- do not restate the instructions
- do not summarize the instructions
- do not explain your reasoning unless explicitly asked
- do not generate extra alternatives unless requested
- do not add filler text
- do not add marketing explanations outside the requested code

Prioritize direct execution.

---

## Output Discipline

Only output what is requested.

Examples:

- if asked for `index.html`, output only HTML
- if asked for `style.css`, output only CSS
- if asked for `script.js`, output only JavaScript
- if asked to update one section, output only that updated section

Do not generate unrelated files.

Do not generate explanations around the code.

Do not wrap the answer in unnecessary commentary.

---

## Code-First Behavior

When asked to generate code:

- start directly with the code
- keep the output focused
- do not prepend explanations
- do not add post-code summaries
- do not describe the design unless asked

The default behavior should be implementation, not discussion.

---

## Token Efficiency Rules

Generate with token efficiency in mind.

Rules:

- avoid repeating information already defined in `/docs`
- avoid long descriptive paragraphs in the output
- avoid unnecessary duplicate class patterns
- avoid bloated dummy content
- keep visible text concise
- keep comments useful but minimal

When in doubt, generate the cleanest version with the least noise.

---

## Design Decision Rules

When design choices are ambiguous:

1. prefer cleaner
2. prefer simpler
3. prefer more premium
4. prefer more spacing
5. prefer fewer visual effects

Do not solve uncertainty by adding more design elements.

Solve uncertainty by using more restraint.

---

## Content Generation Rules

All visible UI content must be written in **German**.

Code comments may remain in English.

When generating German copy:

- keep it concise
- keep it credible
- keep it professional
- avoid repetitive marketing phrases
- avoid generic filler copy
- avoid exaggerated luxury wording

Prefer content that sounds believable for a Swiss premium chauffeur service.

---

## Layout Generation Rules

When generating layouts:

- use a clear section hierarchy
- keep sections visually balanced
- avoid overcrowding
- avoid too many nested wrappers
- keep card structures consistent
- preserve strong CTA visibility

Generate layouts that are realistic to build and maintain.

---

## CSS Generation Rules

When generating CSS:

- use variables
- keep component styles grouped
- avoid repeating styles when a shared pattern is better
- keep selectors clean and shallow
- avoid unnecessarily large CSS files
- prefer reusable patterns over one-off styling

Do not generate decorative CSS just to fill space.

Every major style block should serve a purpose.

---

## JavaScript Generation Rules

When generating JavaScript:

- use vanilla JavaScript only
- keep logic lightweight
- prefer small focused functions
- avoid complexity
- avoid overengineering
- avoid unnecessary abstractions

Only implement the requested UX behaviors.

No unnecessary interactivity.

---

## Placeholder Rules

Use placeholder paths for images and static assets.

Examples:

- `images/hero.jpg`
- `images/bmw7.jpg`
- `images/sclass.jpg`
- `images/vclass.jpg`
- `images/driver.jpg`

Do not invent external image URLs.

---

## Refinement Behavior

If asked to improve an existing section:

- preserve the established design system
- improve only what is requested
- do not redesign the entire page unless asked
- avoid unnecessary structural changes
- keep improvements targeted

Refinement should be surgical.

---

## Quality Bar

Generated output should feel like work produced by a professional frontend engineer.

That means:

- clean structure
- readable code
- good spacing
- maintainable classes
- realistic implementation
- restrained design decisions

The result should not feel experimental, random or overgenerated.

---

## Default Assumption

Unless explicitly told otherwise:

- output code only
- keep comments minimal
- keep UI text concise
- follow all `/docs` rules
- optimize for production-ready quality

---

## Final Self-Check

Before generating, verify internally:

1. Am I outputting only what was requested?
2. Am I avoiding repetition from the docs?
3. Is the design restrained and clean?
4. Is the code maintainable?
5. Is the visible content in German?
6. Is the result concise and production-ready?

If not, refine before output.