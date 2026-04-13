'use client';

import { GlowCard } from './glow-card';
import {
  TrendingDown,
  Server,
  FileX2,
  GraduationCap,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';
import { useLanguage } from '@/context/language-context';

type Result = {
  icon: LucideIcon;
  title: string;
  value: string;
  subValue: string;
  description?: string;
};

const resultIcons: LucideIcon[] = [
  TrendingDown,
  Server,
  FileX2,
  GraduationCap,
  ShieldCheck,
];

const ResultCard = ({ result, icon: Icon }: { result: any, icon: LucideIcon }) => (
  <GlowCard className="p-6 flex flex-col text-center h-full">
    <div>
      <div className="mx-auto p-3 bg-primary/10 rounded-xl border border-primary/20 mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <p className="text-base font-medium text-foreground/90">{result.title}</p>
    </div>
    <div className="flex-1" />
    <div>
      <div className="mt-4">
        <p className="text-3xl font-bold text-primary leading-tight">{result.value}</p>
        <p className="text-lg font-semibold text-primary/80">{result.subValue}</p>
      </div>
      {result.description && (
        <p className="mt-3 text-sm text-muted-foreground">{result.description}</p>
      )}
    </div>
  </GlowCard>
);

export function KeyResultsSection() {
  const { dictionary } = useLanguage();
  const { title, subtitle, results } = dictionary.keyResults;
  
  return (
    <div className="space-y-8 w-full max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {results.map((result: any, i: number) => (
            <ResultCard key={i} result={result} icon={resultIcons[i]} />
        ))}
      </div>
    </div>
  );
}
