import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const DemoModalContent = () => (
  <>
    <p className="text-slate-400 text-sm">Enter your details to get instant access to the Avenstek sandbox environment.</p>
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
        <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none transition-colors" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Company Name</label>
        <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none transition-colors" placeholder="Acme Inc." />
      </div>
      <Button className="w-full mt-2">Get Access Now</Button>
      <p className="text-xs text-center text-slate-500">No credit card required for 14-day trial.</p>
    </form>
  </>
);

export const LoginModalContent = () => (
  <>
    <p className="text-slate-400 text-sm">Welcome back! Log in to your HRMS dashboard.</p>
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
        <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none transition-colors" placeholder="you@company.com" />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
        <input type="password" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:border-primary-500 focus:outline-none transition-colors" placeholder="••••••••" />
      </div>
      <Button className="w-full mt-2">Sign In</Button>
      <div className="flex justify-between text-xs mt-4">
        <a href="#" className="text-slate-400 hover:text-primary-500">Forgot Password?</a>
        <a href="#" className="text-primary-500 hover:text-primary-400">SSO Login</a>
      </div>
    </form>
  </>
);
