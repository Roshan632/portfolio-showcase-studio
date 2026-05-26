// import { motion } from "framer-motion";

// const links = [
//   { href: "#about", label: "About" },
//   { href: "#projects", label: "Work" },
//   { href: "#skills", label: "Stack" },
//   { href: "#experience", label: "Journey" },
//   { href: "#contact", label: "Contact" },
// ];

// export function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl"
//     >
//       <div className="max-w-7xl mx-auto h-16 px-6 lg:px-10 flex items-center justify-between">
//         <a href="#top" className="font-display font-bold tracking-tighter text-lg">
//           ROSHAN<span className="text-primary">.</span>DEV
//         </a>
//         <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
//           {links.map((l) => (
//             <a
//               key={l.href}
//               href={l.href}
//               className="relative hover:text-primary transition-colors"
//             >
//               {l.label}
//             </a>
//           ))}
//         </div>
//         <a
//           href="#contact"
//           className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors"
//         >
//           Hire me
//         </a>
//       </div>
//     </motion.nav>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState<string>("#about");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Floating Navbar Container */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        /* Tailored with a premium, deep black-blue slate palette (bg-slate-950/70 & border-slate-800) */
        className="fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 rounded-full border border-slate-800/60 bg-slate-950/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(2,6,23,0.5)] transition-all duration-300 px-2"
      >
        <div className="h-14 px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={() => setActiveLink("")}
            className="group flex items-center gap-3 text-slate-100 transition-opacity hover:opacity-90"
            aria-label="Roshan Yadav home"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-cyan-300/30 bg-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.35),transparent_34%),linear-gradient(135deg,rgba(168,85,247,0.24),transparent_58%)]" />
              <span className="relative font-display text-sm font-bold tracking-[0.08em] text-white">
                RY
              </span>
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-lg font-bold tracking-wide text-foreground">
                ROSHAN<span className="text-primary">.</span>YADAV
              </span>
              {/* <span className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-primary">
                Roshan.Dev
              </span> */}
            </span>
          </a>

          {/* Desktop Navigation Links with Animated Slate/Blue Layout Pill */}
          <div 
            className="hidden md:flex gap-1 text-xs font-mono uppercase tracking-[0.15em]"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {links.map((l) => {
              const isHovered = hoveredLink === l.href;
              const isActive = activeLink === l.href;
              
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onMouseEnter={() => setHoveredLink(l.href)}
                  onClick={() => setActiveLink(l.href)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : isHovered 
                        ? "text-slate-100" 
                        : "text-slate-400"
                  }`}
                >
                  {/* Dynamic Hover / Active Background Bubble Slider configured for Dark Slate */}
                  {(isHovered || isActive) && (
                    <motion.span
                      layoutId="navHoverPill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={`absolute inset-0 -z-10 rounded-full ${
                        isActive 
                          ? "bg-primary/15" 
                          : "bg-slate-800/50"
                      }`}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Actions Block (Desktop CTA + Mobile Menu Button) */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest shadow-[0_4px_14px_rgba(var(--primary),0.3)] hover:shadow-[0_6px_20px_rgba(var(--primary),0.5)] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
            >
              Hire me
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 rounded-full bg-slate-900/60 border border-slate-800/80 text-slate-200"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 w-4 bg-current rounded-full transform transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`h-0.5 w-4 bg-current rounded-full transform transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Deluxe Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-md md:hidden"
            />

            {/* Drawer Panel matching the dark black-blue theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-20 inset-x-4 z-40 p-6 rounded-3xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl md:hidden flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActiveLink(l.href);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-wider transition-colors ${
                      activeLink === l.href 
                        ? "bg-primary/15 text-primary font-semibold" 
                        : "hover:bg-slate-900 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              
              <hr className="border-slate-800/80 my-1" />
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest font-semibold shadow-lg"
              >
                Hire me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
