import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

/** Centers content with a max width and a 16px (mobile) / 24px (desktop) gutter. */
export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6", className)} {...props} />;
}
