import MoodSelector from "./MoodSelector";
export default function MoodForm({ date, setDate, selectedMood, setSelectedMood, handleSave, moodOptions }) {
  return (
    <div className="md:mr-20 md:mt-24">
      <div className="mb-4 flex flex-col items-center">
        <label className="text-gray-700 font-medium mb-5">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-lg shadow-sm mb-5"
        />
      </div>
      <MoodSelector
        moodOptions={moodOptions}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-200 text-blue-800 rounded-full hover:bg-blue-300 transition"
        >
          Save Mood
        </button>
      </div>
    </div>
  );
}
