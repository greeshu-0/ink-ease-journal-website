export default function MoodSelector({ moodOptions, selectedMood, setSelectedMood }) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-4">
      {moodOptions.map((mood, index) => (
        <button
          key={index}
          onClick={() => setSelectedMood(mood)}
          className={`p-4 rounded-full text-2xl shadow-md hover:scale-110 transition-all ${
            mood.color
          } ${selectedMood?.label === mood.label ? "ring-4 ring-blue-300" : ""}`}
        >
          {mood.emoji}
        </button>
      ))}
    </div>
  );
}
