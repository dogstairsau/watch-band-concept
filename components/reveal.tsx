"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  y?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  y = 28,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
