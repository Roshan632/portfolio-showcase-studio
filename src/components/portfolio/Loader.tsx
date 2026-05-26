import { useEffect, useState } from "react";

export function Loader({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<"loading" | "welcome" | "done">("loading");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("visited")) {
      setStep("done");
      return;
    }
    let frame = 0;
    const loadingInterval = setInterval(() => {
      frame += 1;
      setPercent((p) => {
        const next = Math.min(100, p + Math.floor(Math.random() * 7) + 2);
        if (next >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setStep("welcome"), 350);
        }
        return next;
      });
    }, 45);
    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    if (step === "welcome") {
      const t = setTimeout(() => {
        setStep("done");
        sessionStorage.setItem("visited", "true");
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [step]);

  if (step === "done") return <>{children}</>;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {step === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold tracking-widest text-primary">Loading</div>
          <div className="text-3xl font-mono text-muted-foreground">{percent}%</div>
        </div>
      )}
      {step === "welcome" && (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-primary scale-100 opacity-100 transition-all duration-700 ">
            Welcome to my world
          </div>
        </div>
      )}
      <style>{`
        .animate-fade-in {
          animation: fadeInScale 1s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
