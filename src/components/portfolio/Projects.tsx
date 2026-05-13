import { ProjectCard, type Project } from "./ProjectCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects: Project[] = [
  {
    title: "Nexus Analytics",
    description:
      "Real-time data processing dashboard handling millions of events with sub-100ms latency.",
    image: p1,
    tags: ["Next.js", "Three.js", "Rust"],
    live: "https://example.com",
    github: "https://github.com",
    accent: "cyan",
  },
  {
    title: "Aether Wallet",
    description:
      "Cross-chain crypto wallet with biometric auth and a glassmorphic interface design language.",
    image: p2,
    tags: ["React Native", "Web3.js", "Node.js"],
    live: "https://example.com",
    github: "https://github.com",
    accent: "violet",
  },
  {
    title: "Codex Terminal",
    description:
      "AI-augmented developer terminal with semantic search across millions of lines of code.",
    image: p3,
    tags: ["Go", "TypeScript", "OpenAI"],
    live: "https://example.com",
    github: "https://github.com",
    accent: "cyan",
  },
  {
    title: "Vector Studio",
    description:
      "Immersive 3D product configurator with WebGL ray-marched materials and live collaboration.",
    image: p4,
    tags: ["React", "Three.js", "WebGL"],
    live: "https://example.com",
    github: "https://github.com",
    accent: "violet",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-10 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">
              // Selected Works
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Projects that shipped<span className="text-primary">.</span>
            </h2>
          </div>
          <span className="font-mono text-sm text-muted-foreground">
            01 — 0{projects.length}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}