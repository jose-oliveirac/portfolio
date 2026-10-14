import { createRandom, round } from "@/lib/random";

// Seed 1921: the year Cruzeiro was founded
const random = createRandom(1921);

const stars = Array.from({ length: 160 }, () => ({
  x: round(random() * 100),
  y: round(random() * 100),
  // Cubing the random value makes most stars tiny and only a few bigger
  radius: round(0.5 + random() ** 3 * 1.1),
  opacity: round(0.15 + random() * 0.45),
  twinkles: random() < 0.15,
  delay: round(random() * 5),
}));

/** A fixed, very subtle night sky behind the whole site. Rendered on the server: zero JavaScript. */
export function Starfield() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 size-full text-foreground dark:text-white dark:drop-shadow-[0_0_2px_rgb(255_255_255/0.8)]"
    >
      {stars.map((star, index) => (
        <circle
          key={index}
          cx={`${star.x}%`}
          cy={`${star.y}%`}
          r={star.radius}
          fill="currentColor"
          opacity={star.opacity}
          className={star.twinkles ? "animate-twinkle" : undefined}
          style={star.twinkles ? { animationDelay: `${star.delay}s` } : undefined}
        />
      ))}
    </svg>
  );
}
