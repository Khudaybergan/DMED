import { DmedLogo } from './logos';
import { FullscreenButton } from './fullscreen-button';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 p-3 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold tracking-tight text-foreground/90">
          DMED RAQAMLI KO'RSATKICHLARDA
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs font-medium uppercase text-foreground/80 tracking-wider">O'zbekiston Respublikasi</p>
          <p className="text-[10px] uppercase text-muted-foreground tracking-wider">Sog'liqni saqlash vazirligi</p>
        </div>
        <DmedLogo />
        <FullscreenButton />
      </div>
    </header>
  );
}
