import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { projects } from '../data/projects';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Events', value: 'events' },
  { label: 'Digital', value: 'digital' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const previewRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);
  const items = useMemo(() => filter === 'all' ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);

  const setPreviewPosition = (e) => {
    if (!previewRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    if (!xTo.current) {
      xTo.current = gsap.quickTo(previewRef.current, 'x', { duration: 0.35, ease: 'power3' });
      yTo.current = gsap.quickTo(previewRef.current, 'y', { duration: 0.35, ease: 'power3' });
    }
    const rect = e.currentTarget.closest('section').getBoundingClientRect();
    xTo.current(e.clientX - rect.left + 24);
    yTo.current(e.clientY - rect.top - 90);
  };

  const showPreview = (project) => {
    if (!previewRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    const img = previewRef.current.querySelector('img');
    if (img) img.src = project.image;
    gsap.to(previewRef.current, { autoAlpha: 1, scale: 1, duration: 0.25 });
  };

  const hidePreview = () => {
    if (previewRef.current) gsap.to(previewRef.current, { autoAlpha: 0, scale: 0.94, duration: 0.2 });
  };

  return (
    <section className="relative py-14 md:py-20 text-black" id="portfolio" onPointerMove={setPreviewPosition}>
      <div className="aqua-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9 md:mb-11">
          <div>
            <p className="section-eyebrow mb-5">Featured Work</p>
            <h2 className="text-[clamp(2.3rem,5.8vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">Work built to<br /><span className="text-black/35">move people.</span></h2>
          </div>
          <div className="flex gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item.value} onClick={() => setFilter(item.value)} className={`min-h-11 rounded-full px-5 text-[11px] font-bold tracking-[0.14em] uppercase border transition-colors ${filter === item.value ? 'bg-black text-white border-black' : 'border-black/15 hover:border-black/40'}`}>{item.label}</button>
            ))}
          </div>
        </div>

        <div className="border-t border-black/15">
          {items.map((project, index) => (
            <article key={project.slug} className="group grid grid-cols-12 items-center gap-4 border-b border-black/15 py-5 md:py-6" onPointerEnter={() => showPreview(project)} onPointerLeave={hidePreview}>
              <span className="col-span-2 md:col-span-1 text-[10px] font-bold tracking-[0.16em] text-black/45">{String(index + 1).padStart(2, '0')}</span>
              <div className="col-span-10 md:col-span-6">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-bold text-black/45 mb-2">{project.client} · {project.year}</p>
                <h3 className="text-[1.6rem] sm:text-[2rem] md:text-[2.8rem] font-medium tracking-[-0.04em] leading-none group-hover:text-[#0891b2] transition-colors">{project.title}</h3>
              </div>
              <p className="hidden md:block md:col-span-3 text-[0.95rem] text-black/55">{project.category}</p>
              <div className="col-span-12 md:col-span-2 flex md:justify-end gap-4 pl-[16.666%] md:pl-0">
                <Link to={`/work/${project.slug}`} className="text-[11px] font-bold uppercase tracking-[0.14em]">Case study →</Link>
                <a href={project.externalFilm} target="_blank" rel="noreferrer" className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45 hover:text-black">Film ↗</a>
              </div>
            </article>
          ))}
        </div>
        <Link to="/work" className="inline-flex mt-7 text-[12px] font-bold uppercase tracking-[0.16em] border-b border-black/35 pb-1 hover:border-black">View all work ↗</Link>
      </div>

      <div ref={previewRef} aria-hidden="true" className="pointer-events-none absolute z-20 hidden lg:block w-[340px] aspect-[4/3] overflow-hidden rounded-xl opacity-0 scale-95 shadow-2xl">
        <img alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}
