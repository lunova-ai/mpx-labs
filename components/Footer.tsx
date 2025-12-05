"use client";

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-20 border-t border-mpx-blue/20 bg-mpx-black/60 backdrop-blur-xl text-mpx-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-wide">
            <span className="text-mpx-aqua">MPX</span> Labs
          </h2>
          <p className="opacity-60 text-sm mt-1">
            Industrial Intelligence & Experimental Systems
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-8 text-sm opacity-80">
          <a href="/about" className="hover:text-mpx-aqua transition">About</a>
          <a href="/lab" className="hover:text-mpx-aqua transition">Lab</a>
          <a href="/experiments" className="hover:text-mpx-aqua transition">Experiments</a>
          <a href="/contact" className="hover:text-mpx-aqua transition">Contact</a>
        </div>

        {/* System Status */}
        <div className="text-center md:text-right text-sm opacity-80 font-mono">
          <p className="text-mpx-blue">System Integrity: <span className="text-mpx-aqua">Stable</span></p>
          <p className="opacity-60 mt-1">v1.0 • MPX Core Network</p>
        </div>
      </div>
    </footer>
  );
}
