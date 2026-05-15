import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { MouseEvent } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live: string;
  github: string;
  accent: "cyan" | "violet";
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const glow =
    project.accent === "cyan"
      ? "from-primary/40 to-transparent"
      : "from-accent/40 to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative bg-card border border-border rounded-3xl overflow-hidden"
      >
        <div
          aria-hidden
          className={`absolute -inset-px rounded-3xl bg-linear-to-br ${glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur`}
        />

        <div className="relative aspect-16/10 overflow-hidden bg-background">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            width={1280}
            height={800}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent"
          />
        </div>

        <div className="p-6 lg:p-8" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <div className="flex gap-2 shrink-0">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="size-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="size-4" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="size-10 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground mb-5 text-pretty">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}