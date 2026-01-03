import type { Metadata } from "next";
import Container from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | IV One Health",
  description:
    "Contact IV One Health for scheduling, referrals, and insurance coordination for prescription-based infusion therapy in Riyadh.",
};

export default function ContactPage() {
  const hasPhone = Boolean(SITE.phoneE164);

  return (
    <main className="section section-gray">
      <Container className="max-w-4xl">
        <div className="card">
          <h1 style={{ marginBottom: "1.25rem" }}>Contact</h1>
          <p style={{ fontSize: "1.125rem", color: "var(--gray-700)", marginBottom: "1.75rem" }}>
            For medical infusion therapy, treatment must be <strong>prescribed by your managing physician</strong>.
            We can help with scheduling, coordinating orders, and explaining the insurance approval process.
          </p>

          <div className="grid md-grid-cols-2 gap-8">
            <section>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Clinic contact</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.5rem" }}>
                {hasPhone ? (
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href={`tel:${SITE.phoneE164}`} className="hover-underline">
                      {SITE.phoneE164}
                    </a>
                  </li>
                ) : (
                  <li>
                    <strong>Phone:</strong> Available on request
                  </li>
                )}
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${SITE.email}`} className="hover-underline">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> {SITE.city}, {SITE.country}
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>What helps us schedule faster</h2>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>Physician order (medication, dose, frequency, and required monitoring)</li>
                <li>Recent clinic notes and relevant lab results (when applicable)</li>
                <li>Insurance details (for benefits verification and prior authorization)</li>
              </ul>
              <p style={{ marginTop: "1rem", color: "var(--gray-600)", fontSize: "0.95rem" }}>
                This page is informational and not medical advice. For urgent symptoms, contact emergency services.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}


