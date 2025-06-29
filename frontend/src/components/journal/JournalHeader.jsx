import MoodFilter from "./MoodFilter";
import Header from "../shared/Header";

export default function JournalHeader({
  searchTerm,
  setSearchTerm,
  onSearch,
  filterMood,
  setFilterMood,
}) {
  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
      <div className="max-w-4xl mx-auto mb-4 md:pt-32 pt-48">
        <h1 className="text-5xl font-vibes text-gray-600 text-center mb-5 font-bold">My Journal  🕮</h1>
      </div>
      <MoodFilter filterMood={filterMood} setFilterMood={setFilterMood} />
    </>
  );
}
