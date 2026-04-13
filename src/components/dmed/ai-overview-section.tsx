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
    <GlowCard className="p-6 h-full">
      <h2 className="text-2xl font-bold text-center text-brand-orange mb-6">SUN'IY INTELLEKT</h2>
      <div className="space-y-4">
        {aiStats.map((stat, i) => (
          <GlowCard key={i} className="flex items-center gap-4 p-4">
            <AiExplainerButton dataPoint={stat.dataPointForAI} />
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <stat.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </GlowCard>
  );
}
