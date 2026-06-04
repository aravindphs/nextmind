import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Courses from './components/Courses';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Courses />
      <Stats />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
