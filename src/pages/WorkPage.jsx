import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { projects } from '../data/projects';

export default function WorkPage() {
  usePageMeta({
    title: 'Selected Work | AQUA Innovations',
    description: 'Explore selected AQUA work across brand activation, events, digital ecosystems, architecture and sports marketing in Bangladesh.',
    path: '/work',
  });

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero eyebrow="Selected Work" title="Proof over" accent="promises." description="A growing index of experiences across physical, digital and cultural environments." />
      <section className="pb-16 md:pb-20">
        <div className="aqua-container grid md:grid-cols-2 gap-x-5 gap-y-9 md:gap-y-12">
          {projects.map((project, index) => (
            <article key={project.slug} className="group">
              <Link to={`/work/${project.slug}`} className="block aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-black/5">
                <img
                  src={project.image}
                  alt={`${project.title} by AQUA Innovations — ${project.category}`}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
              </Link>
              <div className="mt-4 flex justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">{project.client} · {project.year}</p>
                  <h2 className="mt-2 text-[1.6rem] md:text-[2rem] font-medium tracking-tight"><Link to={`/work/${project.slug}`}>{project.title}</Link></h2>
                  <p className="mt-1.5 text-[0.95rem] text-black/60">{project.category}</p>
                </div>
                <Link to={`/work/${project.slug}`} aria-label={`View ${project.title} case study`} className="self-start text-[11px] font-bold uppercase tracking-[0.14em]">↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
