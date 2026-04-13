import { cn } from "@/lib/utils";

export function DmedLogo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-primary", className)}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4ZM24 36C19.58 36 16 32.42 16 28C16 23.58 19.58 20 24 20C28.42 20 32 23.58 32 28C32 32.42 28.42 36 24 36ZM26 18H22V12H26V18Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
