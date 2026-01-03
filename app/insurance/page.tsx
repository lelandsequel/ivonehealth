import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
    title: 'Insurance & Approvals | IV One Health',
    description: 'Information about insurance coverage, direct billing, and self-pay options for infusion therapy in Riyadh.',
};

export default function InsuranceApprovals() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="hero hero-photo"
                style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
            >
                <div className="container">
                    <div className="hero-inner">
                        <span className="section-label">Payment & Coverage</span>
                        <h1 className="hero-title">Insurance & Payment Information</h1>
                        <p className="hero-lede">
                            Insurance coverage and approvals depend on your plan, diagnosis, and the prescribed medication. This page explains the process in neutral terms so you know what to expect.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <Container>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Accepted Insurance</h2>
                        <p className="mb-4">
                            We work with many insurers and networks under CHI (Council of Health Insurance) requirements. Coverage varies by plan and by medication.
                        </p>
                        <p className="mb-4">
                            Depending on your plan, insurance may cover:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                            <li>Specialty medications prescribed by your specialist (for example, biologics or IVIG)</li>
                            <li>Oncology infusions when ordered by your oncologist</li>
                            <li>Supportive infusions when medically indicated (for example, iron)</li>
                        </ul>
                        <p className="text-sm text-gray-500 italic">
                            Please contact our clinic for the most up-to-date list of networked providers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">The Approval Process</h2>
                        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                            <p>
                                <strong>1. Verifying Benefits:</strong> We check your eligibility and specific coverage benefits before your first appointment.
                            </p>
                            <p>
                                <strong>2. Prior Authorization:</strong> Many specialty drugs require prior authorization. Our team submits the medical justification from your doctor to your insurer.
                            </p>
                            <p>
                                <strong>3. Cost Transparency:</strong> If there are co-pays, deductibles, or non-covered services, we will inform you in advance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-primary">Self-Pay & Cash Options</h2>
                    <p className="mb-4 max-w-3xl">
                        If your plan does not cover a prescribed infusion, or if you are paying out of pocket, we can provide an estimate based on the ordered medication and the required monitoring protocol.
                    </p>
                </div>

                <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: "rgba(224, 242, 241, 0.35)" }}>
                    <h3 className="text-xl font-bold mb-2">Questions about your coverage?</h3>
                    <p className="mb-4">We can help you understand the steps and what information your insurer may request.</p>
                    <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors">
                        Contact
                    </a>
                </div>
                </Container>
            </section>
        </main>
    );
}
