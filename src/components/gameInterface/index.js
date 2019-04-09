import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux/es/redux";

import './index.css';
import {findMole, changeUpdateTime, changeGameState, resetGlobal} from '../../storage/actions';

class gameInterface extends React.Component {

    start = () => {
        const { findMole, changeUpdateTime,  startTimer, changeGameState} = this.props;

        findMole();
        changeUpdateTime();
        startTimer();
        changeGameState();
    };

    reset = () => {
        const {resetGlobal} = this.props;

        Array.from(document.getElementsByClassName("onClick-element")).map(el => el.style.backgroundColor = "#e5e5e5");

        resetGlobal();
    }

    renderInterface = (state) => {
        switch(state.gameState){
            case "start":
                return (
                    <div className="gameInterface">
                        <h1 className="interfaceHeader">WELCOME!</h1>
                        <div className="interfaceData">
                        </div>
                        <button className="StartButton" onClick = { this.start }>Start</button>
                    </div>
                );
            case "playing":
                return (
                    <div className="gameInterface">
                        <h1 className="interfaceHeader">STATUS BAR</h1>
                        <div className="interfaceData">
                            <h1>Game difficult: {state.gameDifficult}</h1>
                            <h1>Score: {state.score.current}/{state.score.max}point(s)</h1>
                            <h1>You failed: {state.failTimes} time(s)</h1>
                            <h1>Time: {state.updateTime - state.currentTime} s</h1>
                            {this.props.getCurrentTime(state.updateTime - state.currentTime)}
                        </div>
                    </div>
                );
            case "end":
                if(state.gameResult==="win"){
                    return (
                        <div className="gameInterface">
                            <h1 className="interfaceHeader">YOU WON!</h1>
                            <div className="interfaceData">
                            </div>
                            <button className="StartButton" onClick = { this.reset }>Restart</button>
                        </div>
                    )
                }else if(state.gameResult==="lose"){
                    return(
                        <div className="gameInterface">
                            <h1 className="interfaceHeader">YOU LOSE</h1>
                            <div className="interfaceData">
                            </div>
                            <button className="StartButton" onClick = { this.reset }>Retry</button>
                        </div>
                    );
                }
        }
    };

    render(){
        const {state} = this.props;
        return (
            <div>
                {this.renderInterface(state)}
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
      findMole: bindActionCreators(findMole, dispatch),
      changeUpdateTime: bindActionCreators(changeUpdateTime, dispatch),
      changeGameState: bindActionCreators(changeGameState, dispatch),
      resetGlobal: bindActionCreators(resetGlobal, dispatch)
  }
};

export default connect(putStateToProps, putDispatchToProps)(gameInterface);