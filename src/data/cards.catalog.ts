import type { CardFace } from '../types/cards';

export const CARDS_CATALOG: readonly CardFace[] = [
  { pairId: 'frisk-01', title: 'FRISK 01', image: '/assets/cards/fronts/frisk/frisk-01.jpg', category: 'frisk' },
  { pairId: 'frisk-02', title: 'FRISK 02', image: '/assets/cards/fronts/frisk/frisk-02.jpg', category: 'frisk' },
  { pairId: 'frisk-03', title: 'FRISK 03', image: '/assets/cards/fronts/frisk/frisk-03.jpg', category: 'frisk' },
  { pairId: 'frisk-04', title: 'FRISK 04', image: '/assets/cards/fronts/frisk/frisk-04.jpg', category: 'frisk' },
  { pairId: 'frisk-05', title: 'FRISK 05', image: '/assets/cards/fronts/frisk/frisk-05.jpg', category: 'frisk' },
  { pairId: 'frisk-06', title: 'FRISK 06', image: '/assets/cards/fronts/frisk/frisk-06.jpg', category: 'frisk' },
  { pairId: 'frisk-07', title: 'FRISK 07', image: '/assets/cards/fronts/frisk/frisk-07.jpg', category: 'frisk' },
  { pairId: 'frisk-08', title: 'FRISK 08', image: '/assets/cards/fronts/frisk/frisk-08.jpg', category: 'frisk' },
] as const;

export const CARD_BACK_IMAGE = '/assets/cards/back/card-back.jpg';