import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux/es/redux";

import './index.css';
import {liveTimer, findMole, changeUpdateTime} from '../../storage/actions';

class gameInterface extends React.Component {

    start = () => {
        const {liveTimer, findMole, changeUpdateTime, state} = this.props;
        // findMole();
        // setInterval(() => {
        //     liveTimer();
        // }, 10);
        // changeUpdateTime();
        // setInterval(()=>{
        //     findMole()
        // }, state.updateTime);
        console.log(this);
    };

    render(){
        const {storage} = this.props;
        return (
            <div className="gameInterface">
                <h1 className="interfaceHeader">STATUS BAR</h1>
                <div className="interfaceData">
                    <h1>Game difficult: {storage.gameDifficult}</h1>
                    <h1>Score: {storage.score.current}/{storage.score.max}point(s)</h1>
                    <h1>You failed: {storage.failTimes} time(s)</h1>
                    <h1>Time: {storage.currentTime.toFixed(2)} s</h1>
                </div>
                <button className="StartButton" onClick = { this.start }>Start</button>
            </div>
        )
    }
};

const putStateToProps = (state) => {
  return {
      state: state
  }
};

const putDispatchToProps = (dispatch) => {
  return {
      liveTimer: bindActionCreators(liveTimer, dispatch),
      findMole: bindActionCreators(findMole, dispatch),
      changeUpdateTime: bindActionCreators(changeUpdateTime, dispatch)
  }
};

export default connect(putStateToProps, putDispatchToProps)(gameInterface);