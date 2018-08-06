import React from 'react';

const UploadForm = props => {
  return (
    <form className="uploadAssets" onSubmit={props.handleSubmit}>
      <h3 className="uploadAssets__label">Upload View</h3>
      <input className="uploadAssets__input" type="file" accept="image/*" onChange={props.handleChange}></input>
      <button type="submit" value="submit">Submit</button>
    </form>
  )
}

export default UploadForm;
