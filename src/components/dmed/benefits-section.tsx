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
  { icon: CalendarCheck, text: 'Shifokor qabuliga onlayn yozilish' },
  { icon: Beaker, text: 'Tahlil natijalarini ko\'rish' },
  { icon: FileDigit, text: 'Elektron tibbiy hujjatlar' },
  { icon: ShieldCheck, text: 'Davolanish va retseptlarni nazorat qilish' },
  { icon: HeartPulse, text: 'Oila salomatligi monitoringi' },
];

const doctorBenefits: Benefit[] = [
  { icon: Replace, text: '320 dan ortiq shakl va jurnallar raqamlashtirildi' },
  { icon: Clock, text: 'Kutish vaqtini qisqartirish: 40 daqiqadan 10 daqiqagacha' },
  { icon: Video, text: 'Onlayn maslahatlar' },
  { icon: Users, text: 'Aholining yagona hisobi' },
  { icon: History, text: 'Bemorning shaffof tarixi' },
  { icon: PieChart, text: 'Avtomatlashtirilgan hisobotlar' },
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
      <h2 className="text-2xl font-bold text-center mb-6">Aholi va shifokorlar uchun qulayliklar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Bemorlar uchun</h3>
          <ul className="space-y-4">
            {patientBenefits.map((benefit, i) => (
              <BenefitItem key={i} benefit={benefit} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Shifokorlar uchun</h3>
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
