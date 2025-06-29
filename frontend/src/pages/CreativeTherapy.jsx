import { useState } from "react";
import activities from "../components/vault/creative/activities";
import FilterBar from "../components/vault/creative/FilterBar";
import ActivityCard from "../components/vault/creative/ActivityCard";
import RandomModal from "../components/vault/creative/RandomModal";
export default function CreativeTherapy() {
  const [filter, setFilter] = useState("All");
  const [random, setRandom] = useState(null);
  const filteredActivities =
    filter === "All"
      ? activities
      : activities.filter((a) => a.category === filter);
  const handleRandom = () => {
    const pool = filter === "All" ? activities : filteredActivities;
    const rand = pool[Math.floor(Math.random() * pool.length)];
    setRandom(rand);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6 relative">
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-5xl font-bold text-center font-vibes text-amber-700 mb-6">
          🎨 Creative Therapy
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Doodle, color or collage your emotions out.
        </p>
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          onRandom={handleRandom}
        />
        <div className="space-y-6">
          {filteredActivities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
      </div>
      {random && (
        <RandomModal activity={random} onClose={() => setRandom(null)} />
      )}
    </div>
  );
}
