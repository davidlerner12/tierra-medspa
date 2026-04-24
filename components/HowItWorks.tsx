const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';
const LED_IMAGE = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa769_Frame%20527.png';
const BULLET_1 = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa745_Frame%20522.svg';
const BULLET_2 = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa746_Frame%20522-1.svg';
const BULLET_3 = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa749_Frame%20522-2.svg';

const BULLETS = [
  {
    icon: BULLET_1,
    title: 'Reduces Fine Lines',
    desc: 'Boosts collagen to smooth wrinkles',
  },
  {
    icon: BULLET_2,
    title: 'Enhances Skin Firmness',
    desc: 'Improves texture and elasticity.',
  },
  {
    icon: BULLET_3,
    title: 'Soothes Irritation',
    desc: 'Reduces redness and inflammation for a calm, even complexion',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section_works">
      <div className="works-section-padding">
        <div className="content-columns">
          {/* Text column */}
          <div className="content-column-main">
            <div className="content_header">
              <h2>Our LED Technology</h2>
            </div>
            <div className="content_description">
              <p>
                At Tierra Med Spa, our red LED therapy devices harness cutting-edge light technology to penetrate
                deep into the skin&apos;s layers. This innovative treatment uses specific wavelengths to stimulate
                collagen production and accelerate cellular repair. By activating your skin&apos;s natural processes,
                our technology helps rejuvenate your complexion, offering a scientifically-backed approach to skincare.
              </p>
            </div>
            <div className="content_bullet-list">
              {BULLETS.map((b, i) => (
                <div key={i} className="content_bullet-row">
                  <div className="bullet-list_point">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.icon} alt="" className="bullet-list_icon" loading="lazy" />
                  </div>
                  <div className="bullet_text-body">
                    <div className="bullet_main">{b.title}</div>
                    <div className="bullet_subtitle">
                      <div>{b.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="works_button">
              <a href="tel:+18888341049" className="button button-green">
                <div className="button_body">
                  <span className="text-size-small">Call Now</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ARROW_BTN} alt="" className="button_arrow" />
                </div>
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="content-column-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LED_IMAGE}
              alt="LED facial device"
              className="content_main-image"
              loading="lazy"
              srcSet={`
                https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa769_Frame%2520527-p-500.png 500w,
                https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa769_Frame%2520527-p-800.png 800w,
                https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa769_Frame%2520527-p-1080.png 1080w,
                ${LED_IMAGE} 1234w
              `}
              sizes="(max-width: 479px) 202px, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1919px) 43vw, 628px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
