import React from "react";
import "./style.css";

export default function SearchInput({ handleChange, searchInput, value }) {
  return (
    <div className="input-wrapper">
      <input
        placeholder="Search by name or email"
        onChange={handleChange}
        value={value}
        type="text"
        className="input-field"
      />
      <button onClick={searchInput} type="submit" className="input-button">
        Search
      </button>
    </div>
  );
}
