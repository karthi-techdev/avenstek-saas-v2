import React from 'react';

export enum BillingCycle {
  MONTHLY = 'Monthly',
  HALF_YEARLY = 'Half-Yearly',
  ANNUAL = 'Annual'
}

export enum PlanType {
  SMALL = 'Small (SMB)',
  ENTERPRISE = 'Enterprise'
}

export interface PricingTier {
  name: string;
  monthlyPrice: number;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}