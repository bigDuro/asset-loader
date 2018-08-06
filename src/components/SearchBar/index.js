import React from 'react';

const SearchBar = props => {
  return (
    <form className="searchBar" onSubmit={props.handleSubmit}>
      <h3 className="searchBar__label">SearchBar View {props.type}</h3>
      <input className="searchBar__input" type="text" defaultValue={props.term} onChange={props.handleChange}></input>
      <button type="submit" value="submit" disabled={!props.term}>Submit</button>
    </form>
  )
}

export default SearchBar;
