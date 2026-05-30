import type { Metadata } from "next";
import { TradeEnquiryForm } from "@/components/trade-enquiry-form";

export const metadata: Metadata = {
  title: "Stockists & Trade",
  description:
    "Become a WATCH-MINDER stockist. High margin, giftable, repeat purchase. Open a trade enquiry, no checkout.",
};

const reasons = [
  {
    title: "High margin",
    body: "A small, premium object with healthy wholesale economics and a clear RRP of AUD $69.",
  },
  {
    title: "Naturally giftable",
    body: "An easy add-on at the counter for the watch buyer who has the watch already.",
  },
  {
    title: "Repeat purchase",
    body: "Owners return for new colourways and replacements as the band earns its keep.",
  },
];

export default function StockistsPage() {
  return (
    <>
      {/* HERO — dark */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
          <p className="eyebrow text-paper/70">Stockists &amp; Trade</p>
          <h1 className="display mt-5 max-w-3xl text-6xl text-paper md:text-7xl">
            Become a stockist.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
            We work with watch retailers, boutiques and brand partners who share a
            view on quality. Tell us about your store and we will open a trade
            conversation. This is an enquiry, not a checkout.
          </p>
        </div>
      </section>

      {/* REASONS — light */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1400px] gap-px overflow-hidden border-y border-ink/10 bg-ink/10 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="bg-paper p-8 md:p-10">
              <h2 className="display text-2xl text-ink">{r.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/65">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM — light */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:px-10 md:py-32">
          <div className="md:sticky md:top-28 md:self-start">
            <h2 className="display text-4xl text-ink md:text-5xl">Trade enquiry.</h2>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-ink/60">
              A few details to start. We reply within two business days.
            </p>
            <p className="mt-8 text-sm text-ink/60">
              Prefer email?{" "}
              <a
                href="mailto:trade@watch-minder.com"
                className="text-ink underline-offset-4 hover:underline"
              >
                trade@watch-minder.com
              </a>
            </p>
          </div>
          <TradeEnquiryForm />
        </div>
      </section>
    </>
  );
}
