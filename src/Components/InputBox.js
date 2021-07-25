import React, { useState } from "react";

import search from "../assets/SearchO.svg";
import cross from "../assets/Union.png";

const InputBox = (props) => {
  const { searchText, onSearch } = props;
  const [cross, setCross] = useState();
  const placeholder = "Search for a folder of file";
  let clear;

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
      {clear}
      {/* <img height="18px" style={{marginTop:"4px"}}  src={cross} alt="" /> */}
    </div>
  );
};

export default InputBox;
