import { GlowCard } from './glow-card';
import {
  TrendingDown,
  Server,
  FileX2,
  GraduationCap,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';

type Result = {
  icon: LucideIcon;
  title: string;
  value: string;
  subValue: string;
  description?: string;
};

const results: Result[] = [
  {
    icon: TrendingDown,
    title: 'ИТ тизимлар учун ортиқча бюджет харажатларининг олди олинди',
    value: '265 mlrd so‘m',
    subValue: '($21,2 mln.)',
    description: '2022–2023 йилларда 528 млрд сўм ($42,2 млн.)',
  },
  {
    icon: Server,
    title: 'Инфратузилма харажатлари қисқартирилди',
    value: '32 mlrd so‘m',
    subValue: '($2,5 mln.)',
  },
  {
    icon: FileX2,
    title: 'Қоғоз ҳужжат айланмаси харажатлари бартараф этилди',
    value: '42 mlrd so‘m',
    subValue: '($3,3 mln.)',
  },
  {
    icon: GraduationCap,
    title: '359 минг нафар тиббиёт ходими ўқитилди',
    value: 'Бюджет маблағлари жалб этилмасдан',
    subValue: 'иқтисод: 78,9 mlrd so‘m ($6,3 млн.)',
  },
  {
    icon: ShieldCheck,
    title: 'Маблағлардан мақсадли фойдаланиш ва шаффофлик таъминланди',
    value: '755 mlrd so‘m',
    subValue: '($60,4 mln.)',
  },
];

const ResultCard = ({ result }: { result: Result }) => (
  <GlowCard className="p-6 flex flex-col text-center h-full">
    <div className="mx-auto p-3 bg-primary/10 rounded-xl border border-primary/20 mb-4">
      <result.icon className="h-8 w-8 text-primary" />
    </div>
    <p className="flex-1 text-base font-medium text-foreground/90">{result.title}</p>
    <div className="mt-4">
      <p className="text-3xl font-bold text-primary leading-tight">{result.value}</p>
      <p className="text-lg font-semibold text-primary/80">{result.subValue}</p>
    </div>
    {result.description && (
      <p className="mt-3 text-sm text-muted-foreground">{result.description}</p>
    )}
  </GlowCard>
);

export function KeyResultsSection() {
  return (
    <div className="space-y-8 w-full max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">АСОСИЙ НАТИЖАЛАР</h2>
        <p className="text-lg text-muted-foreground mt-2">Соғлиқни сақлашни рақамлаштиришнинг асосий натижалари</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, i) => (
            <ResultCard key={i} result={result} />
        ))}
      </div>
    </div>
  );
}
