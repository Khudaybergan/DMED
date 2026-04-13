import { DmedLogo } from './logos';
import { FullscreenButton } from './fullscreen-button';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-primary">
          DMED RAQAMLI KO'RSATKICHLARDA
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <FullscreenButton />
        <DmedLogo />
      </div>
    </header>
  );
}
