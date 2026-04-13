'use client';

import { GlowCard } from './glow-card';
import { BrainCircuit, ScanSearch, BarChart, type LucideIcon } from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';
import { useLanguage } from '@/context/language-context';

type AiStat = {
  icon: LucideIcon;
  value: string;
  label: string;
  dataPointForAI: string;
};

const aiStatIcons: LucideIcon[] = [BrainCircuit, ScanSearch, BarChart];

const aiStatData = [
  {
    value: '> 7',
    dataPointForAI: 'Over 7 AI solutions implemented',
  },
  {
    value: '14',
    dataPointForAI: '14 pathologies covered',
  },
  {
    value: '> 20 000',
    dataPointForAI: 'Over 20,000 diagnostic cases processed',
  },
];


export function AiOverviewSection() {
  const { dictionary } = useLanguage();
  const { title, stats } = dictionary.aiOverview;

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
        {stats.map((stat, i) => {
          const Icon = aiStatIcons[i];
          const data = aiStatData[i];
          return (
            <GlowCard key={i} className="relative p-8 text-center flex flex-col justify-center items-center">
              <AiExplainerButton dataPoint={data.dataPointForAI} />
               <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 mb-6 inline-block">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <div>
                <p className="text-5xl font-bold text-primary">{data.value}</p>
                <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </GlowCard>
          )
        })}
      </div>
    </div>
  );
}
