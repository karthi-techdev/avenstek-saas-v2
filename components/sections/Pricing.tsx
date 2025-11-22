import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { BillingCycle, PlanType } from '../../types';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(BillingCycle.MONTHLY);
  const [planCategory, setPlanCategory] = useState<PlanType>(PlanType.SMALL);

  const getPrice = (basePrice: number) => {
    if (billingCycle === BillingCycle.HALF_YEARLY) return Math.floor(basePrice * 0.92); // ~8% off
    if (billingCycle === BillingCycle.ANNUAL) return Math.floor(basePrice * 0.80); // ~20% off
    return basePrice;
  };

  const smallPlans = [
    {
      name: 'Basic',
      basePrice: 399,
      description: 'For startups getting organized.',
      features: ['Up to 20 Employees', 'Basic Payroll', 'Leave Management', 'Employee Directory', 'Email Support'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro',
      basePrice: 699,
      highlight: true,
      description: 'For growing teams needing automation.',
      features: ['Up to 100 Employees', 'Advanced Payroll & Tax', 'Geo-Attendance', 'Document Vault', 'Priority Support', 'AI Resume Parsing (50/mo)'],
      cta: 'Start Free Trial'
    },
    {
      name: 'Premium',
      basePrice: 999,
      description: 'Full suite for established SMEs.',
      features: ['Unlimited Employees', 'Project Timesheets', 'Performance Reviews', 'Custom Reports', 'Dedicated Account Manager', 'AI Assistant Full Access'],
      cta: 'Contact Sales'
    }
  ];

  const enterprisePlans = [
    {
      name: 'Starter',
      basePrice: 799,
      description: 'For mid-market companies.',
      features: ['Min 100 Employees', 'Multi-entity Support', 'Custom Workflows', 'API Access', 'SLA Support'],
      cta: 'Contact Sales'
    },
    {
      name: 'Growth',
      basePrice: 1299,
      highlight: true,
      description: 'Scale your operations globally.',
      features: ['Unlimited Entities', 'SSO & Advanced Security', 'Audit Logs', 'Dedicated CSM', 'Custom AI Models'],
      cta: 'Request Demo'
    },
    {
      name: 'Custom',
      basePrice: 0, // Custom pricing
      description: 'Tailored solutions for large corps.',
      features: ['On-premise Deployment Option', 'White-labeling', 'Custom Integrations', '24/7 Priority Support', 'Unlimited AI Quota'],
      cta: 'Talk to Sales'
    }
  ];

  const currentPlans = planCategory === PlanType.SMALL ? smallPlans : enterprisePlans;

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple pricing. Scales with you.</h2>
          <p className="text-slate-400 mb-8">Transparent pricing with no hidden setup fees.</p>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            
            {/* Plan Type Toggle */}
            <div className="bg-slate-900 p-1 rounded-lg border border-slate-800 flex">
              {Object.values(PlanType).map((type) => (
                <button
                  key={type}
                  onClick={() => setPlanCategory(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    planCategory === type ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Billing Cycle Toggle */}
            <div className="bg-slate-900 p-1 rounded-lg border border-slate-800 flex">
              {Object.values(BillingCycle).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    billingCycle === cycle ? 'bg-primary-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cycle}
                </button>
              ))}
            </div>
          </div>
          
          {billingCycle === BillingCycle.ANNUAL && (
             <p className="text-green-400 text-sm mt-4 font-medium animate-pulse">You are saving 20% with annual billing!</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, idx) => (
            <Card 
                key={idx} 
                className={`flex flex-col ${plan.highlight ? 'border-primary-500/50 bg-slate-900/80 shadow-primary-900/20 shadow-xl' : ''}`}
                spotlight={plan.highlight}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-slate-400 text-sm mt-2 min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                {plan.basePrice > 0 ? (
                    <>
                    <span className="text-4xl font-bold text-white">₹{getPrice(plan.basePrice)}</span>
                    <span className="text-slate-500 ml-2">/ user / mo</span>
                    </>
                ) : (
                    <span className="text-4xl font-bold text-white">Custom</span>
                )}
                <div className="text-xs text-slate-500 mt-1">
                    {plan.basePrice > 0 ? `Billed ${billingCycle.toLowerCase()}` : 'Contact us for volume licensing'}
                </div>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <Check className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant={plan.highlight ? 'primary' : 'outline'} className="w-full">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
                Need help choosing? <a href="#" className="text-primary-400 hover:underline">Schedule a consultation</a> with our solution architects.
                <br/>
                AI usage overage billed at standard rates.
            </p>
        </div>
      </div>
    </section>
  );
};