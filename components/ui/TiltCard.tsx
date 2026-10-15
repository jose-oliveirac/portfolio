"use client";

import { cn } from "@/lib/utils";

/** How far the card can lean, in degrees, at the very edge. */
const maxTilt = 6;

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A card (<article>) that leans in 3D toward the mouse. The angles live in two CSS
 * variables (--rx, --ry) that the transform below reads. Touch screens and
 * "reduce motion" users get a flat card.
 */
export function TiltCard({ children, className }: TiltCardProps) {
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse"){
      return 
    }
   
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    
    // Center (0.5) = 0°, edges = ±maxTilt. The corner under the mouse sinks, as if pressed.
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;

card.style.setProperty("--rx", `${rotateX}deg`);
card.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    // The mouse left: lay the card flat again (the CSS transition eases it back)
    const card = event.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group transition-[transform,border-color] duration-200 ease-out will-change-transform",
        "[transform:perspective(1000px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        "motion-reduce:[transform:none]",
        className,
      )}
    >
      {children}
    </article>
  );
}
