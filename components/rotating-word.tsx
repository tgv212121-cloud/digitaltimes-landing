"use client";

import { AnimatePresence, motion, useReducedMotion, useInView } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type RotatingWordProps = {
  words: readonly string[];
  className?: string;
};

export const RotatingWord = memo(function RotatingWord({ words, className }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (words.length <= 1 || !isInView) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [words, isInView]);

  if (reduceMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span ref={ref} className={`relative inline-flex min-w-[8.4ch] justify-start ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});
