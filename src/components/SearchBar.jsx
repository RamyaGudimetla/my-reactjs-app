import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books"
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;