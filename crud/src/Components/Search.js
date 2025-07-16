import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <input
          type="text"
          placeholder="Search by name, email or role..."
          value={value}
          onChange={onChange}
          className="search-box"
        />
    );
};

export default SearchBar;