"use client";

import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function GlitchButton({ variant = "primary", children, ...rest }: Props) {
  const base =
    "relative px-8 py-3 overflow-hidden text-lg font-semibold rounded-xl transition-all duration-200";

  const styles =
    variant === "primary"
      ? "bg-mpx-blue text-white hover:bg-mpx-aqua shadow-[0_0_15px_#3A7AFE]"
      : "border border-mpx-blue text-mpx-blue hover:border-mpx-aqua hover:text-mpx-aqua";

  return (
    <button className={`${base} ${styles}`} {...rest}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-mpx-aqua/40 to-transparent animate-[glitchScan_2s_linear_infinite]"></span>

      <style jsx global>{`
        @keyframes glitchScan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
}
