import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { ParallaxImage } from "@/components/parallax-image";
import { WordReveal } from "@/components/word-reveal";
import { CTA } from "@/lib/content";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "WATCH-MINDER was created so people can wear the watches they value without hesitation. Founded by Dr Carl Le OAM and made in Melbourne.",
};

export default function StoryPage() {
  return (
    <>
      {/* HERO — dark, parallax B&W */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-ink">
        <ParallaxImage
          src={IMG.climber}
          alt="A climber on an overhang above an open valley"
          className="absolute inset-0"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="eyebrow text-paper/70">Our Story</p>
          </Reveal>
          <h1 className="display mt-5 max-w-3xl text-6xl leading-[1.02] text-paper md:text-7xl">
            <WordReveal text="Engineered to protect." />
          </h1>
          <Reveal delay={300}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
              Founded by Dr Carl Le OAM. Made in Melbourne, Australia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BRAND STORY — light, editorial two-column */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-4xl text-ink md:text-5xl">Brand story</h2>
            <p className="mt-8 max-w-2xl text-2xl leading-snug text-ink md:text-3xl">
              WATCH-MINDER was created for a simple reason: people should be able to
              wear the watches they value, without hesitation.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-x-16 gap-y-6 text-base leading-relaxed text-ink/65 md:grid-cols-2">
              <p>
                A luxury watch is not just a functional object. It represents taste,
                craftsmanship, personal milestones, and often significant financial
                value. Yet most owners are forced into an unnecessary compromise:
                protect the watch by leaving it at home, or wear it daily and accept
                gradual damage as inevitable. WATCH-MINDER exists to remove that
                compromise.
              </p>
              <p>
                Crafted from 100% superfine merino wool, grown in Australia and made
                in Melbourne, it is designed as essential equipment: lightweight,
                durable, and naturally engineered to perform in real conditions. It
                handles heat, sweat, travel and terrain, not as a gimmick, but as a
                practical tool. The brand is grounded in understated confidence,
                defined by restraint, purpose, and the belief that the best products
                feel inevitable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO IT SERVES — dark, parallax image + text */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
          <ParallaxImage
            src={IMG.watches}
            alt="Luxury watches displayed on stands"
            className="relative min-h-[50vh] rounded-2xl md:min-h-[560px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="flex flex-col justify-center px-5 py-20 md:px-12 md:py-28">
            <h2 className="display text-4xl text-paper md:text-5xl">
              <WordReveal text="Who it serves." />
            </h2>
            <Reveal delay={200}>
              <p className="mt-7 text-base leading-relaxed text-paper/70">
                WATCH-MINDER is for people who wear valuable watches as part of
                everyday life, not only collectors, but those who move through
                demanding environments and refuse to compromise on what they value.
              </p>
              <p className="mt-5 text-base leading-relaxed text-paper/70">
                It is for those who operate across multiple worlds in a single day:
                the office, training, the outdoors, commutes, flights and social
                life, all on the same wrist. At its core it supports one kind of
                customer: someone who values craftsmanship, but lives in motion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION — light */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <h2 className="display text-4xl text-ink md:text-5xl">Vision</h2>
            <p className="mt-8 max-w-3xl text-2xl leading-snug text-ink md:text-3xl">
              To become the global standard in protective accessories for luxury
              watches.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-x-16 gap-y-6 text-base leading-relaxed text-ink/65 md:grid-cols-2">
              <p>
                A product worn by those who live in motion: professionals,
                travellers, athletes and collectors, who expect performance and
                refinement to coexist.
              </p>
              <p>
                WATCH-MINDER is built for longevity, designed to scale, and
                positioned to grow into a broader ecosystem of premium protective
                tools that support modern movement, without compromising style.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRADE — dark */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <h2 className="display text-5xl text-paper md:text-6xl">
            <WordReveal text="For those who live in motion." />
          </h2>
          <Reveal delay={200}>
            <div className="mt-8">
              <Cta href={CTA.trade.href} tone="onDark" variant="solid">
                {CTA.trade.label}
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
