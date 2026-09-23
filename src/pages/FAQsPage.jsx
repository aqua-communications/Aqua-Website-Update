import { useMemo } from 'react';
import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';

const faqLinks = {
  'What is brand activation?': [
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
  ],
  'What is experiential marketing?': [
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
  ],
  'What is the difference between ATL and BTL marketing?': [
    { label: 'WordStream: ATL vs BTL Marketing', href: 'https://www.wordstream.com/blog/ws/2014/01/27/atl-vs-btl-marketing' },
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
  ],
  'What is BTL marketing?': [
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
  ],
  'What is the difference between brand activation and experiential marketing?': [
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
  ],
  'What is product sampling marketing?': [
    { label: 'Wikipedia: Product Demonstration', href: 'https://en.wikipedia.org/wiki/Product_demonstration' },
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
  ],
  'What is retail or shopper activation?': [
    { label: 'Wikipedia: Point of Sale', href: 'https://en.wikipedia.org/wiki/Point_of_sale' },
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
  ],
  'Can experiential marketing drive sales?': [
    { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
    { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
  ],
};

const faqs = [
  ["What is BTL marketing?", "BTL marketing, or below-the-line marketing, is a targeted marketing approach designed to reach specific audiences and encourage direct engagement or action. Common BTL activities include brand activations, product sampling, retail promotions, roadshows, field marketing, events and experiential campaigns. Modern BTL marketing can also connect physical experiences with digital channels such as QR journeys, social media, CRM, creators, paid media and ecommerce. The objective is not simply exposure, but measurable audience participation."],
  ["What is brand activation?", "Brand activation is a marketing strategy that turns passive brand awareness into active audience participation. It gives people an opportunity to experience, interact with, try or respond to a brand through activities such as product demonstrations, sampling, pop-ups, retail experiences, sponsorship activations, interactive installations and live events. A strong brand activation connects the experience to a clear business objective such as product trial, engagement, lead generation, sales, awareness or customer loyalty."],
  ["What is experiential marketing?", "Experiential marketing is a strategy that creates interactive experiences between brands and audiences. Instead of only showing an advertisement, experiential marketing invites people to participate through live events, pop-ups, immersive installations, demonstrations, digital experiences, AR, VR or hybrid campaigns. The goal is to create stronger engagement, memorability and emotional connection by allowing audiences to experience a brand rather than simply receive its message."],
  ["What is the difference between ATL and BTL marketing?", "ATL, or above-the-line marketing, traditionally focuses on broad audience reach through mass-media advertising, while BTL, or below-the-line marketing, focuses on targeted engagement and direct audience interaction. ATL can build large-scale awareness, while BTL activities such as activations, sampling, events and retail promotions can turn awareness into participation or action. Modern integrated marketing campaigns often combine ATL, BTL and digital channels rather than treating them as separate strategies."],
  ["What is the difference between brand activation and experiential marketing?", "Experiential marketing is the broader strategy of creating participatory brand experiences, while brand activation usually refers to a specific campaign designed to bring a brand or product to life and encourage an audience response. The disciplines overlap significantly. A product launch, immersive installation or sampling experience may be both experiential marketing and brand activation. The most useful distinction is that experiential marketing describes the strategic approach, while activation often describes the execution."],
  ["What does a BTL or brand activation agency do?", "A BTL or brand activation agency transforms marketing objectives into audience experiences and manages the work required to deliver them. Services can include strategy, audience research, creative concepts, experience design, production, fabrication, vendor management, promotional staffing, logistics, venue coordination, digital amplification, campaign execution and performance measurement. The agency's role is to connect the business objective, creative idea and operational execution into one measurable campaign."],
  ["How do you measure the ROI of a brand activation?", "Brand activation ROI is measured by comparing campaign objectives and results with the total investment required to deliver the activation. Relevant metrics may include qualified interactions, product trials, samples distributed, QR scans, registrations, leads, opt-ins, sales, conversions, social engagement, user-generated content, media exposure, sentiment and brand awareness. The correct metrics depend on the objective. A product launch, lead-generation campaign and awareness activation should not all be judged by the same KPI."],
  ["How much does a brand activation cost?", "Brand activation costs vary because every campaign has different creative, production and operational requirements. The final budget may depend on the campaign location, duration, venue, footprint, fabrication, staffing, technology, equipment, content production, permissions, travel, logistics and measurement requirements. A useful agency proposal should clearly separate essential campaign costs from optional enhancements and explain how the investment supports the marketing objective."],
  ["How do I choose the right brand activation agency?", "Choose a brand activation agency based on strategic thinking, relevant work, execution capability, project management, measurement methodology and transparency. Review whether the agency understands your audience and business objective, then examine how it manages production, suppliers, logistics, staffing, risk and reporting. For brands searching for a brand activation agency in Bangladesh, local execution knowledge should also be considered alongside creative capability and strategic experience."],
  ["What are examples of BTL marketing?", "Examples of BTL marketing include product sampling, demonstrations, retail activation, roadshows, campus campaigns, pop-ups, brand events, trade promotions, field marketing, experiential installations and direct consumer engagement. Modern BTL campaigns can also include digital elements such as QR codes, social media, creators, interactive technology, CRM capture and retargeting. The defining characteristic is targeted engagement rather than reliance on broad mass-media exposure alone."],
  ["What makes a brand activation successful?", "A successful brand activation begins with a clear objective, a defined audience and a compelling reason for people to participate. The creative idea, customer journey, location, production, staff and call to action should support the same goal. The experience must also be easy to understand and relevant to the audience. Success should then be evaluated using agreed KPIs such as engagement, trial, leads, sales, content generation or brand awareness."],
  ["What KPIs should a brand activation track?", "Brand activation KPIs should reflect the business objective of the campaign. Common metrics include footfall, qualified interactions, dwell time, product trials, samples, registrations, QR scans, leads, opt-ins, purchases, revenue, social engagement, user-generated content, earned media, brand awareness and sentiment. A campaign should focus on the metrics that indicate meaningful audience behaviour rather than collecting every possible measurement simply because the technology exists."],
  ["Can experiential marketing drive sales?", "Experiential marketing can contribute directly or indirectly to sales when the experience connects participation with product trial, purchase opportunities or measurable follow-up. Sampling, demonstrations, retail experiences and product launches can encourage immediate conversion, while other campaigns may influence consideration or future purchase. Campaign objectives should therefore determine whether sales, leads, product trial, brand awareness or another behavioural metric is the most appropriate measure of success."],
  ["How can brand activation support a product launch?", "Brand activation helps a product launch by allowing potential customers to experience the product rather than only hear about it. A launch activation can combine demonstrations, sampling, storytelling, creators, content, offers, digital engagement, data capture and purchasing opportunities. The strongest execution makes the product's key benefit easy to understand and gives participants a clear next step after the experience."],
  ["What should brands consider when planning activations in Bangladesh?", "Brand activations in Bangladesh should be planned around audience geography, language, cultural context, seasonality, local events, venue conditions, permissions, traffic patterns, retail behaviour and urban-versus-regional differences. A campaign designed for Dhaka may require a very different execution model from one targeting audiences in other cities or regional markets. The central brand strategy should remain consistent while the audience experience and operational approach are localised."],
  ["Which locations work best for BTL campaigns in Bangladesh?", "The best BTL campaign location in Bangladesh depends on the target audience and campaign objective rather than footfall alone. Retail environments and malls may suit shopper campaigns, universities can support youth engagement, commercial districts can reach professional audiences, while roadshows and community locations may support broader geographic engagement. Location selection should consider audience relevance, accessibility, permissions, traffic flow, safety and the type of interaction required."]
];

const hiddenFaqs = [
  {
    question: 'What is engagement marketing?',
    answer: 'Engagement marketing is a marketing strategy that directly involves consumers in the development of a brand experience. It focuses on participation, interaction and emotional connection instead of passive message delivery.',
    links: [
      { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
      { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
    ],
  },
  {
    question: 'How does experiential marketing create customer engagement?',
    answer: 'Experiential marketing creates customer engagement by allowing people to touch, test, explore or co-create a brand experience. This creates stronger memory, emotional attachment and behavioural response than static advertising alone.',
    links: [
      { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
      { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
    ],
  },
  {
    question: 'What is the difference between above-the-line and below-the-line marketing?',
    answer: 'Above-the-line marketing focuses on broad reach through mass media, while below-the-line marketing targets direct engagement and measurable audience response. Many campaign plans combine both.',
    links: [
      { label: 'WordStream: ATL vs BTL Marketing', href: 'https://www.wordstream.com/blog/ws/2014/01/27/atl-vs-btl-marketing' },
      { label: 'Wikipedia: Engagement Marketing', href: 'https://en.wikipedia.org/wiki/Engagement_marketing' },
    ],
  },
  {
    question: 'What is product sampling marketing?',
    answer: 'Product sampling marketing gives potential customers a direct, low-friction way to experience the product before purchase, often making trial, trust and conversion easier to achieve.',
    links: [
      { label: 'Wikipedia: Product Demonstration', href: 'https://en.wikipedia.org/wiki/Product_demonstration' },
      { label: 'HubSpot: Brand Activation Strategy', href: 'https://blog.hubspot.com/marketing/brand-activation' },
    ],
  },
  {
    question: 'What is the difference between BTL and digital marketing?',
    answer: 'BTL marketing is a targeted engagement model, while digital marketing focuses on the channels and technologies used to deliver campaigns. The strongest strategies combine both.',
    links: [
      { label: 'Wikipedia: Digital Marketing', href: 'https://en.wikipedia.org/wiki/Digital_marketing' },
      { label: 'WordStream: ATL vs BTL Marketing', href: 'https://www.wordstream.com/blog/ws/2014/01/27/atl-vs-btl-marketing' },
    ],
  },
];

const allFaqs = [...faqs, ...hiddenFaqs.map(({ question, answer, links }) => [question, answer, links])];

export default function FAQsPage() {
  usePageMeta({
    title: 'AQUA Innovations FAQs | Services, Process & Project Enquiries',
    description: 'Clear answers about AQUA Innovations services, project process, execution capabilities, location and how to start a project.',
    path: '/faqs',
  });

  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => {
      const question = faq[0];
      const answer = faq[1];
      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      };
    }),
  }), []);

  useStructuredData('faqs', faqSchema);

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero eyebrow="FAQs" title="Clear questions." accent="Clear answers." description="Quick answers for clients evaluating AQUA's capabilities, process and project fit." />
      <section className="pb-16 md:pb-20">
        <div className="aqua-container border-t border-black/15">
          {faqs.map(([q, a], i) => {
            const relatedLinks = faqLinks[q] || [];
            return (
              <details key={q} className="group border-b border-black/15 py-5 md:py-6">
                <summary className="cursor-pointer list-none flex gap-5 justify-between text-[1.2rem] md:text-[1.5rem] font-medium">
                  <span><span className="mr-4 text-[10px] tracking-[0.16em] text-black/45">{String(i + 1).padStart(2, '0')}</span>{q}</span>
                  <span className="group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 max-w-3xl pl-9 text-black/65 leading-relaxed">
                  <p>{a}</p>
                  {relatedLinks.length > 0 && (
                    <div className="mt-4 text-sm text-black/65">
                      <span className="font-medium text-black/80">Related reading:</span>{' '}
                      {relatedLinks.map(({ label, href }, idx) => (
                        <span key={href}>
                          {idx > 0 && <span className="mx-2 text-black/40">|</span>}
                          <a href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-black hover:no-underline">
                            {label}
                          </a>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <div style={{ display: 'none' }} aria-hidden="true">
        {hiddenFaqs.map(({ question, answer, links }) => (
          <div key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
            {links.map(({ label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
