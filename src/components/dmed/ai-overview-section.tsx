'use client';

import { GlowCard } from './glow-card';
import { BrainCircuit, ScanSearch, BarChart, type LucideIcon } from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';
import { useLanguage } from '@/context/language-context';

const aiStatIcons: LucideIcon[] = [BrainCircuit, ScanSearch, BarChart];

export function AiOverviewSection() {
  const { dictionary } = useLanguage();
  const { title, stats } = dictionary.aiOverview;

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
        {stats.map((stat, i) => {
          const Icon = aiStatIcons[i];
          return (
            <GlowCard key={i} className="relative p-8 text-center flex flex-col justify-center items-center">
              <AiExplainerButton dataPoint={stat.dataPointForAI} />
               <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 mb-6 inline-block">
                <Icon className="h-12 w-12 text-primary" />
              </div>
              <div>
                <p className="text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </GlowCard>
          )
        })}
      </div>
    </div>
  );
}

    