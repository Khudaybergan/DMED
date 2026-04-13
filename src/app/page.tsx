import { DashboardHeader } from '@/components/dmed/dashboard-header';
import { KeyMetrics } from '@/components/dmed/key-metrics';
import { BenefitsSection } from '@/components/dmed/benefits-section';
import { AiOverviewSection } from '@/components/dmed/ai-overview-section';
import { AiSolutionsSection } from '@/components/dmed/ai-solutions-section';

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-background font-headline">
      <main className="w-full max-w-[1920px] p-4 sm:p-6 md:p-8 space-y-8">
        <DashboardHeader />
        <div className="grid grid-cols-1 gap-8">
          <KeyMetrics />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <BenefitsSection />
            </div>
            <div className="lg:col-span-5">
              <AiOverviewSection />
            </div>
          </div>
          <AiSolutionsSection />
        </div>
      </main>
    </div>
  );
}
