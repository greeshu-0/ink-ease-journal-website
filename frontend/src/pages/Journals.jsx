import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useJournalEntries } from "../components/journal/useJournalEntries";
import { useJournalUI } from "../components/journal/useJournalUI";
import JournalLayout from "../components/journal/JournalLayout";

function Journals() {
  const sortByDate = (a, b) => new Date(a.date) - new Date(b.date);
  const navigate = useNavigate();

  const { entries, saveNew, editEntry, deleteEntry } = useJournalEntries(navigate);
  const ui = useJournalUI({ saveNew, editEntry, deleteEntry });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const lowerTerm = searchTerm.toLowerCase();
    const matches = entries.filter(
      (entry) =>
        entry.title?.toLowerCase().includes(lowerTerm) ||
        entry.content?.toLowerCase().includes(lowerTerm) ||
        entry.mood?.toLowerCase().includes(lowerTerm)
    );
    setSearchResults(matches);
  };

  const displayedEntries =
    searchTerm.trim() !== ""
      ? searchResults.sort(sortByDate)
      : ui.filterMood === "All"
      ? [...entries].sort(sortByDate)
      : entries.filter((e) => e.mood === ui.filterMood).sort(sortByDate);

  return (
    <JournalLayout
      entries={displayedEntries}
      onSearch={handleSearch}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filterMood={ui.filterMood}
      setFilterMood={ui.setFilterMood}
      onEntryClick={ui.openEntry}
      onPromptClick={() => {
        ui.setNewTitle("");
        ui.setNewContent("");
        ui.setNewMood("Happy");
        ui.setShowAddFullPage(true);
      }}
      showAddFullPage={ui.showAddFullPage}
      selectedEntry={ui.selectedEntry}
      newTitle={ui.newTitle}
      setNewTitle={ui.setNewTitle}
      newContent={ui.newContent}
      setNewContent={ui.setNewContent}
      newMood={ui.newMood}
      setNewMood={ui.setNewMood}
      handleSaveNew={ui.handleSaveNew}
      handleEdit={ui.handleEdit}
      handleDelete={() => {
        ui.deleteEntry(ui.selectedEntry.id);
        ui.setSelectedEntry(null);
      }}
      closeAddForm={() => ui.setShowAddFullPage(false)}
      closeEditForm={() => ui.setSelectedEntry(null)}
    />
  );
}

export default Journals;
