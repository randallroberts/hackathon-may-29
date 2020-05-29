import React, { Component } from 'react';
import './components.scss';
import logo from '../Bijou_Icon.svg';

class Footer extends Component {

  render() {
    return (
            <div className="footer">
              <div className="footer-logo-column">
                <img className="footer-img" src={logo} alt="logo" />
                <h4 className="footer-desc">Team Pineapple on Pizza © All Rights Reserved 2020</h4>
              </div>
              <div className="footer-menu-bar">
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <a className="footer-menu-item" href="/">Home</a>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item" href="/">About</a>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item" href="/">How it Works</a>
                    </li>
                    <li className="footer-menu-item">
                        <a className="footer-menu-item" href="/">FAQ</a>
                    </li>
                    <li className="footer-menu-item footer-menu-item--last">
                        <a className="footer-menu-item" href="/">Contact Us</a>
                    </li>
                </ul>
                <ul className="footer-menu footer-social">
                  <li className="footer-menu-item">
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li className="footer-menu-item">
                    <i className="fab fa-facebook-f" />
                  </li>
                  <li className="footer-menu-item">
                  <i className="fab fa-google-plus-g"></i>
                  </li>
                </ul>

              </div>
            </div>
    );
  }
}

export default Footer;
