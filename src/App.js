import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';
import mole_null from './img/mole_null.png'
import mole_true from './img/mole_true.png'

class App extends Component {
  render() {
    const {storage} = this.props;
    return (
      <div className="container">
        <div className="App-header">
          GENOCIDE OF MOLES
        </div>
        <div className="Game-Field">
          <div className="onPlay-zone">
            {
              storage.moleArray.map(el => {
                return (
                    <div className="onClick-element" key = {el.id}>
                      {el.isMole ? <img src={mole_true} alt="QWERTY"/> : <img src={mole_null} alt="QWERTY"/>}
                    </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}



export default connect(
    state =>  ({
      storage: state
    }),
    )(App);
