import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { CTA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach WATCH-MINDER in Melbourne, Australia.",
};

const details = [
  { label: "Trade & wholesale", value: "trade@watch-minder.com", href: "mailto:trade@watch-minder.com" },
  { label: "General", value: "hello@watch-minder.com", href: "mailto:hello@watch-minder.com" },
  { label: "Studio", value: "Melbourne, Australia" },
  { label: "Hours", value: "Mon to Fri, 9 to 5 AEST" },
];

export default function ContactPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-24 pb-32 md:px-10 md:pt-32 md:pb-40">
        <p className="eyebrow text-paper/70">Contact</p>
        <h1 className="display mt-5 max-w-3xl text-6xl text-paper md:text-7xl">
          Get in touch.
        </h1>

        <div className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label} className="bg-ink p-8">
              <p className="eyebrow text-paper/50">{d.label}</p>
              {d.href ? (
                <a
                  href={d.href}
                  className="mt-4 block text-lg text-paper transition-colors hover:opacity-70"
                >
                  {d.value}
                </a>
              ) : (
                <p className="mt-4 text-lg text-paper">{d.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Cta href={CTA.trade.href} tone="onDark" variant="solid">
            {CTA.trade.label}
          </Cta>
        </div>
      </div>
    </section>
  );
}
