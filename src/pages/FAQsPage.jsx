import { useMemo } from 'react';
import PageHero from '../components/common/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import useStructuredData from '../hooks/useStructuredData';

const faqs = [
  ['What does AQUA Innovations do?', 'AQUA Innovations is a multidisciplinary experience design company in Dhaka working across brand activation, architecture, branding, content, video, sports marketing, digital platforms and automation.'],
  ['Can AQUA manage execution as well as design?', 'Yes. AQUA can structure projects from insight and strategy through design, production and execution, with scope adapted to the requirements of each client and project.'],
  ['Where is AQUA based?', 'AQUA Innovations is based in Dhaka, Bangladesh and develops projects across different locations according to client scope.'],
  ['How do we start a project with AQUA?', 'Start with the business objective, audience, timeline and constraints. AQUA can then structure the project around insight, strategy, design and execution.'],
];

export default function FAQsPage() {
  usePageMeta({
    title: 'AQUA Innovations FAQs | Services, Process & Project Enquiries',
    description: 'Clear answers about AQUA Innovations services, project process, execution capabilities, location and how to start a project.',
    path: '/faqs',
  });

  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }), []);

  useStructuredData('faqs', faqSchema);

  return (
    <main id="main-content" className="bg-[#f5f5f5] text-black">
      <PageHero eyebrow="FAQs" title="Clear questions." accent="Clear answers." description="Quick answers for clients evaluating AQUA's capabilities, process and project fit." />
      <section className="pb-16 md:pb-20">
        <div className="aqua-container border-t border-black/15">
          {faqs.map(([q, a], i) => (
            <details key={q} className="group border-b border-black/15 py-5 md:py-6">
              <summary className="cursor-pointer list-none flex gap-5 justify-between text-[1.2rem] md:text-[1.5rem] font-medium">
                <span><span className="mr-4 text-[10px] tracking-[0.16em] text-black/45">{String(i + 1).padStart(2, '0')}</span>{q}</span>
                <span className="group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 max-w-3xl pl-9 text-black/65 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
