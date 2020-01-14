import React from "react";

export const SearchBar = ({getSearch}) => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Search film"
              id="search"
              type="text"
              // value={searchValue}
              onChange={e => getSearch(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}