import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { projects } from '../data/projects';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  usePageMeta({
    title: project ? `${project.title} | AQUA Innovations` : 'Project | AQUA Innovations',
    description: project?.summary || 'AQUA Innovations selected project.',
    path: project ? `/work/${project.slug}` : '/work',
  });

  if (!project) {
    return (
      <main id="main-content" className="bg-[#f5f5f5] text-black min-h-screen pt-44">
        <div className="aqua-container"><h1 className="text-5xl font-medium">Project not found.</h1><Link to="/work" className="inline-flex mt-8 underline">Return to work</Link></div>
      </main>
    );
  }

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero eyebrow={`${project.client} · ${project.year}`} title={project.title} accent={project.category} description={project.summary} />
      <section className="pb-16 md:pb-20">
        <div className="aqua-container">
          <div className="aspect-video rounded-[1.5rem] overflow-hidden bg-black">
            <img src={project.image} alt={`${project.title} project`} className="h-full w-full object-cover" />
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-9 md:mt-12 border-t border-black/15 pt-8 md:pt-10">
            <div className="lg:col-span-3"><p className="section-eyebrow">Project Framework</p></div>
            <div className="lg:col-span-6 space-y-7">
              <div><h2 className="text-[1.7rem] font-medium">Challenge</h2><p className="mt-3 text-black/65 leading-relaxed">Create a coherent experience that can hold attention, communicate the brand idea and move people toward meaningful participation.</p></div>
              <div><h2 className="text-[1.7rem] font-medium">Strategic response</h2><p className="mt-3 text-black/65 leading-relaxed">AQUA treats the environment, content, technology and production sequence as one connected journey. Detailed project metrics and confidential client information can be added here when approved for publication.</p></div>
              <div><h2 className="text-[1.7rem] font-medium">Execution</h2><p className="mt-3 text-black/65 leading-relaxed">The project is developed from concept through design and execution with a single system of visual, spatial and operational decisions.</p></div>
            </div>
            <div className="lg:col-span-3 lg:text-right">
              <a href={project.externalFilm} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-black text-white px-6 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#0891b2] transition-colors">Watch film ↗</a>
            </div>
          </div>
          <div className="mt-12 md:mt-16 flex justify-between gap-6 border-t border-black/15 pt-7">
            <Link to="/work" className="text-[11px] font-bold uppercase tracking-[0.15em]">← All work</Link>
            <Link to="/contact" className="text-[11px] font-bold uppercase tracking-[0.15em]">Start a project →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
