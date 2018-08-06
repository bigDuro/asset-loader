import React from 'react';

const SearchBar = props => {
  return (
    <div className="inlineMessaging">
      {props.messages.map((message, index) => {
        return (<p className="inlineMessaging__message" key={index}>{message}</p>)
      })}
    </div>
  )
}

export default SearchBar;
