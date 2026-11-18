import { CARDS_CATALOG } from '../data/cards.catalog';
import type { BoardCard } from '../types/cards';
import type { LevelConfig } from '../types/game';
import { shuffleArray } from './shuffle';

export function createBoardForLevel(level: LevelConfig): BoardCard[] {
  const selectedFaces = shuffleArray(CARDS_CATALOG).slice(0, level.pairs);

  const duplicatedDeck: BoardCard[] = selectedFaces.flatMap((face) => [
    {
      ...face,
      boardId: `${face.pairId}-a-${crypto.randomUUID()}`,
      isFlipped: false,
      isMatched: false,
    },
    {
      ...face,
      boardId: `${face.pairId}-b-${crypto.randomUUID()}`,
      isFlipped: false,
      isMatched: false,
    },
  ]);

  return shuffleArray(duplicatedDeck);
}