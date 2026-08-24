import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Desktop) / Ordered Content (Mobile) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Label */}
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-bronze"></span>
              <span className="text-xs uppercase tracking-editorial font-medium text-midnight">
                Avocat au Barreau de Paris
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-midnight leading-[1.08] tracking-tight mb-8">
              Restructuring.<br />
              Entreprises en difficulté.<br />
              <span className="italic font-normal">Contentieux des affaires.</span>
            </h1>

            {/* Editorial Introduction Text */}
            <p className="text-base sm:text-lg lg:text-xl text-anthracite-muted leading-relaxed font-normal max-w-2xl mb-8 lg:mb-10">
              J’accompagne dirigeants, entreprises, créanciers, associés et investisseurs dans les situations de restructuration, de difficultés financières et de contentieux complexes.
            </p>

            {/* Mobile Portrait (Appears immediately after text on mobile, hidden on desktop) */}
            <div className="lg:hidden mb-8">
              <div className="relative mx-auto max-w-sm sm:max-w-md aspect-[3/4] overflow-hidden bg-pearl/40 shadow-elevated border border-pearl">
                <img
                  src="/portraits/marcel-boni-hero.jpg"
                  alt="Marcel Boni, Avocat au Barreau de Paris - Restructuring et contentieux des affaires"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-editorial text-white bg-midnight hover:bg-midnight-hover transition-all duration-200 shadow-sm text-center"
              >
                Prendre contact
              </a>
              <a
                href="#expertises"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-editorial text-midnight bg-transparent border border-midnight/30 hover:border-midnight hover:bg-white/40 transition-all duration-200 text-center"
              >
                Découvrir mes expertises
              </a>
            </div>

            {/* Subtle Metadata Tags */}
            <div className="pt-8 border-t border-pearl flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] uppercase tracking-editorial text-anthracite-subtle font-medium">
              <span>Paris</span>
              <span className="text-bronze">•</span>
              <span>Restructuring</span>
              <span className="text-bronze">•</span>
              <span>Contentieux des affaires</span>
            </div>
          </div>

          {/* Right Column: High-End Portrait on Desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-md aspect-[3/4] overflow-hidden bg-pearl/30 shadow-elevated border border-pearl group">
              <img
                src="/portraits/marcel-boni-hero.jpg"
                alt="Maître Marcel Boni, Avocat au Barreau de Paris"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
