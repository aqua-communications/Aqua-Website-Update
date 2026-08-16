import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import SlideOutMenu from './components/SlideOutMenu';
import Footer from './components/Footer';
import OceanSound from './components/OceanSound';

gsap.registerPlugin(ScrollTrigger);

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const FAQsPage = lazy(() => import('./pages/FAQsPage'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return <div className="min-h-screen bg-[#f5f5f5] text-black flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.2em]">AQUA</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const lenis = useMemo(() => new Lenis({
    duration: 1.05,
    smoothWheel: true,
    autoRaf: false,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  }), []);

  useEffect(() => {
    lenis.on('scroll', ScrollTrigger.update);
    const ticker = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [lenis]);

  useEffect(() => {
    setMenuOpen(false);
    const target = location.hash || location.state?.scrollTo;
    const timer = window.setTimeout(() => {
      if (target) lenis.scrollTo(target, { offset: -96, duration: 0.9 });
      else lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash, location.state, lenis]);

  useEffect(() => {
    if (menuOpen) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis.start();
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, lenis]);

  const handleMenuOpen = () => {
    const originY = window.scrollY + (window.innerHeight / 2);
    document.documentElement.style.setProperty('--menu-origin-y', `${originY}px`);
    setMenuOpen(true);
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    lenis.scrollTo(0, { duration: 0.9 });
  };

  return (
    <>
      <SlideOutMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header
        onMenuOpen={handleMenuOpen}
        menuOpen={menuOpen}
        onHomeClick={handleHomeClick}
      />
      <div className={`content-wrapper ${menuOpen ? 'content-wrapper--menu-open' : ''}`} inert={menuOpen ? true : undefined}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<Navigate to="/testimonials" replace />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/privacy" element={<Privacy lenis={lenis} />} />
            <Route path="/terms" element={<Terms lenis={lenis} />} />
            <Route path="*" element={<NotFound lenis={lenis} />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
      <OceanSound />
    </>
  );
}
