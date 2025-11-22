import React from 'react';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Avenstek reduced our payroll processing time from 5 days to 2 hours. The AI anomaly detection saved us from a major compliance error last month.",
      author: "Priya S.",
      role: "HR Director, TechCorp India",
      rating: 5
    },
    {
      quote: "The geo-fencing feature is a game changer for our hybrid workforce. No more buddy punching or attendance disputes.",
      author: "Rajesh K.",
      role: "Ops Manager, LogisticsHub",
      rating: 5
    },
    {
      quote: "Onboarding used to be a nightmare of paperwork. Now new hires just scan a QR code and they are ready to go.",
      author: "Sarah Jenkins",
      role: "VP People, StartFlow",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by teams in <span className="text-primary-500">Chennai</span></h2>
          <p className="text-slate-400">Join thousands of happy employees using Avenstek.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8 bg-slate-900/50 border-slate-800">
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, starI) => (
                    <Star key={starI} className={`h-4 w-4 ${starI < t.rating ? 'text-primary-500 fill-primary-500' : 'text-slate-700'}`} />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">
                    {t.author[0]}
                </div>
                <div>
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};