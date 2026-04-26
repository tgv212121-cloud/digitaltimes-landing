"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export type CasClient = {
  title: string;
  link?: string;
  thumbnail: string;
  video: string;
  testimonial?: string;
  testimonialAuthor?: string;
};

export function HeroParallax({ products }: { products: CasClient[] }) {
  // Fill to 15 cards by repeating
  const filled: CasClient[] = [];
  while (filled.length < 15) filled.push(...products);
  const cards = filled.slice(0, 15);

  const firstRow = cards.slice(0, 5);
  const secondRow = cards.slice(5, 10);
  const thirdRow = cards.slice(10, 15);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  const [activeVideo, setActiveVideo] = useState<CasClient | null>(null);

  return (
    <>
      <section
        ref={ref}
        className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-32 antialiased [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
          <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
            {firstRow.map((p, i) => (
              <Card key={`r1-${i}`} product={p} translate={translateX} onClick={() => setActiveVideo(p)} />
            ))}
          </motion.div>
          <motion.div className="mb-20 flex flex-row space-x-20">
            {secondRow.map((p, i) => (
              <Card key={`r2-${i}`} product={p} translate={translateXReverse} onClick={() => setActiveVideo(p)} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
            {thirdRow.map((p, i) => (
              <Card key={`r3-${i}`} product={p} translate={translateX} onClick={() => setActiveVideo(p)} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {activeVideo && <VideoModal product={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
}

function Header() {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-12 md:py-20">
      <p className="accent-font text-[11px] font-semibold uppercase tracking-[0.2em] text-petrol">
        Cas clients
      </p>
      <h2 className="display-font mt-3 text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[0.9] tracking-[-0.05em] text-graphite">
        Ce qu'ils ont maintenant.
      </h2>
      <p className="mt-5 max-w-[55ch] text-[15px] font-medium leading-[1.8] text-graphite/90">
        Aperçu des interfaces livrées. Clique sur une vignette pour voir la démo.
      </p>
    </div>
  );
}

function Card({
  product,
  translate,
  onClick,
}: {
  product: CasClient;
  translate: MotionValue<number>;
  onClick: () => void;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product relative h-72 w-[32rem] shrink-0 cursor-pointer overflow-hidden rounded-md bg-graphite shadow-[0_8px_24px_rgba(26,17,8,0.12)]"
      onClick={onClick}
    >
      <img
        src={product.thumbnail}
        className="absolute inset-0 h-full w-full object-cover object-center"
        alt={product.title}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-graphite opacity-0 transition-opacity group-hover/product:opacity-80" />
      <h3 className="display-font absolute bottom-5 left-5 text-[20px] font-[700] tracking-[-0.02em] text-ivory opacity-0 transition-opacity group-hover/product:opacity-100">
        {product.title} →
      </h3>
    </motion.div>
  );
}

function VideoModal({ product, onClose }: { product: CasClient; onClose: () => void }) {
  // Lock body scroll while open + close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[24px] text-ivory/70 transition-colors hover:text-ivory"
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          {/* Left : testimonial */}
          <div className="flex flex-col justify-center">
            <p className="accent-font mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-saffron">
              {product.title}
            </p>
            {product.testimonial && (
              <blockquote className="display-font text-[clamp(1.2rem,2vw,1.6rem)] font-[400] italic leading-[1.4] tracking-[-0.02em] text-ivory">
                « {product.testimonial} »
              </blockquote>
            )}
            {product.testimonialAuthor && (
              <p className="mt-5 text-[12px] uppercase tracking-[0.2em] text-ivory/55">
                {product.testimonialAuthor}
              </p>
            )}
            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noreferrer"
                className="link-underline mt-6 inline-block self-start text-[13px] text-ivory/70 transition-colors hover:text-ivory"
              >
                {product.title} →
              </a>
            )}
          </div>

          {/* Right : video */}
          <div className="flex items-center">
            <video
              key={product.video}
              src={product.video}
              autoPlay
              controls
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
