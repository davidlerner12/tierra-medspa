'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/67593a03bcdc0f36f2d86688_download-removebg-preview%20(1).jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav className="nav_component" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none' }}>
        <div className="nav_container">
          <a href="/" className="nav_logo-link">
            <Image src={LOGO} alt="Tierra Med Spa" width={72} height={48} unoptimized style={{ height: 48, width: 'auto' }} />
          </a>
          <nav className="nav_menu w-nav-menu">
            <div className="nav_menu-list">
              <a href="#how-it-works" className="nav_menu-link">How it works</a>
              <a href="#testimonials" className="nav_menu-link">Testimonials</a>
              <a href="#about-us" className="nav_menu-link">About Us</a>
              <a href="#faq" className="nav_menu-link">FAQ</a>
            </div>
          </nav>
          <a href="/scheduling" target="_blank" rel="noopener" className="nav_button desktop" style={{ display: 'flex' }}>Book an appointment</a>
          <button className="nav_burger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav_mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="/scheduling" target="_blank" rel="noopener" style={{ color: 'var(--color-dark-green)', fontWeight: 600 }}>Book an appointment →</a>
      </div>
    </>
  );
}
