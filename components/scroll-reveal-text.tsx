"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

// GSAP scroll-scrubbed text: words brighten from dim to full as the section
// scrolls through the viewport. Isolated GSAP leaf. Reduced motion = static.
export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const ws = gsap.utils.toArray<HTMLElement>("[data-word]");
      if (reduce) {
        gsap.set(ws, { opacity: 1 });
        return;
      }
      gsap.set(ws, { opacity: 0.18 });
      gsap.to(ws, {
        opacity: 1,
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 78%",
          end: "bottom 62%",
          scrub: 0.6,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span data-word className="inline-block">
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
