"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type LetterSwapProps = {
  word: string;
  images: string[]; // one per letter (cycled)
  alts?: string[];
};

// GSAP "letter image swap" (madewithgsap effect 093): hover a letter, neighbours
// spread apart and the letter becomes an image; on leave they settle with a soft
// wobble. Isolated GSAP leaf — no Framer Motion in this tree.
export function LetterSwap({ word, images, alts = [] }: LetterSwapProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const letters = word.split("");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const canHover =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;

    const easeOut = "cubic-bezier(0.23, 1, 0.32, 1)";

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-letter]");
      const chars = gsap.utils.toArray<HTMLElement>("[data-char]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");

      gsap.set(cards, {
        xPercent: -50,
        yPercent: -50,
        scale: 0.9,
        autoAlpha: 0,
        clipPath: "inset(50% 0% 50% 0%)",
      });

      // Single source of truth for which letter is open. Every transition
      // re-lays-out ALL letters to absolute targets (overwrite: auto), so the
      // spacing can never accumulate or settle unevenly after a hover.
      let active = -1;

      const layout = () => {
        const shift =
          active >= 0 ? (cards[active].offsetWidth || 130) * 0.62 : 0;
        items.forEach((el, j) => {
          const tx = active < 0 || j === active ? 0 : j < active ? -shift : shift;
          gsap.to(el, { x: tx, duration: 0.55, ease: easeOut, overwrite: "auto" });
        });
      };

      const cleanups = items.map((item, i) => {
        const enter = () => {
          active = i;
          gsap.to(chars[i], {
            autoAlpha: 0,
            duration: 0.28,
            ease: easeOut,
            overwrite: "auto",
          });
          gsap.to(cards[i], {
            autoAlpha: 1,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.55,
            ease: easeOut,
            overwrite: "auto",
          });
          layout();
        };

        const leave = () => {
          if (active === i) active = -1;
          gsap.to(chars[i], {
            autoAlpha: 1,
            duration: 0.3,
            ease: easeOut,
            overwrite: "auto",
          });
          gsap.to(cards[i], {
            autoAlpha: 0,
            scale: 0.9,
            clipPath: "inset(50% 0% 50% 0%)",
            duration: 0.4,
            ease: easeOut,
            overwrite: "auto",
          });
          layout();
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
        return () => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
        };
      });

      return () => cleanups.forEach((fn) => fn());
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5"
      aria-label={word}
    >
      {letters.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          data-letter
          className="relative inline-flex items-center justify-center"
          aria-hidden
        >
          <span
            data-char
            className="display text-[clamp(3rem,11vw,8.5rem)] leading-none text-paper"
          >
            {ch}
          </span>
          <span
            data-card
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-[3/4] w-[clamp(84px,10vw,140px)] overflow-hidden rounded-xl opacity-0 will-change-transform"
          >
            <Image
              src={images[i % images.length]}
              alt={alts[i % alts.length] || ""}
              fill
              sizes="200px"
              className="object-cover"
            />
          </span>
        </span>
      ))}
    </div>
  );
}
