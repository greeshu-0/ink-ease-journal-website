import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { moodOptions } from "../components/mood.js";
import MoodTrackerLayout from "../components/vault/moodtracker/MoodTrackerLayout";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [date, setDate] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(true);

  const userEmail = JSON.parse(localStorage.getItem("user"))?.email;

  const fetchMoods = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/moods/${userEmail}`
      );
      setMoodHistory(res.data);
    } catch (err) {
      console.error("Error fetching mood history:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedMood || !date) return;
    if (new Date(date) > new Date()) {
      alert("You can't log moods for future dates!");
      return;
    }

    const newEntry = {
      email: userEmail,
      date,
      mood: selectedMood.label,
      emoji: selectedMood.emoji,
    };

    try {
      await axios.post("http://localhost:5000/api/moods", newEntry);
      fetchMoods();
      setSelectedMood(null);
      setDate("");
    } catch (err) {
      console.error("Error saving mood:", err);
    }
  };

  useEffect(() => {
    if (userEmail) fetchMoods();
  }, [userEmail]);

  const moodCounts = moodOptions.map(
    (mood) => moodHistory.filter((entry) => entry.mood === mood.label).length
  );

  const chartData = {
    labels: moodOptions.map((m) => m.label),
    datasets: [
      {
        label: "Mood Count",
        data: moodCounts,
        backgroundColor: [
          "#FDE68A",
          "#BBF7D0",
          "#BFDBFE",
          "#FCA5A5",
          "#DDD6FE",
          "#FBCFE8",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <MoodTrackerLayout
      date={date}
      setDate={setDate}
      selectedMood={selectedMood}
      setSelectedMood={setSelectedMood}
      handleSave={handleSave}
      moodOptions={moodOptions}
      chartData={chartData}
      showHistory={showHistory}
      setShowHistory={setShowHistory}
      moodHistory={moodHistory}
      loading={loading}
    />
  );
}
