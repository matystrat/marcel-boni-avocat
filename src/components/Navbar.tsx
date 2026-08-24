import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#expertises', label: 'Expertises' },
    { href: '#approche', label: 'Approche' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#formation', label: 'Formation' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-offwhite/95 backdrop-blur-md shadow-subtle border-b border-pearl'
          : 'bg-offwhite/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label="Marcel Boni - Accueil"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-wide text-midnight font-semibold uppercase group-hover:text-midnight-light transition-colors">
            Marcel Boni
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-editorial text-anthracite-muted font-medium">
            Avocat au Barreau de Paris
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-anthracite hover:text-midnight font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-bronze hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium uppercase tracking-editorial text-white bg-midnight hover:bg-midnight-hover transition-all duration-200 shadow-sm hover:shadow"
          >
            Prendre contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-midnight hover:text-midnight-light focus:outline-none"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-offwhite/98 backdrop-blur-lg border-b border-pearl shadow-elevated animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block py-2.5 text-base tracking-wide text-anthracite hover:text-midnight font-medium border-b border-pearl/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block text-center w-full py-3 text-xs font-medium uppercase tracking-editorial text-white bg-midnight hover:bg-midnight-hover transition-colors"
              >
                Prendre contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
