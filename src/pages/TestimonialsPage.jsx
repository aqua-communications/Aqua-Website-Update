import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';
import { testimonials } from '../data/testimonials';

export default function TestimonialsPage() {
  usePageMeta({
    title: 'Client Reviews & Testimonials | JTI, MARKS, BIPPA & More | AQUA',
    description: 'Explore AQUA Innovations client work reviews across JTI, MARKS, BIPPA, Huawei, Unilever and ACI Limited, covering brand activation, corporate events, spatial experience and integrated communication in Bangladesh.',
    path: '/testimonials',
  });

  useStructuredData('client-reviews', {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Client Reviews & Testimonials | AQUA Innovations',
    url: 'https://www.aquabd.pro/testimonials',
    description: 'Project-review summaries describing AQUA Innovations work across selected corporate and consumer brand partnerships in Bangladesh.',
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
          '@type': 'CreativeWork',
          name: testimonial.question,
          description: testimonial.review,
          about: {
            '@type': 'Organization',
            name: testimonial.client,
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
        eyebrow="Client Reviews & Testimonials"
        title="Selected partnerships,"
        accent="described through the work."
        description="Direct, answer-first project summaries showing how AQUA approaches brand activation, corporate events, technology, spatial experience and integrated campaign delivery."
      />

      <section className="pb-16 md:pb-20" aria-label="Selected client work reviews">
        <div className="aqua-container border-t border-black/15">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.client}
              className="grid lg:grid-cols-12 gap-5 lg:gap-10 py-8 md:py-11 border-b border-black/15"
            >
              <div className="lg:col-span-1 text-[10px] font-bold tracking-[0.18em] text-black/45">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="lg:col-span-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0891b2]">
                  {testimonial.engagement}
                </p>
                <h2 className="mt-3 text-[1.45rem] md:text-[1.75rem] font-medium tracking-[-0.025em]">
                  {testimonial.client}
                </h2>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
                  Client work review
                </p>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-[0.78rem] md:text-[0.85rem] font-bold uppercase tracking-[0.12em] text-black/50">
                  {testimonial.question}
                </h3>
                <p className="mt-4 text-[1.25rem] md:text-[1.75rem] leading-[1.3] tracking-[-0.025em] font-medium">
                  {testimonial.review}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {testimonial.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/15 px-3 py-2 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-black/55"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <p className="max-w-3xl py-7 text-[0.78rem] md:text-[0.84rem] leading-relaxed text-black/45">
            These are AQUA-authored project review summaries describing the scope and
            experience of selected client work. Publish any direct client quotation or named
            spokesperson endorsement only after receiving the client&apos;s approval.
          </p>
        </div>
      </section>
    </main>
  );
}
