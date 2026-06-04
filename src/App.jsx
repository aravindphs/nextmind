import { Routes, Route } from 'react-router-dom';
import './index.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Home page sections
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Courses from './components/Courses';
import Stats from './components/Stats';
import CollegePartnershipCTA from './components/CollegePartnershipCTA';
import HowItWorks from './components/HowItWorks';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Pages
import BlogPage from './pages/BlogPage';
import ProjectDetail from './pages/ProjectDetail';
import CollegePartnership from './pages/CollegePartnership';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <About />
      <Courses />
      <Stats />
      <CollegePartnershipCTA />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/projects/:slug" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="/college-partnership" element={<Layout><CollegePartnership /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
