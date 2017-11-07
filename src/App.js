import React, { Component } from 'react';
import NavBar from './components/UIComponents/navBar/navBar'
import Feed from './components/feed/feed'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Feed />
      </div>
    );
  }
}

export default App;
