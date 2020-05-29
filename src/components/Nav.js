import React, { Component } from 'react';
import './components.scss';

class App extends Component {

  render() {
    return (
        <div className="headerContainer">
            <header className="header">
                <div className="nav">
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <a className="nav-menu-item" href="/">Home</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-item" href="/">About</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-item" href="/">How it Works</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-item" href="/">FAQ</a>
                        </li>
                        <li className="nav-menu-item nav-menu-item--last">
                            <a className="nav-menu-item" href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="header-title">Check which restaurants are less busy</h1>
                    <button className="button">Check Heatmap</button>
                </div>
                
            </header>
        <div className="header-fill"></div>
    </div>
    );
  }
}

export default App;
