const FOOTER_LOGO = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/675a87fbb29c1466a448010e_output-onlinepngtools.png';
const LINK_ARROW = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa739_Arrow%2030.svg';
const SOCIAL_FB = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa74a_Group%2043445.svg';
const SOCIAL_FB_HOVER = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa737_Group%2043444.svg';
const SOCIAL_IG = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa73b_Group%2046805046.svg';
const SOCIAL_IG_HOVER = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa74b_Group%2043442.svg';

export default function Footer() {
  return (
    <footer className="section_footer">
      <div className="footer-padding">
        <div className="footer-container">
          <div className="footer-section-padding">
            <div className="footer_main">
              {/* Brand */}
              <div className="footer_title">
                <a href="/" className="footer_logo-link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={FOOTER_LOGO} alt="Tierra Med Spa" width={72} loading="lazy" />
                </a>
                <div className="text-size-large large-height-large text-color-white text-weight-light">
                  Tierra Med Spa is a medical-grade spa specializing in anti-aging treatments for all skin types.
                </div>
              </div>

              {/* Links & Contact */}
              <div className="footer_content">
                {/* Quick Links */}
                <div className="footer_link-list">
                  <div className="text-size-large text-color-white">Quick Links</div>
                  <div className="link-list-body">
                    {[
                      { href: '#how-it-works', label: 'How it works' },
                      { href: '#testimonials', label: 'Testimonials' },
                      { href: '#about-us', label: 'About Us' },
                      { href: '#faq', label: 'FAQ' },
                    ].map((link, i) => (
                      <a key={i} href={link.href} className="footer_link">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={LINK_ARROW} alt="" className="footer_link-icon" loading="lazy" />
                        <div className="text-size-small text-weight-light text-height-bigger">{link.label}</div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="footer_address-list">
                  <div className="address-list_body">
                    <div className="text-size-large text-color-white">Contact info</div>
                    <div className="address-list">
                      <div className="text-size-small text-color-white text-weight-light text-custom-height">
                        1912 Queen St E, Toronto
                      </div>
                      <a href="tel:9022173012" className="text-size-small text-color-white text-weight-light text-custom-height text-footer-link">
                        (902) 217-3012
                      </a>
                      <a href="mailto:Info@tierramedspa.com" className="text-size-small text-color-white text-weight-light text-custom-height text-footer-link">
                        Info@tierramedspa.com
                      </a>
                    </div>
                  </div>
                  <div className="address-list_body">
                    <div className="text-size-large text-color-white">Opening Hours</div>
                    <div className="address-list">
                      <div className="text-size-small text-color-white text-weight-light text-custom-height">
                        Sunday to Friday<br />10:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_line" />

            <div className="footer_copyright">
              <div className="text-size-small text-weight-light text-color-white text-font-lexend">
                © 2025 Tierra Med Spa. All rights reserved.
              </div>
              <div className="footer_social-list">
                <a href="https://www.facebook.com/profile.php?id=100094919075825" target="_blank" rel="noopener" className="social_link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SOCIAL_FB} alt="Facebook" className="social_icon" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SOCIAL_FB_HOVER} alt="" className="social_icon social_icon-hovered" />
                </a>
                <a href="https://www.instagram.com/tierra_medspa" target="_blank" rel="noopener" className="social_link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SOCIAL_IG} alt="Instagram" className="social_icon" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={SOCIAL_IG_HOVER} alt="" className="social_icon social_icon-hovered" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
