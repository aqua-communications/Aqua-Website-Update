import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';

const officeAddress = 'Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan, Dhaka 1212, Bangladesh';
const officeMap = 'https://maps.app.goo.gl/USmeeDpN74P56vuF7';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact AQUA Innovations | Niketan, Gulshan, Dhaka',
    description: 'Contact AQUA Innovations at Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan, Dhaka 1212 for brand experience, activation, architecture, technology and integrated communication projects.',
    path: '/contact',
  });

  useStructuredData('contact-page', {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AQUA Innovations',
    url: 'https://www.aquabd.pro/contact',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://www.aquabd.pro/#organization',
      name: 'AQUA Innovations',
      email: 'communications@aquabd.pro',
      telephone: '+8801782314352',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan',
        addressLocality: 'Dhaka',
        postalCode: '1212',
        addressCountry: 'BD',
      },
      location: {
        '@type': 'Place',
        name: 'AQUA Innovations Office',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan',
          addressLocality: 'Dhaka',
          postalCode: '1212',
          addressCountry: 'BD',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 23.77321,
          longitude: 90.4138836,
        },
        hasMap: officeMap,
      },
    },
  });

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero
        eyebrow="Contact"
        title="Start with"
        accent="clarity."
        description="Tell us the problem, ambition or opportunity. We will help define the experience around it."
      />

      <section className="pb-16 md:pb-20">
        <div className="aqua-container grid lg:grid-cols-12 gap-10 border-t border-black/15 pt-8 md:pt-10">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-black/45 mb-4">Project enquiries</p>
            <a
              href="mailto:communications@aquabd.pro"
              className="text-[clamp(1.8rem,4vw,4rem)] font-medium tracking-tight break-all hover:text-[#0891b2] transition-colors"
            >
              communications@aquabd.pro
            </a>
          </div>

          <div className="lg:col-span-5 lg:text-right space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-black/45">Call</p>
            <a href="tel:+8801782314352" className="block text-2xl font-medium">+880 1782-314352</a>
          </div>
        </div>

        <div className="aqua-container mt-10 md:mt-12">
          <div className="grid lg:grid-cols-12 gap-8 border-y border-black/15 py-8 md:py-10">
            <div className="lg:col-span-4">
              <p className="section-eyebrow mb-4">AQUA Office</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-medium tracking-[-0.035em]">
                Where is AQUA Innovations located?
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[1.15rem] md:text-[1.45rem] leading-relaxed font-medium">
                AQUA Innovations is located at {officeAddress}.
              </p>
              <a
                href={officeMap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-5 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-black/30 pb-1 hover:border-black"
              >
                Open office location in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
