import { MinistryOfHealthLogo, UzinfocomLogo } from './logos';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-4">
        {/* LOGO UCHUN JOY */}
        <div className="h-10 w-10 md:h-12 md:w-12 bg-primary/20 rounded-lg flex items-center justify-center border-2 border-primary/50">
          <span className="text-xs text-primary font-bold">LOGO</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-brand-orange">
          DMED RAQAMLI KO'RSATKICHLARDA
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
        <MinistryOfHealthLogo className="h-10" />
        <UzinfocomLogo className="h-6" />
      </div>
    </header>
  );
}
