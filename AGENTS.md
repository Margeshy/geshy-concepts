# AGENTS.md

## Purpose

This project contains a reusable `Google Sites`-embeddable HTML template for character moveset pages in an anime battle arena style.

The canonical source template is:

- `google-sites-moveset-template.html`

## File Workflow

Agents must not edit the source template directly for character-specific work.

Required workflow:

1. Duplicate `google-sites-moveset-template.html`
2. Rename the duplicate to the character being worked on
3. Make all character-specific edits in that duplicate
4. Leave the source template unchanged

The source template should only be edited when updating the shared system itself.

## Visual Direction

The project uses a `Clean Arcade` visual direction.

That means:

- solid dark background
- no gradients
- no grid texture
- no scanlines
- restrained retro framing
- clear hierarchy
- readability over decoration

The template HTML is the fixed canvas.

`AGENTS.md` is the paintbrush that controls how each character-specific duplicate is styled.

This means:

- keep the established section order
- keep the linear reading flow
- keep the current canvas proportions
- preserve the general panel architecture
- push drama and identity through styling, assets, and theme choices instead of changing structure

The intended direction is more maximalist and expressive inside the existing canvas.

Maximalism here means:

- denser visual identity
- stronger symbolic language
- richer character theming
- more decorative asset use
- more dramatic hero presentation within the same size constraints

Maximalism does not mean:

- larger sections
- taller hero blocks
- changing the linear reading structure
- abandoning readability

## Typography

### Display Typography

Use `Press Start 2P` for title-like text only.

This includes:

- character name
- section headings
- overview labels
- utility title
- passive title
- move titles
- notes title
- image placeholder text

When using `Press Start 2P`:

- keep the text short
- use generous line-height
- use generous letter spacing
- avoid dense paragraph use
- avoid over-bold styling

### Body Typography

Use `VT323` for readable text.

This includes:

- quote
- chip text
- overview body copy
- utility/passive descriptions
- move descriptions
- notes body text
- closing notes
- footer text

When using `VT323`:

- keep it larger than default browser body text
- use generous line-height
- add slight letter spacing
- avoid cramped columns

## Text Standards

Text styling must be standardized across the whole template.

Agents should keep:

- consistent heading sizes
- consistent body sizes
- consistent spacing between titles and body text
- consistent line-height
- consistent letter spacing
- consistent semantic structure

Prefer semantic tags consistently:

- headings as `h1` / `h2` / `h3` / `h4`
- body copy as `p`
- grouped content as `section` / `article` / `header`

Avoid mixing equivalent text roles across unrelated tags without a reason.

## Color Rules

The base template remains structurally monochrome, but character color is allowed and expected in controlled ways.

### Monochrome Structure

These parts must remain within black, gray, or white families:

- body text
- dividers
- panel colors
- structural surfaces

These monochrome values may shift lighter or darker depending on the chosen character colors, but they must still read as neutral structure rather than as full accent colors.

### Dual-Color Theme System

Each character theme should use exactly two dominant colors:

1. `Base Color`
2. `Mode Color`

#### Base Color

The base color is the dominant identity color for the character's normal state.

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

### Global Theme Use

When adapting the template for a specific character:

- background color may change per character
- borders may take on theme color
- move names may take on theme color
- `Character Name` may take on the base color
- other selected elements may take on theme color if it improves the character identity

Color use should remain deliberate and limited. Do not flood the page with many competing colors.

### Background Theming

The background may become character-themed as long as:

- readability remains intact
- the monochrome structural system still reads clearly
- the background supports the page rather than overpowering it

### Color Correction Rule

Do not assume the raw chosen character color is always UI-safe.

If a chosen color is harsh, muddy, straining, or otherwise visually unappealing inside the template, Codex may correct it slightly through:

- lower saturation
- value / lightness adjustment
- opacity adjustment
- small hue shifts when necessary

These corrections must preserve the character identity. Do not push a color so far that it stops feeling tied to the source character.

### Cost Styling

Inside the cost text:

- `$` should be green
- `T` should be yellow

### Archetype Styling

The archetype value should change color based on archetype category.

Examples:

- `Rushdown` uses red
- `Hit and Run` uses blue
- special archetypes can use purple

Agents should choose archetype color intentionally based on the archetype being represented.

### Difficulty Styling

Difficulty should use stars instead of vague placeholder wording whenever practical.

Rules:

- filled stars are yellow
- empty stars remain neutral / muted

## GPT Image 2 Asset Rules

Codex may use GPT Image 2 for character-specific assets.

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

These assets must be treated as part of the character theme system, not as random decoration.

## Pixel Art Asset Rules

Unless the user explicitly asks otherwise, generated assets should follow pixel-art constraints.

Required style rules:

- crisp pixel edges
- strong silhouette readability
- limited palette discipline
- high small-size legibility
- no painterly rendering
- no soft airbrush look
- no muddy gradients
- no anti-aliased vector softness that breaks the pixel identity

Assets must remain readable at their actual placement size inside the template.

## Asset Dimensions

Use these generation targets when creating GPT Image 2 assets:

- hero banner support art: `1200x300`
- portrait support image: `800x800`
- small icon: `128x128`
- section symbol: `192x192`
- crest / emblem: `256x256`
- divider ornaments: `512x64`

These are generation targets intended to downscale cleanly while preserving pixel clarity.

## Asset Placement

These rules govern asset placement inside the fixed canvas:

- the strongest asset emphasis belongs in the hero area
- banners, emblems, and logos should reinforce the top-of-page fantasy first
- section-support symbols may appear near section labels when they remain readable and consistent
- move rows may reuse icon language, but should not invent unrelated decorative systems row by row
- repeated motifs must belong to one visual family
- assets should enhance the page's fantasy without obscuring text or weakening scanability

## Editing Principles

Agents should preserve:

- single-page linear reading flow
- strong readability
- restrained retro identity
- one coherent style system
- the fixed-canvas role of `google-sites-moveset-template.html`
- the art-direction role of `AGENTS.md`

Agents should avoid:

- decorative clutter
- gradients
- noisy textures
- overly dense bitmap text
- flattening hierarchy
- inconsistent text styling
- arbitrary tag usage for equivalent text roles
- coloring body text
- coloring structural panel surfaces with loud accent tones
- too many competing motifs
- unrelated symbols
- filling space just because it exists
- decoration that fights hierarchy

## Template Intent

This template is meant to feel:

- retro
- clean
- readable
- reusable
- easy to theme per character
- dramatic
- character-specific
- like a canvas for expressive styling

If a change improves style but reduces readability, prefer readability.
