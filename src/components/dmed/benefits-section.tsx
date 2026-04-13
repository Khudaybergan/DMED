import { GlowCard } from './glow-card';
import {
  CalendarCheck,
  Beaker,
  FileDigit,
  ShieldCheck,
  HeartPulse,
  Replace,
  Clock,
  Video,
  Users,
  History,
  PieChart,
  type LucideIcon,
} from 'lucide-react';

type Benefit = {
  icon: LucideIcon;
  text: string;
};

const patientBenefits: Benefit[] = [
  { icon: CalendarCheck, text: 'Онлайн запись к врачу' },
  { icon: Beaker, text: 'Доступ к результатам анализов' },
  { icon: FileDigit, text: 'Электронные медицинские документы' },
  { icon: ShieldCheck, text: 'Контроль лечения и рецептов' },
  { icon: HeartPulse, text: 'Мониторинг здоровья семьи' },
];

const doctorBenefits: Benefit[] = [
  { icon: Replace, text: 'Оцифровано более 320 форм и журналов' },
  { icon: Clock, text: 'Сокращение времени ожидания: с 40 до 10 минут' },
  { icon: Video, text: 'Онлайн-консультации' },
  { icon: Users, text: 'Единый учет населения' },
  { icon: History, text: 'Прозрачная история пациента' },
  { icon: PieChart, text: 'Автоматизированная отчетность' },
];

const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <li className="flex items-center gap-4">
    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 border border-primary/20">
      <benefit.icon className="h-5 w-5 text-primary" />
    </div>
    <span className="text-foreground/90">{benefit.text}</span>
  </li>
);

export function BenefitsSection() {
  return (
    <GlowCard className="p-6 h-full">
      <h2 className="text-2xl font-bold text-center mb-6">Удобства для населения и врачей</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Для пациентов</h3>
          <ul className="space-y-4">
            {patientBenefits.map((benefit, i) => (
              <BenefitItem key={i} benefit={benefit} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Для врачей</h3>
          <ul className="space-y-4">
            {doctorBenefits.map((benefit, i) => (
              <BenefitItem key={i} benefit={benefit} />
            ))}
          </ul>
        </div>
      </div>
    </GlowCard>
  );
}
