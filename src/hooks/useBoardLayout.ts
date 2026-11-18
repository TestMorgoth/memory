import { useEffect, useMemo, useRef, useState } from 'react';
import { CARD_ASPECT_RATIO } from '../types/cards';

type BoardLayout = {
  containerRef: React.RefObject<HTMLDivElement>;
  cardWidth: number;
  cardHeight: number;
  gap: number;
  boardWidth: number;
  boardHeight: number;
  isReady: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function useBoardLayout(rows: number, cols: number): BoardLayout {
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      setContainerSize({
        width,
        height,
      });
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return useMemo(() => {
    const width = containerSize.width;
    const height = containerSize.height;

    if (!width || !height) {
      return {
        containerRef,
        cardWidth: 0,
        cardHeight: 0,
        gap: 0,
        boardWidth: 0,
        boardHeight: 0,
        isReady: false,
      };
    }

    const gap = clamp(Math.round(Math.min(width, height) * 0.012), 8, 16);

    const maxCardWidthByWidth = (width - gap * (cols - 1)) / cols;
    const maxCardWidthByHeight = ((height - gap * (rows - 1)) / rows) * CARD_ASPECT_RATIO;

    const cardWidth = Math.floor(Math.min(maxCardWidthByWidth, maxCardWidthByHeight));
    const cardHeight = Math.floor(cardWidth / CARD_ASPECT_RATIO);

    const boardWidth = cardWidth * cols + gap * (cols - 1);
    const boardHeight = cardHeight * rows + gap * (rows - 1);

    return {
      containerRef,
      cardWidth,
      cardHeight,
      gap,
      boardWidth,
      boardHeight,
      isReady: cardWidth > 0 && cardHeight > 0,
    };
  }, [containerSize.width, containerSize.height, rows, cols]);
}