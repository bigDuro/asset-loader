import React, { Component } from 'react';
import './App.css';
import AssetsLoader from './containers/AssetsLoader/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['image', 'video'],
    }
  }

  render() {
    return (
      <div className="App">
        <AssetsLoader types={this.state.types}/>
      </div>
    );
  }
}

export default App;
