import { motion } from "framer-motion";

const events = [
  {
    period: "2023 — Present",
    role: "Senior Full Stack Engineer-",
    place: "WhoezGroup · Intern",
    blurb:
      "Leading frontend architecture for high-traffic client projects. Mentoring four engineers.",
    accent: true,
  },
  {
    period: "2023 — Present",
    role: "Student",
    place: "BCA Degree, Mechi Multiple Campus, Jhapa",
    blurb:
      "Built scalable Node.js APIs and React dashboards for Series A fintech startups.",
  },
  // {
  //   period: "2019 — 2021",
  //   role: "Frontend Engineer",
  //   place: "Signal Studio · Jhapa",
  //   blurb:
  //     "Shipped immersive marketing sites and interactive WebGL experiences.",
  // },
  // {
  //   period: "2020 — 2022",
  //   role: " Student - Secondary Level. Computer Science",
  //   place: "Siddhartha Shishu Sadan . Jhapa",
  //   blurb: "Focused on distributed systems and graphics programming tool for upgrading skills in Computer Science.",
  // },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 lg:px-10 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">
            // Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Career timeline<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto pl-6 sm:pl-8 space-y-10 before:absolute before:left-1.75 sm:before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
          {events.map((e, i) => (
            <motion.div
              key={e.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div
                className={`absolute -left-6 sm:-left-8 top-1.5 size-4 rounded-full border-2 ${
                  e.accent
                    ? "bg-primary border-primary glow-cyan"
                    : "bg-background border-border"
                }`}
              />
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary mb-1">
                {e.period}
              </p>
              <h3 className="font-display text-xl font-bold">{e.role}</h3>
              <p className="text-sm text-muted-foreground mb-2">{e.place}</p>
              <p className="text-muted-foreground text-pretty max-w-2xl">
                {e.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
