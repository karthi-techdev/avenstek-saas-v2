import React from 'react';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-12 relative overflow-hidden">
          
          {/* Animated Beam Effect background */}
          <div className="absolute inset-0 opacity-20">
             <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" className="text-primary-500 animate-pulse" strokeDasharray="10,10"/>
             </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to transform your HR?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Join 50+ businesses in Chennai utilizing Avenstek to streamline their workforce management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="secondary">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};