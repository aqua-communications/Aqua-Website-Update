import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPage() {
  usePageMeta({
    title: 'Client Reviews & Project Stories | JTI, Huawei, MARKS, Igloo | AQUA',
    description: 'Explore AQUA Innovations project reviews for JTI, Cumilla Victorians, Durbar Rajshahi, Huawei, MARKS and Igloo across brand activation, sports marketing, corporate interiors and DITF exhibition design in Bangladesh.',
    path: '/testimonials',
  });

  useStructuredData('client-reviews', {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Client Reviews & Project Stories | AQUA Innovations',
    url: 'https://www.aquabd.pro/testimonials',
    description: 'AQUA-authored project review summaries covering selected corporate, sports, technology and FMCG partnerships in Bangladesh.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.aquabd.pro/#website',
      name: 'AQUA Innovations',
      url: 'https://www.aquabd.pro/',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: testimonials.length,
      itemListElement: testimonials.map((testimonial, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Question',
          name: testimonial.question,
          about: {
            '@type': 'Organization',
            name: testimonial.client,
          },
          keywords: testimonial.services.join(', '),
          acceptedAnswer: {
            '@type': 'Answer',
            text: testimonial.answer,
          },
          creator: {
            '@id': 'https://www.aquabd.pro/#organization',
          },
        },
      })),
    },
  });

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero
        eyebrow="Client Reviews & Project Stories"
        title="Work explained"
        accent="through outcomes."
        description="Answer-first project summaries showing what AQUA delivered, how each engagement was structured and the working approach behind brand activation, sports marketing, architecture and exhibition experiences in Bangladesh."
      />

      <section className="pb-16 md:pb-20" aria-label="Selected client project reviews">
        <div className="aqua-container">
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.client}
                className="rounded-2xl border border-black/12 bg-white/45 p-5 md:p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0891b2]">
                      {testimonial.sector}
                    </p>
                    <h2 className="mt-2 text-[1.35rem] md:text-[1.6rem] font-medium tracking-[-0.025em] leading-tight">
                      {testimonial.client}
                    </h2>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-black/55">{testimonial.engagement}</p>
                  </div>
                  <span className="shrink-0 text-[9px] font-bold tracking-[0.18em] text-black/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-[0.72rem] md:text-[0.78rem] font-bold uppercase tracking-[0.11em] leading-relaxed text-black/46">
                  {testimonial.question}
                </h3>
                <p className="mt-3 text-[0.98rem] md:text-[1.08rem] leading-[1.55] tracking-[-0.012em] font-medium text-black/88">
                  {testimonial.answer}
                </p>

                <div className="mt-5 space-y-3">
                  {testimonial.projects.map((project) => (
                    <div key={project.title} className="border-t border-black/10 pt-3">
                      <p className="text-[0.9rem] font-medium">{project.title}</p>
                      <p className="mt-1.5 text-[0.8rem] md:text-[0.84rem] leading-relaxed text-black/58">{project.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-black/[0.035] p-4">
                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/40">How AQUA worked</p>
                  <p className="mt-2 text-[0.82rem] md:text-[0.87rem] leading-relaxed text-black/65">{testimonial.workingStyle}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {testimonial.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/12 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-black/50"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="max-w-4xl py-7 text-[0.74rem] md:text-[0.8rem] leading-relaxed text-black/45">
            These are AQUA-authored project review summaries based on the scope and delivery of selected client engagements. They are not presented as verbatim quotations or named spokesperson endorsements. Direct client quotations should be published only with the client&apos;s approval.
          </p>
        </div>
      </section>
    </main>
  );
}
