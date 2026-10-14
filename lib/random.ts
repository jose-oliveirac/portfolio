/**
 * Seeded pseudo-random generator (mulberry32). A fixed seed means the "random"
 * stars are identical on every render, so the sky never changes between visits.
 */
export function createRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Rounds to 2 decimals, so server and client render the exact same numbers. */
export const round = (value: number) => Math.round(value * 100) / 100;
