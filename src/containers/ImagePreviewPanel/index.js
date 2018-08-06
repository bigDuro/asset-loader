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
        <div className="AssetResults__pod">
          <img alt={this.props.imageData.alt} className="AssetResults__pod__image" src={this.props.imageData.src}/>
          <input type="text" defaultValue={this.props.imageData.alt} onChange={this.handleChange}></input>
          <p className="AssetResults__pod__label">{this.props.imageData.label}</p>
        </div>
      </div>
    )
  }
}

export default ImagePreviewPanel;
