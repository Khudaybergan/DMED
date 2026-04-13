import { GlowCard } from './glow-card';
import {
  Hospital,
  Users,
  FileText,
  Stethoscope,
  Pill,
  ClipboardPen,
  type LucideIcon,
} from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';

type Metric = {
  icon: LucideIcon;
  value: string;
  label: string;
  dataPointForAI: string;
};

const metrics: Metric[] = [
  {
    icon: Hospital,
    value: '> 4 000',
    label: 'tibbiyot muassasalari',
    dataPointForAI: 'Over 4,000 medical institutions',
  },
  {
    icon: Users,
    value: '~ 1 mln',
    label: 'kunlik tashriflar',
    dataPointForAI: 'About 1 million daily visits',
  },
  {
    icon: FileText,
    value: '38 mln',
    label: 'elektron tibbiy kartalar',
    dataPointForAI: '38 million electronic medical records',
  },
  {
    icon: Stethoscope,
    value: '> 260 000',
    label: 'tibbiyot xodimlari',
    dataPointForAI: 'Over 260,000 medical professionals',
  },
  {
    icon: Pill,
    value: '> 18 000',
    label: 'dorixonalar',
    dataPointForAI: 'Over 18,000 pharmacies',
  },
  {
    icon: ClipboardPen,
    value: '~ 500 000',
    label: 'oylik elektron retseptlar',
    dataPointForAI: 'About 500,000 electronic prescriptions monthly',
  },
];

const MetricCard = ({ metric }: { metric: Metric }) => (
  <GlowCard className="p-4 sm:p-6 text-center">
    <AiExplainerButton dataPoint={metric.dataPointForAI} />
    <metric.icon className="mx-auto h-8 w-8 text-primary mb-3" />
    <p className="text-3xl sm:text-4xl font-bold text-primary">{metric.value}</p>
    <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
  </GlowCard>
);

export function KeyMetrics() {
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Asosiy ko'rsatkichlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, i) => (
          <MetricCard key={i} metric={metric} />
        ))}
      </div>
    </div>
  );
}
