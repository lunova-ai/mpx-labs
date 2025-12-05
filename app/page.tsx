"use client";

import { useEffect, useRef, useState } from "react";
import PortalTransition from "../components/PortalTransition";
import Link from "next/link";

//
//  PARTICLES 2.0 – smooth, lightweight energy field
//
function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#00E6C3";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= w) p.vx *= -1;
        if (p.y <= 0 || p.y >= h) p.vy *= -1;

        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(loop);
    };

    loop();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={ref} className="absolute inset-0 -z-20 opacity-30" />
  );
}

//
//  HOLOGRID – subtle futuristic background grid
//
function HoloGrid() {
  const lines = [];
  for (let i = 0; i < 35; i++) {
    lines.push(
      <line
        key={i}
        x1={Math.random() * 1000}
        y1={Math.random() * 800}
        x2={Math.random() * 1000}
        y2={Math.random() * 800}
        stroke="#3A7AFE"
        strokeWidth="0.6"
        className="opacity-40 animate-pulse"
      />
    );
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 opacity-[0.18] mix-blend-screen"
      viewBox="0 0 1000 800"
    >
      {lines}
    </svg>
  );
}

//
//  AI WAVE TEXT – dynamic changing AI thoughts
//
function AIWave() {
  const messages = [
    "Synthesizing industrial intelligence...",
    "Optimizing sensor data streams...",
    "Evaluating anomaly probability fields...",
    "Predicting operational thresholds...",
    "Rebuilding neural optimization graph..."
  ];

  const [text, setText] = useState(messages[0]);

  useEffect(() => {
    const id = setInterval(() => {
      const next = messages[Math.floor(Math.random() * messages.length)];
      setText(next);
    }, 2800);

    return () => clearInterval(id);
  }, []);

  return (
    <p className="mt-10 text-xl text-mpx-aqua font-mono opacity-80 tracking-wide">
      <span className="text-mpx-blue">AI&gt; </span>
      {text}
    </p>
  );
}

//
//  MAIN PAGE
//
export default function Home() {
  const [portal, setPortal] = useState<{ active: boolean; target: string }>({
    active: false,
    target: "/",
  });

  return (
    <main className="relative min-h-screen bg-mpx-black text-mpx-white overflow-hidden">

      {portal.active && <PortalTransition target={portal.target} />}

      <Particles />
      <HoloGrid />

      {/* NEON BLOOM BACKLIGHT */}
      <div className="absolute w-[700px] h-[700px] bg-mpx-blue blur-[200px] opacity-20 -z-10 left-1/2 -translate-x-1/2 top-1/3"></div>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">

        <h1 className="text-7xl font-extrabold tracking-tight drop-shadow-[0_0_25px_#3A7AFE]">
          MPX Labs
        </h1>

        <p className="text-3xl mt-4 text-mpx-aqua max-w-3xl leading-relaxed drop-shadow-[0_0_18px_#00E6C3]">
          Experimental AI Systems for a New Industrial Era.
        </p>

        <AIWave />

        {/* ACTION BUTTONS */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center">

          {/* Primary */}
          <button
            onClick={() => setPortal({ active: true, target: "/lab" })}
            className="
              px-8 py-3 text-lg font-semibold rounded-xl 
              bg-mpx-aqua text-mpx-black 
              hover:bg-mpx-blue hover:text-white 
              transition-all shadow-[0_0_20px_#00E6C3]
            "
          >
            Enter Lab Space
          </button>

          {/* Secondary */}
          <button
            onClick={() => setPortal({ active: true, target: "/experiments" })}
            className="
              px-8 py-3 text-lg font-semibold rounded-xl border border-mpx-blue 
              text-mpx-blue hover:text-mpx-aqua hover:border-mpx-aqua 
              transition-all shadow-[0_0_15px_#3A7AFE55]
            "
          >
            View Experiments
          </button>
        </div>
      </section>
    </main>
  );
}





