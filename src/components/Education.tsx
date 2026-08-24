import React from 'react';
import { educationData, barreauMention } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="formation" className="py-24 sm:py-32 lg:py-36 bg-offwhite-warm hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="text-xs uppercase tracking-editorial font-medium text-bronze">
              Cursus académique
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-midnight tracking-tight mb-4">
            Formation
          </h2>
          <p className="text-xs uppercase tracking-editorial text-anthracite-muted font-medium">
            {barreauMention}
          </p>
        </div>

        {/* Typographic Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 sm:p-10 border border-pearl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-bronze uppercase tracking-widest block mb-4">
                  {item.period}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-midnight font-normal mb-3 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-anthracite-muted pt-4 border-t border-pearl font-normal">
                {item.institution}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
