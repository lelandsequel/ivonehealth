"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Image from "next/image";
import { SegmentedToggle } from "@/components/SegmentedToggle";
import { SITE } from "@/lib/site";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isPresentation = pathname === "/presentation" || pathname.startsWith("/presentation/");

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo">
                        <Image
                            src={SITE.logoPath}
                            alt=""
                            width={36}
                            height={36}
                            className="nav-logo-mark"
                            priority
                        />
                        <span className="nav-logo-text">
                            <span className="nav-logo-title">{isPresentation ? "C&L Strategy" : "IV One Health"}</span>
                            <span className="nav-logo-subtitle">{isPresentation ? "SEO OS" : "Infusion Clinic • Riyadh"}</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-links">
                        <SegmentedToggle
                            label="Mode"
                            options={[
                                { label: "IV One Health", href: "/", isActive: !isPresentation },
                                { label: "How This Site Was Built", href: "/presentation", isActive: isPresentation },
                            ]}
                        />
                        {!isPresentation ? (
                            <>
                                <Link href="/conditions-we-treat" className="nav-link">Conditions</Link>
                                <Link href="/services" className="nav-link">Services</Link>
                                <Link href="/guides" className="nav-link">Guides</Link>
                                <Link href="/patient-process" className="nav-link">Patient Process</Link>
                                <Link href="/contact" className="nav-cta">Contact</Link>
                            </>
                        ) : null}
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
                        <div style={{ padding: "0.75rem 0 0.5rem" }}>
                            <SegmentedToggle
                                label="Mode"
                                options={[
                                    { label: "IV One Health", href: "/", isActive: !isPresentation },
                                    { label: "How This Site Was Built", href: "/presentation", isActive: isPresentation },
                                ]}
                            />
                        </div>
                        {!isPresentation ? (
                            <>
                                <Link href="/conditions-we-treat" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Conditions</Link>
                                <Link href="/services" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Services</Link>
                                <Link href="/guides" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Guides</Link>
                                <Link href="/patient-process" className="nav-link" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem 0' }}>Patient Process</Link>
                                <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ display: 'block', marginTop: '1rem', textAlign: 'center' }}>Contact</Link>
                            </>
                        ) : null}
                    </div>
                )}
            </div>
        </nav>
    );
}
