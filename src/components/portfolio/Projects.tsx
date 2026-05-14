import { ProjectCard, type Project } from "./ProjectCard";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects: Project[] = [
  {
    title: "Vehicle Repairing System",
    description:
      "Built using MEN stack (ejs) that helps to search and find garages nearby solving the real time problems of vehicle owners in need.",
    image: p1,
    tags: ["MongoDB", "Node.js", "Express"],
    live: "https://vehicle-repairing-system.vercel.app/",
    github: "https://github.com/Roshan632/Vehicle-repairing-system",
    accent: "cyan",
  },
  {
    title: "Bus Reservation System",
    description:
      "Built using MERN stack that helps to solve real-time problems for bus reservation.",
    image: p2,
    tags: ["React.js", "Express", "Node.js","MongoDB"],
    live: "https://bus-booking-roshan.vercel.app/",
    github: "https://github.com/Roshan632/BusBooking",
    accent: "violet",
  },
  {
    title: "Airbnb Clone",
    description:
      "Built using MEN stack (ejs) that allows Payment using eSewa and Khalti.",
    image: p3,
    tags: ["Node.js", "MongoDB", "Express"],
    live: "https://airbnb-project-mern.vercel.app/listings",
    github: "https://github.com/Roshan632/Airbnb-Project-MERN",
    accent: "cyan",
  },
  {
    title: "Amazon Clone",
    description:
      "Built using own ways to make like amazon using only for static ways.",
    image: p4,
    tags: ["HTML", "CSS", "JS"],
    live: "https://amazon-clone-roshan.vercel.app/",
    github: "https://github.com/Roshan632/amazon-clone",
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