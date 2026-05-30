"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

export type DeckCard = {
  title: string;
  label: string;
  tone: string;
  price: string;
  image: string;
  alt: string;
  href: string;
};

type CardDeckProps = {
  cards: DeckCard[];
};

// Adapted from madewithgsap effect 001: a draggable, 3D-tilted card deck.
// Brand-adapted to monochrome photo cards with a single orange accent.
// Isolated GSAP leaf (Draggable + InertiaPlugin) — GSAP owns the transforms,
// CSS only handles the box-shadow glow. Touch = native scroll; reduced motion
// drops the tilt and drag entirely.
export function CardDeck({ cards }: CardDeckProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reduce) {
      wrap.style.overflowX = "auto";
      return;
    }

    gsap.registerPlugin(Draggable, InertiaPlugin);

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>("[data-card]");
      // Symmetric fan: center cards near-upright, sides tilt outward in mirror.
      const n = cardEls.length;
      const STEP = 8; // degrees between cards
      const restFor = (i: number) => (i - (n - 1) / 2) * STEP;
      cardEls.forEach((el, i) =>
        gsap.set(el, { rotateY: restFor(i), transformOrigin: "50% 50%" }),
      );

      const getBounds = () => ({
        minX: Math.min(0, wrap.clientWidth - track.scrollWidth),
        maxX: 0,
      });

      const [drag] = Draggable.create(track, {
        type: "x",
        inertia: true,
        bounds: getBounds(),
        edgeResistance: 0.85,
        cursor: "grab",
        activeCursor: "grabbing",
        dragClickables: true,
        onDrag() {
          gsap.to(cardEls, {
            skewX: gsap.utils.clamp(-12, 12, this.deltaX * 0.6),
            duration: 0.3,
            ease: "power2.out",
          });
        },
        onDragEnd() {
          gsap.to(cardEls, { skewX: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" });
        },
      });

      // Hover straightens the card (GSAP-driven so it composes with skew/drag).
      const cleanups = cardEls.map((card, i) => {
        const rest = restFor(i);
        const enter = () =>
          gsap.to(card, { rotateY: 0, duration: 0.5, ease: "power3.out" });
        const leave = () =>
          gsap.to(card, { rotateY: rest, duration: 0.6, ease: "power3.out" });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });

      const onResize = () => drag.applyBounds(getBounds());
      window.addEventListener("resize", onResize);

      return () => {
        cleanups.forEach((fn) => fn());
        window.removeEventListener("resize", onResize);
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden [perspective:1600px] [scrollbar-width:none]"
    >
      <div
        ref={trackRef}
        className="flex w-max gap-6 px-1 py-10 [transform-style:preserve-3d]"
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            data-card
            className="group relative block aspect-[3/4] w-[clamp(255px,26vw,340px)] shrink-0 overflow-hidden rounded-2xl border border-accent/55 bg-ink shadow-[0_30px_70px_-28px_rgba(16,15,13,0.6)] transition-shadow duration-500 ease-out will-change-transform hover:shadow-[0_0_55px_-10px_rgba(217,96,59,0.5)]"
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 640px) 80vw, 340px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/45" />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div className="flex items-start justify-between">
                <span className="eyebrow text-[0.62rem] text-paper/80">{card.label}</span>
                <span className="eyebrow text-[0.62rem] text-paper/70">{card.tone}</span>
              </div>
              <div>
                <span className="eyebrow text-[0.62rem] text-accent">
                  From {card.price}
                </span>
                <h3 className="display mt-1 text-4xl leading-[0.9] text-paper">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
