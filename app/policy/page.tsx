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
                            <li><strong>Clinical Accuracy:</strong> All medical content is reviewed by licensed healthcare professionals to ensure alignment with current clinical guidelines and standards of care.</li>
                            <li><strong>Evidence-Based:</strong> We claim outcomes only when supported by peer-reviewed research or established clinical protocols. We avoid "miracle cure" language.</li>
                            <li><strong>Transparency:</strong> We clearly distinguish between standard medical treatments (e.g., oncology, immunology) and supportive therapies (e.g., nutritional support).</li>
                            <li><strong>Updates:</strong> Medical knowledge evolves. We periodically review our content to ensure it remains current.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Licensed Clinic Information</h2>
                        <p className="mb-4">
                            IV One Health is a licensed outpatient infusion center operating under the Ministry of Health (MOH) in the Kingdom of Saudi Arabia. We adhere to all regulatory standards for infection control, medication safety, and patient care.
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
