import { useEffect } from 'react';

export function useCountdown(enabled: boolean, onTick: () => void) {
  useEffect(() => {
    if (!enabled) return;
    const timer = window.setInterval(onTick, 1000);
    return () => window.clearInterval(timer);
  }, [enabled, onTick]);
}