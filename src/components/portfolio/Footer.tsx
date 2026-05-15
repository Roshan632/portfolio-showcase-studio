export function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} Roshan · Built with React + Tailwind 
        </p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Designed & shipped with caffeine
        </p>
      </div>
    </footer>
  );
}