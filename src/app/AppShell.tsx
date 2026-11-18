import { useCallback, useEffect, useMemo } from 'react';
import { GAME_CONFIG } from '../config/game.config';
import { KIOSK_CONFIG } from '../config/kiosk.config';
import { FINAL_MESSAGES } from '../data/final-messages';
import { useCountdown } from '../hooks/useCountdown';
import { useGameSession } from '../hooks/useGameSession';
import { useInactivityReset } from '../hooks/useInactivityReset';
import { useKioskLock } from '../hooks/useKioskLock';
import { usePreload } from '../hooks/usePreload';
import { AttractScreen } from '../screens/AttractScreen';
import { BootScreen } from '../screens/BootScreen';
import { GameScreen } from '../screens/GameScreen';
import { IntroScreen } from '../screens/IntroScreen';
import { ResultScreen } from '../screens/ResultScreen';
import { TransitionScreen } from '../screens/TransitionScreen';

function pickFinalMessage(result: 'success' | 'fail', attempts: number): string {
  if (result === 'fail') return FINAL_MESSAGES.fail[0];
  return attempts <= 20 ? FINAL_MESSAGES.successFast[0] : FINAL_MESSAGES.successSlow[0];
}

export function AppShell() {
  const { ready, error } = usePreload();
  const { state, currentLevel, actions } = useGameSession();

  const {
    bootReady,
    goToAttract,
    startGame,
    startTransition,
    startLevel,
    flipCard,
    tick,
  } = actions;

  useKioskLock();

  useEffect(() => {
    if (ready || error) {
      bootReady();
    }
  }, [ready, error, bootReady]);

  useCountdown(state.screen === 'playing', tick);

  useInactivityReset(state.screen !== 'boot', KIOSK_CONFIG.inactivityResetMs, goToAttract);

  useEffect(() => {
    if (state.screen !== 'result') return;

    const timer = window.setTimeout(goToAttract, GAME_CONFIG.finalAutoResetMs);
    return () => window.clearTimeout(timer);
  }, [state.screen, goToAttract]);

  const handleAttractStart = useCallback(() => {
    startGame();
  }, [startGame]);

  const handleIntroStart = useCallback(() => {
    startTransition(0);
  }, [startTransition]);

  const handleTransitionDone = useCallback(() => {
    if (state.pendingLevelIndex === null) return;
    startLevel(state.pendingLevelIndex);
  }, [state.pendingLevelIndex, startLevel]);

  const resultMessage = useMemo(() => {
    if (!state.result) return '';
    return pickFinalMessage(state.result, state.attempts);
  }, [state.result, state.attempts]);

  switch (state.screen) {
    case 'boot':
      return <BootScreen />;

    case 'attract':
      return <AttractScreen onStart={handleAttractStart} />;

    case 'intro':
      return <IntroScreen onStartLevel={handleIntroStart} />;

    case 'transition':
      return (
        <TransitionScreen
          title={
            state.pendingLevelIndex !== null
              ? state.levels[state.pendingLevelIndex]?.title ?? 'Livello successivo'
              : 'Livello successivo'
          }
          onDone={handleTransitionDone}
        />
      );

    case 'playing':
      return (
        <GameScreen
          level={currentLevel}
          cards={state.board}
          attempts={state.attempts}
          remainingSec={state.levelRemainingSec}
          inputLocked={state.inputLocked}
          onCardClick={flipCard}
        />
      );

    case 'result':
      return (
        <ResultScreen
          message={resultMessage}
          totalElapsedSec={state.totalElapsedSec}
          attempts={state.attempts}
          onReset={goToAttract}
        />
      );

    default:
      return <BootScreen />;
  }
}