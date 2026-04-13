import { cn } from "@/lib/utils";
import Image from "next/image";
import dmedLogo from "./white.jpg";

export function UzinfocomLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground/80", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 12.33L19.96 7.89L12 3.44L4.04 7.89L12 12.33Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-semibold tracking-wider">UZINFOCOM</span>
    </div>
  );
}

export function MinistryOfHealthLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground/80", className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <g transform="scale(0.65) translate(6, 0.5)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3.5c0 2.5-2 5-2 5s2 2.5 2 5" />
            <path d="M18 3.5c0 2.5 2 5 2 5s-2 2.5-2 5" />
            <path d="M4 8.5h16" />
            <path d="M4 15.5h16" />
            <path d="M10 3.5c0 2.5 2 5 2 5" />
            <path d="M14 8.5c-2 0-2 2.5-2 2.5" />
            <path d="M10 15.5c0 2.5 2 5 2 5" />
            <path d="M14 3.5c0 2.5-2 5-2 5" />
            <path d="M10 8.5c2 0 2 2.5 2 2.5" />
            <path d="M14 15.5c0 2.5-2 5-2 5" />
        </g>
      </svg>
      <span className="font-semibold tracking-wider">SOG'LIQNI SAQLASH VAZIRLIGI</span>
    </div>
  );
}

export function DmedLogo({ className }: { className?: string }) {
  return (
    <Image
        src={dmedLogo}
        alt="DMED Logo"
        width={56}
        height={56}
        className={cn("h-12 w-12 md:h-14 md:w-14 object-contain", className)}
    />
  );
}
