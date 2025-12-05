"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMouseMove = (e: any) => {
    setGlowPos({ x: e.clientX, y: e.clientY });
  };

  const linkStyle =
    "relative group tracking-wide transition text-lg font-medium";
  const underline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-mpx-aqua after:transition-all group-hover:after:w-full";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mpx-black/80 backdrop-blur-xl shadow-[0_0_20px_#00E6C355]"
          : "bg-transparent"
      }`}
      onMouseMove={onMouseMove}
    >
      {/* glow cursor */}
      <div
        className="pointer-events-none fixed w-[200px] h-[200px] rounded-full bg-mpx-aqua/10 blur-2xl transition-all -z-10"
        style={{
          left: glowPos.x - 100,
          top: glowPos.y - 100
        }}
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-mpx-white">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-mpx-aqua">MPX</span> Labs
        </Link>

        <div className="hidden md:flex gap-10">
          <Link href="/lab" className={`${linkStyle} ${underline}`}>
            Lab
          </Link>
          <Link href="/experiments" className={`${linkStyle} ${underline}`}>
            Experiments
          </Link>
          <Link href="/about" className={`${linkStyle} ${underline}`}>
            About
          </Link>
          <Link href="/contact" className={`${linkStyle} ${underline}`}>
            Contact
          </Link>
        </div>

        <button
          className="md:hidden p-2 border border-mpx-blue rounded text-mpx-blue"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 z-40 backdrop-blur-md transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-mpx-black z-50 shadow-[0_0_25px_#3A7AFE] p-6 flex flex-col gap-8 transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-mpx-aqua text-3xl self-end pb-2"
        >
          ✕
        </button>

        <Link href="/lab" onClick={() => setOpen(false)}>
          Lab
        </Link>
        <Link href="/experiments" onClick={() => setOpen(false)}>
          Experiments
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}


