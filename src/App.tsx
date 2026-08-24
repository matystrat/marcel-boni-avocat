import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Expertise } from './components/Expertise';
import { Actors } from './components/Actors';
import { Approach } from './components/Approach';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Quote } from './components/Quote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ModalType } from './types';

export const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openLegalModal = () => setActiveModal('legal');
  const openPrivacyModal = () => setActiveModal('privacy');
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-offwhite flex flex-col selection:bg-midnight selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <Expertise />
        <Actors />
        <Approach />
        <Experience />
        <Education />
        <Quote />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={openLegalModal}
        onOpenPrivacy={openPrivacyModal}
      />

      {/* Modals */}
      <LegalModal
        isOpen={activeModal === 'legal'}
        onClose={closeModal}
      />
      <PrivacyModal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
