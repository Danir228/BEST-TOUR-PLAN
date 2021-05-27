import React from "react";

import search from "../../images/search.svg";

const Search = () => {
    return (
        <div className="navbar__search">
        <input type="input" placeholder="Search Location"></input>
        <button className="navbar__button">
          <img src={search} alt="search"/>
        </button>
      </div>
    )
}

export default Search;