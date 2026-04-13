'use client';

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
import { useLanguage } from '@/context/language-context';

const metricIcons: LucideIcon[] = [
  Hospital,
  Users,
  FileText,
  Stethoscope,
  Pill,
  ClipboardPen,
];

const MetricCard = ({ metric, icon: Icon }: { metric: any, icon: LucideIcon }) => (
  <GlowCard className="p-4 sm:p-6 text-center flex flex-col justify-center relative">
    <AiExplainerButton dataPoint={metric.dataPointForAI} />
    <Icon className="mx-auto h-8 w-8 text-primary mb-3" />
    <p className="text-3xl sm:text-4xl font-bold text-primary">{metric.value}</p>
    <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
  </GlowCard>
);

export function KeyMetrics() {
  const { dictionary } = useLanguage();
  const { title, metrics } = dictionary.keyMetrics;

  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {metrics.map((metric, i) => (
          <MetricCard key={i} metric={metric} icon={metricIcons[i]} />
        ))}
      </div>
    </div>
  );
}

    