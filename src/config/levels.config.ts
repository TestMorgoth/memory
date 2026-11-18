import type { LevelConfig } from '../types/game';

export const LEVELS: readonly LevelConfig[] = [
  { id: 'warmup', title: 'Warm Up', rows: 2, cols: 4, pairs: 4, timeLimitSec: 15 },
  { id: 'challenge', title: 'Challenge', rows: 3, cols: 4, pairs: 6, timeLimitSec: 30 },
  { id: 'master', title: 'Memory Master', rows: 4, cols: 4, pairs: 8, timeLimitSec: 45 },
] as const;