# Character concepts

Open `index.html` through a static web server or GitHub Pages to browse the characters. The homepage discovers game folders through GitHub and reads each character page for its cover, name, quote, and actual stats. It supports both older sheets and the current template.

## Add a character

1. Copy `templates/character/` to `<game>/chars/<character>/`.
2. Edit `index.html`: replace the placeholder name, descriptions, stats, and media.
3. Put media in that character's `assets/` folder and use relative paths.
4. Edit the labeled settings at the top of `styles.css` for colors, fonts, borders, and spacing.
5. Commit the folder. The homepage discovers it automatically after publication.

Use the existing game names, such as `Titan Bash` and `Shonen Unleashed`. Each character's entry file is `index.html`.

## Edit attack boxes

Copy, move, or delete everything from START BOX through END BOX inside a move-list. The list handles spacing automatically.

```html
<article class="move panel box-base">
<article class="move panel box-mode">
```

Choose one box class. It colors the headings, notes heading, media border, outer border, and dividers. Body text stays neutral. Set `--color-base`, `--color-mode`, `--border-base`, and `--border-mode` in that character's stylesheet. The final number in `rgba(139, 228, 244, 0.25)` controls border opacity.

Media stays centered when text makes the box taller. Its frame follows the actual image or video proportions without cropping. Black bars inside a media file remain visible.

The starter has generic content and neutral colors. Older published sheets keep their existing layout and content; the homepage supports them without requiring a migration.

## Homepage files

- `index.html`: introduction and the character-list container.
- `index.css`: homepage appearance and responsive card layout.
- `index.js`: directory discovery and compatibility with both sheet formats.

No build step is required. The homepage uses GitHub's API, so an API outage or rate limit can temporarily prevent discovery. It shows an error instead of silently hiding failed pages.

## Shared-link previews

Each published page has a LINK PREVIEW block in its HTML head. Keep the og:title, og:description, og:url, og:image, and og:image:alt fields and matching twitter fields in sync with the page. Use full public HTTPS URLs, encode spaces as %20, and upload the cover before sharing. The homepage uses Kong as its featured preview image.

The starter has labeled fields and commented URL examples. Replace the examples and uncomment them before publishing. Preview metadata stays in saved HTML because social crawlers may not run JavaScript.

Wait for GitHub Pages deployment before sharing. Discord can cache old previews, including those in existing messages. A new query string such as ?preview=2 can request a fresh preview; the receiving service controls its final appearance.
