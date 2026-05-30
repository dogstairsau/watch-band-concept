import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Cta } from "@/components/cta";
import { ParallaxImage } from "@/components/parallax-image";
import { WordReveal } from "@/components/word-reveal";
import { CTA, colourways, merinoProperties, useCases, RRP } from "@/lib/content";
import { IMG, bandImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Product",
  description:
    "One band, three colourways, in 100% superfine merino wool. The merino science and the use cases behind WATCH-MINDER.",
};

const specs = [
  { label: "Material", value: "100% superfine merino" },
  { label: "Origin", value: "Made in Melbourne" },
  { label: "Colourways", value: "Saddle, Onyx, Mist" },
  { label: "RRP", value: `AUD ${RRP}` },
];

export default function ProductPage() {
  return (
    <>
      {/* INTRO — light, text + parallax product image */}
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 pt-24 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 md:pb-28">
          <div>
            <Reveal>
              <p className="eyebrow text-ink/70">The Product</p>
            </Reveal>
            <h1 className="display mt-5 text-6xl leading-[1.02] text-ink md:text-7xl">
              <WordReveal text="One band. Quietly engineered." />
            </h1>
            <Reveal delay={260}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/65">
                A single, considered object: a superfine merino sleeve that sits
                between a luxury watch and the friction of a real day. Soft against
                the wrist, durable against the world.
              </p>
              <div className="mt-9 flex items-center gap-5">
                <Cta href={CTA.trade.href} tone="onLight" variant="solid">
                  {CTA.trade.label}
                </Cta>
                <span className="text-sm text-ink/60">RRP AUD {RRP}</span>
              </div>
            </Reveal>
          </div>
          <ParallaxImage
            src={IMG.productHero}
            alt="The WATCH-MINDER band shown close, fitted to a watch case"
            className="relative aspect-square rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* COLOURWAYS — dark 3-up gallery */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <h2 className="display max-w-2xl text-5xl text-paper md:text-6xl">
            <WordReveal text="Three colourways." />
          </h2>
          <Reveal delay={150}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/60">
              Chosen to live alongside a watch, not to compete with it.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {colourways.map((c, i) => (
              <Reveal as="article" key={c.name} delay={i * 110}>
                <div className="group transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper">
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <Image
                        src={bandImage(c.name, c.seed)}
                        alt={`WATCH-MINDER band in ${c.name}, ${c.tone.toLowerCase()}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="display text-3xl text-paper">{c.name}</h3>
                    <span className="text-sm text-paper/60">
                      {c.tone} · {RRP}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-paper/60">
                    {c.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MERINO SCIENCE — light, 2x2 hairline grid */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-ink/70">The merino science</p>
              <h2 className="display mt-5 text-5xl text-ink md:text-6xl">
                What the fibre does.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/60">
                Merino is not a finish here, it is the whole proposition. Four
                properties do the work.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid border-t border-l border-ink/10 sm:grid-cols-2">
            {merinoProperties.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 90}>
                <div className="h-full border-r border-b border-ink/10 p-8 md:p-10">
                  <span className="display text-xl text-accent">0{i + 1}</span>
                  <h3 className="display mt-4 text-3xl text-ink">{prop.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/60">
                    {prop.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES — dark, horizontal scroll-snap strip */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display max-w-2xl text-5xl text-paper md:text-6xl">
              <WordReveal text="Where it earns its place." />
            </h2>
            <Reveal delay={150}>
              <p className="max-w-xs text-sm leading-relaxed text-paper/60">
                Seven contexts, one object. Drag to move through them.
              </p>
            </Reveal>
          </div>

          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10 [scrollbar-width:thin]">
            {useCases.map((u) => (
              <article
                key={u.title}
                className="group w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[30vw]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper/[0.04]">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <Image
                      src={`https://picsum.photos/seed/${u.seed}/800/1000?grayscale`}
                      alt={`WATCH-MINDER in use: ${u.title.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 44vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="display mt-5 text-2xl text-paper">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">{u.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS — light, four display tiles */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="h-full bg-paper p-8">
                  <p className="eyebrow text-ink/60">{s.label}</p>
                  <p className="display mt-4 text-2xl text-ink">{s.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE — dark, primary conversion */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="display text-5xl text-paper md:text-7xl">
                Stock the band.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
                If your customers care about their watches, they are already the
                audience for this. Open a trade conversation and we will take it
                from there.
              </p>
              <div className="mt-9">
                <Cta href={CTA.trade.href} tone="onDark" variant="solid">
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
