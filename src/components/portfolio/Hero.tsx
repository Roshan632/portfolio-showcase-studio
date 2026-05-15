import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { toast } from "sonner";
// import portrait from "@/assets/portrait.jpg";
import portrait from "@/assets/Roshan.jpeg";
import { trackCvDownload } from "@/lib/track-cv";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 lg:px-10 pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-125 h-125 rounded-full blur-3xl opacity-25"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full blur-3xl opacity-20 bg-accent"
      />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
              Available for freelance · 2026
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
            FULL STACK
            <br />
            <span className="text-gradient">ENGINEER.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl text-pretty">
            Crafting high-performance digital experiences with a focus on
            immersive 3D interfaces, scalable architecture, and pixel-perfect
            interaction design.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-cyan transition-all"
            >
              View Projects
              <ArrowDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/Roshancv.pdf"
              download="Roshancv.pdf"
              onClick={() => {
                trackCvDownload("hero");
                toast.success("Downloading CV…");
              }}
              className="group inline-flex items-center gap-2 px-7 py-4 border border-border bg-card/40 backdrop-blur-sm rounded-xl hover:bg-card hover:border-primary/40 transition-all"
            >
              <Download className="size-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-2 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "var(--gradient-accent)" }}
            />
            <img
              src={portrait}
              alt="Portrait of Alex, a full stack engineer"
              width={1024}
              height={1024}
              className="relative w-full aspect-square object-cover rounded-3xl border border-border"
            />
          </motion.div>

          <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl p-5 border border-border rounded-2xl">
            <p className="font-display text-3xl font-bold text-primary">2+</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Years Experience
            </p>
          </div>
          <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-xl p-5 border border-border rounded-2xl">
            <p className="font-display text-3xl font-bold text-accent">20+</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Projects Done
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}