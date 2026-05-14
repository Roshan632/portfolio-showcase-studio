const items = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js",
  "Framer Motion",
  "PostgreSQL",
  "PHP",
  "MySQL",
  "AWS",
  "Docker",
  "Tailwind",
];

export function SkeletonMarquee() {
  return (
    <section
      aria-hidden
      className="relative py-12 border-y border-border bg-card/30 overflow-hidden"
    >
      <div className="flex gap-6 marquee w-max">
        {[...items, ...items].map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl shimmer border border-border min-w-fit"
          >
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}