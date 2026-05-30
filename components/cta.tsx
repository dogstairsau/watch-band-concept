import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Tone = "onDark" | "onLight";
type Variant = "solid" | "ghost" | "text";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

const base =
  "group/cta inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-transform duration-200 ease-out active:scale-[0.98]";

const styles: Record<Variant, Record<Tone, string>> = {
  solid: {
    onDark:
      "bg-accent px-7 py-3.5 text-accent-fg hover:-translate-y-px active:translate-y-0",
    onLight:
      "bg-accent px-7 py-3.5 text-accent-fg hover:-translate-y-px active:translate-y-0",
  },
  ghost: {
    onDark: "border border-paper/40 px-7 py-3.5 text-paper hover:border-paper",
    onLight: "border border-ink/30 px-7 py-3.5 text-ink hover:border-ink",
  },
  text: {
    onDark: "text-paper hover:text-accent",
    onLight: "text-ink hover:text-accent",
  },
};

export function Cta({
  href,
  children,
  tone = "onDark",
  variant = "solid",
  arrow = true,
  className = "",
}: CtaProps) {
  return (
    <Link href={href} className={`${base} ${styles[variant][tone]} ${className}`}>
      {children}
      {arrow && (
        <ArrowRight
          size={variant === "text" ? 16 : 18}
          weight="bold"
          className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
        />
      )}
    </Link>
  );
}
