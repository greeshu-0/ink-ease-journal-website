import BreathingGuide from "../components/vault/meditation/BreathingGuide";
import MeditationTips from "../components/vault/meditation/MeditationTips";
import meditations from "../components/vault/meditation/meditationAudio";
import MeditationCard from "../components/vault/meditation/MeditationCard";
export default function Meditations() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-emerald-100 via-white to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto mt-0 lg:mt-10">
        <h1 className="text-5xl font-vibes font-bold text-center text-emerald-800 mb-20">
          Guided Meditations 🌿
        </h1>
        <div className="flex flex-col lg:flex-row gap-14">
          <div>
            <BreathingGuide />
            <MeditationTips />
          </div>
          <div className="grid sm:grid-cols-1 gap-8 flex-1">
            {meditations.map((item, index) => (
              <MeditationCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
