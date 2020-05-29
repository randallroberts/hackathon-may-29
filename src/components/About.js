import React, { Component } from 'react';
import './components.scss';
import map from '../Map.png';

class About extends Component {

  render() {
    return (
            <div className="about">
                <div className= "about-copy">
                    <h1 className="about-title">About Us</h1>
                    <div className="about-desc">
                        It all started with the idea of helping out your local small business. It is our goal to tell you where those hidden gems are.
                    </div>
                </div>
                <img className="about-img" src={map} alt="a Map of the world" />
                
            </div>
    );
  }
}

export default About;
