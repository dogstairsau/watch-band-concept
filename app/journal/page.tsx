import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on materials, watches and a life in motion.",
};

export default function JournalPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-24 pb-32 md:px-10 md:pt-32 md:pb-40">
        <p className="eyebrow text-paper/70">Journal</p>
        <h1 className="display mt-5 max-w-3xl text-6xl text-paper md:text-7xl">
          Notes are on the way.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
          The journal will cover the material, the watches it protects, and the
          people who wear both hard. The first entries are being written now.
        </p>
      </div>
    </section>
  );
}
