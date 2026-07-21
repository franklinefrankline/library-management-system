import "../styles/books.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search Book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;