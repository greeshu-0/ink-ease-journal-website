import { moodEmojis } from "../mood";
export default function MoodSelector({ mood, setMood }) {
  return (
    <select
      value={mood}
      onChange={(e) => setMood(e.target.value)}
      className="mt-4 p-3 rounded-xl border bg-gray-100 text-base"
    >
      <option value="">Select mood</option>
      {Object.entries(moodEmojis).map(([key, emoji]) => (
        <option key={key} value={key}>
          {emoji} {key}
        </option>
      ))}
    </select>
  );
}
