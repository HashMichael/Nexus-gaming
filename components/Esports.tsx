"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Trophy, Calendar, Crown } from "lucide-react";

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const upcoming = [
  { name: "NEXUS World Championship", game: "Ironclad: Frontline", prize: "$5,000,000", inDays: 3 },
  { name: "Eclipse Pro League · Finals", game: "Eclipse: Reborn", prize: "$1,200,000", inDays: 8 },
  { name: "Neon Showdown", game: "Neon Protocol", prize: "$650,000", inDays: 14 },
];

const leaderboard = [
  { rank: 1, team: "VOID Esports", pts: 9840, change: "+12" },
  { rank: 2, team: "Phantom Nine", pts: 9612, change: "+5" },
  { rank: 3, team: "Hex Royale", pts: 9489, change: "-2" },
  { rank: 4, team: "Aurora GG", pts: 9320, change: "+8" },
  { rank: 5, team: "Singularity", pts: 9114, change: "+3" },
];

function TournamentRow({ t }: { t: (typeof upcoming)[number] }) {
  const target = Date.now() + t.inDays * 86400000;
  const c = useCountdown(target);
  return (
    <div className="glass rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.06] transition group">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-cyan)] mb-1">{t.game}</div>
        <div className="font-display text-xl font-bold">{t.name}</div>
        <div className="text-sm text-white/60 mt-1 inline-flex items-center gap-2">
          <Trophy className="size-4 text-[var(--color-magenta)]" /> Prize pool {t.prize}
        </div>
      </div>
      <div className="flex items-center gap-2 font-mono">
        {([["D", c.d], ["H", c.h], ["M", c.m], ["S", c.s]] as const).map(([l, v]) => (
          <div key={l} className="text-center min-w-12 rounded-lg bg-black/40 border border-white/10 px-2 py-1.5">
            <div className="text-lg font-bold tabular-nums">{String(v).padStart(2, "0")}</div>
            <div className="text-[9px] uppercase text-white/40">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Esports() {
  return (
    <section id="esports" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="absolute inset-0 -z-10">
        <img src="/images/esports.jpg" alt="Esports arena" loading="lazy" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
      </div>
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-magenta)] mb-3">/ 02 — Arena</div>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight max-w-3xl">
            Where legends are <span className="text-gradient italic">forged.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-white/60">
              <Calendar className="size-4" /> Upcoming tournaments
            </div>
            {upcoming.map((t) => <TournamentRow key={t.name} t={t} />)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6 h-full neon-border">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-white/70">
                  <Crown className="size-4 text-[var(--color-cyan)]" /> Leaderboard
                </div>
                <span className="text-[10px] font-mono uppercase text-white/40">Spring · Wk 12</span>
              </div>
              <ul className="space-y-2">
                {leaderboard.map((r) => (
                  <li key={r.team} className="flex items-center justify-between rounded-xl px-3 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] transition">
                    <div className="flex items-center gap-3">
                      <span className={`font-display text-lg font-bold w-7 text-center ${r.rank === 1 ? "text-[var(--color-cyan)]" : r.rank === 2 ? "text-[var(--color-magenta)]" : r.rank === 3 ? "text-[var(--color-violet)]" : "text-white/40"}`}>
                        {String(r.rank).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{r.team}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className="tabular-nums">{r.pts.toLocaleString()}</span>
                      <span className={`text-xs ${r.change.startsWith("+") ? "text-[var(--color-emerald)]" : "text-red-400"}`}>{r.change}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-5 block text-center text-sm font-mono uppercase tracking-[0.2em] text-[var(--color-cyan)] hover:text-white transition">
                View full standings →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}