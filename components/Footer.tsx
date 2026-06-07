"use client";
import { Twitter, Youtube, Twitch, Instagram, Github, ArrowRight } from "lucide-react";

const cols: Record<string, string[]> = {
  Games: ["Library", "Coming Soon", "Free to Play", "Marketplace", "NEXUS+ Cloud"],
  Esports: ["Tournaments", "Leaderboard", "Teams", "Schedule", "Watch Live"],
  Community: ["Forum", "Discord", "Creators", "Events", "Code of Conduct"],
  Company: ["About", "Careers", "Press", "Brand Kit", "Contact"],
  Support: ["Help Center", "Status", "Refunds", "Bug Bounty", "Developers"],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 px-4 md:px-8 mt-10 border-t border-white/10 bg-gradient-to-b from-transparent to-black/60">
      <div className="mx-auto max-w-[1500px]">
        {/* CTA strip */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute -inset-px rounded-3xl pointer-events-none opacity-60 bg-[conic-gradient(from_120deg,var(--color-cyan),var(--color-magenta),var(--color-violet),var(--color-cyan))] blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display font-black text-3xl md:text-5xl tracking-tight">Ahead of the drop.</h3>
              <p className="mt-3 text-white/70 max-w-md">Weekly intel: alpha keys, balance changes, tournament invites — straight to your inbox.</p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@nexus.gg"
                className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--color-cyan)]/60"
              />
              <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-black bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)] shadow-[0_0_30px_oklch(0.72_0.28_340/0.5)]">
                Subscribe <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-[var(--color-cyan)] via-[var(--color-violet)] to-[var(--color-magenta)]">
                <span className="font-display font-black text-black text-sm">N</span>
              </div>
              <span className="font-display font-black tracking-[0.2em]">NEXUS</span>
            </div>
            <p className="mt-3 text-sm text-white/55 max-w-xs">The next-generation gaming network. Play, watch, compete, create.</p>
            <div className="mt-5 flex items-center gap-3 text-white/60">
              {[Twitter, Youtube, Twitch, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center size-9 rounded-lg glass hover:text-white hover:border-white/20 transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(cols).map(([h, items]) => (
            <div key={h}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-cyan)] mb-3">{h}</div>
              <ul className="space-y-2 text-sm text-white/70">
                {items.map((i) => (
                  <li key={i}><a href="#" className="hover:text-white transition">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-white/40">
          <div>© 2026 NEXUS Gaming Inc. · All realms reserved.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {["Privacy", "Terms", "Cookies", "EULA", "Accessibility"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition">{l}</a>
            ))}
          </div>
          <div className="inline-flex items-center gap-2"><span className="live-dot" /> All systems nominal</div>
        </div>
      </div>
    </footer>
  );
}