import './index.css';

import Navbar from './components/zetacorp/Navbar';
import Hero from './components/zetacorp/Hero';
import Marquee from './components/zetacorp/Marquee';
import Services from './components/zetacorp/Services';
import Stats from './components/zetacorp/Stats';
import CaseStudies from './components/zetacorp/CaseStudies';
import Testimonials from './components/zetacorp/Testimonials';
import Team from './components/zetacorp/Team';
import Contact from './components/zetacorp/Contact';
import Footer from './components/zetacorp/Footer';
import WhatsAppFloat from './components/zetacorp/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
