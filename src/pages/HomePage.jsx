import usePageMeta from '../hooks/usePageMeta';
import Hero from '../components/Hero';
import OurWork from '../components/OurWork';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Statement from '../components/Statement';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Industries from '../components/Industries';
import Clients from '../components/Clients';

export default function HomePage() {
  usePageMeta({
    title: 'AQUA Innovations | Experience Design & Brand Activation Company in Bangladesh',
    description: 'AQUA Innovations is a multidisciplinary experience design company in Dhaka delivering brand activation, architecture, technology, live experiences and integrated communication for corporate clients.',
    path: '/',
  });

  return (
    <main className="noise-bg bg-[#f5f5f5] z-0" id="main-content">
      <Hero />
      <OurWork />
      <Services />
      <Testimonials />
      <Clients />
      <Statement />
      <Portfolio />
      <Team compact />
      <Industries />
    </main>
  );
}
