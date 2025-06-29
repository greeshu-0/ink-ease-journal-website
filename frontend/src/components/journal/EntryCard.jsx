import { moodStyles, moodEmojis } from "../mood";

export default function EntryCard({ entry, onClick, index }) {
  return (
    <div
      key={entry.id}
      onClick={() => onClick(entry)}
      className={`p-4 rounded-xl shadow-md cursor-pointer bg-white border-l-4 ${
        moodStyles[entry.mood] || "border-gray-400"
      } transform transition duration-300 ease-in-out opacity-0 animate-fadeIn hover:scale-[1.03] hover:blur-[0.3px] hover:shadow-xl`}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      <p className="font-semibold text-lg ">{entry.title}</p>
      <p className="text-sm text-gray-500">
        {new Date(entry.date).toLocaleString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
        <br />
        
        {moodEmojis[entry.mood] || ""} {entry.mood}
      </p>
    </div>
  );
}
