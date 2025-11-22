import React from 'react';
import { Card } from '../ui/Card';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Subtle Grid Background */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Powerful tools for <br />
            <span className="text-primary-500">modern workforces</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Replace fragmented spreadsheets with a unified operating system for HR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Feature 1: AI Recruitment */}
          <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 flex flex-col gap-3 overflow-hidden relative shadow-inner">
                {/* Graphic Component */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">AI Parser Active</span>
                </div>
                <div className="space-y-2.5 opacity-90">
                    {[100, 80, 60].map((w, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-900 p-2.5 rounded border border-slate-800/50 shadow-sm transform transition-transform group-hover:translate-x-1" style={{transitionDelay: `${i * 50}ms`}}>
                            <div className="h-2 bg-slate-700 rounded w-1/3"></div>
                            <div className="h-1.5 bg-primary-500 rounded shadow-[0_0_8px_rgba(254,150,3,0.4)]" style={{width: `${w}%`}}></div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">AI Recruitment</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Parse resumes automatically and rank candidates using Gemini-powered intelligence to save 80% of screening time.</p>
          </Card>

          {/* Feature 2: Smart Payroll */}
          <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                 {/* Graphic Component */}
                 <div className="absolute inset-0 grid grid-cols-6 gap-1 opacity-5">
                    {Array.from({length: 24}).map((_, i) => <div key={i} className="bg-slate-500 h-full w-full rounded-sm"></div>)}
                 </div>
                 <div className="z-10 bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300 w-4/5">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg">₹</div>
                        <div className="flex-1">
                            <div className="h-2.5 w-20 bg-slate-700 rounded mb-2"></div>
                            <div className="h-2 w-12 bg-slate-800 rounded"></div>
                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-full animate-[beam_2s_infinite]"></div>
                    </div>
                    <div className="text-[10px] text-green-400 mt-2 text-right font-medium">Processing Complete</div>
                 </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Smart Payroll</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Automated tax calculations, compliance checks, and one-click salary disbursement directly to bank accounts.</p>
          </Card>

          {/* Feature 3: Geo-Fencing */}
          <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 relative overflow-hidden flex items-center justify-center shadow-inner">
                 {/* Graphic Component */}
                 <div className="h-32 w-32 border border-dashed border-primary-500/30 rounded-full flex items-center justify-center animate-spin-slow relative">
                    <div className="absolute inset-0 bg-primary-500/5 rounded-full blur-xl"></div>
                    <div className="h-20 w-20 bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 relative z-10 shadow-lg">
                        <div className="h-3 w-3 bg-primary-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#FE9603] animate-pulse"></div>
                    </div>
                 </div>
                 <div className="absolute bottom-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-semibold text-primary-400 border border-primary-500/20 shadow-lg">
                    Location Verified
                 </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Geo-Fencing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Ensure authentic attendance. Allow check-ins only from designated office locations or authorized remote zones.</p>
          </Card>

          {/* Feature 4: People Analytics */}
          <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 flex items-end justify-around gap-3 pb-4 relative overflow-hidden shadow-inner">
                 {/* Graphic Component */}
                 <div className="w-10 bg-slate-800 rounded-t-lg h-[40%] group-hover:h-[50%] transition-all duration-500 ease-out"></div>
                 <div className="w-10 bg-slate-800 rounded-t-lg h-[60%] group-hover:h-[70%] transition-all duration-500 delay-75 ease-out"></div>
                 <div className="w-10 bg-gradient-to-t from-primary-700 to-primary-500 rounded-t-lg h-[80%] group-hover:h-[95%] transition-all duration-500 delay-150 shadow-[0_0_20px_rgba(254,150,3,0.3)] ease-out relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
                 </div>
                 <div className="w-10 bg-slate-800 rounded-t-lg h-[50%] group-hover:h-[60%] transition-all duration-500 delay-200 ease-out"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">People Analytics</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Visualize attrition, performance, and cost trends with real-time dashboards that turn data into decisions.</p>
          </Card>

           {/* Feature 5: Docs & Compliance */}
           <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
                 {/* Graphic Component */}
                 <div className="w-24 h-32 bg-slate-900 border border-slate-700 rounded-lg p-3 relative rotate-3 group-hover:rotate-6 transition-transform duration-300 shadow-xl">
                    <div className="h-2 w-12 bg-slate-700 rounded mb-3"></div>
                    <div className="space-y-2">
                        <div className="h-1.5 w-16 bg-slate-800 rounded"></div>
                        <div className="h-1.5 w-12 bg-slate-800 rounded"></div>
                        <div className="h-1.5 w-16 bg-slate-800 rounded"></div>
                    </div>
                    <div className="absolute bottom-3 right-3 h-6 w-6 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                 </div>
                 <div className="w-24 h-32 bg-slate-800 border border-slate-600 rounded-lg absolute top-8 -rotate-6 group-hover:-rotate-12 transition-transform duration-300 -z-10 opacity-60"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Docs & Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Generate offer letters, payslips, and tax forms automatically. Always audit-ready with secure digital vaults.</p>
          </Card>

           {/* Feature 6: Employee Hub */}
           <Card spotlight className="group h-full flex flex-col">
            <div className="mb-8 bg-slate-950/50 rounded-xl border border-slate-800 p-6 h-48 flex items-center justify-center gap-[-12px] relative shadow-inner">
                 {/* Graphic Component */}
                 {[1,2,3].map((i) => (
                     <div key={i} className={`h-12 w-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center -ml-4 first:ml-0 relative z-${10-i} group-hover:translate-x-${i * 2} transition-transform duration-300 shadow-lg`}>
                        <div className="h-5 w-5 rounded-full bg-slate-600"></div>
                     </div>
                 ))}
                 <div className="h-12 w-12 rounded-full border-4 border-slate-900 bg-primary-600 flex items-center justify-center -ml-4 text-xs font-bold text-white z-10 shadow-lg group-hover:scale-110 transition-transform">
                    +50
                 </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">Employee Hub</h3>
            <p className="text-slate-400 text-sm leading-relaxed">A central directory for all employee data, documents, and lifecycle management from hiring to retiring.</p>
          </Card>

        </div>
      </div>
    </section>
  );
};