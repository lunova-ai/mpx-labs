"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PortalTransition({ target }: { target: string }) {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push(target);
    }, 900);
    return () => clearTimeout(timeout);
  }, [target, router]);

  return (
    <div className="fixed inset-0 bg-mpx-blue/20 backdrop-blur-xl flex items-center justify-center z-[999] animate-[portal_0.9s_ease]">
      <div className="w-[300px] h-[300px] rounded-full border-4 border-mpx-aqua animate-ping" />
    </div>
  );
}

