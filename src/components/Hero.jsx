import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const TRAIL_IMAGES = [
  '/images/hero-trail/1.jpg',
  '/images/hero-trail/2.jpg',
  '/images/hero-trail/3.jpg',
  '/images/hero-trail/4.jpg',
  '/images/hero-trail/5.jpg',
  '/images/hero-trail/6.jpg',
  '/images/hero-trail/7.jpg',
  '/images/hero-trail/8.jpg',
  '/images/hero-trail/9.jpg',
  '/images/hero-trail/10.jpg',
  '/images/hero-trail/11.jpg',
  '/images/hero-trail/12.jpg',
];

const SPAWN_DISTANCE = 58;
const TRAIL_LINGER = 1.15;

export default function Hero() {
  const rootRef = useRef(null);
  const trailItemsRef = useRef([]);
  const imageIndexRef = useRef(0);
  const lastPositionRef = useRef({ x: -9999, y: -9999 });
  const layerRef = useRef(30);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      gsap.fromTo(
        '.hero-line',
        { yPercent: reduce ? 0 : 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: reduce ? 0.2 : 1.05,
          stagger: reduce ? 0 : 0.12,
          ease: 'power4.out',
          delay: reduce ? 0 : 0.15,
        },
      );

      gsap.fromTo(
        '.hero-support',
        { y: reduce ? 0 : 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: reduce ? 0.2 : 0.8,
          ease: 'power3.out',
          delay: reduce ? 0 : 0.72,
        },
      );
    }, root);

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktopMotion: '(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
      },
      (context) => {
        if (!context.conditions.desktopMotion) return undefined;

        const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

        const showTrailImage = (x, y) => {
          const index = imageIndexRef.current % TRAIL_IMAGES.length;
          const item = trailItemsRef.current[index];
          if (!item) return;

          imageIndexRef.current += 1;
          layerRef.current += 1;

          const rotation = gsap.utils.random(-11, 11, 0.5);
          const scale = gsap.utils.random(0.92, 1.08, 0.01);
          const xDrift = gsap.utils.random(-22, 22, 1);
          const yDrift = gsap.utils.random(-18, 10, 1);

          gsap.killTweensOf(item);
          gsap.set(item, {
            left: x,
            top: y,
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            rotation,
            scale: 0.64,
            opacity: 0,
            zIndex: layerRef.current,
          });

          gsap
            .timeline()
            .to(item, {
              opacity: 1,
              scale,
              duration: 0.24,
              ease: 'power3.out',
            })
            .to(
              item,
              {
                x: xDrift,
                y: yDrift,
                duration: TRAIL_LINGER,
                ease: 'none',
              },
              '<',
            )
            .to(item, {
              opacity: 0,
              scale: scale * 0.88,
              y: yDrift - 24,
              duration: 0.42,
              ease: 'power2.in',
            });
        };

        const handlePointerMove = (event) => {
          const rect = root.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };

          if (distance(position, lastPositionRef.current) < SPAWN_DISTANCE) return;
          lastPositionRef.current = position;
          showTrailImage(position.x, position.y);
        };

        const handlePointerEnter = (event) => {
          const rect = root.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };
          lastPositionRef.current = position;
          showTrailImage(position.x, position.y);
        };

        root.addEventListener('pointermove', handlePointerMove, { passive: true });
        root.addEventListener('pointerenter', handlePointerEnter, { passive: true });

        return () => {
          root.removeEventListener('pointermove', handlePointerMove);
          root.removeEventListener('pointerenter', handlePointerEnter);
          trailItemsRef.current.forEach((item) => item && gsap.killTweensOf(item));
        };
      },
    );

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center"
    >
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover scale-[1.045] opacity-95 blur-[1.5px]"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/16" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none z-20 hidden md:block overflow-hidden"
        aria-hidden="true"
      >
        {TRAIL_IMAGES.map((src, index) => (
          <figure
            key={src}
            ref={(node) => {
              trailItemsRef.current[index] = node;
            }}
            className="absolute left-0 top-0 w-[clamp(150px,13.5vw,230px)] overflow-hidden rounded-[10px] opacity-0 shadow-[0_18px_55px_rgba(0,0,0,0.24)] will-change-transform"
          >
            <img
              src={src}
              alt=""
              draggable="false"
              loading={index < 4 ? 'eager' : 'lazy'}
              decoding="async"
              className="block aspect-[3/2] w-full object-cover select-none"
            />
          </figure>
        ))}
      </div>

      <div className="aqua-container relative z-10 pt-24 pb-20 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-[1500px] text-center">
          <div className="overflow-hidden mb-5 md:mb-6">
            <p className="hero-line text-[clamp(0.85rem,1.55vw,1.35rem)] font-semibold uppercase tracking-[0.22em] text-white/72">
              We don&apos;t just build brands
            </p>
          </div>

          <h1 className="uppercase font-black tracking-[-0.072em] leading-[0.82] text-[clamp(3.5rem,10.9vw,11rem)]">
            <span className="block overflow-hidden">
              <span className="hero-line block">We Architect</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">Experiences</span>
            </span>
          </h1>

          <div className="overflow-hidden mt-5 md:mt-6">
            <p className="hero-line text-[clamp(0.85rem,1.55vw,1.35rem)] font-semibold uppercase tracking-[0.22em] text-white/72">
              That move people
            </p>
          </div>

          <div className="hero-support relative z-10 mt-8 md:mt-10 mx-auto max-w-[760px]">
            <p className="text-[0.98rem] md:text-[1.15rem] leading-relaxed text-white/80">
              From concept to reality, AQUA Innovations merges creativity, technology, and architectural thinking to design experiences that influence, engage, and convert.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/work"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white text-black px-7 text-[11px] font-bold tracking-[0.16em] uppercase hover:bg-[#85ffff] transition-colors"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/45 px-7 text-[11px] font-bold tracking-[0.16em] uppercase hover:border-white hover:bg-white hover:text-black transition-all"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-10 aqua-container hidden sm:flex justify-between text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-white/82">
        <span>Based in Dhaka, Bangladesh</span>
        <span>Established 2024</span>
      </div>
    </section>
  );
}
