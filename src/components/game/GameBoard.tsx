import { useBoardLayout } from '../../hooks/useBoardLayout';
import type { BoardCard } from '../../types/cards';
import { MemoryCard } from './MemoryCard';

type Props = {
  cards: BoardCard[];
  rows: number;
  cols: number;
  inputLocked: boolean;
  onCardClick: (boardId: string) => void;
};

export function GameBoard({ cards, rows, cols, inputLocked, onCardClick }: Props) {
  const {
    containerRef,
    cardWidth,
    cardHeight,
    gap,
    boardWidth,
    boardHeight,
    isReady,
  } = useBoardLayout(rows, cols);

  return (
    <div ref={containerRef} className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div
          className="grid"
          style={{
            width: boardWidth,
            height: boardHeight,
            gap: `${gap}px`,
            gridTemplateColumns: `repeat(${cols}, ${cardWidth}px)`,
            gridTemplateRows: `repeat(${rows}, ${cardHeight}px)`,
            visibility: isReady ? 'visible' : 'hidden',
          }}
        >
          {cards.map((card) => (
            <div key={card.boardId} style={{ width: cardWidth, height: cardHeight }}>
              <MemoryCard card={card} disabled={inputLocked} onClick={onCardClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}