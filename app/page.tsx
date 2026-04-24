import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import Videos from '@/components/Videos';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Book from '@/components/Book';
import FAQ from '@/components/FAQ';
import BookAppointment from '@/components/BookAppointment';
import Footer from '@/components/Footer';
import FixedBook from '@/components/FixedBook';
import MobileCallOverlay from '@/components/MobileCallOverlay';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <Hero />
        <Results />
        <HowItWorks />
        <Partners />
        <Videos />
        <AboutUs />
        <Gallery />
        <Location />
        <Book />
        <FAQ />
        <BookAppointment />
      </div>
      <Footer />
      <FixedBook />
      <MobileCallOverlay />
    </div>
  );
}
