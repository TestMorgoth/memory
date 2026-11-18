import { CARD_BACK_IMAGE, CARDS_CATALOG } from './cards.catalog';

export const PRELOAD_MANIFEST = [
  '/assets/brand/bg-attract.jpg',
  '/assets/brand/bg-game.jpg',
  '/assets/brand/bg-result.jpg',
  CARD_BACK_IMAGE,
  ...CARDS_CATALOG.map((card) => card.image),
];