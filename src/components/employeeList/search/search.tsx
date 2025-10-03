import React, { useCallback, useState } from "react";
import { SearchContainer, SearchWrapper, SearchInput } from "./search.styled";
import SearchIcon from "./search.icon";
import CloseIcon from "../../helper/closeIcon";
import { CloseButton, IconButton } from "../../helper/iconButton";

type Props = {
  handleSearch: (value: string) => void;
};

const Search: React.FC<Props> = ({  handleSearch }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setInput(v);
      handleSearch(v);
    },
    [handleSearch]
  );

  const handleClear = useCallback(() => {
    setInput("");
    handleSearch("");
  }, [handleSearch]);

  return (
    <SearchContainer>
      <SearchWrapper htmlFor="employee-search-input">
        <IconButton aria-hidden tabIndex={-1} title="Search icon">
          <SearchIcon />
        </IconButton>

        <SearchInput
          id="employee-search-input"
          value={input}
          onChange={handleChange}
          placeholder={"Search employees..."}
          aria-label="Search employees"
        />

        {input ? (
          <CloseButton onClick={handleClear} aria-label="Clear search">
            <CloseIcon />
          </CloseButton>
        ) : null}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Search;
