import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Statement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = section.querySelectorAll('.statement-word');
    const images = section.querySelectorAll('.statement-img');

    // Scroll-triggered timeline with smoother scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        end: 'bottom 55%',
        scrub: 1.2,
      }
    });

    tl.to(words, {
      color: 'rgba(0, 0, 0, 1)',
      duration: 0.4,
      stagger: 0.08,
      ease: 'power1.inOut'
    }, 0);

    // Word positions (0-indexed): Clarity(0), creates(1), [IMG1], trust(2),
    //   innovation(3), creates(4), [IMG2], impact(5), we(6), design(7),
    //   [IMG3], experiences(8), that(9), move(10), [IMG4], people(11)
    const imageTimings = [
      2 * 0.08,
      5 * 0.08,
      8 * 0.08,
      11 * 0.08,
    ];

    images.forEach((img, i) => {
      tl.fromTo(img,
        { width: 0, marginLeft: 0, marginRight: 0 },
        {
          width: '1em',
          marginLeft: '0.15em',
          marginRight: '0.15em',
          duration: 0.5,
          ease: 'power3.out',
        },
        imageTimings[i]
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-14 md:py-20 overflow-hidden" ref={sectionRef}>
      <div className="statement-container">
        <h2 className="statement-heading">

          {/* Line 1: Clarity creates [img] trust. */}
          <div className="statement-line"><div className="statement-word">Clarity</div> <div className="statement-word">creates</div> <span className="statement-img"><img src="/images/hero-trail/2.jpg" alt="" /></span> <div className="statement-word">trust.</div></div>

          {/* Line 2: Innovation creates [img] impact. */}
          <div className="statement-line"><div className="statement-word">Innovation</div> <div className="statement-word">creates</div> <span className="statement-img"><img src="/images/hero-trail/5.jpg" alt="" /></span> <div className="statement-word">impact.</div></div>

          {/* Line 3: We design [img] experiences */}
          <div className="statement-line"><div className="statement-word">We</div> <div className="statement-word">design</div> <span className="statement-img"><img src="/images/hero-trail/9.jpg" alt="" /></span> <div className="statement-word">experiences</div></div>

          {/* Line 4: that move [img] people. */}
          <div className="statement-line"><div className="statement-word">that</div> <div className="statement-word">move</div> <span className="statement-img"><img src="/images/hero-trail/12.jpg" alt="" /></span> <div className="statement-word">people.</div></div>

        </h2>
      </div>
    </section>
  );
}
