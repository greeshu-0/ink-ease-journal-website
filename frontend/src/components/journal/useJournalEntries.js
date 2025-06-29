import { useState, useEffect } from "react";

export function useJournalEntries(navigate) {
  const [entries, setEntries] = useState([]);

  const sortByDate = (a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const fetchEntries = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const res = await fetch(`http://localhost:5000/entries?user_id=${email}`);
      const data = await res.json();
      setEntries(data.sort(sortByDate));
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const saveNew = async (entry) => {
    try {
      const email = localStorage.getItem("userEmail");
      const res = await fetch("http://localhost:5000/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...entry, user_id: email }),
      });
      const newEntry = await res.json();
      setEntries((prev) => [newEntry, ...prev]);
    } catch (err) {
      console.error("Error saving entry:", err);
    }
  };

  const editEntry = async (id, entry) => {
    try {
      const email = localStorage.getItem("userEmail");
      await fetch(`http://localhost:5000/entries/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...entry, user_id: email }),
      });
      fetchEntries();
    } catch (err) {
      console.error("Error editing entry:", err);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const email = localStorage.getItem("userEmail");
      await fetch(`http://localhost:5000/entries/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: email }),
      });
      fetchEntries();
    } catch (err) {
      console.error("Error deleting entry:", err);
    }
  };

  return { entries, setEntries, fetchEntries, saveNew, editEntry, deleteEntry };
}
