"use client";
import { motion } from "framer-motion";
import { Search, Menu, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = ["Games", "News", "Esports", "Community", "Marketplace", "Academy"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className={`glass flex items-center justify-between gap-4 rounded-2xl px-4 md:px-6 py-3 ${scrolled ? "shadow-[0_20px_60px_-20px_oklch(0.45_0.22_295/0.5)]" : ""}`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-[var(--color-cyan)] via-[var(--color-violet)] to-[var(--color-magenta)] shadow-[0_0_24px_oklch(0.65_0.25_295/0.6)]">
              <span className="font-display font-black text-black text-sm">N</span>
            </div>
            <span className="font-display font-black text-lg tracking-[0.2em]">NEXUS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l} href="#" className="relative px-3 py-2 text-sm text-white/80 hover:text-white transition-colors group">
                {l}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/50" />
              <input
                placeholder="Ask AI: 'Best co-op RPGs'"
                className="w-72 rounded-xl bg-white/5 border border-white/10 pl-9 pr-9 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--color-cyan)]/60 focus:bg-white/10 transition"
              />
              <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[var(--color-cyan)] animate-pulse-glow" />
            </div>
            <a
              href="#"
              className="relative inline-flex items-center gap-2 rounded-xl px-5 py-2 font-semibold text-sm text-black bg-gradient-to-r from-[var(--color-cyan)] via-white to-[var(--color-magenta)] shadow-[0_0_40px_oklch(0.72_0.28_340/0.5)] hover:shadow-[0_0_60px_oklch(0.72_0.28_340/0.8)] transition-all"
            >
              <span className="live-dot" /> Play Now
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass lg:hidden mt-2 rounded-2xl p-4 flex flex-col gap-2"
          >
            {links.map((l) => (
              <a key={l} href="#" className="px-3 py-2 text-white/80 hover:text-white">{l}</a>
            ))}
            <a href="#" className="mt-2 text-center rounded-xl py-2 font-semibold text-black bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)]">Play Now</a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}