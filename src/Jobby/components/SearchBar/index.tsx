import React from "react";
import {
  SearchImageContainer,
  SearchImg,
  SearchInput,
} from "./styledComponents";

const Searchinput = () => {
  return (
    <SearchImageContainer>
      <SearchInput
        type="search"
        placeholder="Search"
        id="SearchInput"
        // onKeyUp={handleSearchEvent}
      ></SearchInput>
      <SearchImg
        // onClick={handleSearchFetch}
        className="fa-solid fa-magnifying-glass"
      ></SearchImg>
    </SearchImageContainer>
  );
};

export default Searchinput;
