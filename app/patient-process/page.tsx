import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
    title: 'Patient Care Process | IV One Health',
    description: 'Understand the infusion therapy journey at IV One Health, from referral and prescription to comfortable, monitored treatment.',
};

export default function PatientProcess() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="hero hero-photo"
                style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
            >
                <div className="container">
                    <div className="hero-inner">
                        <span className="section-label">How It Works</span>
                        <h1 className="hero-title">The Patient Care Process</h1>
                        <p className="hero-lede">
                            This page explains the typical steps for prescription-based infusion care. Your referring physician directs your medical plan; our role is safe administration and coordination.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <Container>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Referral & Prescription</h2>
                            <p className="text-lg">
                                Your treatment begins with an order from your managing physician (for example, an oncologist, rheumatologist, or neurologist). We confirm the medication, dose, frequency, and required monitoring instructions before scheduling.
                            </p>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Insurance & Approval</h2>
                            <p className="text-lg">
                                When required by your plan, we support benefits verification and prior authorization paperwork using documentation from your physician. Coverage and timelines vary by insurer and medication.
                            </p>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Your Appointment</h2>
                            <p className="text-lg mb-4">
                                On the day of your infusion, you will be checked in and brought to a clinical space designed for comfort and infection control.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li><strong>Check-in:</strong> Identification, consent, and a vitals assessment (as ordered).</li>
                                <li><strong>Comfort:</strong> Bring something to read or listen to; sessions vary in length by medication.</li>
                                <li><strong>Support:</strong> Depending on clinic policy and infection control needs, a companion may be allowed.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Clinical Supervision & Monitoring</h2>
                            <p className="text-lg">
                                Infusion nurses monitor you throughout the session and follow your prescribed protocol, including observation periods when applicable. If you feel unwell at any point, tell your nurse right away.
                            </p>
                        </div>
                    </section>

                    {/* Step 5 */}
                    <section className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-3 text-primary">Wrap-Up & Follow-Up</h2>
                            <p className="text-lg">
                                After your infusion, we review any post-care instructions and coordinate documentation with your referring physician to support continuity of care. Follow-up scheduling depends on your treatment plan and authorization status.
                            </p>
                        </div>
                    </section>
                </div>
                </Container>
            </section>
        </main>
    );
}
