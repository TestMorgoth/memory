import { LEVELS } from '../config/levels.config';
import type { GameState } from '../types/game';

export const initialGameState: GameState = {
  screen: 'boot',
  levels: LEVELS,
  currentLevelIndex: 0,
  pendingLevelIndex: null,
  board: [],
  flippedIds: [],
  attempts: 0,
  matches: 0,
  totalElapsedSec: 0,
  levelRemainingSec: LEVELS[0].timeLimitSec,
  inputLocked: false,
  result: null,
  bootReady: false,
};