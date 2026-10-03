import { cn } from "@/lib/utils";

type ButtonLinkProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary: "border border-line text-foreground hover:border-accent hover:text-accent",
};

/** Our buttons are all links (anchors to sections, the CV download, socials), so it renders an <a>. */
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
