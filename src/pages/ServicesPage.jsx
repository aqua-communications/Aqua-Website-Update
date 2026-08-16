import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { services } from '../data/services';

export default function ServicesPage() {
  usePageMeta({
    title: 'Experiential Marketing, Architecture & Digital Services | AQUA',
    description: 'Explore AQUA services across events and activation, branding, architecture, digital platforms, automation, content, video and sports marketing.',
    path: '/services',
  });

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero eyebrow="Capabilities" title="Integrated Solutions." accent="One Strategic Core." description="AQUA connects strategy, space, technology and communication so a project can move from idea to execution without losing its central logic." />
      <section className="pb-16 md:pb-20">
        <div className="aqua-container border-t border-black/15">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8 md:py-10 border-b border-black/15 scroll-mt-32">
              <div className="lg:col-span-1 text-[11px] font-bold tracking-[0.18em] text-black/45">{String(index + 1).padStart(2, '0')}</div>
              <div className="lg:col-span-4">
                <h2 className="text-[2rem] md:text-[2.8rem] font-medium tracking-[-0.04em] leading-none">{service.title}</h2>
                <p className="mt-4 text-black/60 leading-relaxed">{service.desc}</p>
              </div>
              <div className="lg:col-span-4">
                <p className="text-[1rem] md:text-[1.08rem] text-black/65 leading-relaxed">{service.detail}</p>
                <Link to="/work" className="inline-flex mt-7 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-black/30 pb-1">See related work ↗</Link>
              </div>
              <div className="lg:col-span-3 aspect-[4/3] overflow-hidden rounded-xl bg-black/5">
                <img src={service.image} alt={`${service.title} capability by AQUA Innovations`} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
