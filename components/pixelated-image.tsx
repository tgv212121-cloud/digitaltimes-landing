"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

type PixelatedImageProps = {
  src: string;
  alt: string;
  slices?: number;
  className?: string;
  style?: React.CSSProperties;
  objectPosition?: string;
};

export function PixelatedImage({
  src,
  alt,
  slices = 8,
  className,
  style,
  objectPosition = "center",
}: PixelatedImageProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (reduced) {
    return (
      <div className={className} style={style}>
        <img src={src} alt={alt} className="h-full w-full object-cover" style={{ objectPosition }} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={style}
      aria-label={alt}
    >
      {Array.from({ length: slices }).map((_, i) => {
        const widthPercent = 100 / slices;
        const leftPercent = i * widthPercent;

        return (
          <motion.div
            key={i}
            className="absolute top-0 h-full overflow-hidden"
            style={{
              left: `${leftPercent}%`,
              width: `${widthPercent + 0.5}%`, // +0.5% overlap to prevent subpixel gaps
            }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={
              isInView
                ? { clipPath: "inset(0% 0 0 0)" }
                : { clipPath: "inset(100% 0 0 0)" }
            }
            transition={{
              duration: 0.4,
              delay: i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="h-full object-cover"
              style={{
                position: "absolute",
                left: `-${leftPercent / widthPercent * 100}%`,
                width: `${slices * 100}%`,
                maxWidth: "none",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
