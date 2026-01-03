import { notFound } from 'next/navigation';
import Link from 'next/link';
import services from '@/data/services.json';

const isDev = process.env.NODE_ENV === "development";
const DEV_LIMIT = 20;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const all = services.map((service) => service.slug);
    const list = isDev ? all.slice(0, DEV_LIMIT) : all;
    return list.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.title} in Riyadh | IV One Health`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="section section-gray">
            <div className="container" style={{ maxWidth: '56rem' }}>
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link href="/services">Services</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{service.category}</span>
                </nav>

                <h1 style={{ marginBottom: '2rem' }}>{service.title}</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--gray-200)' }}>{service.description}</p>

                <div className="grid md-grid-cols-2 gap-8 mb-12">
                    <div className="card">
                        <h3>What it is</h3>
                        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
                            {service.title} involves the administration of medication directly into the bloodstream.
                            This method allows for rapid absorption and is often required for medications that cannot be taken orally or need strict dosing control.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Who it&apos;s for</h3>
                        <p style={{ color: 'var(--gray-600)', margin: 0 }}>
                            This therapy is prescribed by a physician when IV administration is clinically appropriate for the medication and your condition.
                            Eligibility, protocols, and monitoring requirements vary by drug and diagnosis.
                        </p>
                    </div>
                </div>

                <section style={{ backgroundColor: 'var(--secondary)', padding: '2.5rem', borderRadius: 'var(--radius-2xl)', marginBottom: '3rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>What to expect at IV One Health</h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <span className="step-number">1</span>
                            <span><strong>Initial Assessment:</strong> Check-in and vitals monitoring by our nursing team.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <span className="step-number">2</span>
                            <span><strong>Private Suites:</strong> Administration in a comfortable, private environment.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <span className="step-number">3</span>
                            <span><strong>Monitoring:</strong> Continuous observation to ensure safety and comfort.</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <span className="step-number">4</span>
                            <span><strong>Post-Care:</strong> Clear instructions and follow-up scheduling.</span>
                        </li>
                    </ul>
                </section>

                <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '2.5rem', borderRadius: 'var(--radius-2xl)', textAlign: 'center' }}>
                    <h3 style={{ color: 'white', marginBottom: '1rem' }}>Questions about scheduling?</h3>
                    <p style={{ color: 'var(--primary-light)', marginBottom: '2rem', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        We can explain the steps, confirm required documents from your physician, and help you understand insurance approval timelines.
                    </p>
                    <Link href="/contact" className="btn btn-white">Contact</Link>
                </div>
            </div>
        </main>
    );
}
