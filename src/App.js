import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';
import MainHeader from './components/mainHeader';
import GameField from './components/gameField';

class App extends Component {
  render() {
    const {storage} = this.props;
    return (
      <div className="container">
        <MainHeader/>
        <GameField storage = {storage}/>
      </div>
    );
  }
}



export default connect(
    state =>  ({
      storage: state
    }),
    )(App);
