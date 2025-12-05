"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-mpx-black text-mpx-white px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold text-mpx-aqua drop-shadow-[0_0_25px_#00E6C3] mb-10">
          Über MPX Labs
        </h1>

        <p className="text-xl opacity-80 max-w-3xl leading-relaxed mb-16">
          MPX Labs entwickelt KI-getriebene Automatisierung, industrielle
          Software und robuste Data-Engineering-Systeme.  
          Ziel ist es, die industrielle Welt mit Echtzeit-Intelligenz
          und präziser Automatisierung zu erweitern.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <section className="p-8 rounded-2xl bg-mpx-black/60 border border-mpx-blue/40 backdrop-blur-xl shadow-[0_0_20px_#3A7AFE22]">
            <h2 className="text-3xl font-semibold text-mpx-aqua mb-4">
              Kernschwerpunkte
            </h2>
            <ul className="space-y-3 opacity-90 text-lg">
              <li>• Industrielle Automatisierungs-Software</li>
              <li>• Prognostische KI-Modelle & Anomalie-Erkennung</li>
              <li>• Sensor- und Telemetrie-Datenpipelines</li>
              <li>• Entscheidungs- und Monitoring-Dashboards</li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-mpx-black/60 border border-mpx-blue/40 backdrop-blur-xl shadow-[0_0_20px_#3A7AFE22]">
            <h2 className="text-3xl font-semibold text-mpx-aqua mb-4">
              Ansatz
            </h2>
            <p className="opacity-90 leading-relaxed">
              MPX Labs arbeitet technisch fokussiert: robuste Architektur,
              klare Schnittstellen, nachvollziehbare KI-Modelle
              und Systeme, die in realen industriellen Umgebungen bestehen.
              Jede Lösung ist modular, skalierbar und langfristig wartbar ausgelegt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}


