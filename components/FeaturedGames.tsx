"use client";
import { motion } from "framer-motion";
import { Play, Star, Flame } from "lucide-react";
import TiltCard from "./TiltCard";

const games = [
  { title: "Eclipse: Reborn", genre: "Sci-Fi · MMO", rating: 4.9, players: "812K", img: "/images/game1.jpg", live: true, tag: "Season 7" },
  { title: "Shadowveil", genre: "Dark Fantasy · RPG", rating: 4.8, players: "412K", img: "/images/game2.jpg", live: false, tag: "New" },
  { title: "Hyperdrive 2088", genre: "Arcade · Racing", rating: 4.7, players: "274K", img: "/images/game3.jpg", live: true, tag: "Trending" },
  { title: "Ironclad: Frontline", genre: "Tactical FPS", rating: 4.9, players: "1.1M", img: "/images/game4.jpg", live: true, tag: "Live Event" },
  { title: "Skybound", genre: "Open World", rating: 4.6, players: "188K", img: "/images/game5.jpg", live: false, tag: "Co-op" },
  { title: "Neon Protocol", genre: "Cyberpunk · ARPG", rating: 4.8, players: "356K", img: "/images/game6.jpg", live: true, tag: "Hot" },
];

export default function FeaturedGames() {
  return (
    <section id="games" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-cyan)] mb-3">/ 01 — Library</div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
              Featured <span className="text-gradient">Games</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            Hand-picked AAA experiences and indie gems — streaming instantly, no downloads, zero compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <TiltCard className="group relative rounded-2xl overflow-hidden neon-border h-full">
                <div className="relative aspect-[4/5] bg-black/40">
                  <img src={g.img} alt={g.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] inline-flex items-center gap-1.5">
                      <Flame className="size-3 text-[var(--color-magenta)]" /> {g.tag}
                    </span>
                    {g.live && (
                      <span className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] bg-red-500/90 text-white inline-flex items-center gap-1.5">
                        <span className="live-dot" /> Live
                      </span>
                    )}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">{g.genre}</div>
                    <h3 className="font-display font-bold text-2xl mt-1">{g.title}</h3>
                    <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                      <span className="inline-flex items-center gap-1">
                        <Star className="size-3.5 fill-[var(--color-cyan)] text-[var(--color-cyan)]" /> {g.rating}
                      </span>
                      <span className="font-mono">{g.players} playing</span>
                    </div>

                    <div className="mt-4 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                      <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-black bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-magenta)]">
                        <Play className="size-4 fill-black" /> Quick Play
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}