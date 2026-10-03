/** Small label for a technology name (React, TypeScript...). */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}
