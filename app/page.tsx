import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { ParallaxImage } from "@/components/parallax-image";
import { WordReveal } from "@/components/word-reveal";
import { Marquee } from "@/components/marquee";
import { LetterSwap } from "@/components/letter-swap";
import { CardDeck, type DeckCard } from "@/components/card-deck";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { CTA, colourways, merinoProperties, RRP, bundle } from "@/lib/content";
import { IMG, bandImage } from "@/lib/images";

const deckCards: DeckCard[] = [
  ...colourways.map((c) => ({
    title: c.name,
    label: "Collection",
    tone: c.tone,
    price: RRP,
    image: bandImage(c.name, c.seed),
    alt: `WATCH-MINDER band in ${c.name}, ${c.tone.toLowerCase()}`,
    href: CTA.product.href,
  })),
  {
    title: bundle.name,
    label: "Collection",
    tone: "Set of 3",
    price: bundle.price,
    image: bandImage(bundle.name, bundle.seed),
    alt: "WATCH-MINDER, all three colourways as a set",
    href: CTA.product.href,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — climber header, "For those who live" + interactive MOTION */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-ink">
        {/* Mobile: subtle climbing video (no GSAP interaction on touch) */}
        <video
          className="absolute inset-0 h-full w-full object-cover object-left md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={IMG.climber}
          aria-hidden
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
        {/* Desktop: parallax still + interactive MOTION letters */}
        <ParallaxImage
          src={IMG.climber}
          alt="A climber on an overhang high above an open valley"
          className="absolute inset-0 hidden md:block"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/40" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pt-24 pb-16 text-center md:px-10">
          <h1 className="sr-only">For those who live in motion</h1>
          <div className="flex flex-col items-center" aria-hidden>
            <span className="display block text-[clamp(1.35rem,4.2vw,2.75rem)] tracking-[0.06em] text-paper/85">
              <WordReveal text="For those who live in" />
            </span>
            <div className="mt-2 md:mt-3">
              <LetterSwap
                word="MOTION"
                images={[
                  IMG.runner,
                  IMG.cyclists,
                  IMG.watches,
                  IMG.heroWrist,
                  IMG.productHero,
                  IMG.climber,
                ]}
                alts={[
                  "A runner in motion",
                  "Cyclists in motion",
                  "Luxury watches on display",
                  "The watch and band on the wrist",
                  "The band up close",
                  "A climber on the overhang",
                ]}
              />
            </div>
          </div>
          <Reveal delay={600}>
            <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-paper/70">
              Naturally engineered to protect your watch, open or closed.
            </p>
          </Reveal>
          <Reveal delay={720}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Cta href={CTA.trade.href} tone="onDark" variant="solid">
                {CTA.trade.label}
              </Cta>
              <Cta href={CTA.product.href} tone="onDark" variant="ghost" arrow={false}>
                {CTA.product.label}
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEM — dark, GSAP scroll-scrubbed text reveal */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 py-28 md:px-10 md:py-40">
          <ScrollRevealText
            text="A luxury watch is built to last generations. But it is worn in a world that was not designed for it. Desk edges, gym bars, bike bars, the next flight. So the choice becomes wear it less, or accept the damage. WATCH-MINDER removes the choice."
            className="text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-[1.3] text-paper"
          />
        </div>
      </section>

      {/* PRODUCT — light, draggable tilted card deck (effect 001, adapted) */}
      <section className="overflow-hidden bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
          <Reveal>
            <div className="flex items-center justify-between gap-4 border-y border-ink/15 py-3 text-ink/70">
              <span className="eyebrow text-[0.62rem]">001 / The Collection</span>
              <span className="eyebrow hidden text-[0.62rem] md:block">
                Superfine merino, made in Melbourne
              </span>
              <span className="eyebrow text-[0.62rem]">4 Pieces</span>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
          <CardDeck cards={deckCards} />
          <p className="mt-2 text-sm text-ink/50">Drag to explore the collection.</p>
        </div>
      </section>

      {/* HOW IT WORKS — light, three steps */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28">
          <Reveal>
            <h2 className="display text-4xl text-ink md:text-5xl">How it works.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
              No tools, no fuss. It changes nothing about how you wear the watch.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              {
                t: "Slip it on",
                b: "The band slides over your watch in seconds, ready the moment you are.",
              },
              {
                t: "Open or closed",
                b: "Wear it open across the strap, or wrap it fully closed for complete cover.",
              },
              {
                t: "Live in motion",
                b: "Ride, travel, train, work. The case stays protected through all of it.",
              },
            ].map((step, i) => (
              <Reveal key={step.t} delay={i * 90}>
                <div className="border-t border-ink/15 pt-6">
                  <span className="display text-xl text-accent">0{i + 1}</span>
                  <h3 className="display mt-3 text-2xl text-ink">{step.t}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/60">
                    {step.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOVEMENT — dark split, headline + parallax lifestyle image */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 md:py-28">
            <h2 className="display text-5xl text-paper md:text-6xl">
              <WordReveal text="Designed for movement. Refined for precision." />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/65">
                A technical superfine merino wool band created to protect valuable
                timepieces during training, travel, and everyday motion.
              </p>
              <div className="mt-8">
                <Cta href={CTA.trade.href} tone="onDark" variant="solid">
                  {CTA.trade.label}
                </Cta>
              </div>
            </Reveal>
          </div>
          <ParallaxImage
            src={IMG.runner}
            alt="A runner at full stride, watch banded at the wrist"
            className="relative min-h-[60vh] rounded-2xl md:min-h-[640px]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* MARQUEE — one kinetic band for flow */}
      <section className="border-y border-paper/10 bg-ink py-8 md:py-10">
        <Marquee text="For those who live in motion" />
      </section>

      {/* MERINO SCIENCE — light, sticky intro + divided list */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-10 md:py-32">
          <div className="md:sticky md:top-28 md:self-start">
            <Reveal>
              <p className="eyebrow text-ink/70">The merino foundation</p>
              <h2 className="display mt-5 text-5xl text-ink md:text-6xl">
                Why wool, not silicone.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/60">
                Superfine merino is the technical material here, chosen for what it
                does against the skin and against the case. Softness with strength.
              </p>
            </Reveal>
          </div>

          <ul className="divide-y divide-ink/10 border-t border-ink/10">
            {merinoProperties.map((prop, i) => (
              <Reveal as="li" key={prop.title} delay={i * 80}>
                <div className="flex gap-6 py-7">
                  <span className="display pt-1 text-xl text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="display text-2xl text-ink">{prop.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-ink/60">
                      {prop.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* MADE IN MELBOURNE + PROOF — dark, provenance & trust */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-2xl px-5 pt-24 text-center md:pt-32">
          <Reveal>
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent/60">
              <SealCheck size={40} weight="light" className="text-accent" />
            </span>
            <h2 className="display mt-8 text-3xl text-paper md:text-4xl">
              Made in Melbourne
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/70">
              WATCH-MINDER is proudly Melbourne-made, from the ground up. Every
              band begins with 100% Australian superfine merino wool, grown on
              Australian soil, then hand cut and sewn right here in Melbourne.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "World's first", v: "Merino watch protector" },
                { k: "100%", v: "Superfine merino wool" },
                { k: "Australian", v: "Grown and sourced" },
                { k: "Melbourne", v: "Hand cut and sewn" },
              ].map((p) => (
                <div key={p.k} className="bg-ink p-8 text-center">
                  <p className="display text-2xl text-paper">{p.k}</p>
                  <p className="mt-2 text-sm text-paper/55">{p.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIFESTYLE — dark, full-bleed parallax */}
      <section className="relative overflow-hidden bg-ink">
        <ParallaxImage
          src={IMG.cyclists}
          alt="Cyclists moving through the city, panned in motion"
          className="relative min-h-[70vh]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10 md:pb-24">
            <h2 className="display max-w-3xl text-4xl text-paper md:text-6xl">
              <WordReveal text="It goes where the watch goes." />
            </h2>
            <Reveal delay={200}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-paper/65">
                Cycling, travel, the commute, the gym, the worksite, the desk, the
                next ridgeline. One band for all of it.
              </p>
              <div className="mt-8">
                <Cta href={CTA.product.href} tone="onDark" variant="text">
                  See how it is used
                </Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER — dark, story + portrait + quote */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-20 md:px-10 md:py-28">
            <Reveal>
              <p className="eyebrow text-paper/60">Founder story</p>
              <h2 className="display mt-5 text-5xl text-paper md:text-6xl">
                Built from experience. Driven by purpose.
              </h2>
              <p className="mt-7 max-w-md text-base leading-relaxed text-paper/70">
                Dr Carl Le OAM has spent his life in high-performance
                environments: on the track, in healthcare, and in the pursuit of
                getting the details right. WATCH-MINDER was born from a simple
                need, real protection for a luxury watch that lives a real life.
              </p>
              <div className="mt-9">
                <Cta href="/story" tone="onDark" variant="solid">
                  Discover our story
                </Cta>
              </div>
            </Reveal>
          </div>
          <ParallaxImage
            src={IMG.founder}
            alt="Dr Carl Le OAM, founder of WATCH-MINDER"
            className="relative min-h-[48vh] rounded-2xl md:min-h-[520px]"
            sizes="(max-width: 768px) 100vw, 50vw"
            objectPosition="50% 28%"
            zoom={1.06}
            range={4}
          />
        </div>

        <div className="mx-auto max-w-[1400px] border-t border-paper/10 px-5 py-16 md:px-10 md:py-20">
          <Reveal>
            <figure className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr]">
              <blockquote className="text-2xl leading-snug text-paper md:text-3xl">
                &ldquo;I have cycled seriously for years, and my watch always
                stayed home on ride days. Too risky. WATCH-MINDER changed that
                completely.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-paper/60">
                <span className="display block text-base text-paper">
                  Dr Carl Le OAM
                </span>
                Motorsport doctor, watch collector, founder.
                <span className="mt-3 block text-paper/45">
                  The world&rsquo;s first merino watch protector.
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* TRADE — light, primary conversion (lead, not checkout) */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="display text-5xl text-ink md:text-7xl">
                Carry it in your store.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
                High margin, naturally giftable, and bought again once it is
                understood. We work with a considered list of watch retailers and
                brand partners. No minimums theatre, just a conversation.
              </p>
              <div className="mt-9">
                <Cta href={CTA.trade.href} tone="onLight" variant="solid">
                  {CTA.trade.label}
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
