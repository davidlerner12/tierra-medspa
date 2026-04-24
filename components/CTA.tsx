const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';

export default function CTA() {
  return (
    <section className="section_cta">
      <div className="cta-section-padding">
        <h2 className="cta_header">
          Ready to transform your <span>skin?</span>
        </h2>
        <p className="cta_subtext">
          Join over 15,000 satisfied clients. Try your first LED non-surgical facelift facial
          for just $79.99. Guaranteed results — or the treatment is on us.
        </p>
        <a href="tel:+18888341049" className="button button-white">
          <div className="button_body">
            <span className="btn-text-large" style={{ color: 'var(--color-dark-green)' }}>
              Call Now
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ARROW_BTN}
              alt=""
              className="button_arrow"
              style={{ filter: 'invert(30%) sepia(30%) saturate(500%) hue-rotate(70deg)' }}
            />
          </div>
        </a>
        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          No pre-payment required &nbsp;·&nbsp; 100% satisfaction guaranteed &nbsp;·&nbsp; Zero downtime
        </p>
      </div>
    </section>
  );
}
