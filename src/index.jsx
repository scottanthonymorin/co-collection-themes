export { default as Card } from './Card';
export { CardWrapper } from './Card';
export * from './Card/themes';

import { cardThemeEntries } from './Card/themes';

// Build the theme map automatically from entries list.
const THEME_CARD_MAP = cardThemeEntries.reduce((acc, { themeName, Component }) => {
  if (acc[themeName]) {
    // eslint-disable-next-line no-console
    console.warn(`[co-collection-themes] Duplicate theme name detected: ${themeName}`);
  }
  acc[themeName] = Component;
  return acc;
}, {});

export function getThemeCard(themeName) {
  return THEME_CARD_MAP[themeName];
}

export const cardThemes = Object.freeze({ ...THEME_CARD_MAP });
