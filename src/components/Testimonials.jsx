import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const stageRef = useRef(null);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % testimonials.length), 10500);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  useEffect(() => {
    if (!stageRef.current || reduceMotion) return;
    gsap.fromTo(
      stageRef.current,
      { opacity: 0.3, y: 10 },
      { opacity: 1, y: 0, duration: 0.48, ease: 'power3.out' },
    );
  }, [current, reduceMotion]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const testimonial = testimonials[current];
  const move = (direction) => setCurrent((value) => (value + direction + testimonials.length) % testimonials.length);

  return (
    <section
      className="py-14 md:py-20 text-black"
      id="testimonials"
      aria-labelledby="client-reviews-title"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="aqua-container">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-8 md:mb-10 items-end">
          <div className="lg:col-span-8">
            <p className="section-eyebrow mb-4">Client Reviews &amp; Partnership Stories</p>
            <h2
              id="client-reviews-title"
              className="text-[clamp(2rem,4.4vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em]"
            >
              What we delivered.<br />
              <span className="text-black/35">How the partnership worked.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end max-w-md">
            <p className="text-[0.92rem] md:text-[1rem] leading-relaxed text-black/62">
              Detailed project summaries across corporate experience, sports marketing,
              architecture, FMCG exhibition design and nationwide brand activation in Bangladesh.
            </p>
            <Link
              to="/testimonials"
              className="inline-flex mt-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] border-b border-black/30 pb-1 hover:border-black"
            >
              View all client reviews ↗
            </Link>
          </div>
        </div>

        <div className="border-y border-black/15 py-7 md:py-9">
          <article ref={stageRef} className="mx-auto max-w-[1320px]">
            <div className="grid lg:grid-cols-12 gap-7 lg:gap-11 items-start">
              <div className="lg:col-span-3">
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-[#0891b2]">
                  {testimonial.sector}
                </p>
                <h3 className="mt-2 text-[1.35rem] md:text-[1.6rem] font-medium tracking-[-0.025em] leading-tight">
                  {testimonial.client}
                </h3>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-black/55">
                  {testimonial.engagement}
                </p>
                <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.14em] text-black/35">
                  AQUA-authored project review
                </p>
              </div>

              <div className="lg:col-span-9">
                <p className="text-[0.72rem] md:text-[0.78rem] font-bold uppercase tracking-[0.12em] text-black/45">
                  {testimonial.question}
                </p>
                <p className="mt-3 max-w-5xl text-[1.05rem] sm:text-[1.12rem] md:text-[1.28rem] lg:text-[1.38rem] font-medium tracking-[-0.018em] leading-[1.45] text-black/90">
                  {testimonial.answer}
                </p>

                <div className={`mt-6 grid gap-3 ${testimonial.projects.length > 1 ? 'md:grid-cols-2' : ''}`}>
                  {testimonial.projects.map((project) => (
                    <div key={project.title} className="rounded-xl border border-black/12 bg-white/45 p-4 md:p-5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0891b2]">Project Scope</p>
                      <h4 className="mt-2 text-[1rem] md:text-[1.08rem] font-medium tracking-[-0.015em]">{project.title}</h4>
                      <p className="mt-2 text-[0.84rem] md:text-[0.9rem] leading-relaxed text-black/60">{project.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-l-2 border-[#0891b2] pl-4 md:pl-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">Working style</p>
                  <p className="mt-2 text-[0.88rem] md:text-[0.96rem] leading-relaxed text-black/68">{testimonial.workingStyle}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {testimonial.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/15 px-3 py-1.5 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.12em] text-black/55"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="min-h-11 px-2 text-[10px] font-bold uppercase tracking-[0.14em]"
          >
            ← Prev
          </button>
          <div className="flex items-center gap-0.5" aria-label="Client review selection">
            {testimonials.map((item, index) => (
              <button
                key={item.client}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show ${item.client} client review`}
                aria-current={index === current ? 'true' : undefined}
                className="h-8 w-7 flex items-center justify-center"
              >
                <span
                  className={`block h-[2px] rounded-full transition-all ${
                    index === current ? 'w-6 bg-black' : 'w-3 bg-black/25'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              className="min-h-11 px-2 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              {paused ? 'Play' : 'Pause'}
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="min-h-11 px-2 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
