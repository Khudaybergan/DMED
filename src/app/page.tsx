'use client';

import { useEffect, useRef } from 'react';
import { DashboardHeader } from '@/components/dmed/dashboard-header';
import { KeyMetrics } from '@/components/dmed/key-metrics';
import { BenefitsSection } from '@/components/dmed/benefits-section';
import { DoctorBenefitsSection } from '@/components/dmed/doctor-benefits-section';
import { AiOverviewSection } from '@/components/dmed/ai-overview-section';
import { AiSolutionsSection } from '@/components/dmed/ai-solutions-section';
import { ModulesSection } from '@/components/dmed/modules-section';
import { KeyResultsSection } from '@/components/dmed/key-results-section';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const mainEl = mainRef.current;
      if (!mainEl) return;

      const scrollAmount = mainEl.clientHeight;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        mainEl.scrollBy({
          top: scrollAmount,
          behavior: 'smooth',
        });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        mainEl.scrollBy({
          top: -scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-background font-headline text-foreground h-full flex flex-col">
      <DashboardHeader />
      <main ref={mainRef} className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <section id="key-metrics" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
          <div className="w-full max-w-[1920px] py-16">
            <KeyMetrics />
          </div>
        </section>

        <section id="patient-benefits" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-card/30 snap-start">
           <div className="w-full max-w-[1920px] py-16">
            <BenefitsSection />
          </div>
        </section>

        <section id="doctor-benefits" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
           <div className="w-full max-w-[1920px] py-16">
            <DoctorBenefitsSection />
          </div>
        </section>

        <section id="ai-overview" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-card/30 snap-start">
          <div className="w-full max-w-[1920px] py-16">
            <AiOverviewSection />
          </div>
        </section>

        <section id="ai-solutions" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
          <div className="w-full max-w-[1920px] py-16">
            <AiSolutionsSection />
          </div>
        </section>
        
        <section id="key-results" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-card/30 snap-start">
          <div className="w-full max-w-[1920px] py-16">
            <KeyResultsSection />
          </div>
        </section>

        <section id="dmed-modules" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
          <div className="w-full max-w-[1920px] h-full flex flex-col justify-center">
             <ModulesSection />
          </div>
        </section>

      </main>
    </div>
  );
}
