import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  ['Services', '/services'],
  ['Work', '/work'],
  ['Testimonials', '/testimonials'],
  ['Team', '/team'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

const officeMap = 'https://maps.app.goo.gl/USmeeDpN74P56vuF7';
const officeAddress = 'Level 5, Flat-B, House 15, Road 7, Block C, Niketan, Gulshan, Dhaka 1212, Bangladesh';

export default function Footer() {
  const { pathname } = useLocation();
  const footerRef = useRef(null);

  useEffect(() => {
    const mainSection = document.getElementById('main-content');
    if (!mainSection || !footerRef.current) return undefined;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top 65%',
        end: 'bottom top',
        onEnter: () => {
          gsap.to(mainSection, { backgroundColor: '#85ffff', color: '#000000', duration: 0.7, ease: 'power2.inOut' });
          gsap.to(footerRef.current, { backgroundColor: '#85ffff', color: '#000000', duration: 0.7, ease: 'power2.inOut' });
        },
        onLeaveBack: () => {
          gsap.to(mainSection, { backgroundColor: '#f5f5f5', color: '#000000', duration: 0.7, ease: 'power2.inOut' });
          gsap.to(footerRef.current, { backgroundColor: '#f5f5f5', color: '#000000', duration: 0.7, ease: 'power2.inOut' });
        },
      });
    });
    return () => ctx.revert();
  }, [pathname]);

  return (
    <footer
      className="footer-section bg-[#f5f5f5] text-black relative overflow-hidden noise-bg"
      ref={footerRef}
      id="footer"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className="aqua-container relative z-10 py-14 md:py-20">
        <div className="border-b border-black/15 pb-9 md:pb-11" id="contact">
          <div className="grid lg:grid-cols-12 gap-9 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="section-eyebrow mb-5">Contact AQUA</p>
              <h2 className="text-[clamp(2rem,4.7vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.045em]">
                Let&apos;s turn your vision <span className="text-black/40">into a measurable experience.</span>
              </h2>
              <a
                href="mailto:communications@aquabd.pro"
                className="inline-flex mt-7 text-[clamp(1.15rem,2vw,1.8rem)] font-medium items-center gap-2 break-all hover:text-[#0891b2] transition-colors"
              >
                communications@aquabd.pro <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-7 lg:justify-items-end">
              <div>
                <p className="section-eyebrow mb-3">Call</p>
                <a href="tel:+8801782314352" className="text-xl md:text-2xl font-medium">+880 1782-314352</a>
              </div>
              <nav aria-label="Footer navigation">
                <p className="section-eyebrow mb-3">Explore</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {footerLinks.map(([label, href]) => (
                    <Link key={href} to={href} className="text-[0.95rem] font-medium text-black/65 hover:text-black transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          <div className="mt-9 md:mt-11 pt-6 border-t border-black/10 flex justify-center text-center">
            <a
              href={officeMap}
              target="_blank"
              rel="noopener noreferrer"
              className="group max-w-3xl text-center"
              aria-label={`Open AQUA office location in Google Maps: ${officeAddress}`}
            >
              <span className="block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">AQUA Office · Dhaka</span>
              <span className="mt-2 block text-[0.82rem] md:text-[0.92rem] font-medium leading-relaxed text-black/65 group-hover:text-black transition-colors">
                {officeAddress} <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-[0.95rem] font-medium">
            <a href="https://www.instagram.com/aquainnovationsco/" target="_blank" rel="noopener noreferrer" className="text-black/65 hover:text-black">Instagram ↗</a>
            <a href="https://www.facebook.com/profile.php?id=61568183817324" target="_blank" rel="noopener noreferrer" className="text-black/65 hover:text-black">Facebook ↗</a>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-black/50">
            <span>© {new Date().getFullYear()} Aqua Innovations. All rights reserved.</span>
            <div className="flex gap-5">
              <Link to="/privacy" className="hover:text-black">Privacy</Link>
              <Link to="/terms" className="hover:text-black">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
