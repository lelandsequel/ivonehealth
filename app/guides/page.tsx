import Link from 'next/link';
import guides from '@/data/guides.json';

export const metadata = {
    title: 'Infusion Therapy Guides | IV One Health',
    description: 'Common questions and answers about infusion therapy including safety, preparation, and what to expect.',
};

export default function GuidesHub() {
    const categories = Array.from(new Set(guides.map(g => g.category)));

    return (
        <main>
            {/* Hero Section */}
            <section
                className="hero hero-photo"
                style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
            >
                <div className="container">
                    <div className="hero-inner">
                        <span className="section-label">Patient Education</span>
                        <h1 className="hero-title">Infusion Therapy Guides</h1>
                        <p className="hero-lede">
                            Straightforward answers to your questions about infusion therapy, safety, and patient care.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">

                <div className="stack-lg">
                    {categories.map(category => (
                        <section key={category}>
                            <h2 className="category-heading">{category}</h2>
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
            </section>
        </main>
    );
}
