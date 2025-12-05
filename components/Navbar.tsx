"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-mpx-black/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 text-mpx-white">

        <div className="text-2xl font-bold tracking-tight">
          <span className="text-mpx-aqua">MPX</span> Labs
        </div>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="/lab" className="hover:text-mpx-aqua transition">Lab</a>
          <a href="/experiments" className="hover:text-mpx-aqua transition">Experimente</a>
          <a href="/about" className="hover:text-mpx-aqua transition">Über uns</a>
          <a href="/contact" className="hover:text-mpx-aqua transition">Kontakt</a>
        </div>

        <button
          className="md:hidden p-2 border border-mpx-blue rounded text-mpx-blue"
          onClick={() => console.log("Mobile menu open")}
        >
          ☰
        </button>

      </div>
    </nav>
  );
}



