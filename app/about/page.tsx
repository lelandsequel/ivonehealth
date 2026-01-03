import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About | IV One Health",
  description:
    "About IV One Health — a prescription-based outpatient infusion clinic in Riyadh focused on safety, coordination, and patient comfort.",
};

export default function AboutPage() {
  return (
    <main className="section section-gray">
      <Container className="max-w-4xl">
        <div className="card prose">
          <h1>About IV One Health</h1>
          <p>
            IV One Health is an outpatient clinic focused on <strong>prescription-based infusion care</strong>.
            We coordinate with your referring specialist and administer therapies in a controlled clinical environment.
          </p>
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
    </main>
  );
}


