import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';
import Nav from './components/Nav';
import About from './components/About';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Nav />
        <About />
        <div className="map">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
