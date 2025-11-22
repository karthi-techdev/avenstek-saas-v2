import React from 'react';
import { Card } from '../ui/Card';
import { FaSlack, FaMicrosoft } from 'react-icons/fa';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { SiZoom, SiGoogle, SiQuickbooks } from 'react-icons/si';
import logo from '../../assets/images/avenstek-v2.png';

export const Integrations: React.FC = () => {
  // Using react-icons for strict branding and visibility
  const tools = [
    {
      name: "Slack",
      icon: <FaSlack className="w-8 h-8 text-[#E01E5A]" />
    },
    {
      name: "Zoom",
      icon: <SiZoom className="w-8 h-8 text-[#2D8CFF]" />
    },
    {
      name: "Teams",
      icon: <BsMicrosoftTeams className="w-8 h-8 text-[#6264A7]" />
    },
    {
      name: "G-Suite",
      icon: <SiGoogle className="w-8 h-8 text-white" />
    },
    {
      name: "Outlook",
      icon: <FaMicrosoft className="w-8 h-8 text-[#0078D4]" />
    },
    {
      name: "QuickBooks",
      icon: <SiQuickbooks className="w-8 h-8 text-[#2CA01C]" />
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
      {/* Beam Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#212529_1px,transparent_1px),linear-gradient(to_bottom,#212529_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Works with your <br/>
              <span className="text-primary-500">favorite tools</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Connect Avenstek with the ecosystem you already use. Sync payroll with accounting, push notifications to Slack, and schedule interviews via Zoom instantly.
            </p>
            <a href="#" className="text-primary-500 font-semibold hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
              View all 50+ integrations 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          <div className="md:w-1/2 relative w-full max-w-md mx-auto">
             {/* Center Hub */}
             <div className="relative z-10 bg-slate-900 p-4 rounded-2xl border-2 border-primary-500/30 shadow-[0_0_30px_rgba(254,150,3,0.15)] w-24 h-24 mx-auto flex items-center justify-center mb-8 animate-float">
                <img 
                  src={logo}
                  alt="Avenstek" 
                  className="h-14 w-14 object-contain drop-shadow-[0_0_10px_rgba(254,150,3,0.3)]"
                />
             </div>

             {/* Orbiting Tools */}
             <div className="grid grid-cols-3 gap-4">
                {tools.map((tool, idx) => (
                    <Card key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-950/80 border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer shadow-lg">
                        <div className="mb-3 transform transition-transform group-hover:scale-110 drop-shadow-md">{tool.icon}</div>
                        <span className="text-slate-400 font-medium text-xs group-hover:text-white transition-colors">{tool.name}</span>
                    </Card>
                ))}
             </div>

             {/* Animated Beams (CSS Pseudo-elements simulated via divs) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent -translate-x-1/2 animate-pulse-slow opacity-30 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent -translate-x-1/2 animate-pulse-slow opacity-30 -rotate-45 delay-700"></div>
                {/* Circular orbital Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary-500/10 rounded-full animate-spin-slow"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};