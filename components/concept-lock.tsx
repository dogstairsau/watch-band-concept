"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Concept mode: on the home page, every link is inert so the pitch stays
// contained to this single page (nav, CTAs, footer included). Other routes
// are unaffected. Next.js <Link> respects defaultPrevented, so this stops
// both client-side navigation and default anchor behaviour.
export function ConceptLock() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (anchor) e.preventDefault();
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [pathname]);

  return null;
}
