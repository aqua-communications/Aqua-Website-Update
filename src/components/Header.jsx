import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Work', '/work'],
  ['Testimonials', '/testimonials'],
  ['Team', '/team'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Header({ onMenuOpen, menuOpen = false, onHomeClick }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 110 : false));

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 110);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [location.pathname]);

  const showNavigationBar = !isHome || scrolled;

  const handleHome = (event) => {
    if (!isHome) return;
    event.preventDefault();
    onHomeClick?.();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[60] pointer-events-none" aria-label="Primary site navigation">
      {/* At the top of Home the full navigation bar stays out of the way. */}
      <div
        className={`absolute left-4 top-4 sm:left-6 sm:top-5 lg:left-8 lg:top-6 transition-all duration-500 ${
          showNavigationBar ? '-translate-y-3 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <Link
          to="/"
          onClick={handleHome}
          aria-label="Go to AQUA home"
          className="group pointer-events-auto flex h-14 w-16 items-center justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff]"
        >
          <img
            src="/images/aqua-logo-black.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 sm:h-11"
            draggable="false"
          />
        </Link>
      </div>

      <div
        className={`absolute right-4 top-4 sm:right-6 sm:top-5 lg:right-8 lg:top-6 transition-all duration-500 ${
          showNavigationBar ? '-translate-y-3 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <button
          type="button"
          onClick={onMenuOpen}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          className="group pointer-events-auto flex h-14 w-16 items-center justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff]"
        >
          <span className="flex w-10 flex-col gap-[8px]" aria-hidden="true">
            <span className="block h-[2.5px] w-full origin-right bg-black transition-transform duration-300 ease-out group-hover:scale-x-[0.82]" />
            <span className="block h-[2.5px] w-full origin-right bg-black transition-transform duration-300 ease-out group-hover:scale-x-[1.08]" />
          </span>
        </button>
      </div>

      {/* Dynamic navigation appears after scrolling Home and is always available on internal pages. */}
      <div
        className={`mx-auto mt-3 w-[calc(100%-1.5rem)] max-w-[1540px] sm:mt-4 sm:w-[calc(100%-2rem)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showNavigationBar
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-[58px] items-center gap-2 rounded-full border border-white/10 bg-[#0a0a0a]/[0.92] px-3 shadow-[0_18px_55px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:h-[62px] sm:px-4">
          <Link
            to="/"
            onClick={handleHome}
            aria-label="AQUA home"
            className="flex h-10 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff]"
          >
            <img src="/images/aqua-logo.png" alt="" aria-hidden="true" className="h-7 w-auto object-contain" draggable="false" />
          </Link>

          <nav className="no-scrollbar min-w-0 flex-1 overflow-x-auto" aria-label="Quick page links">
            <div className="flex min-w-max items-center justify-start gap-1 sm:gap-2 lg:justify-center">
              {navLinks.map(([label, href]) => (
                <NavLink
                  key={href}
                  to={href}
                  end={href === '/'}
                  onClick={href === '/' ? handleHome : undefined}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] transition-colors sm:px-3.5 sm:text-[10px] ${
                      isActive ? 'bg-white text-black' : 'text-white/62 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          <button
            type="button"
            onClick={onMenuOpen}
            aria-label="Open full navigation"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            className="group flex h-10 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff]"
          >
            <span className="flex w-6 flex-col gap-[5px]" aria-hidden="true">
              <span className="block h-[2px] w-full origin-right bg-white transition-transform duration-300 group-hover:scale-x-[0.76]" />
              <span className="block h-[2px] w-full origin-right bg-white transition-transform duration-300 group-hover:scale-x-[1.08]" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
