"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo">
                        <span className="nav-logo-title">IV One Health</span>
                        <span className="nav-logo-subtitle">Infusion Clinic Riyadh</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-links">
                        <Link href="/conditions-we-treat" className="nav-link">Conditions</Link>
                        <Link href="/services" className="nav-link">Services</Link>
                        <Link href="/guides" className="nav-link">Guides</Link>
                        <Link href="/patient-process" className="nav-link">Patient Process</Link>
                        <Link href="/contact" className="nav-cta">Enquire</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="nav-mobile-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="nav-mobile-menu">
                        <Link href="/conditions-we-treat" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Conditions</Link>
                        <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Services</Link>
                        <Link href="/guides" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Guides</Link>
                        <Link href="/patient-process" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Patient Process</Link>
                        <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>Enquire Now</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
