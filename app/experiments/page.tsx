"use client";

import { useEffect, useRef, useState } from "react";

/* Helper */
const rnd = (min: number, max: number) => Math.random() * (max - min) + min;

/* Experiment 1 – Wellenformen (AI-Signale) */
function Waveforms() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = 600);
    let height = (canvas.height = 260);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = (canvas.width = rect.width);
      height = (canvas.height = rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#050607";
      ctx.fillRect(0, 0, width, height);

      const waves = [
        { color: "#3A7AFE", amp: 20, freq: 0.015, speed: 1 },
        { color: "#00E6C3", amp: 35, freq: 0.01, speed: 0.6 },
        { color: "#F8D34F", amp: 12, freq: 0.03, speed: 1.4 },
      ];

      waves.forEach((w, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            Math.sin(x * w.freq + t * w.speed + idx) * w.amp +
            Math.sin(x * 0.004 + t * 0.7) * 6;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      requestAnimationFrame(render);
    };

    render();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 rounded-2xl border border-mpx-blue/50 bg-mpx-black/60"
    />
  );
}

/* Experiment 2 – Schwarm (Flocking) */
function Flocking() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = 600);
    let height = (canvas.height = 260);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = (canvas.width = rect.width);
      height = (canvas.height = rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: rnd(-0.6, 0.6),
      vy: rnd(-0.6, 0.6),
    }));

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => (mouse.current = null));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#050607";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        if (mouse.current) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(40 / dist, 0.3);
          p.vx += (dx / dist) * force * 0.05;
          p.vy += (dy / dist) * force * 0.05;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      ctx.fillStyle = "#00E6C3";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.globalAlpha = 0.9;
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.strokeStyle = "#3A7AFE";
      ctx.globalAlpha = 0.35;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 rounded-2xl border border-mpx-aqua/50 bg-mpx-black/60"
    />
  );
}

/* Experiment 3 – AI-Terminal (Fake-Logik) */
function AITerminal() {
  const [lines, setLines] = useState<string[]>([
    "Lab-KI bereit. Warte auf Eingaben...",
  ]);

  useEffect(() => {
    const messages = [
      "Scanne Anomalien in Sensordaten...",
      "Verstärke Entscheidungs-Knoten...",
      "Komprimiere Telemetrie-Kanäle...",
      "Rebuild des Prognose-Mesh...",
      "Injektion synthetischer Edge-Cases...",
      "Normalisiere Multi-Source-Metriken...",
    ];

    const id = setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setLines((prev) => ["> " + msg, ...prev].slice(0, 9));
    }, 1800);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-64 rounded-2xl border border-mpx-blue/60 bg-black/80 p-4 font-mono text-sm text-mpx-aqua overflow-hidden">
      <div className="h-full overflow-y-auto space-y-1">
        {lines.map((l, i) => (
          <div key={i} className="opacity-80">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Experiment 4 – Heatmap (Ausfallrisiko) */
function Heatmap() {
  const [values, setValues] = useState<number[]>(
    Array.from({ length: 12 * 6 }).map(() => Math.random())
  );

  useEffect(() => {
    const id = setInterval(() => {
      setValues((prev) =>
        prev.map((v) => {
          let nv = v + rnd(-0.15, 0.15);
          if (nv < 0) nv = 0;
          if (nv > 1) nv = 1;
          return nv;
        })
      );
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-64 rounded-2xl border border-mpx-yellow/70 bg-mpx-black/80 p-3">
      <div className="grid grid-cols-12 gap-[3px] h-full">
        {values.map((v, i) => {
          const color = `rgba(248,211,79,${0.15 + v * 0.85})`;
          return (
            <div
              key={i}
              className="rounded-[4px]"
              style={{
                backgroundColor: color,
                boxShadow: v > 0.7 ? "0 0 12px rgba(248,211,79,0.8)" : "none",
                opacity: 0.5 + v * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* Simulation-Indicator */
function SimulationIndicator() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 500);
    return () => clearInterval(id);
  }, []);

  const dots = ".".repeat((tick % 3) + 1);

  return (
    <p className="text-mpx-aqua text-sm font-mono mb-6">
      Simulations-Cluster aktiv{dots}
    </p>
  );
}

/* Tabs */
const TABS = [
  { id: "wave", label: "Wellenformen", desc: "Abstraktion neuronaler Signale" },
  { id: "flock", label: "Schwarm", desc: "Agentenreaktion & Clusterbildung" },
  { id: "term", label: "AI-Terminal", desc: "Pseudologik & Status-Stream" },
  { id: "heat", label: "Heatmap", desc: "Simulation von Ausfallrisiken" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ExperimentsPage() {
  const [tab, setTab] = useState<TabId>("wave");

  return (
    <main className="min-h-screen bg-mpx-black text-mpx-white px-6 py-14 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-mpx-blue mb-2 drop-shadow-[0_0_22px_#3A7AFE]">
        MPX Experiments
      </h1>
      <SimulationIndicator />

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              tab === t.id
                ? "bg-mpx-blue text-white border-mpx-blue shadow-[0_0_14px_#3A7AFE]"
                : "border-mpx-blue/50 text-mpx-blue hover:border-mpx-aqua hover:text-mpx-aqua"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Beschreibung */}
      <p className="mb-6 text-mpx-aqua/80 text-sm font-mono">
        {TABS.find((t) => t.id === tab)?.desc} • Cursor und Zeit beeinflussen das System
      </p>

      {/* Panel */}
      <div className="w-full max-w-4xl">
        {tab === "wave" && <Waveforms />}
        {tab === "flock" && <Flocking />}
        {tab === "term" && <AITerminal />}
        {tab === "heat" && <Heatmap />}
      </div>
    </main>
  );
}


