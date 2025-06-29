import { moodEmojis } from "../mood";

export default function MoodFilter({ filterMood, setFilterMood }) {
  return (
    <div className="max-w-4xl mx-auto mb-4 flex gap-2 flex-wrap justify-center">
      {["All", ...Object.keys(moodEmojis)].map((mood) => (
        <button
          key={mood}
          onClick={() => setFilterMood(mood)}
          className={`px-3 py-1 rounded-full border ${
            filterMood === mood
              ? "bg-gray-500 text-white"
              : "bg-white text-gray-500"
          } transition`}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
