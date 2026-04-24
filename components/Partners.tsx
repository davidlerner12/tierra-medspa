'use client';
import Script from 'next/script';
import { useState, useEffect } from 'react';

// Row 1 partner logos (scrolling left)
const ROW1_LOGOS = [
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa78d_66d99d1dd7d8f9148d949c9f_image%25202.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7eb_66d99d2594b9a8b1bbb6716f_image%25203.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c6_66d99d4c8d395c53e0715281_image%25206.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c4_66d99d334d92de071ec366b2_image%25204.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c9_66d99d40e49f83799271e873_image%25205.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa778_66d99db978e6216a04e7c89c_image%25208.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7ef_66d99dc8edb6eece8a01a8e6_image%25209.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa760_66d99da6ada9002b4b449705_image%25207.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7ca_66d99de783eb5be75beb6f4e_image%252012.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c5_66d99df805bf6a73bc2095e6_image%252013.png',
];

// Row 2 partner logos (scrolling right)
const ROW2_LOGOS = [
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c3_66d99e0d63575006983f0e4a_Frame%2520125.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c7_66d99e524c115358f593ffe6_paypal-3%2520(2)%25203.svg',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7c8_66d99e7ffbb65c12f7b27811_image%252010.png',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa73f_66d99e903d5e28500c903855_image%252017.png',
];

export default function Partners() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="testimonials" className="section_partners">
      <div className="partners-section-padding">
        {/* Elfsight Google Reviews Widget Placeholder */}
        <div className="elfsight-widget-placeholder">
          <div className="elfsight-widget-inner">
            <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
            {mounted && (
              <div className="elfsight-app-54fac9ae-2c89-4d72-85c8-e2c7afe8a09a" data-elfsight-app-lazy></div>
            )}
          </div>
        </div>

        <div className="partners_title">
          <h2 className="heading-style-h1 text-weight-light">Our partners</h2>
        </div>

        {/* Row 1 - scrolling left */}
        <div className="partners_row row-margin-bottom">
          <div className="partners_animation-body animation-body-first">
            <div className="partners_column">
              {ROW1_LOGOS.map((src, i) => (
                <div key={`r1a-${i}`} className="partners_cms-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="partners_image" loading="eager" />
                </div>
              ))}
            </div>
            <div className="partners_column">
              {ROW1_LOGOS.map((src, i) => (
                <div key={`r1b-${i}`} className="partners_cms-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="partners_image" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="partners_row row-invert">
          <div className="partners_animation-body animation-body-second">
            {[0, 1, 2, 3].map((colIdx) => (
              <div key={`col-${colIdx}`} className="partners_column column-invert">
                {ROW2_LOGOS.map((src, i) => (
                  <div key={`r2-${colIdx}-${i}`} className="partners_cms-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="partners_image" loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
