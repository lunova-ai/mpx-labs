"use client";

import { useState } from "react";

const modules = [
  {
    title: "Process Optimizer",
    status: "Stabil",
    desc: "Optimiert industrielle Workflows anhand von Echtzeit- und Verlaufsdaten."
  },
  {
    title: "Failure Predictor",
    status: "Training",
    desc: "Prognostiziert potenzielle Ausfälle und Störungen bevor sie eintreten."
  },
  {
    title: "Cognitive Mesh",
    status: "Experimentell",
    desc: "Selbstorganisierendes KI-Mesh für komplexe Entscheidungsstrukturen."
  },
];

export default function LabPage() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([
    "Lab-KI: System bereit. Eingaben möglich.",
    "Tipp: Frage nach Optimierung, Prognosen oder Anomalien."
  ]);

  const handleAsk = () => {
    if (!input.trim()) return;
    setLog((prev) => [
      `Du: ${input}`,
      "Lab-KI: Anfrage mit industriellem Kontext verarbeitet...",
      ...prev,
    ]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-mpx-black text-mpx-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr,1.5fr] gap-10">
        {/* Linke Seite: Module */}
        <section>
          <h1 className="text-4xl font-bold text-mpx-aqua mb-6">Lab-Konsole</h1>
          <p className="opacity-75 mb-8">
            Aktive MPX-Module im industriellen Einsatz.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-mpx-blue/40 bg-mpx-black/40 backdrop-blur-xl"
              >
                <div className="text-sm uppercase tracking-wide text-mpx-yellow mb-1">
                  {m.status}
                </div>
                <h2 className="text-xl font-semibold text-mpx-blue mb-2">
                  {m.title}
                </h2>
                <p className="text-sm opacity-80">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rechte Seite: Lab-KI Persona */}
        <section className="bg-mpx-black/60 border border-mpx-aqua/40 rounded-3xl p-6 flex flex-col">
          <h2 className="text-2xl font-semibold text-mpx-aqua mb-4">
            Lab-KI Persona
          </h2>
          <div className="flex-1 border border-mpx-blue/40 rounded-2xl p-4 mb-4 overflow-y-auto max-h-80 text-sm font-mono space-y-2 bg-mpx-black/60">
            {log.map((line, i) => (
              <div key={i} className="opacity-80">
                {line}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <input
              className="flex-1 rounded-xl bg-mpx-black border border-mpx-blue/60 px-3 py-2 text-sm focus:outline-none focus:border-mpx-aqua"
              placeholder="Stelle der Lab-KI eine Frage..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            />
            <button
              onClick={handleAsk}
              className="px-5 py-2 rounded-xl bg-mpx-blue text-white hover:bg-mpx-aqua transition shadow-[0_0_14px_#3A7AFE]"
            >
              Senden
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
