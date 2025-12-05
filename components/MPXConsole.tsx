"use client";

import { useEffect, useState } from "react";

export default function MPXConsole() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      if (e.shiftKey && e.key === ".") setOpen((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[999] flex items-center justify-center p-10">
      <div className="w-full max-w-3xl bg-mpx-black border border-mpx-blue/40 rounded-2xl p-10 text-mpx-aqua font-mono text-lg shadow-[0_0_30px_#3A7AFE]">
        <h2 className="text-3xl font-bold mb-6">MPX Console</h2>

        <p>> System Status: <span className="text-mpx-blue">Stable</span></p>
        <p>> AI Core: <span className="text-mpx-blue">Online</span></p>
        <p>> Uptime: 4172 cycles</p>

        <p className="mt-8 opacity-60 text-sm">
          Press SHIFT + . to close
        </p>
      </div>
    </div>
  );
}
