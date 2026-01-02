import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
    title: 'Patient Care Process | IV One Health',
    description: 'Understand the infusion therapy journey at IV One Health, from referral and prescription to comfortable, monitored treatment.',
};

export default function PatientProcess() {
    return (
        <main className="py-12">
            <Container>
                <h1 className="text-4xl font-bold mb-8 text-primary">The Patient Care Process</h1>
                <p className="text-xl mb-12 max-w-3xl">
                    At IV One Health, your safety and comfort are our priorities. We administer expert infusion care in a private, clinical setting under strict medical supervision.
                </p>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Referral & Prescription</h2>
                            <p className="text-lg">
                                Your treatment begins with a prescription from your managing physician (e.g., oncologist, rheumatologist, neurologist). We coordinate directly with your doctor to ensure we have the precise orders, dosage, and protocols for your therapy. We review every order for safety before scheduling.
                            </p>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Insurance & Approval</h2>
                            <p className="text-lg">
                                Our team handles the prior authorization process with your insurance provider. We verify coverage and discuss any out-of-pocket costs with you upfront, so there are no surprises.
                            </p>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Your Appointment</h2>
                            <p className="text-lg mb-4">
                                On the day of your infusion, you will be welcomed into a private infusion suite designed for comfort and infection control.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Arrival:</strong> Please arrive 15 minutes early for initial vitals check.</li>
                                <li><strong>Comfort:</strong> Our suites include reclining chairs, Wi-Fi, and entertainment options.</li>
                                <li><strong>Support:</strong> You are welcome to bring one companion if you wish.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Clinical Supervision & Monitoring</h2>
                            <p className="text-lg">
                                Dedicated infusion nurses monitor you throughout the entire session. We track vital signs and watch for any reactions. Our clinical team is trained to manage hypersensitivity and emergency situations immediately.
                            </p>
                        </div>
                    </section>

                    {/* Step 5 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Wrap-Up & Follow-Up</h2>
                            <p className="text-lg">
                                After your infusion, we ensure you are stable and ready to leave. We share treatment records with your referring physician to maintain continuity of care. We will schedule your next session before you depart.
                            </p>
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}
