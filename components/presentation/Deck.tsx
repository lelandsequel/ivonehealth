"use client";

import { useEffect, useMemo, useState } from "react";
import type { DeckSlide } from "@/content/seoOsDeck";
import Slide from "@/components/presentation/Slide";

export function PresentationDeck({ slides }: { slides: DeckSlide[] }) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [idx, setIdx] = useState(0);

  const slide = safeSlides[idx];
  const total = safeSlides.length;

  function prev() {
    setIdx((v) => Math.max(0, v - 1));
  }

  function next() {
    setIdx((v) => Math.min(total - 1, v + 1));
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Home") setIdx(0);
      if (e.key === "End") setIdx(total - 1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  if (!slide) return null;

  const progress = total <= 1 ? 100 : Math.round(((idx + 1) / total) * 100);

  return (
    <div className="deck">
      <header className="deck-header">
        <div className="deck-header-left">
          <div className="deck-kicker">SEO OS</div>
          <div className="deck-title">How This Site Was Built</div>
        </div>
        <div className="deck-header-right">
          <div className="deck-meta">
            <span className="deck-count">
              {idx + 1} / {total}
            </span>
            <div className="deck-progress" aria-label={`Slide progress: ${progress}%`}>
              <div className="deck-progress-bar" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="deck-actions">
            <button className="btn btn-outline deck-btn" onClick={prev} disabled={idx === 0}>
              Prev
            </button>
            <button className="btn btn-primary deck-btn" onClick={next} disabled={idx === total - 1}>
              Next
            </button>
          </div>
        </div>
      </header>

      <main className="deck-slide" role="region" aria-label="Slide">
        <Slide slide={slide} />
      </main>

      <footer className="deck-footer">
        <div className="deck-hint">Keyboard: ← / → (Home / End)</div>
      </footer>
    </div>
  );
}


