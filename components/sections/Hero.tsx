import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { BackgroundParticles } from '../effects/BackgroundParticles';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-900">
      <BackgroundParticles />
      
      {/* Refined Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left animate-in slide-in-from-bottom-8 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 self-center lg:self-start backdrop-blur-md shadow-sm hover:border-primary-500/30 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-semibold text-primary-200 uppercase tracking-wide">New AI Payroll Engine</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Smarter HR, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-primary-200">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Seamlessly manage payroll, attendance, recruitment, and people analytics in one unified, intelligent platform. Built for modern enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
              <Button size="lg" className="group w-full sm:w-auto shadow-lg shadow-primary-500/25">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-slate-800/80">
                <PlayCircle className="mr-2 h-5 w-5" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center lg:justify-start text-sm text-slate-500 mt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 text-primary-500" />
                 <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>

          {/* Visual/Interactive Element */}
          <div className="relative hidden lg:block animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/10 rounded-3xl blur-2xl transform rotate-6 scale-95"></div>
            
            <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-2xl animate-float backdrop-blur-xl ring-1 ring-white/5">
              
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="h-4 w-32 bg-slate-800 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-800"></div>
                    <div className="h-8 w-8 rounded-full bg-slate-800"></div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-primary-500/30 transition-colors group">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-semibold">Total Employees</p>
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors">1,248</p>
                    <span className="text-xs text-green-400 mb-1 bg-green-500/10 px-1.5 py-0.5 rounded">+12%</span>
                  </div>
                </div>
                <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-primary-500/30 transition-colors">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-semibold">Payroll Processed</p>
                  <p className="text-3xl font-bold text-white">₹4.2M</p>
                  <p className="text-xs text-slate-500 mt-1">Next run in 4 days</p>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-slate-950/30 p-5 rounded-xl border border-slate-800 mb-4">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-semibold text-white">Attendance Trends</p>
                  <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                      <span className="h-2 w-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>
                {/* Graph Visibility Fix: Changed bg-slate-800 to bg-slate-700/80 for better contrast */}
                <div className="flex items-end justify-between gap-3 h-32 px-2">
                  {[45, 65, 55, 85, 75, 95, 88].map((h, i) => (
                    <div key={i} className="w-full flex flex-col gap-2 group cursor-pointer h-full justify-end">
                        <div 
                            className="w-full bg-slate-700/80 rounded-t-sm relative overflow-hidden transition-all duration-300 group-hover:bg-primary-500" 
                            style={{ height: `${h}%` }}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight Notification */}
              <div className="flex items-start gap-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-4 rounded-xl shadow-lg transform translate-y-2">
                <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-900/50">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-400 mb-0.5">AI Insight</p>
                  <p className="text-xs text-slate-300 leading-snug">
                    Attrition risk detected in Engineering team. 3 key members show patterns of disengagement. <span className="underline cursor-pointer hover:text-white">View Report</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};