import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-offwhite-warm hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Editorial Section Title */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="text-xs uppercase tracking-editorial font-medium text-bronze">
                Cabinet
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-midnight leading-[1.15] tracking-tight">
              Anticiper les difficultés.<br />
              Structurer les solutions.<br />
              <span className="italic">Défendre les intérêts.</span>
            </h2>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 lg:pl-6 space-y-6 text-base sm:text-lg text-anthracite-muted leading-relaxed font-normal">
            <p>
              <strong className="text-anthracite font-semibold">Marcel Boni</strong> est avocat au Barreau de Paris, spécialisé en droit des entreprises en difficulté, restructuring et contentieux des affaires.
            </p>
            <p>
              Il intervient dans le cadre de procédures de prévention, de procédures amiables et de procédures collectives. Il conseille et accompagne notamment les débiteurs, créanciers, associés, dirigeants, organes de la procédure et repreneurs.
            </p>
            <p>
              Il intervient également dans les contentieux civils et commerciaux, en phase précontentieuse comme devant les juridictions françaises, avec une pratique pragmatique, stratégique et résolument orientée solution.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-pearl text-sm text-anthracite">
              <div>
                <span className="block font-serif text-lg text-midnight font-medium mb-1">Prévention & Amiable</span>
                <span className="text-xs text-anthracite-subtle">Anticipation précoce des tensions de trésorerie</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-midnight font-medium mb-1">Procédures Collectives</span>
                <span className="text-xs text-anthracite-subtle">Accompagnement rigoureux et stratégique</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-midnight font-medium mb-1">Contentieux & Plaidoiries</span>
                <span className="text-xs text-anthracite-subtle">Défense ferme des droits et intérêts</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
