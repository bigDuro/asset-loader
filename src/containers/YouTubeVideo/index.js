import React, { Component } from 'react';
import YouTubeInput from '../../components/YouTubeInput/'

class YouTubeVideo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log('YouTubeVideo > handleSubmit: ', e);
  }

  handleChange(e) {
    console.log('YouTubeVideo > handleChange: ', e);
  }
  render() {
    return (
      <YouTubeInput video={this.props.videoData} handleSubmit={this.handleSubmit}/>
    )
  }
}

export default YouTubeVideo;
