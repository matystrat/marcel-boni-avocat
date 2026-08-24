import React, { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-midnight-deep/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-white max-w-2xl w-full p-8 sm:p-10 lg:p-12 border border-pearl shadow-elevated relative max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-anthracite-muted hover:text-midnight focus:outline-none"
          aria-label="Fermer la boîte de dialogue"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 id="privacy-modal-title" className="font-serif text-2xl sm:text-3xl text-midnight font-normal mb-6">
          Politique de confidentialité
        </h3>

        <div className="space-y-6 text-sm text-anthracite-muted leading-relaxed font-normal">
          <div>
            <h4 className="font-serif text-lg text-midnight font-medium mb-1">Protection des données personnelles</h4>
            <p>
              Le présent site vitrine ne comporte aucun traceur publicitaire intrusif, aucun formulaire de collecte automatique et aucun cookie tiers à des fins commerciales.
            </p>
          </div>

          <div className="p-4 bg-offwhite border border-pearl text-xs text-anthracite-subtle space-y-2">
            <p className="font-medium text-anthracite">Note d’information :</p>
            <p>
              Les échanges directs par courrier électronique ou téléphone initiés par l'utilisateur sont strictement confidentiels et soumis au secret professionnel attaché à la profession d'avocat. La politique de confidentialité détaillée sera complétée conformément aux directives applicables lors du déploiement définitif.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-midnight font-medium mb-1">Contact</h4>
            <p>
              Pour toute question relative aux données personnelles :<br />
              Email : marcel.boni@avocat.fr
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-pearl flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-medium uppercase tracking-editorial text-white bg-midnight hover:bg-midnight-hover transition-colors"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
