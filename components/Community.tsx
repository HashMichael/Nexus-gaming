"use client";
import { motion } from "framer-motion";
import { Mic, Users, Radio } from "lucide-react";

const creators = [
  { name: "KESTREL", followers: "1.2M", img: "/images/creator1.jpg", live: true },
  { name: "NOVA_X", followers: "984K", img: "/images/creator2.jpg", live: false },
  { name: "GHOST", followers: "742K", img: "/images/creator3.jpg", live: true },
  { name: "AURORA", followers: "612K", img: "/images/creator4.jpg", live: false },
];

const channels = [
  { name: "Eclipse · Strategy", users: 412, color: "var(--color-cyan)" },
  { name: "Late-night Squad-up", users: 268, color: "var(--color-magenta)" },
  { name: "Speedrun · WR Hunt", users: 154, color: "var(--color-violet)" },
  { name: "Devs in the Wild", users: 88, color: "var(--color-emerald)" },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-[1500px] grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-emerald)] mb-3">/ 04 — Hub</div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
            One <span className="text-gradient">community.</span><br />Infinite squads.
          </h2>
          <p className="mt-5 text-white/65 max-w-md">
            Drop into spatial voice channels, follow your favorite creators, share clips, and find squad-mates that actually match your vibe — powered by our AI matchmaker.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a href="#" className="rounded-xl bg-white text-black px-5 py-3 font-semibold text-sm hover:bg-white/90 transition">Join the Hub</a>
            <a href="#" className="rounded-xl glass px-5 py-3 font-semibold text-sm hover:bg-white/10 transition">Open Discord</a>
          </div>

          <div className="mt-10 glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-white/70">
                <Mic className="size-4 text-[var(--color-emerald)]" /> Active Voice Channels
              </div>
              <span className="text-[10px] font-mono text-white/40">LIVE</span>
            </div>
            <ul className="space-y-2">
              {channels.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/[0.03] hover:bg-white/[0.08] transition group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full animate-pulse-glow" style={{ background: c.color, boxShadow: `0 0 12px ${c.color}` }} />
                    <span className="text-sm">{c.name}</span>
                  </div>
                  <span className="text-xs font-mono text-white/60 inline-flex items-center gap-1">
                    <Users className="size-3" /> {c.users}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 content-start">
          {creators.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden ${i % 3 === 0 ? "row-span-2" : ""}`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[3/5]" : "aspect-[4/5]"} bg-black/40`}>
                <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                {c.live && (
                  <div className="absolute top-3 left-3 rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] inline-flex items-center gap-1.5">
                    <Radio className="size-3" /> Live
                  </div>
                )}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="font-display font-bold text-xl">{c.name}</div>
                  <div className="text-xs text-white/60 font-mono">{c.followers} followers</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}