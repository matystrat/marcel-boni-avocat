import React from 'react';

interface FooterProps {
  onOpenLegal: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenPrivacy }) => {
  return (
    <footer className="bg-midnight-deep text-white py-16 sm:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white uppercase block mb-2">
              Marcel Boni
            </span>
            <p className="text-xs uppercase tracking-editorial text-pearl/70 font-medium">
              Avocat — Restructuring & Contentieux des affaires
            </p>
            <p className="text-xs text-pearl/50 mt-1">
              Paris, France
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-pearl/70">
            <button
              type="button"
              onClick={onOpenLegal}
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus:outline-none"
            >
              Mentions légales
            </button>
            <span className="text-white/20">•</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline-offset-4 hover:underline focus:outline-none"
            >
              Politique de confidentialité
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pearl/40">
          <p>© {new Date().getFullYear()} Marcel Boni. Tous droits réservés.</p>
          <p className="text-[11px] uppercase tracking-editorial text-pearl/30">
            Barreau de Paris
          </p>
        </div>
      </div>
    </footer>
  );
};
