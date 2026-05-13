import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto h-16 px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-tighter text-lg">
          ALEX<span className="text-primary">.</span>DEV
        </a>
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}