import { useEffect, useState } from 'react';
import { PRELOAD_MANIFEST } from '../data/preload-manifest';
import { preloadImages } from '../lib/preload';

export function usePreload() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    preloadImages(PRELOAD_MANIFEST)
      .then(() => setReady(true))
      .catch((err: Error) => setError(err.message));
  }, []);

  return { ready, error };
}