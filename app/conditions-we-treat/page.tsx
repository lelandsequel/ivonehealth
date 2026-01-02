import Link from 'next/link';
import conditions from '@/data/conditions.json';

export const metadata = {
    title: 'Conditions Treated | IV One Health',
    description: 'List of chronic and acute conditions treated at IV One Health Riyadh, including autoimmune diseases, oncology, and more.',
};

export default function ConditionsHub() {
    const categories = Array.from(new Set(conditions.map(c => c.category)));

    return (
        <main className="section section-gray">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Expertise</span>
                    <h1 className="section-title">Conditions We Treat</h1>
                    <p className="section-description">
                        Specialized infusion care for a wide range of medical conditions, administered under strict safety protocols.
                    </p>
                </div>

                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
                    {categories.map(category => (
                        <section key={category} className="card">
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-100)' }}>{category}</h2>
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
        </main>
    );
}
