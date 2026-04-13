import { GlowCard } from './glow-card';
import { ListChecks, FlaskConical, BrainCircuit, ScanLine, Clock, Target, CheckCircle, Percent, ArrowDown, Timer } from 'lucide-react';

const AiSolutionCard = ({ title, subtitle, features, results }: {
  title: string,
  subtitle: string,
  features: { icon: any, text: string }[],
  results: { icon: any, text: string, value: string }[]
}) => (
  <GlowCard className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4">{subtitle}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <feature.icon className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        {results.map((result, i) => (
          <GlowCard key={i} className="flex items-center gap-4 p-3 bg-card/90">
             <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <result.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xl font-bold text-primary">{result.value}</p>
              <p className="text-sm text-muted-foreground">{result.text}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  </GlowCard>
);

export function AiSolutionsSection() {
  const top3dss = {
    title: 'AI TOP3-DSS',
    subtitle: 'Tezroq tashxis qo\'yish uchun klinik qarorlarni intellektual qo\'llab-quvvatlash',
    features: [
      { icon: BrainCircuit, text: 'Ishonch darajalari bilan ehtimoliy tashxisning TOP3 variantini tanlash' },
      { icon: ListChecks, text: 'Klinik protokollar bo\'yicha tayinlovlar' },
      { icon: FlaskConical, text: 'Tahlillar va tekshiruvlar bo\'yicha tavsiyalar' },
    ],
    results: [
      { icon: Percent, value: '+20%', text: 'tor mutaxassislarga o\'z vaqtida yo\'naltirish' },
      { icon: ArrowDown, value: '10 dan 3 minutgacha', text: 'davolash rejasini shakllantirish vaqtini qisqartirish' },
      { icon: CheckCircle, value: '>85%', text: 'etalon tashxis bilan mos kelish' },
    ],
  };

  const stroke = {
    title: 'AI STROKE',
    subtitle: 'Insult patologiyasini aniqlash, tasniflash va baholash uchun KT va MRT tahlili uchun sun\'iy intellekt',
    features: [
      { icon: ScanLine, text: 'KT orqali tez aniqlash va tasniflash' },
      { icon: BrainCircuit, text: 'ASPECTS shkalasi va gematoma hajmini avtomatik baholash' },
      { icon: Target, text: 'Tashxis uchun kamroq vaqt, qarorlar aniqligi yuqori' },
    ],
    results: [
      { icon: Timer, value: '< 2 min', text: 'bitta tadqiqotni qayta ishlash va tahlil qilish' },
      { icon: Percent, value: '95-97%', text: 'sezgirlikni aniqlashda aniqlik' },
      { icon: ArrowDown, value: '15-25 min', text: 'davolanish boshlangunicha bo\'lgan vaqtni qisqartirish' },
    ],
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">AI-yechimlar namunalari</h2>
      <div className="space-y-6">
        <AiSolutionCard {...top3dss} />
        <AiSolutionCard {...stroke} />
      </div>
    </div>
  );
}
