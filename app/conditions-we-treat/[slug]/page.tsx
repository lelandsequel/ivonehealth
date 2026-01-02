import { notFound } from 'next/navigation';
import Link from 'next/link';
import conditions from '@/data/conditions.json';

const isDev = process.env.NODE_ENV === "development";
const DEV_LIMIT = 20;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const all = conditions.map((condition) => condition.slug);
    const list = isDev ? all.slice(0, DEV_LIMIT) : all;
    return list.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const condition = conditions.find((c) => c.slug === slug);
    if (!condition) return {};
    return {
        title: `${condition.title} Treatment Riyadh | IV One Health`,
        description: `Infusion therapy and care for ${condition.title} in Riyadh. Expert medical supervision and private suites.`,
    };
}

export default async function ConditionPage({ params }: Props) {
    const { slug } = await params;
    const condition = conditions.find((c) => c.slug === slug);

    if (!condition) {
        notFound();
    }

    return (
        <main className="section section-gray">
            <div className="container" style={{ maxWidth: '56rem' }}>
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link href="/conditions-we-treat">Conditions</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{condition.category}</span>
                </nav>

                {/* Header Card */}
                <div className="card mb-10">
                    <span className="category-badge">{condition.category}</span>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{condition.title} Infusion Therapy in Riyadh</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)' }}>
                        Specialized outpatient care for patients managing <strong>{condition.title}</strong>, administered by our expert clinical team.
                    </p>
                </div>

                {/* Content */}
                <div className="card prose">
                    <section>
                        <h2>Overview</h2>
                        <p>
                            IV One Health provides specialized infusion services for patients with <strong>{condition.title}</strong>.
                            We work closely with your prescribing specialist ({condition.category === 'Oncology' ? 'Oncologist' : condition.category === 'Rheumatology' ? 'Rheumatologist' : 'Specialist'})
                            to administer the exact protocol required for your care.
                        </p>
                    </section>

                    <section>
                        <h2>Why Infusion Therapy?</h2>
                        <p>
                            For many patients with {condition.title}, oral medications may not be sufficient or well-tolerated.
                            Infusion therapy (or IV therapy) delivers medication directly into the bloodstream, ensuring 100% bioavailability
                            and often faster, more effective symptom management.
                        </p>
                    </section>

                    <section>
                        <h2>Treatment Experience</h2>
                        <ul>
                            <li><strong>Prescription Based:</strong> We only administer therapies prescribed by a licensed physician.</li>
                            <li><strong>Private Care:</strong> Receive your treatment in a private suite, ensuring dignity and reducing infection risk.</li>
                            <li><strong>Nurse Monitoring:</strong> A dedicated infusion nurse is present to monitor for any side effects.</li>
                        </ul>
                    </section>
                </div>

                {/* CTA Card */}
                <div style={{ marginTop: '3rem', backgroundColor: 'var(--primary)', color: 'white', padding: '2.5rem', borderRadius: 'var(--radius-2xl)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Diagnosed with {condition.title}?</h3>
                        <p style={{ color: 'var(--primary-light)', fontSize: '1.125rem' }}>Talk to your doctor about referring you to IV One Health.</p>
                    </div>
                    <Link href="/contact" className="btn btn-white">Contact for Info</Link>
                </div>
            </div>
        </main>
    );
}
