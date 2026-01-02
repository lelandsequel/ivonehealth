import Link from 'next/link';
import guides from '@/data/guides.json';

export const metadata = {
    title: 'Infusion Therapy Guides | IV One Health',
    description: 'Common questions and answers about infusion therapy including safety, preparation, and what to expect.',
};

export default function GuidesHub() {
    const categories = Array.from(new Set(guides.map(g => g.category)));

    return (
        <main className="section section-gray">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Patient Education</span>
                    <h1 className="section-title">Infusion Therapy Guides</h1>
                    <p className="section-description">
                        Straightforward answers to your questions about infusion therapy, safety, and patient care.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {categories.map(category => (
                        <section key={category}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--gray-200)' }}>{category}</h2>
                            <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
                                {guides.filter(g => g.category === category).map(guide => (
                                    <Link href={`/guides/${guide.slug}`} key={guide.slug} className="content-card">
                                        <h3 className="content-card-title" style={{ color: 'var(--gray-900)', fontSize: '1.125rem' }}>{guide.question}</h3>
                                        <p className="content-card-description" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{guide.shortAnswer}</p>
                                        <span className="content-card-link" style={{ marginTop: 'auto' }}>Read Answer →</span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
