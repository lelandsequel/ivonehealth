import Link from 'next/link';
import services from '@/data/services.json';
import conditions from '@/data/conditions.json';
import { SITE, getAbsoluteUrl } from "@/lib/site";
import Image from "next/image";

export default function Home() {
  const featuredConditions = conditions.slice(0, 6);
  const featuredServices = services.slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': 'IV One Health',
    'image': getAbsoluteUrl(SITE.logoPath),
    'url': SITE.siteUrl,
    'telephone': SITE.phoneE164,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SITE.city,
      'addressLocality': SITE.city,
      'addressCountry': 'SA'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      'opens': '09:00',
      'closes': '18:00'
    },
    'medicalSpecialty': ['InfusionTherapy', 'Oncology', 'Rheumatology', 'Gastroenterology']
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        className="hero hero-photo"
        style={{ backgroundImage: "url(/images/legacy/ivone-bg.jpg)" }}
      >
        <div className="container">
          <div style={{ maxWidth: '48rem' }}>
            <span className="section-label">Based in Riyadh, KSA</span>
            <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Specialized Infusion Therapy <br />
              <span style={{ color: 'var(--primary-light)' }}>Under Medical Supervision</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', marginBottom: '2.5rem', maxWidth: '40rem', fontWeight: 300 }}>
              IV One Health is an outpatient clinic providing prescription-based infusion care in a private, comfortable setting.
              We coordinate with your referring physician and follow the ordered protocol and monitoring requirements.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <Link href="/contact" className="btn btn-primary">Contact the Clinic</Link>
              <Link href="/conditions-we-treat" className="btn btn-outline">View Conditions</Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <span className="trust-badge"><span className="badge-dot badge-dot-green"></span> MOH-regulated</span>
              <span className="trust-badge"><span className="badge-dot badge-dot-blue"></span> CHI-aligned billing</span>
              <span className="trust-badge"><span className="badge-dot badge-dot-purple"></span> Private Suites</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip (legacy assets) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Clinic environment</span>
            <h2 className="section-title">A calm setting for outpatient care</h2>
            <p className="section-description">
              A few images from the clinic’s existing brand library.
            </p>
          </div>

          <div className="photo-grid">
            {[
              { src: "/images/legacy/Rectangle-522-1.png", alt: "Clinic photo 1" },
              { src: "/images/legacy/Rectangle-522-2.png", alt: "Clinic photo 2" },
              { src: "/images/legacy/Rectangle-522-3.png", alt: "Clinic photo 3" },
              { src: "/images/legacy/Rectangle-522-5-1024x955.png", alt: "Clinic photo 4" },
            ].map((img) => (
              <div key={img.src} className="photo-card">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1400}
                  height={900}
                  className="photo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-value">Expert Team</p>
              <p className="stat-label">Infusion nurses + clinical oversight</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">Safety First</p>
              <p className="stat-label">Infection control + monitoring protocols</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">Comfort</p>
              <p className="stat-label">Private suites designed for comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title">Conditions We Manage</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--gray-600)', maxWidth: '40rem' }}>
                We work with your physician to manage complex conditions through precise infusion therapies.
              </p>
            </div>
            <Link href="/conditions-we-treat" style={{ fontWeight: 700 }}>View All Conditions →</Link>
          </div>

          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {featuredConditions.map(condition => (
              <Link href={`/conditions-we-treat/${condition.slug}`} key={condition.slug} className="content-card">
                <span className="content-card-category">{condition.category}</span>
                <h3 className="content-card-title">{condition.title}</h3>
                <p className="content-card-description">Specialized infusion protocols available under medical supervision.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">Infusion Services</h2>
            <p className="section-description">From biologics to supportive care, we provide a full range of therapies tailored to your prescription.</p>
          </div>

          <div className="grid md-grid-cols-2 gap-8">
            {featuredServices.map(service => (
              <div key={service.slug} className="content-card">
                <h3 className="content-card-title" style={{ color: 'var(--primary)' }}>{service.title}</h3>
                <p className="content-card-description" style={{ fontSize: '1rem', flexGrow: 1 }}>{service.description}</p>
                <Link href={`/services/${service.slug}`} className="content-card-link">Learn more →</Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Planning an infusion?</h2>
            <p className="cta-description">
              We can help you understand the scheduling and insurance approval steps, and coordinate with your referring physician.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-white">Contact the Clinic</Link>
              <Link href="/patient-process" className="btn" style={{ border: '2px solid rgba(255,255,255,0.3)', color: 'white' }}>How it works</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
