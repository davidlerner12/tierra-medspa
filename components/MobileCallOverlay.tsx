'use client';
import { useState, useEffect } from 'react';

const PHONE_NUMBER = 'tel:+18888341049';

export default function MobileCallOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile screens
    if (window.innerWidth <= 768) {
      setVisible(true);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    document.body.style.overflow = '';
  };

  const handleCall = () => {
    // Don't close — let the tel: link open the dialer
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
            Call us now to book your first LED non-surgical facelift facial for just <strong>$79.99</strong>
          </p>

          <a
            href={PHONE_NUMBER}
            className="mobile-call-button"
            onClick={handleCall}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Now</span>
          </a>

          <div className="mobile-call-number">+1 (888) 834-1049</div>

          <button className="mobile-call-skip" onClick={handleClose}>
            Continue to website →
          </button>
        </div>
      </div>
    </div>
  );
}
