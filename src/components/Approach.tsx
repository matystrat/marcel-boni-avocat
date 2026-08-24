import React from 'react';
import { approachData } from '../data/approach';

export const Approach: React.FC = () => {
  return (
    <section id="approche" className="py-24 sm:py-32 lg:py-40 bg-offwhite-warm hairline-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="text-xs uppercase tracking-editorial font-medium text-bronze">
              Méthode
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-midnight tracking-tight mb-6">
            Une approche pragmatique des situations complexes
          </h2>
          <p className="text-base sm:text-lg text-anthracite-muted leading-relaxed font-normal">
            Une méthodologie rigoureuse articulée autour de quatre impératifs stratégiques pour préserver la valeur et défendre les intérêts.
          </p>
        </div>

        {/* 4 Pillars Grid (4 Columns Desktop / Stacked Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-20 lg:mb-28">
          {approachData.map((item) => (
            <div
              key={item.id}
              className="pt-8 border-t border-pearl flex flex-col justify-between"
            >
              <div>
                <div className="text-xs uppercase tracking-editorial font-medium text-bronze mb-4">
                  Pilier {item.number}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-midnight font-normal mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-anthracite-muted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Focus with Secondary Portrait */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 border border-pearl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] max-w-xs mx-auto lg:max-w-none overflow-hidden bg-pearl/30 border border-pearl">
                <img
                  src="/portraits/marcel-boni-portrait-warm.jpg"
                  alt="Maître Marcel Boni, conseil stratégique en restructuration"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-3">
                <span className="text-xs uppercase tracking-editorial font-medium text-midnight">
                  Engagement & Disponibilité
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-midnight font-normal leading-snug">
                Un interlocuteur direct et engagé sur chaque dossier
              </h3>
              <p className="text-base text-anthracite-muted leading-relaxed font-normal">
                Les situations de tension financière ou de contentieux exigent une réactivité immédiate et une parfaite maîtrise technique des procédures. Marcel Boni intervient personnellement à chaque étape, assurant une relation de confiance et une stratégie sur mesure.
              </p>
              <div className="pt-4 flex items-center space-x-6 text-xs uppercase tracking-editorial text-anthracite-subtle font-medium">
                <span>Rigueur technique</span>
                <span className="text-bronze">•</span>
                <span>Discrétion absolue</span>
                <span className="text-bronze">•</span>
                <span>Réactivité</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
