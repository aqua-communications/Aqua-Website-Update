import PageHero from '../components/common/PageHero';
import Team from '../components/Team';
import usePageMeta from '../hooks/usePageMeta';

export default function TeamPage() {
  usePageMeta({ title: 'Team | AQUA Innovations', description: 'Meet the multidisciplinary AQUA team working across strategy, architecture, technology, brand communication, creative and operations.', path: '/team' });
  return <main id="main-content" className="bg-[#f5f5f5] text-black"><PageHero eyebrow="People" title="Multidisciplinary by" accent="design." description="Different disciplines, one shared standard: clarity from the first idea to the final experience." /><Team compact={false} /></main>;
}
