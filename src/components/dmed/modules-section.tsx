'use client';

import {
  Building,
  Bed,
  FlaskConical,
  Scan,
  Pill,
  Archive,
  Gauge,
  BarChart,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import { GlowCard } from './glow-card';
import React from 'react';

type Module = {
  icon: LucideIcon;
  name: string;
};

const modules: Module[] = [
  { icon: Building, name: 'Poliklinika' },
  { icon: Bed, name: 'Statsionar' },
  { icon: FlaskConical, name: 'Laboratoriya' },
  { icon: Scan, name: 'Radiologiya' },
  { icon: Pill, name: 'Dorixona' },
  { icon: Archive, name: 'Ombor' },
  { icon: Gauge, name: "KPI ko'rsatkichlari" },
  { icon: BarChart, name: 'Tahlil' },
  { icon: Smartphone, name: 'Mobil ilova' },
];

export function ModulesSection() {
  const [radius, setRadius] = React.useState(320);

  React.useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(180); // mobile
      } else if (window.innerWidth < 1280) {
        setRadius(260); // tablet
      } else {
        setRadius(320); // desktop
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
        DMED PLATFORMASI MODULLARI
      </h2>

      <div className="relative flex items-center justify-center w-full flex-1 min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Central Core */}
        <div className="absolute flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary shadow-[0_0_40px_-10px_hsl(var(--primary)/0.7)] z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-primary">DMED</h3>
          <p className="text-lg md:text-xl text-muted-foreground">Modullar</p>
        </div>

        {/* Module Cards */}
        <div className="absolute w-full h-full">
            {modules.map((module, index) => {
              const angle = (index / modules.length) * 2 * Math.PI - Math.PI / 2; // Start from top (-90 degrees)
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={module.name}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    transition: 'transform 0.5s ease-out',
                  }}
                >
                  <GlowCard className="w-32 h-24 md:w-36 md:h-28 flex flex-col items-center justify-center p-2 text-center hover:scale-110 !h-auto">
                    <module.icon className="h-8 w-8 md:h-9 md:w-9 text-primary mb-2" />
                    <span className="text-xs md:text-sm font-semibold text-foreground/90">{module.name}</span>
                  </GlowCard>
                </div>
              );
            })}
        </div>
      </div>

      <p className="text-center text-muted-foreground max-w-3xl text-sm md:text-base px-4">
        DMED — sog'liqni saqlash tizimining yagona raqamli platformasi bo'lib, barcha asosiy tibbiy va boshqaruv modullarini yagona ekotizimga birlashtiradi.
      </p>
    </div>
  );
}
