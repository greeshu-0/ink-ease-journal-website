import { useState } from "react";

export function useJournalUI({ saveNew, editEntry, deleteEntry }) {
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newMood, setNewMood] = useState("Happy");
  const [showAddFullPage, setShowAddFullPage] = useState(false);
  const [filterMood, setFilterMood] = useState("All");

  const openEntry = (entry) => {
    setSelectedEntry(entry);
    setNewTitle(entry.title);
    setNewContent(entry.content);
    setNewMood(entry.mood);
  };

  const handleSaveNew = async () => {
    if (!newTitle.trim()) return;
    await saveNew({ title: newTitle, content: newContent, mood: newMood });
    resetForm();
    setShowAddFullPage(false);
  };

  const handleEdit = async () => {
    await editEntry(selectedEntry.id, {
      title: newTitle,
      content: newContent,
      mood: newMood,
    });
    resetForm();
  };

  const resetForm = () => {
    setNewTitle("");
    setNewContent("");
    setNewMood("Happy");
    setSelectedEntry(null);
  };

  return {
    selectedEntry,
    setSelectedEntry,
    newTitle,
    setNewTitle,
    newContent,
    setNewContent,
    newMood,
    setNewMood,
    showAddFullPage,
    setShowAddFullPage,
    filterMood,
    setFilterMood,
    openEntry,
    handleSaveNew,
    handleEdit,
    deleteEntry,
  };
}
