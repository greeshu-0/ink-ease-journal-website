import MoodForm from "./MoodForm";
import MoodCharts from "./MoodCharts";
import MoodHistory from "./MoodHistory";
import "./moodtracker.css"; 
export default function MoodTrackerLayout({
  date,
  setDate,
  selectedMood,
  setSelectedMood,
  handleSave,
  moodOptions,
  chartData,
  showHistory,
  setShowHistory,
  moodHistory,
  loading,
}) {
  return (
    <div className="mood-tracker-bg p-6 min-h-screen">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-5xl font-vibes font-bold text-center text-blue-800 mb-6">
          💧 Mood Tracker
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg italic">
          “Feel it. Express it. Let it go.”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <MoodForm
            date={date}
            setDate={setDate}
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            handleSave={handleSave}
            moodOptions={moodOptions}
          />
          <MoodCharts chartData={chartData} />
        </div>

        <MoodHistory
          showHistory={showHistory}
          setShowHistory={setShowHistory}
          moodHistory={moodHistory}
          loading={loading}
        />
      </div>
    </div>
  );
}
