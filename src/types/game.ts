import type { BoardCard } from './cards';

export type LevelId = 'warmup' | 'challenge' | 'master';

export type LevelConfig = {
  id: LevelId;
  title: string;
  rows: number;
  cols: number;
  pairs: number;
  timeLimitSec: number;
};

export type ScreenState =
  | 'boot'
  | 'attract'
  | 'intro'
  | 'transition'
  | 'playing'
  | 'result';

export type ResultType = 'success' | 'fail' | null;

export type GameState = {
  screen: ScreenState;
  levels: readonly LevelConfig[];
  currentLevelIndex: number;
  pendingLevelIndex: number | null;
  board: BoardCard[];
  flippedIds: string[];
  attempts: number;
  matches: number;
  totalElapsedSec: number;
  levelRemainingSec: number;
  inputLocked: boolean;
  result: ResultType;
  bootReady: boolean;
};