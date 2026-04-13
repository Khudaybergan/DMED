import { DmedLogo, MinistryOfHealthLogo, UzinfocomLogo } from './logos';

export function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <DmedLogo className="h-10 w-10 md:h-12 md:w-12" />
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-brand-orange">
          DMED В ЦИФРОВЫХ ПОКАЗАТЕЛЯХ
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
        <MinistryOfHealthLogo className="h-6" />
        <UzinfocomLogo className="h-6" />
      </div>
    </header>
  );
}
