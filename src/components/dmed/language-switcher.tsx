'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale, dictionary } = useLanguage();
  const { languageSwitcher } = dictionary;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
          <Languages className="h-5 w-5" />
          <span className="sr-only">{languageSwitcher.changeLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale('uz')} disabled={locale === 'uz'}>
          {languageSwitcher.languages.uz}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('en')} disabled={locale === 'en'}>
          {languageSwitcher.languages.en}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('ru')} disabled={locale === 'ru'}>
          {languageSwitcher.languages.ru}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
