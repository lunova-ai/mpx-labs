"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Analyse industrieller Prozesse läuft...",
  "Optimiere Datenströme...",
  "Prognostiziere Ausfallwahrscheinlichkeiten...",
  "Bewerte Sensorintegrität...",
  "Aktualisiere neuronale Modelle...",
];

export default function AIThinking() {
  const [text, setText] = useState(MESSAGES[0]);

  useEffect(() => {
    const id = setInterval(() => {
      const next = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setText(next);
    }, 2600);

    return () => clearInterval(id);
  }, []); // keine missing-deps-Warnung, MESSAGES ist konstant oben

  return (
    <div className="font-mono text-mpx-aqua text-xl mt-10 opacity-80">
      <span className="text-mpx-blue">{"AI > "}</span>
      {text}
    </div>
  );
}

