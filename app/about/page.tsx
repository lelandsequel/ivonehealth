import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About | IV One Health",
  description:
    "About IV One Health — a prescription-based outpatient infusion clinic in Riyadh focused on safety, coordination, and patient comfort.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero hero-photo"
        style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
      >
        <div className="container">
          <div className="hero-inner">
            <span className="section-label">Who We Are</span>
            <h1 className="hero-title">About IV One Health</h1>
            <p className="hero-lede">
              An outpatient clinic focused on prescription-based infusion care. We coordinate with your referring specialist and administer therapies in a controlled clinical environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <Container className="max-w-4xl">
          <div className="card prose">
          <h2>What we do</h2>
          <ul>
            <li>Coordinate physician orders and required monitoring protocols</li>
            <li>Support insurance verification and prior authorization (when applicable)</li>
            <li>Provide a private, calm setting designed for safe administration</li>
          </ul>
          <h2>What we don&apos;t do</h2>
          <ul>
            <li>We don&apos;t replace your specialist or make treatment decisions for your underlying condition</li>
            <li>We don&apos;t guarantee outcomes; responses to therapy vary by patient and medication</li>
          </ul>
          <p>
            For details on how we write patient education content, see our{" "}
            <a href="/policy">editorial policy and disclaimer</a>.
          </p>
        </div>
        </Container>
      </section>
    </main>
  );
}




