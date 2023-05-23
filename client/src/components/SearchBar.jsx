import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import "../styles/SearchBar.scss";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchInput = (value) => {
    setSearch(value.toLowerCase());
  };

  const handleInputPaste = (e) => {
    const value = e.clipboardData.getData("Text");
    handleSearchInput(value);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    if (e.type === "paste") {
      handleInputPaste(e);
    } else {
      handleSearchInput(value);
    }
  };

  const handleSearchQuery = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
    } 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchQuery(e);
    }
  };

  return (
    <section className="search" aria-label="Caja de busqueda">
      <form onSubmit={handleSearchQuery}>
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" onClick={handleSearchQuery}>
          <TfiSearch />
        </button>
      </form>
    </section>
  );
};
