import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      const [lat, lon] = searchInput.split(" ");
      onSearchChange({ value: searchInput, lat, lon, label: searchInput });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter latitude and longitude (e.g., 40.7128 -74.0060)"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
