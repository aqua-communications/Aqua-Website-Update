import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import usePageMeta, { SITE_URL } from '../hooks/usePageMeta';
import { services } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  const title = service
    ? `${service.title} in Bangladesh | AQUA Innovations`
    : 'Service | AQUA Innovations';
  const description = service?.detail || 'Explore AQUA Innovations services in Bangladesh.';
  const path = service ? `/services/${service.slug}` : '/services';

  usePageMeta({
    title,
    description,
    path,
    image: service?.image,
    imageAlt: service ? `${service.title} service by AQUA Innovations` : 'AQUA Innovations service',
    schema: service
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${SITE_URL}${path}#service`,
          name: service.title,
          description: service.detail,
          url: `${SITE_URL}${path}`,
          provider: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'AQUA Innovations',
            url: `${SITE_URL}/`,
          },
          areaServed: ['Bangladesh', 'Asia', 'Worldwide'],
          image: service.image.startsWith('http') ? service.image : `${SITE_URL}${service.image}`,
        }
      : undefined,
  });

  if (!service) {
    return (
      <main id="main-content" className="bg-[#f5f5f5] text-black min-h-screen pt-44">
        <div className="aqua-container">
          <h1 className="text-5xl font-medium">Service not found.</h1>
          <Link to="/services" className="inline-flex mt-8 underline">Return to services</Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero
        eyebrow="AQUA Service"
        title={service.title}
        accent="Bangladesh"
        description={service.detail}
      />
      <section className="pb-16 md:pb-24">
        <div className="aqua-container grid lg:grid-cols-12 gap-8 lg:gap-14 border-t border-black/15 pt-8 md:pt-10">
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black/5">
              <img
                src={service.image}
                alt={`${service.title} capability by AQUA Innovations in Bangladesh`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="section-eyebrow">What AQUA delivers</p>
            <h2 className="mt-5 text-[2rem] md:text-[2.8rem] font-medium tracking-[-0.04em] leading-[1.02]">
              Strategy, design and execution in one connected system.
            </h2>
            <p className="mt-6 text-[1rem] md:text-[1.08rem] text-black/65 leading-relaxed">{service.desc}</p>
            <p className="mt-5 text-[1rem] md:text-[1.08rem] text-black/65 leading-relaxed">{service.detail}</p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link to="/work" className="inline-flex min-h-12 items-center rounded-full bg-black text-white px-6 text-[11px] font-bold uppercase tracking-[0.15em]">See related work ↗</Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full border border-black/25 px-6 text-[11px] font-bold uppercase tracking-[0.15em]">Start a project →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
