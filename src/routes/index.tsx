import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { SkeletonMarquee } from "@/components/portfolio/SkeletonMarquee";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";



import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <Loader>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <SkeletonMarquee />
          <About />
          
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster theme="dark" />
      </div>
    </Loader>
  );
}
