import React, { Component } from 'react';

class VideoPreviewPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="previewPanel">
        <h4>PreviewPanel {this.props.mediaType}</h4>
        <div className="previewPanel__pod">
          <iframe title="this.props.videoData.src" className="previewPanel__pod__iframe" width="100%" height="315" src={this.props.videoData.src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default VideoPreviewPanel;
