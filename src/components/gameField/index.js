import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux/es/redux";

import './index.css';
import ActionField from '../actionField';
import GameInterface from '../gameInterface';
import {
    liveTimer,
    incrementFailTimes,
    findMole,
    changeUpdateTime,
    annuleTimer,
    changeScore,
    changeGameDifficulty,
    changeGameResult,
    changeGameState,
} from "../../storage/actions";

class gameField extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            findTimer: null,
            curTime: null,
            canSelect: false
        }
    }

    failResult = () => {
        const {incrementFailTimes, findMole, changeUpdateTime, annuleTimer, state, changeGameState, changeGameResult} = this.props;
        if(this.state.canSelect) {
            let cell = Array.from(document.getElementsByClassName("onClick-element"))[state.moleArray.filter(el => el.isMole===true)[0].id-1];
            cell.style.backgroundColor = "red";
            this.setState({canSelect: false});
            incrementFailTimes();
            this.stopTimer();
            setTimeout(() => {
                if(state.failTimes>=5){
                    console.log("IMA HERE DUDE!");
                    changeGameState();
                    console.log("AND HERE!");
                    changeGameResult("lose");
                    console.log("DUDE?!?!??!!");
                }else {
                    findMole();
                    changeUpdateTime();
                    annuleTimer();
                    this.startTimer();
                    cell.style.backgroundColor = "#e5e5e5";
                    this.setState({canSelect: true});
                }
            }, 1000);

        }
    };

    successResult = (cell) => {
        const {state, changeScore, changeGameDifficulty , findMole, changeUpdateTime, annuleTimer, changeGameState, changeGameResult} = this.props;
        if(this.state.canSelect) {
            cell.style.backgroundColor = "green";
            this.setState({canSelect: false});
            changeScore(1);
            this.stopTimer();
            if(state.score.current===state.score.max){
                changeGameState();
                changeGameResult("win");
            }else {
                changeGameDifficulty(1 + Math.floor(state.score.current / 20));
                setTimeout(() => {
                    findMole();
                    changeUpdateTime();
                    annuleTimer();
                    this.startTimer();
                    cell.style.backgroundColor = "#e5e5e5";
                    this.setState({canSelect: true});
                }, 1000);
            }
        }
    };

    getTimer = () => {
        return this.state.findTimer;
    };

    stopTimer = () => {
        clearInterval(this.state.findTimer);
    };

    startTimer = () => {
      const {liveTimer} = this.props;
      this.setState({canSelect: true});
      const findTimer = setInterval(()=>{
          liveTimer();
          this.checkForLose();
      }, 10);
      this.setState({findTimer: findTimer});
    };

    checkForLose = () => {
        if(this.state.curTime<=0){
            this.failResult();
        }
    };

    getCurrentTime = (value) => {
       this.setState({curTime: value});
    } ;

    render(){
        return(
            <div className="subContainer">

                <ActionField findTimer={this.getTimer()}
                             startTimer={this.startTimer}
                             stopTimer={this.stopTimer}
                             failResult={this.failResult}
                             successResult={this.successResult}
                />
                <GameInterface findTimer={this.getTimer()}
                               startTimer={this.startTimer}
                               stopTimer={this.stopTimer}
                               getCurrentTime={this.getCurrentTime}/>

            </div>
        )
    }
}

const putStateToProps = (state) => {
  return {
      state: state
  }
};

const putActionToProps = (dispatch) => {
   return {
       liveTimer: bindActionCreators(liveTimer, dispatch),
       incrementFailTimes: bindActionCreators(incrementFailTimes, dispatch),
       findMole: bindActionCreators(findMole, dispatch),
       changeUpdateTime: bindActionCreators(changeUpdateTime, dispatch),
       changeGameDifficulty: bindActionCreators(changeGameDifficulty, dispatch),
       annuleTimer: bindActionCreators(annuleTimer, dispatch),
       changeScore: bindActionCreators(changeScore, dispatch),
       changeGameState: bindActionCreators(changeGameState, dispatch),
       changeGameResult: bindActionCreators(changeGameResult, dispatch),
   }
};

export default connect(putStateToProps, putActionToProps)(gameField);