import Link from 'next/link';
import services from '@/data/services.json';

export const metadata = {
    title: 'Infusion Services in Riyadh | IV One Health',
    description: 'Professional outpatient infusion services including biologics, chemotherapy, IVIG, and iron therapy.',
};

export default function ServicesHub() {
    const categories = Array.from(new Set(services.map(s => s.category)));

    return (
        <main className="section section-gray">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Comprehensive Care</span>
                    <h1 className="section-title">Infusion Services</h1>
                    <p className="section-description">
                        Clinical excellence in outpatient infusion care, providing a safe and comfortable alternative to hospital admission.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {categories.map(category => (
                        <section key={category}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{ width: '2rem', height: '2rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>
                                    {category.charAt(0)}
                                </span>
                                {category}
                            </h2>
                            <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
                                {services.filter(s => s.category === category).map(service => (
                                    <Link href={`/services/${service.slug}`} key={service.slug} className="content-card">
                                        <h3 className="content-card-title" style={{ color: 'var(--primary)' }}>{service.title}</h3>
                                        <p className="content-card-description">{service.description}</p>
                                        <span className="content-card-link">Learn More →</span>
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
