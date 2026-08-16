import { Link, useLocation } from 'react-router-dom';

export default function Header({ onMenuOpen, menuOpen = false, onHomeClick }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleHome = (event) => {
    if (!isHome) return;
    event.preventDefault();
    onHomeClick?.();
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-[60] pointer-events-none"
      aria-label="Quick navigation"
    >
      {/* Persistent minimal corner navigation: black AQUA mark + black menu bars. */}
      <div className="absolute left-4 top-4 sm:left-6 sm:top-5 lg:left-8 lg:top-6">
        <Link
          to="/"
          onClick={handleHome}
          aria-label="Go to AQUA home"
          className="group pointer-events-auto flex h-14 w-16 items-center justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
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

      <div className="absolute right-4 top-4 sm:right-6 sm:top-5 lg:right-8 lg:top-6">
        <button
          type="button"
          onClick={onMenuOpen}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          className="group pointer-events-auto flex h-14 w-16 items-center justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85ffff] focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
        >
          <span className="flex w-10 flex-col gap-[8px]" aria-hidden="true">
            <span className="block h-[2.5px] w-full origin-right bg-black transition-transform duration-300 ease-out group-hover:scale-x-[0.82]" />
            <span className="block h-[2.5px] w-full origin-right bg-black transition-transform duration-300 ease-out group-hover:scale-x-[1.08]" />
          </span>
        </button>
      </div>
    </header>
  );
}
