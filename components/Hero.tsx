"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Play, Users, ArrowRight, Trophy } from "lucide-react";
import Particles from "./Particles";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] pt-28 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.jpg"
          alt="Nexus cyberpunk warrior"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[var(--color-bg)]" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>
      <div className="absolute inset-0 -z-10 opacity-60">
        <Particles />
      </div>

      <div className="mx-auto max-w-[1500px] px-4 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em]"
          >
            <span className="live-dot" />
            New Season · Chapter VII Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display font-black text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.9] tracking-tight"
          >
            ENTER <br />
            <span className="text-gradient">THE NEXUS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-xl text-base md:text-lg text-white/70"
          >
            The next-generation gaming network. Stream AAA titles, dominate
            live esports arenas, mint exclusive drops, and connect with
            millions of players across the multiverse — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#games" className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-black bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)] shadow-[0_0_40px_oklch(0.72_0.28_340/0.45)] hover:shadow-[0_0_60px_oklch(0.72_0.28_340/0.8)] transition-all shine">
              <Play className="size-4 fill-black" /> Browse Games
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#community" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 font-semibold hover:bg-white/10 transition">
              <Users className="size-4" /> Join Community
            </a>
          </motion.div>

          {/* Live stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-3 max-w-2xl"
          >
            {[
              { k: "Players Online", v: "2.4M", c: "var(--color-cyan)" },
              { k: "Live Tournaments", v: "187", c: "var(--color-magenta)" },
              { k: "Prize Pool / 24h", v: "$3.2M", c: "var(--color-emerald)" },
            ].map((s, i) => (
              <div key={s.k} className="glass rounded-2xl p-4 relative overflow-hidden">
                <div className="absolute -top-px left-4 right-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.c}, transparent)` }} />
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">{s.k}</div>
                <div className="font-display text-2xl md:text-3xl font-bold mt-1" style={{ color: s.c }}>{s.v}</div>
                {i === 0 && <div className="absolute bottom-2 right-3 text-[10px] font-mono text-white/40 inline-flex items-center gap-1"><span className="live-dot" />LIVE</div>}
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D scene panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative aspect-square w-full max-w-xl mx-auto"
        >
          <div className="absolute inset-0 rounded-[2rem] glass overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.65_0.25_295/0.25),transparent_60%)]" />
            <HeroScene />
            {/* HUD overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              <span>NXS-OS · v.27.04</span>
              <span className="inline-flex items-center gap-1"><span className="live-dot" />SIGNAL</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase text-white/60">
              <div className="glass rounded-md p-2"><div className="text-white/40">CPU</div><div className="text-[var(--color-cyan)]">87%</div></div>
              <div className="glass rounded-md p-2"><div className="text-white/40">FPS</div><div className="text-[var(--color-emerald)]">240</div></div>
              <div className="glass rounded-md p-2"><div className="text-white/40">PING</div><div className="text-[var(--color-magenta)]">12ms</div></div>
            </div>
            <Trophy className="absolute top-1/2 right-4 -translate-y-1/2 size-6 text-[var(--color-cyan)] animate-float opacity-80" />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1500px] px-4 md:px-8 mt-16 flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-white/40">
        <span>Trusted by</span>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {["NVIDIA", "RAZER", "TWITCH", "STEAM", "DISCORD", "AMD"].map((b) => (
            <span key={b} className="hover:text-white transition">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}