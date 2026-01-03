import type { Metadata } from "next";
import Container from "@/components/Container";
import { SegmentedToggle } from "@/components/SegmentedToggle";
import { PresentationDeck } from "@/components/presentation/Deck";
import { seoOsDeck } from "@/content/seoOsDeck";

export const metadata: Metadata = {
  title: "How This Site Was Built (SEO OS) | C&L Strategy",
  description:
    "A presentation explaining the SEO/AEO/pSEO system used to build this site (C&L Strategy).",
};

export default function PresentationPage() {
  return (
    <main className="section section-gray">
      <Container className="max-w-4xl">
        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
          <h1 style={{ margin: 0 }}>How This Site Was Built</h1>
          <SegmentedToggle
            label="Presentation view"
            options={[
              { label: "Slides", href: "/presentation", isActive: true },
              { label: "Leave-Behind", href: "/presentation/leave-behind", isActive: false },
            ]}
          />
        </div>

        <div className="card">
          <PresentationDeck slides={seoOsDeck} />
        </div>
      </Container>
    </main>
  );
}


