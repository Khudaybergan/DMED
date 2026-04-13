import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const GlowCard = ({ className, children }: { className?: string, children: ReactNode }) => {
  return (
    <div className={cn(
      "relative h-full rounded-xl bg-card/80 backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]",
      className
    )}>
      {children}
    </div>
  );
};
