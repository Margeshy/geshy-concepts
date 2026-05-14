# Maximalist Template Art Direction Design

## Goal

Expand `AGENTS.md` so Codex can treat the current HTML template as a fixed canvas and build much more artistic, character-driven variants on top of it.

The HTML structure is not being redesigned in this pass. The work is focused on turning `AGENTS.md` into an art-direction guide that controls color, assets, and decorative intensity.

## Core Model

This project should follow a strict separation:

- `google-sites-moveset-template.html` is the canvas
- `AGENTS.md` is the paintbrush

The template keeps the established:

- section order
- reading flow
- canvas proportions
- general panel architecture

The art direction layer controls how each character-specific duplicate is styled within that fixed structure.

## Design Direction

The template should move toward a more maximalist and expressive look without changing the underlying structure.

Maximalism here means:

- denser visual identity
- stronger symbolic language
- richer character theming
- more decorative asset use
- more dramatic hero presentation within the same size constraints

Maximalism does **not** mean:

- larger sections
- taller hero blocks
- changing the linear reading structure
- abandoning readability

The result should feel like a designed character dossier, not a generic wiki page.

## Color System

The updated rule set should define a strict dual-color system.

### Monochrome Structure

These parts remain monochrome and should stay within black, gray, or white families:

- body text
- dividers
- panel colors
- structural surfaces

These monochrome values may shift lighter or darker depending on the chosen character colors, but they should still remain part of the neutral structural system rather than becoming full accent colors.

### Character Colors

Each character theme should use exactly two dominant colors:

1. `Base Color`
2. `Mode Color`

#### Base Color

The base color is the main identity color for the character's normal state.

It may be used on:

- `Character Name`
- base move names
- selected borders
- selected symbols
- selected decorative accents
- supporting background treatment when appropriate

#### Mode Color

The mode color is the dominant identity color for the transformed or awakened state.

It may be used on:

- mode move names
- mode-specific symbols
- mode-specific decorative accents
- supporting background treatment when appropriate

### Background Theming

The background color may also change per character. This should be explicitly allowed in `AGENTS.md`.

The background may become character-themed as long as:

- readability remains intact
- the monochrome structural system still reads clearly
- the background supports the page rather than overpowering it

### Color Correction Rule

The chosen character colors should not always be used raw.

If a chosen color is visually harsh, straining, muddy, or otherwise unappealing inside the template, Codex may correct it slightly through:

- saturation reduction
- value/lightness adjustment
- opacity adjustment
- small hue shifts when necessary

The correction rule should preserve character identity while optimizing for visual harmony and comfort.

Codex should not alter colors so far that they stop feeling like the original character colors.

## Asset System

`AGENTS.md` should explicitly allow Codex to use GPT Image 2 for character-specific assets.

Supported asset types:

- banner art
- icons
- symbols
- logos
- emblems
- seals
- crests
- move-category markers
- decorative pixel dividers

These assets should be treated as part of the character theme system, not as random decorations.

## Pixel Art Rules

All generated assets should follow pixel-art constraints unless the user explicitly asks otherwise.

Required style rules:

- crisp pixel edges
- strong silhouette readability
- limited palette discipline
- high small-size legibility
- no painterly rendering
- no soft airbrush look
- no muddy gradients
- no anti-aliased vector-like softness that breaks the pixel identity

Assets must read clearly at their actual placement size inside the template.

## Asset Dimensions

`AGENTS.md` should include practical generation targets so Codex can request useful assets from GPT Image 2.

Recommended dimensions:

- hero banner support art: `1200x300`
- portrait support image: `800x800`
- small icon: `128x128`
- section symbol: `192x192`
- crest / emblem: `256x256`
- divider ornaments: `512x64`

These dimensions are generation targets, not mandatory rendered display sizes. The goal is to produce assets large enough to downscale cleanly while preserving pixel clarity.

## Asset Placement

The placement guidance should focus on where assets live inside the fixed canvas, not on changing section layout.

Rules to add:

- the strongest asset emphasis belongs in the hero area
- banners, emblems, and logos should reinforce the top-of-page fantasy first
- section-support symbols may appear near section labels if they remain readable and consistent
- move rows may reuse icon language, but should not introduce unrelated decorative systems row by row
- repeated motifs should look intentional and belong to the same visual family
- assets should enhance the page’s fantasy without obscuring text or weakening scanability

The placement system should create a strong top-heavy spectacle while preserving the template's existing linear flow.

## Maximalist Guardrails

Because this pass invites more decorative density, `AGENTS.md` should also define the limits.

Codex should avoid:

- coloring body text
- coloring structural panel surfaces with loud character tones
- using too many competing motifs
- mixing unrelated symbols
- filling every empty area just because space exists
- letting decoration fight hierarchy

The page should feel rich, not chaotic.

## Recommended AGENTS Changes

`AGENTS.md` should be updated so that it:

- preserves the existing canvas model
- explicitly allows dynamic background theming
- adds the strict dual-color base/mode system
- adds color-correction rules for harsh character colors
- allows `Character Name` to take the base color
- defines what must remain monochrome
- explains how GPT Image 2 should be used for pixel-art assets
- defines asset generation dimensions
- defines asset placement rules
- reframes the template as a canvas for dramatic, character-specific styling

## Scope

This design pass affects `AGENTS.md` guidance only.

It does not:

- redesign the HTML structure
- add new sections
- change the template size model
- implement a new asset pipeline yet

It prepares Codex to produce more artistic future character pages while keeping the current template stable.
