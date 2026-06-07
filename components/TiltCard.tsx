"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}