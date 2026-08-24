import React from 'react';

export const Quote: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-offwhite">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="inline-block text-4xl text-bronze/60 font-serif mb-6">“</span>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-midnight leading-relaxed italic mb-10 max-w-4xl mx-auto">
          « Comprendre la position de chaque acteur permet d’anticiper les intérêts en présence et de construire une stratégie plus efficace. »
        </blockquote>
        <div className="inline-flex flex-col items-center">
          <span className="w-10 h-[1px] bg-bronze mb-4"></span>
          <cite className="not-italic font-serif text-xl text-midnight font-medium block">
            Marcel Boni
          </cite>
          <span className="text-xs uppercase tracking-editorial text-anthracite-muted font-medium mt-1">
            Avocat — Restructuring & Contentieux des affaires
          </span>
        </div>
      </div>
    </section>
  );
};
