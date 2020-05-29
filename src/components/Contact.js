import React, { Component } from 'react';
import './components.scss';
import restImg from '../2.png';

class Contact extends Component {

  render() {
    return (
            <div className="contact">
              <h1 className="contact-title">Keep me in the loop!</h1>
              <div className="contact-form-container">
                <form className= "contact-form">
                  <label className="contact-label">Name
                    <input className="contact-input" />
                  </label>
                  <label className="contact-label">Email
                    <input className="contact-input" />
                  </label>
                  <label className="contact-label">Message
                    <textarea className="contact-textarea" />
                  </label>
                  <button className="button button-no-margin">Send</button>
                </form>
                <img className="contact-img" src={restImg} alt="" />
              </div>
            </div>
    );
  }
}

export default Contact;
