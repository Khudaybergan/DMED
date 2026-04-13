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
    subtitle: 'Интеллектуальная поддержка клинических решений для более быстрой диагностики',
    features: [
      { icon: BrainCircuit, text: 'Подбор ТОРЗ вероятного диагноза с уровнями уверенности' },
      { icon: ListChecks, text: 'Назначения по клиническим протоколам' },
      { icon: FlaskConical, text: 'Рекомендации по анализам и обследованиям' },
    ],
    results: [
      { icon: Percent, value: '+20%', text: 'своевременных направлений к узким специалистам' },
      { icon: ArrowDown, value: 'с 10 до 3 мин', text: 'сокращение времени на формирование плана лечения' },
      { icon: CheckCircle, value: '>85%', text: 'совпадение с эталонным диагнозом' },
    ],
  };

  const stroke = {
    title: 'AI STROKE',
    subtitle: 'ИИ для анализа КТ и МРТ с целью выявления, классификации и оценки инсультной патологии',
    features: [
      { icon: ScanLine, text: 'Быстрое выявление и классификация по КТ' },
      { icon: BrainCircuit, text: 'Автоматическая оценка ASPECTS и объема гематомы' },
      { icon: Target, text: 'Меньше времени на диагноз, выше точность решений' },
    ],
    results: [
      { icon: Timer, value: '< 2 мин', text: 'обработка и анализ одного исследования' },
      { icon: Percent, value: '95-97%', text: 'точности при обнаружении чувствительности' },
      { icon: ArrowDown, value: '15-25 мин', text: 'сокращение времени до начала лечения' },
    ],
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Примеры AI-решений</h2>
      <div className="space-y-6">
        <AiSolutionCard {...top3dss} />
        <AiSolutionCard {...stroke} />
      </div>
    </div>
  );
}
