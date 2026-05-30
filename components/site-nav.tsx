"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { CTA, navLinks } from "@/lib/content";

// Pages that open on a full-bleed dark hero: nav overlays transparent until scroll.
const HERO_ROUTES = new Set(["/", "/story"]);

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const overHero = HERO_ROUTES.has(pathname);
  const solid = scrolled || open || !overHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-out ${
        solid
          ? "border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-paper"
      }`}
    >
      {/* Legibility scrim while transparent over the hero */}
      {!solid && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 to-transparent" />
      )}

      <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-current"
          onClick={() => setOpen(false)}
          aria-label="WATCH-MINDER home"
        >
          {/* Brand mark — recreated WM zigzag; swap for the exact logo SVG */}
          <svg
            viewBox="0 0 52 26"
            className="h-[18px] w-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 20 L11 7 L19 20 L26 10 L33 20 L41 7 L49 20" />
          </svg>
          <span className="display text-xl tracking-tight">Watch&#8209;Minder</span>
        </Link>

        {/* Desktop nav — single line */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-current opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={CTA.trade.href}
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-transform duration-200 ease-out hover:-translate-y-px active:scale-[0.98]"
          >
            {CTA.trade.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-current lg:hidden"
        >
          {open ? <X size={26} weight="light" /> : <List size={26} weight="light" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-ink/10 bg-paper text-ink lg:hidden">
          <ul className="mx-auto flex max-w-[1400px] flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink/10 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-[1400px] px-5 pb-6">
            <Link
              href={CTA.trade.href}
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-fg active:scale-[0.99]"
            >
              {CTA.trade.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
