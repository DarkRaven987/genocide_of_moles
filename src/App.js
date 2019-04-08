import React, { Component } from 'react';

import './App.css';
import mole_null from './img/mole_null.png'
import mole_true from './img/mole_true.png'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App-header">
          GENOCIDE OF MOLES
        </div>
        <div className="Game-Field">
          <div className="onPlay-zone">
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
            <div className="onClick-element">
              <img src={mole_true} alt="QWERTY"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
