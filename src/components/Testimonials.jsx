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
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % testimonials.length), 7600);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  useEffect(() => {
    if (!stageRef.current || reduceMotion) return;
    gsap.fromTo(
      stageRef.current,
      { opacity: 0.25, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9 md:mb-11">
          <div>
            <p className="section-eyebrow mb-5">Client Reviews &amp; Testimonials</p>
            <h2
              id="client-reviews-title"
              className="text-[clamp(2.3rem,5.8vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em]"
            >
              Selected partnerships,<br />
              <span className="text-black/35">described through the work.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[1rem] md:text-[1.05rem] leading-relaxed text-black/65">
              Clear project-review summaries across brand activation, corporate events,
              spatial experience, technology and integrated communication.
            </p>
            <Link
              to="/testimonials"
              className="inline-flex mt-4 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-black/30 pb-1 hover:border-black"
            >
              View all client reviews ↗
            </Link>
          </div>
        </div>

        <div className="border-y border-black/15 py-9 md:py-12">
          <article ref={stageRef} className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0891b2]">
                  {testimonial.engagement}
                </p>
                <h3 className="mt-3 text-[1.4rem] md:text-[1.75rem] font-medium tracking-[-0.025em]">
                  {testimonial.client}
                </h3>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black/40">
                  Client work review
                </p>
              </div>

              <div className="lg:col-span-9">
                <p className="text-[0.82rem] md:text-[0.9rem] font-bold uppercase tracking-[0.12em] text-black/45 mb-4">
                  {testimonial.question}
                </p>
                <p className="text-[1.4rem] sm:text-[1.75rem] md:text-[2.35rem] lg:text-[2.7rem] font-medium tracking-[-0.035em] leading-[1.15]">
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
            </div>
          </article>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => move(-1)}
            className="min-h-11 px-2 text-[11px] font-bold uppercase tracking-[0.14em]"
          >
            ← Prev
          </button>
          <div className="flex items-center gap-1" aria-label="Client review selection">
            {testimonials.map((item, index) => (
              <button
                key={item.client}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show ${item.client} client review`}
                aria-current={index === current ? 'true' : undefined}
                className="h-8 w-8 flex items-center justify-center"
              >
                <span
                  className={`block h-[3px] rounded-full transition-all ${
                    index === current ? 'w-7 bg-black' : 'w-4 bg-black/25'
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              className="min-h-11 px-2 text-[11px] font-bold uppercase tracking-[0.14em]"
            >
              {paused ? 'Play' : 'Pause'}
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="min-h-11 px-2 text-[11px] font-bold uppercase tracking-[0.14em]"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
