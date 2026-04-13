'use client';

import { DmedLogo } from './logos';
import { FullscreenButton } from './fullscreen-button';
import { LanguageSwitcher } from './language-switcher';
import { useLanguage } from '@/context/language-context';

export function DashboardHeader() {
  const { dictionary } = useLanguage();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 p-3 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold tracking-tight text-foreground/90">
          {dictionary.header.title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          {dictionary.header.ministry.map((line, index) => (
            <p key={index} className="text-xs font-medium uppercase text-foreground/80 tracking-wider">{line}</p>
          ))}
        </div>
        <DmedLogo />
        <LanguageSwitcher />
        <FullscreenButton />
      </div>
    </header>
  );
}
