import { DashboardHeader } from '@/components/dmed/dashboard-header';
import { KeyMetrics } from '@/components/dmed/key-metrics';
import { BenefitsSection } from '@/components/dmed/benefits-section';
import { AiOverviewSection } from '@/components/dmed/ai-overview-section';
import { AiSolutionsSection } from '@/components/dmed/ai-solutions-section';

export default function Home() {
  return (
    <div className="bg-background font-headline text-foreground h-full flex flex-col">
      <DashboardHeader />
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        <section id="key-metrics" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
          <div className="w-full max-w-[1920px]">
            <KeyMetrics />
          </div>
        </section>

        <section id="benefits-and-ai-overview" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-card/30 snap-start">
          <div className="w-full max-w-[1920px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <BenefitsSection />
              </div>
              <div className="lg:col-span-5">
                <AiOverviewSection />
              </div>
            </div>
          </div>
        </section>

        <section id="ai-solutions" className="h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 snap-start">
          <div className="w-full max-w-[1920px]">
            <AiSolutionsSection />
          </div>
        </section>
      </main>
    </div>
  );
}
