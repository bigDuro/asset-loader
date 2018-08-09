import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UploadForm from '../../components/UploadForm/';
import SearchBar from '../../components/SearchBar/';
import AssetResults from '../../components/AssetResults/';
import InlineMessaging from '../../components/InlineMessaging/';
import ImagePreviewPanel from '../ImagePreviewPanel/';
import VideoPreviewPanel from '../VideoPreviewPanel/';
import YouTubeVideo from '../YouTubeVideo/';

class AssetsLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      image: {
        alt: '',
        src: ''
      },
      video: {
        src: 'https://www.youtube.com/watch?v=tBaBl7gpYhs'
      },
      searchResults: [],
      searchTerm: '',
      status: '',
      type: '',
      uploadedAssets: []
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.setMediaDataSrc = this.setMediaDataSrc.bind(this);
    this.setMediaType = this.setMediaType.bind(this);
    this.updateAltText = this.updateAltText.bind(this);
  }

  updateStatus(status) {
    this.setState({
      status: status,
    }, () => console.log('AssetsLoader > updateStatus: ', this.state))
  }

  clearErrors() {
    this.setState({
      errors: []
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.clearErrors();
    this.updateStatus('Pending');
    getData('search', this.state.searchTerm).then((data) => {
      this.setState(
        {
          searchResults: data.documents
        },
        () => this.updateStatus('Complete')
      );
    }).catch((e) => {
      this.setState(
        {
          errors: [...this.state.errors, e.message]
        },
        () => this.updateStatus('Complete')
      );
    });
  }

  handleSearchTermChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleUpload(e) {
    e.preventDefault();
    this.updateStatus('Pending');
    getData('upload').then((data) => {
      this.setState(
        {
          uploadedAssets: [...this.state.uploadedAssets, ...data.documents]
        },
        () => this.updateStatus('Complete')
      );
    }).catch((e) => {
      this.setState(
        {
          errors: [...this.state.errors, e.message]
        },
        () => this.updateStatus('Complete')
      );
    });
  }

  setMediaDataSrc(e) {
    const mediaSrc = e.target.src;
    this.setState({
      image: {
        ...this.state.image,
        src: mediaSrc
      }
    })
  }

  setMediaType(e) {
    const mediaType = e.target.getAttribute('data-type');
    this.setState({
      type: mediaType
    })
  }

  updateAltText(altText) {
    this.setState({
      image: {
        ...this.state.image,
        alt: altText
      }
    })
  }

  render() {
    const mediaTypes = () => {
      return this.props.types.map((type) => {
        return (<Tab key={type}><a data-type={type} onClick={this.setMediaType}>{type}</a></Tab>)
      })
    }

    const mediaPanels = () => {
      const getPanel = (type) => {
        const types = {
          image: (
            <div className="mediaPanel">
              <div className="assets__loader">
                <SearchBar term={this.state.searchTerm} handleChange={this.handleSearchTermChange} handleSubmit={this.handleSubmit}/>
                <UploadForm handleSubmit={this.handleUpload}/>
                <InlineMessaging messages={this.state.errors}/>
                <AssetResults results={this.state.uploadedAssets} handleClick={this.setMediaDataSrc} label="Uploaded Assets"/>
                <AssetResults results={this.state.searchResults} handleClick={this.setMediaDataSrc} label="Search Results"/>
              </div>
              <div className="assets__preview">
                <ImagePreviewPanel imageData={this.state.image} updateAltText={this.updateAltText}/>
              </div>
            </div>
          ),
          video: (
            <div className="mediaPanel">
            <div className="assets__loader">
              Video Settings
              <YouTubeVideo videoData={this.state.video}/>
            </div>
            <div className="assets__preview">
              <VideoPreviewPanel videoData={this.state.video}/>
            </div>
            </div>
          )
        }
        return (types[type])
      }
      return this.props.types.map((type) => {
        return (
          <TabPanel key={type}>
            {getPanel(type)}
          </TabPanel>
        )
      })
    }

    return (
      <Tabs>
        <TabList>
          {mediaTypes()}
        </TabList>
        {mediaPanels()}
      </Tabs>
    )
  }
}

export default AssetsLoader;



const getData = (type, _data) => {
  const data = {
    name: 'makeServiceCall',
    message: 'Successful Request!',
    documents: [
      {
        src: 'https://dummyimage.com/100x100/000/fff&text=dc',
        label: 'image 1'
      },
      {
        src: 'https://dummyimage.com/100x100/000/fff',
        label: 'image 2'
      },
      {
        src: 'https://dummyimage.com/100x100/000/fff',
        label: 'image 3'
      }
    ]
  };
  const error = {
    name: 'makeServiceCall',
    message: 'Error Response!',
  };
  const successfulRequest = true;

  const makeServiceCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(successfulRequest) {
        resolve(data);
      }else {
        reject(error)
      }
    }, 1000);
  });

  return makeServiceCall
};
