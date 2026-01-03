import Link from 'next/link';
import conditions from '@/data/conditions.json';

export const metadata = {
    title: 'Conditions Treated | IV One Health',
    description: 'List of chronic and acute conditions treated at IV One Health Riyadh, including autoimmune diseases, oncology, and more.',
};

export default function ConditionsHub() {
    const categories = Array.from(new Set(conditions.map(c => c.category)));

    return (
        <main>
            {/* Hero Section */}
            <section
                className="hero hero-photo"
                style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
            >
                <div className="container">
                    <div className="hero-inner">
                        <span className="section-label">Our Expertise</span>
                        <h1 className="hero-title">Conditions We Treat</h1>
                        <p className="hero-lede">
                            Specialized infusion care for a wide range of medical conditions, administered under strict safety protocols.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section section-gray">
                <div className="container">

                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {categories.map(category => (
                        <section key={category} className="card">
                            <h2 className="card-title-divider">{category}</h2>
                            <ul style={{ listStyle: 'none' }}>
                                {conditions.filter(c => c.category === category).map(condition => (
                                    <li key={condition.slug}>
                                        <Link href={`/conditions-we-treat/${condition.slug}`} className="list-item">
                                            <span className="list-item-dot"></span>
                                            {condition.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
                </div>
            </section>
        </main>
    );
}
