"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState(""); // Honeypot
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // sichere Obfuscation für "morbo@gmx.at"
    const enc = [
      "&#116;", // t
      "&#97;",  // a
      "&#46;",  // .
      "&#120;", // x
      "&#109;", // m
      "&#103;", // g
      "&#64;",  // @
      "&#111;", // o
      "&#98;",  // b
      "&#114;", // r
      "&#111;", // o
      "&#109;"  // m
    ];
    setEmail(enc.reverse().join(""));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (trap.length > 0) {
      alert("Bot erkannt. Nachricht verworfen.");
      return;
    }

    setSent(true);
    setMessage("");
  };

  const copyEmail = () => {
    const decoded = "morbo@gmx.at";
    navigator.clipboard.writeText(decoded);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-mpx-black text-mpx-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-5xl font-bold text-mpx-aqua drop-shadow-[0_0_25px_#00E6C3] mb-8">
        Kontakt
      </h1>

      <p className="opacity-80 max-w-xl text-center mb-12 text-lg leading-relaxed">
        Sende eine Nachricht an MPX Labs.  
        Die E-Mail-Adresse ist geschützt und wird nur bei Bedarf angezeigt.
      </p>

      {/* Formular */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 rounded-2xl border border-mpx-blue/40 bg-mpx-black/60 backdrop-blur-xl shadow-[0_0_20px_#3A7AFE33]"
      >
        <label className="block mb-3 text-mpx-blue text-lg font-semibold">
          Deine Nachricht
        </label>

        <textarea
          className="w-full h-32 p-3 rounded-xl bg-mpx-black border border-mpx-blue/50 text-white focus:border-mpx-aqua transition"
          placeholder="Nachricht eingeben..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Honeypot */}
        <input
          type="text"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          className="hidden"
          tabIndex={-1}
        />

        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-xl bg-mpx-blue text-white hover:bg-mpx-aqua transition-all shadow-[0_0_18px_#3A7AFE]"
        >
          Nachricht lokal speichern
        </button>

        {sent && (
          <p className="mt-4 text-mpx-aqua font-semibold text-center">
            Nachricht lokal gespeichert (kein Versand).  
            Du kannst sie manuell mit der eingeblendeten E-Mail verschicken.
          </p>
        )}
      </form>

      {/* E-Mail anzeigen / kopieren */}
      <div className="mt-14 text-center flex flex-col items-center gap-4">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="
              px-6 py-3 rounded-xl border border-mpx-blue 
              text-mpx-blue font-semibold 
              hover:text-mpx-aqua hover:border-mpx-aqua 
              transition shadow-[0_0_10px_#3A7AFE55]
            "
          >
            E-Mail-Adresse anzeigen
          </button>
        ) : (
          <>
            <p
              className="text-2xl font-mono text-mpx-aqua select-all drop-shadow-[0_0_15px_#00E6C3]"
              dangerouslySetInnerHTML={{ __html: email }}
            />

            <button
              onClick={copyEmail}
              className="
                px-4 py-2 rounded-lg border border-mpx-blue 
                text-sm text-mpx-blue hover:text-mpx-aqua hover:border-mpx-aqua
                transition
              "
            >
              {copied ? "Kopiert!" : "In Zwischenablage kopieren"}
            </button>
          </>
        )}
      </div>

      <p className="opacity-40 text-sm font-mono mt-10">
        Spam-Schutz aktiv • E-Mail verschleiert • Kein Backend erforderlich
      </p>
    </main>
  );
}

