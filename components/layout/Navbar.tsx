import React, { useState, useEffect } from 'react';
import { Menu, X, User, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from '../../assets/images/avenstek-v2.png';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin, onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trust', href: '#testimonials' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-3 shadow-lg'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer z-[70]" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src={logo}
                alt="Avenstek Logo" 
                className="h-5 w-auto object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-primary-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={onOpenLogin}
                className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors px-3 py-2 rounded-lg hover:bg-slate-800"
              >
                <User size={16} /> Login
              </button>
              <Button size="sm" onClick={onOpenDemo} className="shadow-primary-500/20">Request Demo</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white z-[70] relative focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[50] bg-slate-950/95 backdrop-blur-xl flex flex-col pt-24 px-6 transition-all duration-300 ease-in-out md:hidden transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto pb-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white py-4 border-b border-slate-800 flex items-center justify-between group active:text-primary-500"
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <ChevronRight className="text-slate-700 group-hover:text-primary-500 transition-colors group-hover:translate-x-1" />
            </a>
          ))}
        </div>
        
        <div className="mt-auto mb-8 space-y-4 animate-in slide-in-from-bottom-10 fade-in duration-500 delay-200">
          <Button 
              className="w-full py-4 text-lg shadow-xl shadow-primary-900/20" 
              onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemo();
              }}
          >
              Request Demo
          </Button>
          <button 
              onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLogin();
              }}
              className="w-full py-4 text-slate-300 hover:text-white font-medium border border-slate-700 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <User size={18} />
            Login to Portal
          </button>
        </div>
      </div>
    </>
  );
};