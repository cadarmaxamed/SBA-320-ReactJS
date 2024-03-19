// import React, { useState } from "react";

// // export default Search;
// export default function Search({ search, setSearch, handleSearch }) {
//   const [searchInput, setSearchInput] = useState("");

//     const handleInputChange = (e) => {
//       setSearchInput(e.target.value);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (searchInput.trim() !== "") {
//         const [lat, lon] = searchInput.split(" ");
//         onSearchChange({ value: searchInput, lat, lon, label: searchInput });
//       }
//     };
  
//   return (
//     <div className="search-box">
//       <input
//         type="text"
//         placeholder="Enter City Name"
//         name="search"
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//       />
//       <button onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// }
import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter City Name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
