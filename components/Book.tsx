const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';
const BOOK_IMAGE = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa77a_WhatsApp%20Image%202024-10-21%20at%2018.29.27.jpeg';
const LIMITED_ICON = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa747_Frame%20526.svg';

export default function Book() {
  return (
    <section className="section_book">
      <div className="padding-global">
        <div className="container">
          <div className="book-section-padding">
            <div className="book_flexbox">
              {/* Image */}
              <div className="book_image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BOOK_IMAGE}
                  alt=""
                  className="book_image"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="book_content">
                <div className="book_header">
                  <h2 className="heading-style-h1 text-weight-light">
                    Ready to book your <span className="text-font-playfair text-weight-regular">appointment?</span>
                  </h2>
                  <div className="text-size-large text-color-grey text-height-book">
                    Follow these the simple steps
                  </div>
                </div>
                <div className="book_bullet-list">
                  <div className="book_row">
                    <div className="book_numbers">01</div>
                    <div className="text-size-large text-color-grey text-height-book">
                      Click the <span className="text-font-playfair text-color-green">book now</span> button
                    </div>
                  </div>
                  <div className="book_row">
                    <div className="book_numbers">02</div>
                    <div className="text-size-large text-color-grey text-height-book">
                      Choose the date and time for your appointment (limited spots are available)
                    </div>
                  </div>
                  <div className="book_row">
                    <div className="book_numbers">03</div>
                    <div className="text-size-large text-color-grey text-height-book">
                      Everything is <span className="text-font-playfair text-color-green">ready</span>! A representative will contact you to confirm your appointment and address any queries you might have.
                    </div>
                  </div>
                </div>
                <div className="book_button">
                  <div className="hero_cost add">
                    <div className="cost_description">
                      <div className="text-size-xlarge text-weight-bold">$249.99</div>
                      <div className="price-strikethrough black" />
                    </div>
                    <h2 className="heading-style-h2 text-color-light-green">$79.99</h2>
                    <div className="hero_button-description">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={LIMITED_ICON} alt="" className="button-description_icon" loading="lazy" />
                      <div className="text-size-regular text-weight-bold">Limited time offer</div>
                    </div>
                  </div>
                  <a href="#" className="button button-green" data-cal-link="david/led-facelift" data-cal-namespace="led-facelift" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
                    <div className="button_body body-hero">
                      <div className="text-size-small">Book Appointment</div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ARROW_BTN} alt="" className="button_arrow" loading="lazy" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
