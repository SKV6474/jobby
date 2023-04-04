import React, { useState } from "react";

import {
  SearchImageContainer,
  SearchImg,
  SearchInput,
} from "./styledComponents";

const Searchinput = (props: { onChange: (input: string) => void }) => {
  const { onChange } = props;

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    onChange(searchValue);
  };

  const handleSearchEvent = (e: any) => {
    setSearchValue(e.target.value);
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <SearchImageContainer>
      <SearchInput
        placeholder="Search"
        id="Value"
        onKeyUp={handleSearchEvent}
      ></SearchInput>
      <SearchImg
        onClick={handleSearch}
        className="fa-solid fa-magnifying-glass"
      ></SearchImg>
    </SearchImageContainer>
  );
};

export default Searchinput;
