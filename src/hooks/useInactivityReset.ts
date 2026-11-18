import { useEffect, useRef } from 'react';

export function useInactivityReset(enabled: boolean, timeoutMs: number, onTimeout: () => void) {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const restartTimer = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(onTimeout, timeoutMs);
    };

    const events: Array<keyof WindowEventMap> = ['pointerdown', 'pointermove', 'touchstart', 'click'];
    events.forEach((eventName) => window.addEventListener(eventName, restartTimer, { passive: true }));
    restartTimer();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      events.forEach((eventName) => window.removeEventListener(eventName, restartTimer));
    };
  }, [enabled, timeoutMs, onTimeout]);
}