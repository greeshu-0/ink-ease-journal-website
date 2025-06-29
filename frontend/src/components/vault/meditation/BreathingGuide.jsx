import { useEffect, useState } from "react";

export default function BreathingGuide() {
  const [breathText, setBreathText] = useState("Inhale");

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathText((prev) => (prev === "Inhale" ? "Exhale" : "Inhale"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <div
        className={`mt-20 w-44 h-44 rounded-full bg-emerald-300 flex items-center justify-center text-2xl font-semibold text-emerald-900 shadow-lg transition-all duration-[5000ms] ${
          breathText === "Inhale" ? "scale-125" : "scale-90"
        } animate-pulse`}
        style={{ boxShadow: "0 0 60px rgba(16, 185, 129, 0.4)" }}
      >
        {breathText}
      </div>
      <p className="text-lg text-gray-500 italic mt-16">
        Breathe with the rhythm
      </p>
    </div>
  );
}
