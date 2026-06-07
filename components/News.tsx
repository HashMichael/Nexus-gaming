"use client";
import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";

const news = [
  { title: "Eclipse Reborn Chapter VII: Everything you need to know", time: "2h ago", category: "Update", img: "/images/news2.jpg", span: "row-span-2", summary: "AI-summarised: New raid, 18 weapons, ray-traced sky overhaul." },
  { title: "NVIDIA's next-gen GPU leaks point to 2x ray-tracing throughput", time: "5h ago", category: "Hardware", img: "/images/news3.jpg", span: "", summary: "Insider reports suggest a 384-bit memory bus and 32GB VRAM." },
  { title: "Meta unveils $399 standalone VR with foveated 8K", time: "8h ago", category: "VR", img: "/images/news1.jpg", span: "", summary: "Eye-tracking, pancake optics, and a new haptic glove option." },
  { title: "Team VOID wins Spring Split in historic 3–0 sweep", time: "1d ago", category: "Esports", img: "/images/news4.jpg", span: "", summary: "MVP Kestrel delivers a 41-frag final game to clinch the cup." },
];

export default function News() {
  return (
    <section id="news" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-violet)] mb-3">/ 03 — Pulse</div>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight">
              News & <span className="text-gradient">Drops</span>
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.2em]">
            <Sparkles className="size-3.5 text-[var(--color-cyan)]" /> Summaries by NEXUS AI
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-5">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative rounded-2xl overflow-hidden glass ${n.span}`}
            >
              <div className={`relative ${n.span ? "h-full min-h-[480px]" : "aspect-[16/10]"}`}>
                <img src={n.img} alt={n.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-black/60 border border-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em]">{n.category}</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display font-bold text-lg md:text-2xl leading-tight">{n.title}</h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">
                    <Sparkles className="inline size-3 text-[var(--color-cyan)] mr-1" />
                    {n.summary}
                  </p>
                  <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 inline-flex items-center gap-1.5">
                    <Clock className="size-3" /> {n.time}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}