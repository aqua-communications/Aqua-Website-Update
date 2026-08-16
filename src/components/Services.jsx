import { Link } from 'react-router-dom';
import { services } from '../data/services';

function ServiceCard({ service, index, duplicate = false }) {
  return (
    <Link
      to={`/services#${service.slug}`}
      tabIndex={duplicate ? -1 : undefined}
      className="service-carousel-card group relative shrink-0 aspect-[4/5] rounded-[1.35rem] overflow-hidden bg-black"
    >
      <img
        src={service.image}
        alt={duplicate ? '' : `${service.title} capability by AQUA Innovations`}
        aria-hidden={duplicate ? 'true' : undefined}
        className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.035]"
        loading={index < 2 && !duplicate ? 'eager' : 'lazy'}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />
      <span className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.18em] uppercase text-white/70">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
        <h3 className="text-[1.5rem] md:text-[1.75rem] font-medium tracking-tight leading-tight">{service.title}</h3>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-white/70 max-w-[34ch]">{service.desc}</p>
        <span className="inline-block mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#85ffff]">View capability ↗</span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="py-14 md:py-20 text-black overflow-hidden" id="services">
      <div className="aqua-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-9 md:mb-11 items-end">
          <div className="lg:col-span-8">
            <p className="section-eyebrow mb-5">Integrated Solutions</p>
            <h2 className="text-[clamp(2.3rem,5.8vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              Integrated solutions.<br /><span className="text-black/35">One strategic core.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45 mb-3">Strategic Core</p>
            <p className="text-[1.05rem] leading-relaxed text-black/65">Architecture · Brand · Technology · Experience</p>
            <Link to="/services" className="inline-flex mt-6 text-[12px] font-bold uppercase tracking-[0.16em] border-b border-black/35 pb-1 hover:border-black">Explore all services ↗</Link>
          </div>
        </div>
      </div>

      <div className="service-carousel" aria-label="AQUA integrated solutions">
        <div className="service-carousel-track">
          <div className="service-carousel-group">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <div className="service-carousel-group" aria-hidden="true">
            {services.map((service, index) => (
              <ServiceCard key={`duplicate-${service.slug}`} service={service} index={index} duplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
