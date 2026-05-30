"use client";

import { motion, useReducedMotion } from "motion/react";

type MarqueeProps = {
  text: string;
  repeat?: number;
  className?: string;
  duration?: number;
};

// One kinetic band for flow. Pauses to static under reduced motion.
export function Marquee({
  text,
  repeat = 6,
  className = "",
  duration = 75,
}: MarqueeProps) {
  const reduce = useReducedMotion();
  const items = Array.from({ length: repeat });

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.concat(items).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="display text-[clamp(2.5rem,7vw,5.5rem)] text-paper/15">
              {text}
            </span>
            <span className="mx-8 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
