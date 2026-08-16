import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const menuLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Team', href: '/team' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

export default function SlideOutMenu({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.activeElement;
    closeRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      previous?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={panelRef}
      id="site-navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-y-0 right-0 z-[70] w-[90%] sm:w-[72%] md:w-[48%] lg:w-[42%] bg-[#0a0a0a]/[0.985] text-white border-l border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
    >
      <div className="h-full overflow-y-auto overscroll-contain menu-scroll">
        <div className="min-h-full flex flex-col p-6 sm:p-10 md:p-12 lg:p-14">
          <div className="sticky top-0 z-10 flex items-center justify-between bg-[#0a0a0a]/95 backdrop-blur-md pb-5">
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/45">AQUA / Navigate</span>
            <button ref={closeRef} onClick={onClose} aria-label="Close navigation" className="h-12 w-12 shrink-0 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-xl">×</button>
          </div>

          <nav className="flex-1 py-5 sm:py-7" aria-label="Primary navigation">
            <ul className="space-y-1">
              {menuLinks.map((link, index) => (
                <li key={link.href} className={`transition-all duration-700 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: isOpen ? `${90 + index * 45}ms` : '0ms' }}>
                  <Link to={link.href} onClick={onClose} className="group flex items-baseline gap-4 py-1 text-[clamp(2rem,5vw,4.35rem)] font-light leading-[1.04] tracking-[-0.045em] text-white/48 hover:text-white focus:text-white transition-colors">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-white/30">{String(index + 1).padStart(2, '0')}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sticky bottom-0 bg-[#0a0a0a]/95 backdrop-blur-md pt-5 pb-1 flex items-end justify-between gap-5 text-[10px] uppercase tracking-[0.15em] font-bold text-white/35">
            <span>Dhaka, Bangladesh</span>
            <a href="mailto:communications@aquabd.pro" className="hover:text-white">Email ↗</a>
          </div>
        </div>
      </div>
    </aside>
  );
}
