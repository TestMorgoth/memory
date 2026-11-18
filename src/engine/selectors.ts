import type { GameState } from '../types/game';

export function getCurrentLevel(state: GameState) {
  return state.levels[state.currentLevelIndex];
}

export function areTwoCardsFlipped(state: GameState): boolean {
  return state.flippedIds.length === 2;
}

export function getFlippedCards(state: GameState) {
  return state.board.filter((card) => state.flippedIds.includes(card.boardId));
}

export function isCurrentLevelCompleted(state: GameState): boolean {
  return state.matches >= getCurrentLevel(state).pairs;
}