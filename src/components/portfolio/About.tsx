import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="px-6 lg:px-10 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono uppercase tracking-[0.3em] text-primary"
        >
          // About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="font-display text-3xl sm:text-4xl tracking-tight leading-tight text-pretty">
            I started by reverse-engineering Flash games at 12. Today I architect
            production systems handling{" "}
            <span className="text-gradient">millions of requests</span> a day.
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
            Five years in, my obsession is the seam between robust backend
            engineering and tactile, almost cinematic frontend design. Off the
            keyboard you'll find me restoring vintage synthesizers, mountain
            biking, and writing about the philosophy of toolmaking.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            {[
              { k: "Based in", v: "San Francisco, CA" },
              { k: "Focus", v: "Realtime · 3D · DX" },
              { k: "Status", v: "Open to projects" },
            ].map((item) => (
              <div key={item.k} className="border-t border-border pt-3">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {item.k}
                </p>
                <p className="font-medium mt-1">{item.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}