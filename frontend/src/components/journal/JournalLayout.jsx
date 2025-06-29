import EntryForm from "./EntryForm";
import EntryPrompt from "./EntryPrompt";
import EntryGrid from "./EntryGrid";
import JournalHeader from "./JournalHeader";
export default function JournalLayout({
  entries,
  onSearch,
  searchTerm,
  setSearchTerm,
  filterMood,
  setFilterMood,
  onEntryClick,
  onPromptClick,
  showAddFullPage,
  selectedEntry,
  newTitle,
  setNewTitle,
  newContent,
  setNewContent,
  newMood,
  setNewMood,
  handleSaveNew,
  handleEdit,
  handleDelete,
  closeAddForm,
  closeEditForm,
}) {
  return (
    <div
      className="min-h-screen text-black bg-repeat bg-fixed bg-center"
      style={{
        backgroundColor: "#FDFCFB",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
      }}
    >
      <JournalHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
        filterMood={filterMood}
        setFilterMood={setFilterMood}
      />
      <div className="py-10 px-4">
        <EntryPrompt onClick={onPromptClick} />
        <EntryGrid entries={entries} onEntryClick={onEntryClick} />
        {showAddFullPage && (
          <EntryForm
            title={newTitle}
            setTitle={setNewTitle}
            content={newContent}
            setContent={setNewContent}
            mood={newMood}
            setMood={setNewMood}
            onSave={handleSaveNew}
            onClose={closeAddForm}
          />
        )}
        {selectedEntry && (
          <EntryForm
            title={newTitle}
            setTitle={setNewTitle}
            content={newContent}
            setContent={setNewContent}
            mood={newMood}
            setMood={setNewMood}
            onSave={handleEdit}
            onDelete={handleDelete}
            onClose={closeEditForm}
            isEditing
          />
        )}
      </div>
    </div>
  );
}
