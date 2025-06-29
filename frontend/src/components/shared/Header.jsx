import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
function Header({ searchTerm, setSearchTerm, onSearch, translucent = false }) {
  const baseClasses =
    "w-full z-50 px-6 py-4 flex items-center justify-between gap-4 shadow-md";
  const styleClasses = "absolute top-0 left-0 bg/40 backdrop-blur-md";

  return (
    <div
      className={`${baseClasses} ${styleClasses} flex-col sm:flex-row items-start sm:items-center`}
    >
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {searchTerm !== undefined && (
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}
          />
        )}
      </div>
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
