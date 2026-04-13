import {
  CalendarCheck,
  Beaker,
  FileDigit,
  ShieldCheck,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';
import { AiExplainerButton } from './ai-explainer-dialog';

type Benefit = {
  icon: LucideIcon;
  text: string;
};

const patientBenefits: Benefit[] = [
  { icon: CalendarCheck, text: "Shifokor qabuliga onlayn yozilish" },
  { icon: Beaker, text: "Tahlil natijalarini ko'rish" },
  { icon: FileDigit, text: "Elektron tibbiy hujjatlar" },
  { icon: ShieldCheck, text: "Davolanish va retseptlarni nazorat qilish" },
  { icon: HeartPulse, text: "Oila salomatligi monitoringi" },
];

const BenefitItem = ({ benefit }: { benefit: Benefit }) => (
  <li className="flex items-center gap-4 p-4 rounded-xl bg-card border border-primary/20">
    <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 border border-primary/20">
      <benefit.icon className="h-7 w-7 text-primary" />
    </div>
    <span className="text-foreground/90 text-lg">{benefit.text}</span>
  </li>
);

export function BenefitsSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      <AiExplainerButton dataPoint="Conveniences for patients in the DMED system" />
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Aholi va shifokorlar uchun qulayliklar</h2>
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">Bemorlar uchun</h3>
      <div className="w-full max-w-4xl">
        <ul className="space-y-5">
          {patientBenefits.map((benefit, i) => (
            <BenefitItem key={i} benefit={benefit} />
          ))}
        </ul>
      </div>
    </div>
  );
}
