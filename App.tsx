import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Integrations } from './components/sections/Integrations';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Modal, DemoModalContent, LoginModalContent } from './components/ui/Modal';

function App() {
  const [modalState, setModalState] = useState<'closed' | 'login' | 'demo'>('closed');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">
      <Navbar 
        onOpenLogin={() => setModalState('login')} 
        onOpenDemo={() => setModalState('demo')}
      />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />

      {/* Modals */}
      <Modal 
        isOpen={modalState !== 'closed'} 
        onClose={() => setModalState('closed')}
        title={modalState === 'login' ? 'Employee Login' : 'Book a Demo'}
      >
        {modalState === 'login' ? <LoginModalContent /> : <DemoModalContent />}
      </Modal>
    </div>
  );
}

export default App;