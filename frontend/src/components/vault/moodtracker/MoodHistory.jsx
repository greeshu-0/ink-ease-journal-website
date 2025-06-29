export default function MoodHistory({ showHistory, setShowHistory, moodHistory, loading }) {
  return (
    <>
      <div className="text-center mt-10">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-purple-600 underline hover:text-purple-800 transition"
        >
          {showHistory ? "Hide Mood History" : "View Mood History"}
        </button>
      </div>
      {showHistory && (
        <div className="bg-white mt-6 p-6 rounded-xl shadow-md space-y-4 animate-fade-in">
          <h2 className="text-xl font-semibold text-blue-700">☁️ Mood History</h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading moods...</p>
          ) : moodHistory.length === 0 ? (
            <p className="text-gray-500 text-center">No moods tracked yet!</p>
          ) : (
            <ul className="space-y-3">
              {moodHistory.map((entry, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-lg">{entry.emoji}</span>
                  <span className="text-sm text-gray-600">{entry.mood}</span>
                  <span className="text-sm text-gray-400">{entry.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
