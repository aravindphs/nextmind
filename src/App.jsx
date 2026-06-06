import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import ScrollToTop from './components/ScrollToTop';
import SEOMeta from './components/SEOMeta';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Founder from './components/Founder';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFloat from './components/WhatsAppFloat';
import ChatBot from './components/ChatBot';
import EnquiryPopup from './components/EnquiryPopup';

// Home page sections
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import AITools from './components/AITools';
import Courses from './components/Courses';
import Stats from './components/Stats';
import CommunicationTraining from './components/CommunicationTraining';
import CollegePartnershipCTA from './components/CollegePartnershipCTA';
import HowItWorks from './components/HowItWorks';
import DemoDay from './components/DemoDay';
import InternshipCTA from './components/InternshipCTA';
import Projects from './components/Projects';
import YouTube from './components/YouTube';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

// Pages
import BlogPage from './pages/BlogPage';
import ProjectDetail from './pages/ProjectDetail';
import CollegePartnership from './pages/CollegePartnership';
import CourseDetail from './pages/CourseDetail';
import Internship from './pages/Internship';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Founder />
      <Footer />
    </>
  );
}

function LegalLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

const HOME_JSONLD = [
  {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'Zeta Nextmind',
    url: 'https://zetanextmind.com',
    logo: { '@type': 'ImageObject', url: 'https://zetanextmind.com/logo.png' },
    description: 'AI-integrated software training institute in Coimbatore, Tamil Nadu. Courses in Python Full Stack, Java Full Stack, MERN Stack, Data Science, Data Analytics, Web Designing, UI/UX, and Digital Marketing.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641012',
      addressCountry: 'IN',
    },
    telephone: '+917356764410',
    email: 'admissions@zetanextmind.com',
    priceRange: '₹₹',
    openingHours: 'Mo-Sa 09:00-20:00',
    sameAs: ['https://www.youtube.com/@ZetaNextMind'],
    founder: { '@type': 'Person', name: 'Aravind Kumar' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Will I get the same quality as a physical classroom?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — often better. Our batches are capped at 15 students, so you get more personal attention than in most offline classrooms. Live sessions run over Google Meet, screen-shares are in HD, and instructors pause for questions after every concept. Recorded backups mean you never miss a detail.' } },
      { '@type': 'Question', name: 'What if I miss a class or fall behind?', acceptedAnswer: { '@type': 'Answer', text: 'Every session is recorded and uploaded within 24 hours. If you miss a live class, watch the recording, drop your doubts in the WhatsApp group, and a TA will respond the same day. Missed assignments can be submitted within 48 hours without penalty.' } },
      { '@type': 'Question', name: 'Is the certificate recognised by employers?', acceptedAnswer: { '@type': 'Answer', text: 'Our certificate carries the Zeta Nextmind seal and the founder\'s signature. More importantly, you graduate with 3 deployed live projects, a polished GitHub portfolio, and a LinkedIn profile reviewed by our placement team. Employers hire you for your work — the certificate validates it.' } },
      { '@type': 'Question', name: 'How do AI tools fit into the course?', acceptedAnswer: { '@type': 'Answer', text: 'AI tools are core workflow, not extras. From Week 1 you\'ll use tools like GitHub Copilot, Cursor, v0.dev, and ChatGPT alongside every concept taught. The goal is to make you 3–5× faster than a developer who doesn\'t use AI — because that\'s what employers now expect.' } },
      { '@type': 'Question', name: 'What is the batch size and schedule?', acceptedAnswer: { '@type': 'Answer', text: 'We cap every batch at 15 students. Classes run on weekday evenings (7–9 PM IST) and Saturday mornings. Weekend-only batches are available on request.' } },
      { '@type': 'Question', name: 'How does placement support work?', acceptedAnswer: { '@type': 'Answer', text: 'Placement support begins at Week 18. You\'ll do 3 live mock interviews, get your resume reviewed for ATS keywords, and have a LinkedIn profile optimised. We share active job leads and make warm introductions where possible.' } },
      { '@type': 'Question', name: 'Can I join if I have zero coding experience?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our Python Full Stack, Web Designing, Data Analytics, and No-Code AI courses are designed for absolute beginners. The first 4 weeks focus entirely on foundations before any framework is introduced.' } },
    ],
  },
];

function HomePage() {
  return (
    <>
      <SEOMeta
        title="AI-Integrated Software Training Institute in Coimbatore"
        description="Zeta Nextmind — India's leading AI-integrated software training in Coimbatore. Python Full Stack, Data Science, MERN Stack, Web Design & more. Max 15 students/batch, 3 live projects, 90% placement rate. Enroll today."
        canonical="/"
        jsonLd={HOME_JSONLD}
      />
      <Hero />
      <Partners />
      <About />
      <AITools />
      <Courses />
      <Stats />
      <CommunicationTraining />
      <CollegePartnershipCTA />
      <HowItWorks />
      <DemoDay />
      <InternshipCTA />
      <Projects />
      <YouTube />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <EnquiryPopup />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <ErrorBoundary>
      {loading && <LoadingScreen />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/projects/:slug" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="/college-partnership" element={<Layout><CollegePartnership /></Layout>} />
        <Route path="/courses/:slug" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/internship" element={<Layout><Internship /></Layout>} />
        <Route path="/privacy-policy" element={<LegalLayout><PrivacyPolicy /></LegalLayout>} />
        <Route path="/terms-of-service" element={<LegalLayout><TermsOfService /></LegalLayout>} />
        <Route path="*" element={<LegalLayout><NotFound /></LegalLayout>} />
      </Routes>
      <WhatsAppFloat />
      <ChatBot />
    </ErrorBoundary>
  );
}

export default App;
