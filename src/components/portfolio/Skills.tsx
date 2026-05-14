import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Layers,
  Palette,
} from "lucide-react";

const groups = [
  {
    label: "Frontend",
    icon: Palette,
    accent: "primary",
    skills: [
      { name: "React / Next.js", icon: Code2 },
      { name: "TypeScript", icon: Layers },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Three.js / WebGL", icon: Cpu },
    ],
  },
  {
    label: "Backend",
    icon: Server,
    accent: "accent",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL ", icon: Database },
    ],
  },
  {
    label: "Tools & Ops",
    icon: Wrench,
    accent: "primary",
    skills: [
      { name: "Docker / K8s", icon: Cloud },
      { name: "AWS · Cloudflare", icon: Cloud },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Figma · Linear", icon: Wrench },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 lg:px-10 py-32 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">
            // Stack
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Tools of the trade<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, gi) => {
            const GIcon = g.icon;
            const accentClass = g.accent === "primary" ? "text-primary" : "text-accent";
            return (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden group"
              >
                <div
                  aria-hidden
                  className={`absolute -top-16 -right-16 size-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${
                    g.accent === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 grid place-items-center rounded-xl border border-border bg-background">
                      <GIcon className={`size-5 ${accentClass}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold">{g.label}</h3>
                  </div>
                  <ul className="space-y-3">
                    {g.skills.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <li
                          key={s.name}
                          className="flex items-center gap-3 py-2 border-b border-border/60 last:border-0"
                        >
                          <SIcon className="size-4 text-muted-foreground" />
                          <span className="text-sm">{s.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}