'use client';
import { useRef, useState, useEffect } from 'react';

const ARROW_PREV = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa732_arrow-next-svgrepo-com%201.svg';
const ARROW_NEXT = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa734_arrow-next-svgrepo-com%202.svg';

// Each gallery item has 2 stacked images (matching the original site)
const GALLERY_ITEMS = [
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa81b_354105208_120378567747998_2272945108594869922_n.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa80f_DSCF0299.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa81c_DSCF0253-min.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa81e_DSCF0220-min.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa80d_DSCF0193.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa81d_DSCF0258-min.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa80b_DSCF0175.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/67570a7a4156927e65ca5891_DSCF0228-min.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6759c62132bb7364ca65e157_465910459_407962519044381_8700140408915818340_n.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa80a_DSCF0129.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/675709b69025789b37b5f8f7_463817612_915747543751405_4145407702800531495_n%20(1).jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6757096dce5ed55aaaebf62a_343981030_928057838346130_4075119892551227613_n%20(1).jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6757096140098f32846a5dd8_292107353_841500623906233_4638749611905176070_n%20(1).jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6757095ae399ee4cc92e414b_445943806_750511877288619_1678360344129087066_n.jpg',
  ],
  [
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa802_DSCF0150.jpg',
    'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa803_DSCF0146.jpg',
  ],
];

export default function Gallery() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalItems = GALLERY_ITEMS.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const next = () => setPage(p => (p + 1) % totalPages);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(p => (p + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages]);

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
                <div key={i} className="gallery_cms-item">
                  <div className="gallery_item-body">
                    {images.map((src, j) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={j}
                        src={src}
                        alt=""
                        className="gallery_image"
                        loading="eager"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery_arrow arrow-prev" onClick={prev}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ARROW_PREV} alt="prev" className="arrow_icon" />
          </div>
          <div className="gallery_arrow arrow-next" onClick={next}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ARROW_NEXT} alt="next" className="arrow_icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
