// Single source of truth for shared brand content.
// Monochrome system: imagery carries the only colour. One CTA label per intent:
// trade enquiry is always "Become a stockist"; product exploration is always
// "Explore the product". This is a brochure, not a store (no cart, no checkout).

export const RRP = "$69";

export const CTA = {
  trade: { label: "Become a stockist", href: "/stockists" },
  product: { label: "Explore the product", href: "/product" },
} as const;

export type Colourway = {
  name: string;
  tone: string;
  note: string;
  seed: string; // picsum seed for placeholder product imagery
};

// Order mirrors the reference grid: Saddle, Onyx, Mist.
export const colourways: Colourway[] = [
  {
    name: "Saddle",
    tone: "Dark brown",
    note: "A softer, organic tone, inspired by natural fibres, leather straps, and vintage tools.",
    seed: "watchminder-saddle-band",
  },
  {
    name: "Onyx",
    tone: "Black",
    note: "Designed to disappear into any kit. It pairs seamlessly with every watch.",
    seed: "watchminder-onyx-band",
  },
  {
    name: "Mist",
    tone: "Lavender",
    note: "Contemporary, calm, and quietly distinctive. A subtle contrast to uniformity.",
    seed: "watchminder-mist-band",
  },
];

// Bundle SKU — all three colourways as a set. Price is a placeholder to confirm.
export const bundle = {
  name: "The Set",
  tone: "All three colourways",
  note: "Onyx, Saddle and Mist together. One of each, ready to rotate.",
  seed: "watchminder-set-trio",
  price: "$189",
};

export type MerinoProperty = {
  title: string;
  body: string;
};

export const merinoProperties: MerinoProperty[] = [
  {
    title: "Thermoregulation",
    body: "Superfine merino moves with the climate, warm in cold air and breathable in heat, so the band never becomes the thing you notice.",
  },
  {
    title: "Moisture management",
    body: "The fibre absorbs vapour before it beads, wicking sweat away from the caseback through a wet commute or a long ride.",
  },
  {
    title: "Odour resistance",
    body: "Merino resists the bacteria that cause odour, staying fresh across days of wear between washes.",
  },
  {
    title: "Friction buffering",
    body: "A soft, dense pile sits between the watch and the world, absorbing the knocks, grazes and desk-edges that mark a case.",
  },
];

export type UseCase = {
  title: string;
  body: string;
  seed: string;
};

export const useCases: UseCase[] = [
  {
    title: "Cycling",
    body: "Protects the case through bar-end knocks and sweat on long climbs.",
    seed: "watchminder-cycling-terrain",
  },
  {
    title: "Travel",
    body: "Slips over the watch in a bag so it lands as it left.",
    seed: "watchminder-travel-road",
  },
  {
    title: "Commuting",
    body: "Buffers the daily contact with desks, doors and train rails.",
    seed: "watchminder-commute-city",
  },
  {
    title: "Gym",
    body: "Keeps the caseback off the bar and the bench.",
    seed: "watchminder-gym-iron",
  },
  {
    title: "Worksite",
    body: "A sacrificial layer between a fine watch and a rough day.",
    seed: "watchminder-worksite-grit",
  },
  {
    title: "Desk",
    body: "Stops the quiet abrasion that dulls a case over years.",
    seed: "watchminder-desk-still",
  },
  {
    title: "Exploration",
    body: "Goes where the watch goes, from ridgeline to riverbed.",
    seed: "watchminder-exploration-ridge",
  },
];

export const navLinks = [
  { label: "The Product", href: "/product" },
  { label: "Stockists", href: "/stockists" },
  { label: "Our Story", href: "/story" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;
