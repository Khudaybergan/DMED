'use client';

import { GlowCard } from './glow-card';
import { ListChecks, FlaskConical, BrainCircuit, ScanLine, Clock, Target, CheckCircle, Percent, ArrowDown, Timer } from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';
import { useLanguage } from '@/context/language-context';

const AiSolutionCard = ({ solution }: { solution: any }) => (
  <GlowCard className="p-6 relative">
    <AiExplainerButton dataPoint={solution.dataPointForAI} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold text-primary">{solution.title}</h3>
        <p className="text-muted-foreground mb-4">{solution.subtitle}</p>
        <ul className="space-y-3">
          {solution.features.map((feature: any, i: number) => {
            const Icon = feature.icon;
            return (
              <li key={i} className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                <span>{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col justify-between space-y-3">
        {solution.results.map((result: any, i: number) => {
           const Icon = result.icon;
           return (
            <div key={i} className="flex items-center gap-4 p-3 bg-card/90 rounded-lg border border-primary/20">
               <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-primary">{result.value}</p>
                <p className="text-sm text-muted-foreground">{result.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </GlowCard>
);

export function AiSolutionsSection() {
  const { dictionary } = useLanguage();
  const { title, top3dss, stroke } = dictionary.aiSolutions;

  const top3dssData = {
    ...top3dss,
    dataPointForAI: 'AI TOP3-DSS: Intelligent clinical decision support for faster diagnosis',
    features: [
      { icon: BrainCircuit, text: top3dss.features[0] },
      { icon: ListChecks, text: top3dss.features[1] },
      { icon: FlaskConical, text: top3dss.features[2] },
    ],
    results: [
      { icon: Percent, value: '+20%', text: top3dss.results[0] },
      { icon: ArrowDown, value: '10 dan 3 minutgacha', text: top3dss.results[1] },
      { icon: CheckCircle, value: '>85%', text: top3dss.results[2] },
    ],
  };

  const strokeData = {
    ...stroke,
    dataPointForAI: 'AI STROKE: AI analysis of CT and MRI for detection, classification, and assessment of stroke pathology',
    features: [
      { icon: ScanLine, text: stroke.features[0] },
      { icon: BrainCircuit, text: stroke.features[1] },
      { icon: Target, text: stroke.features[2] },
    ],
    results: [
      { icon: Timer, value: '< 2 min', text: stroke.results[0] },
      { icon: Percent, value: '95-97%', text: stroke.results[1] },
      { icon: ArrowDown, value: '15-25 min', text: stroke.results[2] },
    ],
  };


  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="space-y-6">
        <AiSolutionCard solution={top3dssData} />
        <AiSolutionCard solution={strokeData} />
      </div>
    </div>
  );
}
