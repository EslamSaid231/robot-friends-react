import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <input
      type="Search"
      placeholder="Search for robots"
      className="pa3 ba br3 w-40 b--green bg-lightest-blue mb2"
      onChange={searchChange}
    >
      {searchfield}
    </input>
  );
};

export default SearchBox;
