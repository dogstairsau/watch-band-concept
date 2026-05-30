// Central image map. Real client photography now lives in /public/images.
// Set USE_LOCAL to false to fall back to grayscale placeholders.

const USE_LOCAL = true;

const px = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const IMG = {
  heroWrist: USE_LOCAL ? "/images/wrist.png" : px("wm-wrist-band", 1400, 1800),
  climber: USE_LOCAL ? "/images/hero-climber.png" : px("wm-climber-vista", 2000, 1300),
  runner: USE_LOCAL ? "/images/runner.png" : px("wm-runner-motion", 1200, 1500),
  cyclists: USE_LOCAL ? "/images/cyclists.png" : px("wm-cyclists-pan", 2000, 1200),
  watches: USE_LOCAL ? "/images/watches.png" : px("wm-watches-display", 1200, 1400),
  productHero: USE_LOCAL ? "/images/wrist.png" : px("wm-product-hero", 1100, 1100),
  // No founder portrait supplied yet — placeholder until /images/founder.jpg exists.
  founder: px("wm-founder-portrait", 1000, 1250),
} as const;

// Per-colourway product shots (watch wrapped in the band, on white).
const BANDS: Record<string, string> = {
  Saddle: "/images/band-saddle.webp",
  Onyx: "/images/band-onyx.webp",
  Mist: "/images/band-mist.webp",
};

// Returns the product shot for a colourway; the bundle falls back to the
// wrist shot. Uses grayscale placeholders when USE_LOCAL is off.
export function bandImage(name: string, seed: string) {
  if (!USE_LOCAL) return px(seed, 900, 1200);
  return BANDS[name] ?? "/images/wrist.png";
}
