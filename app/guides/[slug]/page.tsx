import { notFound } from 'next/navigation';
import Link from 'next/link';
import guides from '@/data/guides.json';

const isDev = process.env.NODE_ENV === "development";
const DEV_LIMIT = 20;

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const all = guides.map((guide) => guide.slug);
    const list = isDev ? all.slice(0, DEV_LIMIT) : all;
    return list.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);
    if (!guide) return {};
    return {
        title: `${guide.question} | IV One Health Guides`,
        description: guide.shortAnswer,
    };
}

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find((g) => g.slug === slug);

    if (!guide) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [{
            '@type': 'Question',
            'name': guide.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': guide.shortAnswer
            }
        }]
    };

    return (
        <main className="section section-gray">
            <div className="container" style={{ maxWidth: '56rem' }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link href="/guides">Guides</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{guide.category}</span>
                </nav>

                <h1 style={{ marginBottom: '2.5rem' }}>{guide.question}</h1>

                {/* Direct Answer Block (AEO Core) */}
                <div className="answer-block">
                    <p>{guide.shortAnswer}</p>
                </div>

                <div className="card prose">
                    <section>
                        <h2>Detailed Explanation</h2>
                        <p>
                            At IV One Health, we believe informed patients have better outcomes. {guide.question} is a common question we hear.
                            Appropriate infusion therapy relies on a clear understanding of the procedure, safety protocols, and expected results.
                        </p>
                    </section>

                    <section>
                        <h2>Safety & Clinical Context</h2>
                        <p>
                            Under strict medical supervision, infusion therapy is a safe and effective way to manage chronic conditions.
                            Our nurses monitor vital signs throughout the process to ensure patient safety.
                        </p>
                    </section>

                    <section>
                        <h2>When to Contact a Physician</h2>
                        <p>
                            While our clinic manages the administration of therapy, your treating physician remains in charge of your overall care plan.
                            Always contact your doctor if you experience new symptoms or changes in your condition.
                        </p>
                    </section>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--gray-200)' }}>
                    <h2>Have more questions?</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.125rem', color: 'var(--gray-600)' }}>Our clinical team is ready to assist you with scheduling and insurance inquiries.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        <Link href="/contact" className="btn btn-primary">Contact the Clinic</Link>
                        <Link href="/conditions-we-treat" className="btn btn-outline">View Conditions Treated</Link>
                    </div>
                </div>

                <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-200)', fontSize: '0.875rem', color: 'var(--gray-400)' }}>
                    <p>Medically Reviewed by IV One Health Clinical Team. Last updated: January 2026.</p>
                </div>
            </div>
        </main>
    );
}
