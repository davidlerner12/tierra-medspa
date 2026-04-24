'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/67593a03bcdc0f36f2d86688_download-removebg-preview%20(1).jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

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
          <a href="tel:+18888341049" className="nav_button desktop" style={{ display: 'flex' }}>Call Now</a>
          <button
            className="nav_burger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>
      <div className={`nav_mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#about-us" onClick={closeMenu}>About Us</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="tel:+18888341049" onClick={closeMenu} style={{ color: 'var(--color-dark-green)', fontWeight: 600, marginTop: '0.5rem' }}>Call Now →</a>
      </div>
    </>
  );
}
