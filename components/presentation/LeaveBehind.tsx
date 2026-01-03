import type { DeckSlide } from "@/content/seoOsDeck";
import PrintButton from "@/components/PrintButton";
import Image from "next/image";

export function PresentationLeaveBehind({ slides }: { slides: DeckSlide[] }) {
  return (
    <div className="leavebehind">
      <header className="leavebehind-header">
        <div>
          <div className="leavebehind-kicker">Presentation Leave-Behind</div>
          <h1 className="leavebehind-title">C&amp;L Strategy — SEO OS</h1>
          <p className="leavebehind-subtitle">
            Summary document for stakeholders (informational; SEO system overview).
          </p>
        </div>
        <div className="leavebehind-actions no-print">
          <PrintButton />
        </div>
      </header>

      <div className="leavebehind-content">
        {slides.map((s) => (
          <section key={s.id} className="leavebehind-section">
            <h2 className="leavebehind-h2">{s.title}</h2>
            {s.subtitle ? <p className="leavebehind-subtitleline">{s.subtitle}</p> : null}
            {s.imageSrc ? (
              <div className="leavebehind-imagewrap">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt ?? ""}
                  width={1400}
                  height={788}
                  className="leavebehind-image"
                />
              </div>
            ) : null}
            {s.body.map((p) => (
              <p key={p} className="leavebehind-p">
                {p}
              </p>
            ))}
            {s.bullets?.length ? (
              <ul className="leavebehind-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}


