const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';

export default function FixedBook() {
  return (
    <div className="fixed-book">
      <a href="tel:+18888341049" className="button button-green">
        <div className="button_body body-green body-padding-result body-fixed">
          <div className="text-size-small text-weight-medium">Call Now</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ARROW_BTN} alt="" className="button_arrow" loading="lazy" />
        </div>
      </a>
    </div>
  );
}
