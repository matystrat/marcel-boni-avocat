import React from 'react';
import { actorsData, actorsSectionCopy } from '../data/actors';

export const Actors: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-midnight text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Title & Strategy Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-bronze"></span>
              <span className="text-xs uppercase tracking-editorial font-medium text-bronze-subtle">
                Positionnement
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight mb-8">
              {actorsSectionCopy.title}
            </h2>

            <p className="text-base sm:text-lg text-pearl/80 leading-relaxed font-normal">
              {actorsSectionCopy.description}
            </p>
          </div>

          {/* Right: Pure Typographic Composition */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="border-t border-white/15">
              {actorsData.map((actor, index) => (
                <div
                  key={actor.id}
                  className="py-5 sm:py-6 border-b border-white/10 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-baseline space-x-6">
                    <span className="text-xs font-mono text-bronze/80 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white group-hover:text-offwhite transition-colors">
                      {actor.title}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze/40 group-hover:bg-bronze transition-colors"></span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
