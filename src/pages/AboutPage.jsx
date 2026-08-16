import PageHero from '../components/common/PageHero';
import About from '../components/About';
import Approach from '../components/Approach';
import WhyAqua from '../components/WhyAqua';
import usePageMeta from '../hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About AQUA | Our Four-Layer Experience Design Approach',
    description: 'Learn how AQUA combines insight, strategy, design and execution with architecture, marketing and technology to build connected brand experiences from Dhaka, Bangladesh.',
    path: '/about',
  });

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero
        eyebrow="About AQUA"
        title="Built across"
        accent="disciplines."
        description="We bring architecture, strategy, communication and technology into the same room so experiences are designed as complete systems."
      />
      <About />
      <Approach />
      <WhyAqua />
    </main>
  );
}
