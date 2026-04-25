'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

const ARROW_PREV = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa732_arrow-next-svgrepo-com%201.svg';
const ARROW_NEXT = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa734_arrow-next-svgrepo-com%202.svg';
const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';

const RESULTS = [
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa81f_fe393f6b-6414-4459-99a6-d39b3d377b6d.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa820_6dbdbac3-47ea-432e-92e4-805518dbeade.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa821_8a7bd09a-a169-4fb6-8187-c600a00c5704.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa826_5f955c32-d390-4cfc-a1ab-3670580800ba.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa823_a9a476be-55af-4ae1-b0ea-509388f0d3ce.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa822_52f45bc4-b2df-4424-8d04-792ac271304f.JPG',
  'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa825_eb0de1d8-28e8-4749-9930-892533fdde88.JPG',
];

// Responsive items per page
function useItemsPerPage() {
  const [items, setItems] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 479) setItems(1);
      else if (window.innerWidth <= 768) setItems(2);
      else setItems(3);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);
  return items;
}

export default function Results() {
  const itemsPerPage = useItemsPerPage();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(RESULTS.length / itemsPerPage);
  const trackRef = useRef<HTMLDivElement>(null);

  // Reset page when items per page changes
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const prev = useCallback(() => setPage(p => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage(p => (p + 1) % totalPages), [totalPages]);

  const visible = RESULTS.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);
  // pad if last page has fewer items
  const padded = [...visible, ...RESULTS.slice(0, itemsPerPage - visible.length)].slice(0, itemsPerPage);

  return (
    <section className="section_result">
      <div className="result-section-padding">
        <div className="result_title">
          <h2 className="result_header-text">
            Our results are <span>guaranteed</span>
          </h2>
          <p className="result_subtitle">
            With over 15,000 clients treated, we confidently guarantee results for all skin types.
            Using award-winning NASA-developed technology, we deliver proven results —{' '}
            no pre-payment required. If you&apos;re not satisfied, the treatment is on us.
          </p>
        </div>

        <div className="result_cms-body">
          <div className="result_carousel">
            <div
              ref={trackRef}
              className="result_track"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
                gap: itemsPerPage === 1 ? '12px' : '24px',
              }}
            >
              {padded.map((src, i) => (
                <div key={`${page}-${i}`} className="result_cms-item">
                  <div className="result_item-body">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Result ${page * itemsPerPage + i + 1}`} className="result_image" loading="lazy" />
                    <div className="result_overlay">
                      <div className="result_overlay-row">
                        <div className="result_row row-before">
                          <span style={{ fontSize: '0.8rem', color: 'white' }}>Before</span>
                        </div>
                        <div className="result_row row-after">
                          <span style={{ fontSize: '0.8rem', color: 'white' }}>After</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-nav">
            <button className="carousel-arrow" onClick={prev} aria-label="Previous">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ARROW_PREV} alt="prev" />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === page ? 'active' : ''}`}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-arrow" onClick={next} aria-label="Next">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ARROW_NEXT} alt="next" />
            </button>
          </div>
        </div>

        <div className="result_button">
          <a href="#" className="button button-green" data-cal-link="david/led-facelift" data-cal-namespace="led-facelift" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
            <div className="button_body">
              <span className="btn-text-small">Book Appointment</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ARROW_BTN} alt="" className="button_arrow" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
