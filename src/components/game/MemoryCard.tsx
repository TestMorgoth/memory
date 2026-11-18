import { GAME_CONFIG } from '../../config/game.config';
import { CARD_BACK_IMAGE } from '../../data/cards.catalog';
import type { BoardCard } from '../../types/cards';

type Props = {
  card: BoardCard;
  disabled: boolean;
  onClick: (boardId: string) => void;
};

export function MemoryCard({ card, disabled, onClick }: Props) {
  const isFaceUp = card.isFlipped || card.isMatched;

  return (
    <button
      type="button"
      aria-label={card.title}
      disabled={disabled || card.isMatched}
      onClick={() => onClick(card.boardId)}
      className="group relative h-full w-full overflow-hidden rounded-kiosk border border-white/15 bg-white/10 shadow-kiosk"
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={{
          transform: isFaceUp ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: `transform ${GAME_CONFIG.cardFlipDurationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-kiosk [backface-visibility:hidden]">
          <img
            src={CARD_BACK_IMAGE}
            alt="Card back"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden rounded-kiosk [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-kiosk ring-1 ring-inset ring-white/10" />

      {card.isMatched && (
        <div className="pointer-events-none absolute inset-0 rounded-kiosk bg-white/5 ring-2 ring-brand-ice/60" />
      )}
    </button>
  );
}