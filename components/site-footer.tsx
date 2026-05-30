import Link from "next/link";
import { CTA, navLinks, RRP } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-3xl text-paper">
              For those who live in motion.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              A superfine merino band that shields a watch from the wear of an
              ordinary day. Made in Melbourne, Australia.
            </p>
            <Link
              href={CTA.trade.href}
              className="mt-7 inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-px"
            >
              {CTA.trade.label}
            </Link>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-paper/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-paper/50">Enquiries</p>
            <ul className="mt-5 space-y-3 text-sm text-paper/60">
              <li>
                <a
                  href="mailto:trade@watch-minder.com"
                  className="transition-colors hover:text-paper"
                >
                  trade@watch-minder.com
                </a>
              </li>
              <li>Melbourne, Australia</li>
              <li>RRP AUD {RRP}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 md:flex-row">
          <p>© {new Date().getFullYear()} WATCH-MINDER. All rights reserved.</p>
          <p>Engineered to protect.</p>
        </div>
      </div>
    </footer>
  );
}
