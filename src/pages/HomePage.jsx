import usePageMeta, { SITE_URL } from '../hooks/usePageMeta';
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
    title: 'AQUA | Brand Activation Agency',
    description: 'AQUA Innovations is a Dhaka-based brand activation and experience design agency creating events, campaigns, digital experiences and branded spaces.',
    path: '/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'AQUA Innovations | Brand Activation Agency Bangladesh',
      description: 'AQUA Innovations is a Dhaka-based brand activation and experience design agency creating events, campaigns, digital experiences and branded spaces.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
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
