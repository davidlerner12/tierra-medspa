const ARROW_BTN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa735_Arrow%20-%20Right%20Up%20(2).svg';
const LOCATION_PIN = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa730_location-pin-svgrepo-com%20(2)%201.svg';
const PHONE_ICON = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa74c_phone-svgrepo-com%201.svg';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Tierra+Med+Spa/@43.6692867,-79.3069583,17z/data=!4m15!1m8!3m7!1s0x89d4cbf634dcef0b:0xf4112a7480b28d6e!2s1912+Queen+St+E,+Toronto,+ON+M4L+1H5,+Canada!3b1!8m2!3d43.6692828!4d-79.3043834!16s%2Fg%2F11b8vd84ht!3m5!1s0x89d4cbb96f946ca7:0xb2d769a8330bd903!8m2!3d43.6692984!4d-79.3043731!16s%2Fg%2F11khslgq59?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D';

export default function Location() {
  return (
    <section className="section_location">
      <div className="padding-global padding-global-bigger">
        <div className="container container-smaller">
          <div className="location-section-padding">
            <div className="location_flexbox">
              {/* Map */}
              <div className="location_image-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.9849525396853!2d-79.30695832261864!3d43.66928277110133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cbf634dcef0b%3A0xf4112a7480b28d6e!2s1912%20Queen%20St%20E%2C%20Toronto%2C%20ON%20M4L%201H5%2C%20Canada!5e0!3m2!1sen!2sin!4v1733986713622!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tierra Med Spa Location"
                />
              </div>

              {/* Content */}
              <div className="location_content">
                <h2 className="heading-style-h1 text-weight-light">Our location</h2>
                <div className="location_info">
                  <a href="#" className="location_row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOCATION_PIN} alt="" className="location_icon" loading="lazy" />
                    <div className="text-size-regular text-weight-medium">1912 Queen St E, Toronto</div>
                  </a>
                  <a href="tel:+16475035068" className="location_row">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PHONE_ICON} alt="" className="location_icon" loading="lazy" />
                    <div className="text-size-regular text-weight-medium text-border-bottom">+1 (647) 503-5068</div>
                  </a>
                </div>
                <div className="location_button-group">
                  <a href="#" className="button button-green" data-cal-link="david/led-facelift" data-cal-namespace="led-facelift" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
                    <div className="button_body body-hero">
                      <div className="text-size-regular text-weight-medium">Book Appointment</div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ARROW_BTN} alt="" className="button_arrow" loading="lazy" />
                    </div>
                  </a>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener" className="button button-green button-outline">
                    <div className="button_body body_direction">
                      <div className="text-size-regular text-weight-medium text-color-green-btn">Get directions</div>
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
