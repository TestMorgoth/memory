export type GameAction =
  | { type: 'BOOT_READY' }
  | { type: 'GO_TO_ATTRACT' }
  | { type: 'START_GAME' }
  | { type: 'START_TRANSITION'; levelIndex: number }
  | { type: 'START_LEVEL'; levelIndex: number }
  | { type: 'FLIP_CARD'; boardId: string }
  | { type: 'RESOLVE_MATCH' }
  | { type: 'RESOLVE_MISMATCH' }
  | { type: 'TICK' }
  | { type: 'GAME_SUCCESS' }
  | { type: 'GAME_FAIL' }
  | { type: 'RESET_ALL' };