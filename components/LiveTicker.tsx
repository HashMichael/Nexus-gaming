const items = [
  "★ Eclipse: Reborn — Season 7 LIVE",
  "⚡ NEXUS World Championship · Prize $5M",
  "🔥 New Drop: Phantom Mech Skinpack",
  "🎮 Cross-play update rolling out",
  "🏆 Team VOID secures Spring Split",
  "✨ AI Coach now in Open Beta",
];

export default function LiveTicker() {
  return (
    <div className="relative border-y border-white/10 bg-black/40 backdrop-blur py-3 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />
      <div className="flex whitespace-nowrap animate-ticker font-mono text-sm">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-3 text-white/80">
            {t}
            <span className="text-[var(--color-magenta)]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}