import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import CalBookingModal from '@/components/CalBookingModal';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Tierra Med Spa | #1 Anti-Aging Med Spa In Toronto',
  description:
    'Our results are guaranteed! With over 15,000 clients treated, we confidently guarantee results for all skin types. Using award-winning NASA-developed technology, we deliver proven results — no pre-payment required.',
  icons: {
    icon: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/67715b33fc840092a39b4d03_TM%2032X32.png',
    apple: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/67715b13336f1779c3740fdd_256x256.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '955142403716132');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent');
          `}
        </Script>
        {children}
        <CalBookingModal />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=955142403716132&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
