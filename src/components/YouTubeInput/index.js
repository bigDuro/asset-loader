import React from 'react';

const YouTubeInput = props => {
  return (
    <form className="youTube" onSubmit={props.handleSubmit}>
      <h3 className="youTube__label">youTube View</h3>
      <input className="youTube__input" type="text" defaultValue={props.video.src} onChange={props.handleChange}></input>
      <button type="submit" value="submit" disabled={!props.video.src}>Submit</button>
    </form>
  )
}

export default YouTubeInput;
