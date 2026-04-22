import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
