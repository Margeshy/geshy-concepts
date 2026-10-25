/* CHARACTER DIRECTORY
   Each game contains chars/<character>/index.html and that page's assets.
   Cards read the saved page, so names, covers, quotes, and stats stay in sync.
   Both the current editable template and older character sheets are supported. */
const repoApi = 'https://api.github.com/repos/Margeshy/geshy-concepts/contents';
const gameList = document.getElementById('game-list');

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}

function textFrom(root, selector) {
  return root.querySelector(selector)?.textContent.replace(/\s+/g, ' ').trim() || '';
}

async function readJson(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not read ${url}`);
  return response.json();
}

async function readCharacterPage(game, directory) {
  const path = `${game.path}/chars/${encodeURIComponent(directory.name)}/index.html`;
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not read ${path}`);
  const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
  const header = doc.querySelector('.character-header, .hero') || doc;
  const image = header.querySelector('.portrait img, .portrait-box img, img');
  const imagePath = image?.getAttribute('src');
  return {
    path,
    name: textFrom(header, 'h1') || directory.name,
    quote: textFrom(header, '.quote, .character-subtitle'),
    image: imagePath ? new URL(imagePath, new URL(path, location.href)).href : '',
    // Keep all real stats, including Tier and HP; don't invent a missing Cost.
    stats: Array.from(header.querySelectorAll('.stat, .meta-chip')),
  };
}

function renderCard(character) {
  const card = element('a', 'character-card');
  card.href = character.path;
  if (character.image) {
    const banner = element('div', 'banner');
    const image = document.createElement('img');
    image.src = character.image;
    image.alt = `${character.name} cover`;
    image.loading = 'lazy';
    image.addEventListener('error', () => banner.remove(), { once: true });
    banner.append(image);
    card.append(banner);
  }
  const copy = element('div', 'card-copy');
  copy.append(element('h2', '', character.name));
  if (character.quote) copy.append(element('p', 'character-subtitle', character.quote));
  const stats = element('div', 'meta-list');
  for (const source of character.stats) {
    stats.append(element('span', 'meta-chip', source.textContent.replace(/\s+/g, ' ').trim()));
  }
  copy.append(stats);
  card.append(copy);
  return card;
}

async function readGame(directory) {
  const game = { name: directory.name, path: encodeURIComponent(directory.name) };
  const files = await readJson(`${repoApi}/${game.path}/chars`);
  const directories = files.filter(file => file.type === 'dir')
    .sort((a, b) => a.name.localeCompare(b.name));
  const results = await Promise.allSettled(directories.map(dir => readCharacterPage(game, dir)));
  return {
    game,
    characters: results.filter(result => result.status === 'fulfilled').map(result => result.value),
    failed: results.some(result => result.status === 'rejected'),
  };
}

function renderGame({ game, characters, failed }) {
  const section = element('section', 'game-section');
  section.append(element('h2', 'game-title', game.name));
  const grid = element('div', 'character-grid');
  grid.append(...characters.map(renderCard));
  section.append(grid);
  if (failed) section.append(element('p', 'empty-state', 'Some character pages could not load. Refresh to retry.'));
  return section;
}

async function loadCharacters() {
  try {
    const files = await readJson(repoApi);
    // templates holds the reusable starter, not a game directory.
    const directories = files.filter(file => file.type === 'dir' && file.name !== 'templates')
      .sort((a, b) => a.name.localeCompare(b.name));
    const results = await Promise.allSettled(directories.map(readGame));
    const games = results.filter(result => result.status === 'fulfilled').map(result => result.value);
    const sections = games.filter(game => game.characters.length || game.failed).map(renderGame);
    if (results.some(result => result.status === 'rejected')) {
      sections.push(element('p', 'empty-state', 'Some game folders could not load. Refresh to retry.'));
    }
    gameList.replaceChildren(...(sections.length ? sections : [element('p', 'empty-state', 'No movesets have been published yet.')]));
  } catch {
    gameList.replaceChildren(element('p', 'empty-state', 'Could not load the moveset index. Refresh to retry.'));
  }
}

loadCharacters();
