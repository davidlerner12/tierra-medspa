'use client';

const SPA_VIDEO_MP4 = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa77b_spa1-transcode.mp4';
const SPA_VIDEO_WEBM = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa77b_spa1-transcode.webm';
const SPA_POSTER = 'https://cdn.prod.website-files.com/66daa88ccad83d34f9d92a9f%2F6718c9fb7044fb9ee852ea74_spa1-poster-00001.jpg';
const RATING_STAR = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa72c_Frame%20118.svg';
const GOOGLE_LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa765_image%2022%20(1).png';
const TRUSTPILOT_LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa72f_Frame%20515.svg';
const YELP_LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa731_Yelp_Logo%201.svg';

export default function AboutUs() {
  return (
    <section id="about-us" className="section_about">
      <div className="padding-global padding-global-bigger">
        <div className="container container-smaller">
          <div className="about-section-padding">
            <div className="content-columns">
              {/* Video Column */}
              <div className="content-column-video">
                <div className="content_main-image main-image-full about-video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={SPA_POSTER}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={SPA_VIDEO_MP4} type="video/mp4" />
                    <source src={SPA_VIDEO_WEBM} type="video/webm" />
                  </video>
                </div>
              </div>

              {/* Content Column */}
              <div className="content-column-main column-tablet-first">
                <div className="content_header">
                  <h2 className="heading-style-h1 text-weight-light">Your Beauty - Our Passion</h2>
                </div>
                <div className="content_description">
                  <p className="text-size-large large-height-large text-weight-light text-color-grey">
                    We provide a host of innovative and exciting treatment options for a variety of skin and hair concerns with our state-of-the-art medical aesthetic treatments in our relaxing, spa-like atmosphere.
                    <br />
                    For the ultimate in non-invasive facials, cellulite removal, wrinkle reduction, and more.
                  </p>
                </div>

                {/* Rating Stats */}
                <div className="content_rating">
                  <div className="rating_box">
                    <div className="rating_number">50k+</div>
                    <div className="rating_label">Clients</div>
                  </div>
                  <div className="rating_box">
                    <div className="rating_number">#1</div>
                    <div className="rating_label">Med Spa in Toronto</div>
                  </div>
                  <div className="rating_box">
                    <div className="rating_title-header">
                      <div className="rating_number rating_inline">4.9</div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={RATING_STAR} alt="" className="rating_star" loading="lazy" />
                    </div>
                    <div className="rating_label">
                      Stars on Google Maps,<br />Trustpilot and Yelp
                    </div>
                  </div>
                </div>

                {/* Rating Logos */}
                <div className="content_rating-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={GOOGLE_LOGO} alt="Google" className="rating-logo_image" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={TRUSTPILOT_LOGO} alt="Trustpilot" className="rating-logo_image image-size-bigger" loading="lazy" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={YELP_LOGO} alt="Yelp" className="rating-logo_image" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
