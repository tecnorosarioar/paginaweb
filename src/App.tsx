/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BillingModule } from './components/billing/BillingModule';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <BillingModule />
        <CaseStudiesSection />
        <HowWeWorkSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
