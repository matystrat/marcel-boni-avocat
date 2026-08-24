import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-midnight text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-bronze"></span>
            <span className="text-xs uppercase tracking-editorial font-medium text-bronze-subtle">
              Prise de contact
            </span>
            <span className="w-8 h-[1px] bg-bronze"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-8">
            Échanger sur votre situation
          </h2>

          <p className="text-base sm:text-lg text-pearl/80 leading-relaxed font-normal max-w-2xl mx-auto mb-14">
            Pour toute demande relative à une situation de restructuring, d’entreprise en difficulté ou de contentieux des affaires, vous pouvez me contacter directement.
          </p>

          {/* Contact Details Card */}
          <div className="bg-midnight-deep p-8 sm:p-12 lg:p-14 border border-white/10 max-w-2xl mx-auto mb-12 text-left">
            <div className="mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Marcel Boni
              </h3>
              <p className="text-xs uppercase tracking-editorial text-bronze font-medium mt-1">
                Avocat au Barreau de Paris
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-pearl/90 border-t border-white/10 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-white/5 gap-1">
                <span className="text-xs uppercase tracking-editorial text-pearl/50">E-mail</span>
                <a
                  href="mailto:marcel.boni@avocat.fr"
                  className="font-medium text-white hover:text-bronze transition-colors"
                >
                  marcel.boni@avocat.fr
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-white/5 gap-1">
                <span className="text-xs uppercase tracking-editorial text-pearl/50">Téléphone</span>
                <a
                  href="tel:+33661258313"
                  className="font-medium text-white hover:text-bronze transition-colors font-mono"
                >
                  06 61 25 83 13
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 gap-1">
                <span className="text-xs uppercase tracking-editorial text-pearl/50">Localisation</span>
                <span className="font-medium text-white">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:marcel.boni@avocat.fr"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-editorial text-midnight bg-offwhite hover:bg-white transition-all duration-200 shadow-sm"
            >
              Envoyer un e-mail
            </a>
            <a
              href="tel:+33661258313"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-editorial text-white bg-transparent border border-white/30 hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              Appeler
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
