import React from 'react';

const AssetResults = props => {
  const results = props.results.map((item, index) => {
    return (
      <div key={index} className="AssetResults__pod">
        <a className="AssetResults__pod__link" onClick={props.handleClick}>
          <img alt={item.label} className="AssetResults__pod__image" src={item.src}/>
          <p className="AssetResults__pod__label">{item.label}</p>
        </a>
      </div>
    )
  })
  return (
    <div className="AssetResults">
      <h3 className="AssetResults__label">{props.label}</h3>
      {results}
    </div>

  )
}

export default AssetResults;
