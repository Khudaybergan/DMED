import { GlowCard } from './glow-card';
import { BrainCircuit, ScanSearch, BarChart, type LucideIcon } from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';

type AiStat = {
  icon: LucideIcon;
  value: string;
  label: string;
  dataPointForAI: string;
};

const aiStats: AiStat[] = [
  {
    icon: BrainCircuit,
    value: '> 7',
    label: 'AI-yechimlar joriy etilgan',
    dataPointForAI: 'Over 7 AI solutions implemented',
  },
  {
    icon: ScanSearch,
    value: '14',
    label: 'patologiyalar qamrab olingan',
    dataPointForAI: '14 pathologies covered',
  },
  {
    icon: BarChart,
    value: '> 20 000',
    label: 'diagnostika holatlari',
    dataPointForAI: 'Over 20,000 diagnostic cases processed',
  },
];

export function AiOverviewSection() {
  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">SUN'IY INTELLEKT</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aiStats.map((stat, i) => (
          <GlowCard key={i} className="relative p-8 text-center">
            <AiExplainerButton dataPoint={stat.dataPointForAI} />
             <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 mb-6 inline-block">
              <stat.icon className="h-12 w-12 text-primary" />
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
