import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
    //call this prop from App.js
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
        <span>Video Search</span>
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search video..."
            aria-label="Search video"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
