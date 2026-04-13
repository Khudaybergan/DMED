'use client';

import {
  Replace,
  Clock,
  Video,
  Users,
  History,
  PieChart,
  type LucideIcon,
} from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';
import { useLanguage } from '@/context/language-context';


const benefitIcons: LucideIcon[] = [
  Replace,
  Clock,
  Video,
  Users,
  History,
  PieChart,
];

const BenefitItem = ({ text, icon: Icon }: { text: string, icon: LucideIcon }) => (
  <li className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20">
    <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 border border-primary/20">
      <Icon className="h-7 w-7 text-primary" />
    </div>
    <span className="text-foreground/90 text-lg">{text}</span>
  </li>
);

export function DoctorBenefitsSection() {
  const { dictionary } = useLanguage();
  const { title, subtitle, benefits } = dictionary.doctorBenefits;
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
       <AiExplainerButton dataPoint="Conveniences for doctors in the DMED system" />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">{subtitle}</h3>
      <div className="w-full max-w-4xl">
         <ul className="space-y-5">
            {benefits.map((benefit: string, i: number) => (
              <BenefitItem key={i} text={benefit} icon={benefitIcons[i]} />
            ))}
          </ul>
      </div>
    </div>
  );
}
