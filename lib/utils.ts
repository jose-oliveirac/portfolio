/** Joins class names, skipping falsy values: cn("a", isOpen && "b") */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
