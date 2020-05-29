import React, { Component } from 'react';
import './App.css';
import SimpleMap from './components/SimpleMap';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Nav />
        <About />
        <div className="map">
          <SimpleMap />
        </div>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
