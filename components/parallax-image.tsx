"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string; // sizes/positions the masked container
  sizes?: string;
  priority?: boolean;
  range?: number; // parallax travel in %
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  range = 7,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={reduce ? { scale: 1 } : { y, scale: 1.18 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
