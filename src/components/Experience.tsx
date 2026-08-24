import React from 'react';
import { experiencesData } from '../data/experiences';

export const Experience: React.FC = () => {
  return (
    <section id="parcours" className="py-24 sm:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="text-xs uppercase tracking-editorial font-medium text-bronze">
              Expérience
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-midnight tracking-tight mb-6">
            Parcours
          </h2>
          <p className="text-base sm:text-lg text-anthracite-muted leading-relaxed font-normal">
            Une pratique forgée au sein de cabinets d’affaires de premier plan, auprès d’administrateurs judiciaires et d’acteurs majeurs du recouvrement.
          </p>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="border-t border-pearl">
          {experiencesData.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 border-b border-pearl grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
            >
              {/* Organization & Role */}
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-midnight font-normal group-hover:text-midnight-light transition-colors">
                  {item.organization}
                </h3>
                <p className="text-xs uppercase tracking-editorial text-bronze font-medium mt-1">
                  {item.role}
                </p>
              </div>

              {/* Period */}
              <div className="lg:col-span-3">
                <span className="text-xs sm:text-sm text-anthracite-subtle font-mono">
                  {item.period}
                </span>
              </div>

              {/* Concise Description */}
              <div className="lg:col-span-5">
                <p className="text-sm text-anthracite-muted leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
