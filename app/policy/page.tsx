import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
    title: 'Editorial Policy & Medical Disclaimer | IV One Health',
    description: 'Our commitment to clinical accuracy, medical review standards, and disclaimer regarding medical advice.',
};

export default function EditorialPolicy() {
    return (
        <main className="py-12">
            <Container>
                <h1 className="text-4xl font-bold mb-8 text-primary">Editorial Policy & Medical Disclaimer</h1>

                <div className="prose max-w-none space-y-8 text-lg">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Medical Disclaimer</h2>
                        <p className="mb-4">
                            The content on the IV One Health website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                        <p className="mb-4">
                            Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
                        </p>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary">
                            <strong>Note:</strong> IV One Health does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website. Reliance on any information provided by IV One Health, IV One employees, others appearing on the site at the invitation of IV One Health, or other visitors to the site is solely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Editorial Standards</h2>
                        <p className="mb-4">
                            We are committed to providing accurate, evidence-based, and medically reviewed information. Our content creation process follows strict guidelines:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Clinical Accuracy:</strong> We aim to align content with widely accepted clinical guidance and standard practice. When content is reviewed, it is reviewed for clarity and safety.</li>
                            <li><strong>Evidence-Based:</strong> We avoid outcome promises and sensational language. Responses to therapy vary by patient, diagnosis, and medication.</li>
                            <li><strong>Transparency:</strong> We distinguish between patient education content and the care plan prescribed by your physician.</li>
                            <li><strong>Updates:</strong> We periodically review pages to keep information current and easy to understand.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Clinic & Regulatory Context</h2>
                        <p className="mb-4">
                            IV One Health is an outpatient infusion clinic in the Kingdom of Saudi Arabia. We follow applicable safety and infection control requirements, and we administer therapies based on physician orders and documented protocols.
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
