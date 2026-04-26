'use client';
import { useState } from 'react';

const FAQ_ARROW = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa73a_arrow-next-svgrepo-com%202.svg';

const FAQS = [
  {
    q: 'How soon can I expect to see results?',
    a: 'Results can be seen from the first session and will last for about 2 weeks. Our specialist recommend a series of multiple sessions customized to everyones skin needs for optimized results',
  },
  {
    q: "What's the location of the spa?",
    a: 'We are located at 1912 Queen St E, Toronto.',
  },
  {
    q: 'How can I book a treatment?',
    a: 'To book an appointment, click BOOK NOW to open our digital calendar. Select a date and time that suits you. Your booking is complete! We\'ll reach out soon to confirm your appointment and address any inquiries.\n\nIf you have any other booking inquiries, reach out us directly at (902) 217-3012, or via email at Info@tierramedspa.com\nOur offices are open from 10:00 AM - 6:00 PM,\nSunday to Friday.',
    isList: true,
  },
  {
    q: 'How should I prepare for my treatment?',
    a: 'We recommend arriving in a button-down shirt, makeup-free, and ready for a significant transformation.',
  },
  {
    q: 'How long is the facial treatment?',
    a: 'Please allocate approximately 75 minutes for your visit: 50 minutes for the treatment with our specialist and an additional 25 minutes for a consultation afterward.',
  },
  {
    q: 'Is there anything I should bring along?',
    a: "You'll only need to bring your identification and credit card; we provide everything else.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section_faq">
      <div className="faq-container">
        <div className="faq-section-padding">
          <div className="faq_title">
            <h2 className="heading-style-h1 text-weight-light">Frequently asked questions</h2>
          </div>

          <div className="faq_list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq_dropdown ${open === i ? 'open' : ''}`}>
                <div className="faq_question" onClick={() => setOpen(open === i ? null : i)}>
                  <div className="text-size-xlarge text-custom-faq">{faq.q}</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={FAQ_ARROW}
                    alt=""
                    className="faq_arrow"
                    style={{ transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <div className="faq_answer" style={{ height: open === i ? 'auto' : 0 }}>
                  <div className="faq_padding">
                    <div className="text-size-regular text-color-grey">
                      {faq.a.split('\n').map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < faq.a.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
