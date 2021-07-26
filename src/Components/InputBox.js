import React from "react";

import search from "../assets/SearchO.svg";
import cross from "../assets/Union.png";

const InputBox = (props) => {
  let { searchText, onSearch, setSearchText } = props;

  const placeholder = "Search for a folder of file";

  // clears input field upon clicking on X (cross)
  const clearInput = () => {
    setSearchText("");
  };

  return (
    <div className="input-container">
      <img src={search} alt="" />
      <input
        className="input-box"
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchText && (
        <span onClick={clearInput}>
          <img height="16px" src={cross} alt="" />
        </span>
      )}
    </div>
  );
};

export default InputBox;
