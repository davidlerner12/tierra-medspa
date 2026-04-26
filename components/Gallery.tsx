'use client';
import { useState, useEffect, useCallback } from 'react';

const ARROW_PREV = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa732_arrow-next-svgrepo-com%201.svg';
const ARROW_NEXT = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa734_arrow-next-svgrepo-com%202.svg';

const GALLERY_ITEMS = [
  [
    '/images/gallery0.png',
    '/images/gallery.png',
  ],
  [
    '/images/gallery2.png',
    '/images/gallery3.png',
  ],
  [
    '/images/gallery4.png',
    '/images/gallery5.png',
  ],
  [
    '/images/gallery6.png',
    '/images/gallery7.png',
  ],
  [
    '/images/gallery8.png',
    '/images/gallery9.png',
  ],
  [
    '/images/gallery10.png',
    '/images/gallery11.png',
  ],
  [
    '/images/gallery12.png',
    '/images/gallery13.png',
  ],
  [
    '/images/gallery14.png',
    '/images/gallery15.png',
  ],
];

function useItemsPerPage() {
  const [items, setItems] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 479) setItems(1);
      else if (window.innerWidth <= 768) setItems(2);
      else if (window.innerWidth <= 991) setItems(3);
      else setItems(4);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);
  return items;
}

export default function Gallery() {
  const itemsPerPage = useItemsPerPage();
  const [page, setPage] = useState(0);
  const totalItems = GALLERY_ITEMS.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Reset page when layout changes
  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const prev = useCallback(() => setPage(p => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage(p => (p + 1) % totalPages), [totalPages]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(p => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Calculate flex basis based on items per page
  const flexBasis = `${100 / itemsPerPage}%`;

  return (
    <section className="section_gallery">
      <div className="gallery-section-padding">
        <div className="gallery_body">
          <div className="gallery_mask">
            <div 
              className="gallery_track" 
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {GALLERY_ITEMS.map((images, i) => (
                <div key={i} className="gallery_cms-item" style={{ flex: `0 0 ${flexBasis}` }}>
                  <div className="gallery_item-body">
                    {images.map((src, j) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={j}
                        src={src}
                        alt=""
                        className="gallery_image"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery_arrow arrow-prev" onClick={prev} role="button" aria-label="Previous gallery page" tabIndex={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ARROW_PREV} alt="prev" className="arrow_icon" />
          </div>
          <div className="gallery_arrow arrow-next" onClick={next} role="button" aria-label="Next gallery page" tabIndex={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ARROW_NEXT} alt="next" className="arrow_icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
