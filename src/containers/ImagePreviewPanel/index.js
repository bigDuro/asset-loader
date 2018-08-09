import React, { Component } from 'react';

class ImagePreviewPanel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const altText = e.target.value;
    this.props.updateAltText(altText);
  }

  render() {
    return (
      <div className="previewPanel">
        <h4>PreviewPanel {this.props.mediaType}</h4>
        <div className="previewPanel__pod">
          <img alt={this.props.imageData.alt} className="previewPanel__pod__image" src={this.props.imageData.src}/>
          <input className="previewPanel__pod__alt" type="text" defaultValue={this.props.imageData.alt} onChange={this.handleChange}></input>
        </div>
      </div>
    )
  }
}

export default ImagePreviewPanel;
