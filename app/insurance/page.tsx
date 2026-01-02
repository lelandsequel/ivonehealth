import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
    title: 'Insurance & Approvals | IV One Health',
    description: 'Information about insurance coverage, direct billing, and self-pay options for infusion therapy in Riyadh.',
};

export default function InsuranceApprovals() {
    return (
        <main className="py-12">
            <Container>
                <h1 className="text-4xl font-bold mb-8 text-primary">Insurance & Payment Information</h1>
                <p className="text-xl mb-12 max-w-3xl">
                    We strive to make infusion therapy accessible. IV One Health works with major insurance providers in Saudi Arabia to facilitate direct billing and coverage for approved therapies.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Accepted Insurance</h2>
                        <p className="mb-4">
                            We accept most major insurance networks compliant with CHI (Council of Health Insurance) regulations. Coverage varies by specific plan and therapy type.
                        </p>
                        <p className="mb-4">
                            Common coverages often include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                            <li>Biologic therapies (e.g., for RA, Crohn's, Psoriasis)</li>
                            <li>IVIG (Immunoglobulin therapy)</li>
                            <li>Chemotherapy & Supportive Oncology Care</li>
                            <li>Iron Infusions (medical necessity)</li>
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
                        For patients without insurance coverage or for wellness/supportive therapies not covered by standard plans, we offer transparent self-pay pricing. We can provide a detailed estimate of costs for your specific prescribed therapy upon request.
                    </p>
                </div>

                <div className="mt-12 bg-secondary/20 p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Questions about your coverage?</h3>
                    <p className="mb-4">Our financial counselors are here to help you navigate your benefits.</p>
                    <a href="tel:+966000000000" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors">
                        Contact the Clinic
                    </a>
                </div>
            </Container>
        </main>
    );
}
