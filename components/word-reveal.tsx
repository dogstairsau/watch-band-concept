"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type WordRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

// Headline words rise into view behind a clip mask, staggered. Framer-style.
// useInView watches the unclipped container ref, so the masks never deadlock
// the detection; each word is driven directly off that single trigger.
export function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`block ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className="inline-block leading-[1.06]"
              initial={{ y: reduce ? 0 : "115%" }}
              animate={inView || reduce ? { y: 0 } : { y: "115%" }}
              transition={{
                duration: 0.75,
                delay: delay / 1000 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
