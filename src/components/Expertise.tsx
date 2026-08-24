import React from 'react';
import { expertisesData } from '../data/expertises';

export const Expertise: React.FC = () => {
  return (
    <section id="expertises" className="py-24 sm:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="text-xs uppercase tracking-editorial font-medium text-bronze">
              Domaines d'intervention
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-midnight tracking-tight mb-6">
            Expertises
          </h2>
          <p className="text-base sm:text-lg text-anthracite-muted leading-relaxed font-normal">
            Une approche juridique et stratégique des situations sensibles de l’entreprise.
          </p>
        </div>

        {/* Editorial 3-Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {expertisesData.map((item) => (
            <article
              key={item.id}
              className="bg-white p-8 sm:p-10 lg:p-12 border border-pearl hover:border-pearl-border transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number */}
                <div className="font-serif text-3xl sm:text-4xl text-bronze font-normal mb-8">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-midnight font-normal mb-6 leading-snug">
                  {item.title}
                </h3>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-anthracite-muted leading-relaxed font-normal mb-10">
                  {item.description}
                </p>
              </div>

              {/* Subdomains as an Editorial List */}
              <div className="pt-6 border-t border-pearl">
                <p className="text-[11px] uppercase tracking-editorial text-anthracite-subtle font-medium mb-4">
                  Interventions
                </p>
                <ul className="space-y-2.5 text-sm text-anthracite font-normal" role="list">
                  {item.subdomains.map((subdomain, index) => (
                    <li key={index} className="flex items-baseline space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze/60 shrink-0 transform -translate-y-0.5"></span>
                      <span>{subdomain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
