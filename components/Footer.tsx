import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand & Location */}
                    <div>
                        <h3 className="footer-brand-title">IV One Health</h3>
                        <p className="footer-brand-description">
                            Licensed specialized infusion clinic in Riyadh, providing expert care for chronic and complex conditions.
                        </p>
                        <address style={{ opacity: 0.8, fontSize: '0.875rem' }}>
                            <p>Riyadh, Saudi Arabia</p>
                            <p><a href="tel:+966000000000" style={{ color: 'inherit' }}>011-000-0000</a></p>
                            <p><a href="mailto:info@ivonehealth.com" style={{ color: 'inherit' }}>info@ivonehealth.com</a></p>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer-heading">Clinic</h4>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/patient-process">Patient Process</Link></li>
                            <li><Link href="/insurance">Insurance & Billing</Link></li>
                            <li><Link href="/contact">Contact / Enquire</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="footer-heading">Resources</h4>
                        <ul className="footer-links">
                            <li><Link href="/conditions-we-treat">Conditions Treated</Link></li>
                            <li><Link href="/services">Infusion Services</Link></li>
                            <li><Link href="/guides">Patient Guides</Link></li>
                            <li><Link href="/policy">Editorial Policy</Link></li>
                        </ul>
                    </div>

                    {/* Accreditation */}
                    <div>
                        <h4 className="footer-heading">Accreditation</h4>
                        <div className="footer-badge">
                            <span className="footer-badge-dot footer-badge-dot-green"></span>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem' }}>MOH Licensed</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.75 }}>Ministry of Health, KSA</p>
                            </div>
                        </div>
                        <div className="footer-badge">
                            <span className="footer-badge-dot footer-badge-dot-blue"></span>
                            <div>
                                <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem' }}>CHI Accredited</p>
                                <p style={{ fontSize: '0.75rem', opacity: 0.75 }}>Council of Health Insurance</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} IV One Health. All rights reserved.</p>
                    <p style={{ maxWidth: '28rem' }}>
                        The information on this site is not a substitute for professional medical advice.
                        <Link href="/policy" style={{ marginLeft: '0.25rem', textDecoration: 'underline' }}>Read Disclaimer</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
