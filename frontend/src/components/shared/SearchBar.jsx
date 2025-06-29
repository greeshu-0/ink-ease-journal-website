export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="flex flex-grow items-center border border-gray-600 px-4 py-2 rounded-full shadow-lg w-full sm:w-[18rem] md:w-[22rem] min-w-[200px] transition-all">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        placeholder="Searching for something..."
        className="flex-grow bg-transparent outline-none border-none text-gray-900 placeholder-gray-400 text-sm md:text-base"
      />
      <button
        onClick={() => {
          console.log("Search triggered");
          onSearch();
        }}
        className="ml-2"
      >
        🔍
      </button>
    </div>
  );
}
