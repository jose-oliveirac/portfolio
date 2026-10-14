"use client";

import { useEffect, useRef } from "react";
import { createRandom, round } from "@/lib/random";

const random = createRandom(2003);

/** Far layers move little, near layers move more: that difference creates depth. */
const layers = [
  { depth: 12, count: 40, minRadius: 0.6, opacity: 0.35 },
  { depth: 28, count: 22, minRadius: 1, opacity: 0.6 },
  { depth: 50, count: 10, minRadius: 1.4, opacity: 0.85 },
].map((layer) => ({
  ...layer,
  stars: Array.from({ length: layer.count }, () => ({
    x: round(random() * 100),
    y: round(random() * 100),
    radius: round(layer.minRadius + random() * 0.8),
  })),
}));

/** Each shooting star has its own position, angle and timing, so they never fire together. */
const shootingStars = [
  { top: "12%", left: "58%", delay: "2s", duration: "9s" },
  { top: "30%", left: "82%", delay: "6.5s", duration: "13s" },
  { top: "6%", left: "30%", delay: "11s", duration: "17s" },
];

/**
 * The hero's own sky: a nebula glow, three star layers with mouse + scroll parallax,
 * and occasional shooting stars. Everything stays still for "reduce motion" users.
 */
export function HeroSky() {
  const layerRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Mouse position from -1 to 1 (0 = center of the screen)
    let mouseX = 0;
    let mouseY = 0;
    let frame = 0;

    const render = () => {
      frame = 0;
      const scroll = window.scrollY;
      layers.forEach((layer, index) => {
        const element = layerRefs.current[index];
        if (!element) return;
        const x = mouseX * layer.depth;
        const y = mouseY * layer.depth - scroll * (layer.depth / 100);
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    // Batch updates into one per frame, however many events fire
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      schedule();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Nebula glow behind the name */}
      <div className="animate-nebula absolute -top-24 -left-32 size-[38rem] rounded-full bg-accent/25 blur-[120px] dark:bg-accent/30" />
      <div className="animate-nebula absolute top-1/3 -right-40 size-[28rem] rounded-full bg-[#2a4bd8]/15 blur-[110px] [animation-delay:-6s] dark:bg-[#2a4bd8]/25" />

      {layers.map((layer, index) => (
        <svg
          key={layer.depth}
          ref={(element) => {
            layerRefs.current[index] = element;
          }}
          className="absolute -inset-16 size-[calc(100%+8rem)] text-foreground transition-transform duration-700 ease-out will-change-transform dark:text-white dark:drop-shadow-[0_0_3px_rgb(255_255_255/0.9)]"
        >
          {layer.stars.map((star, starIndex) => (
            <circle
              key={starIndex}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.radius}
              fill="currentColor"
              opacity={layer.opacity}
            />
          ))}
        </svg>
      ))}

      {shootingStars.map((star) => (
        <span
          key={star.left}
          className="animate-shooting-star absolute h-px w-32 rounded-full bg-linear-to-r from-transparent via-accent to-white opacity-0"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
