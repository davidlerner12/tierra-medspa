'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const PHONE_NUMBER = 'tel:9022173012';

export default function MobileCallOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = '';
  };

  if (!visible) return null;

  return (
    <div className="mobile-call-overlay">
      <div className="mobile-call-card">
        <button className="mobile-call-close" onClick={handleClose} aria-label="Close">
          ✕
        </button>

        <div className="mobile-call-content">
          <div className="mobile-call-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/675a87fbb29c1466a448010e_output-onlinepngtools.png"
              alt="Tierra Med Spa"
              width={80}
            />
          </div>

          <h2 className="mobile-call-title">
            Ready for your<br />
            <span>transformation?</span>
          </h2>

          <p className="mobile-call-subtitle">
            Book your first LED non-surgical facelift facial for just <strong>$79.99</strong>
          </p>

          <Link
            href="/book"
            className="mobile-call-button"
            onClick={handleClose}
            style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%', display: 'flex', textDecoration: 'none' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Book Appointment</span>
          </Link>

          <div className="mobile-call-number">(902) 217-3012</div>

          <button className="mobile-call-skip" onClick={handleClose}>
            Continue to website →
          </button>
        </div>
      </div>
    </div>
  );
}
