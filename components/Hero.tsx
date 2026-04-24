'use client';

const HERO_VIDEO_MP4 = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa766_garden_opener%20(1080p)-transcode.mp4';
const HERO_VIDEO_WEBM = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa766_garden_opener%20(1080p)-transcode.webm';
const HERO_POSTER = 'https://cdn.prod.website-files.com/66daa88ccad83d34f9d92a9f%2F66ebefcfc7fc6a4e202f09c0_garden_opener%20%281080p%29-poster-00001.jpg';
const ARROW_SVG = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';
const LIMITED_ICON = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa747_Frame%20526.svg';

export default function Hero() {
  return (
    <section className="section_hero">
      <div className="hero_inner">
        {/* Background Video */}
        <div className="hero_background">
          <div className="hero_background-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={HERO_POSTER}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={HERO_VIDEO_MP4} type="video/mp4" />
              <source src={HERO_VIDEO_WEBM} type="video/webm" />
            </video>
          </div>
          <div className="hero_overlay" />
        </div>

        {/* Content */}
        <div className="hero_content">
          <div className="hero_body">
            <div className="hero_title">
              <div className="hero_header">
                <h3 className="text-weight-light">Try your first</h3>
                <h1>
                  LED non-surgical<br />
                  <span className="text-font-playfair text-weight-regular">facelift facial</span>
                </h1>
              </div>

              <div className="hero_cost">
                <div className="cost_description">
                  <div className="text-size-xlarge">$249.99</div>
                  <div className="price-strikethrough" />
                </div>
                <div className="cost_price">$79.99</div>
                <div className="hero_button-description">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LIMITED_ICON} alt="" className="button-description_icon" />
                  <div className="text-size-regular">Limited time offer</div>
                </div>
              </div>

              <div className="hero_button-group">
                <a href="tel:+18888341049" className="button button-hero">
                  <div className="button_body">
                    <span className="text-size-large">Call Now</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ARROW_SVG} alt="" className="button_arrow" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
