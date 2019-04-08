import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux/es/redux";

import mole_true from "../../img/mole_true.png";
import mole_null from "../../img/mole_null.png";
import './index.css';
import {incrementFailTimes, changeScore, changeGameDifficulty, findMole} from '../../storage/actions'

class actionField extends React.Component{

    checkForMole = (element) => {
        const {storage, changeScore, changeGameDifficulty , incrementFailTimes, findMole } = this.props;
        if(element.isMole){
            changeScore(5);
            changeGameDifficulty(1+Math.floor(storage.score.current/20));
            findMole();

        }else{
            changeScore(-5);
            incrementFailTimes();
        }
    };

    render(){
        const {storage} = this.props;
        return (
            <div className="Game-Field">
                {
                    storage.moleArray.map(el => {
                        return (
                            <div className="onClick-element" onClick={() => this.checkForMole(el)} key = {el.id}>
                                {el.isMole ? <img src={mole_true} alt="mole_true"/> : <img src={mole_null} alt="mole_null"/>}
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        state: state
    }
};

const putDispatchToProps = (dispatch) => {
    return {
        incrementFailTimes: bindActionCreators(incrementFailTimes, dispatch),
        changeScore: bindActionCreators(changeScore, dispatch),
        changeGameDifficulty: bindActionCreators(changeGameDifficulty, dispatch),
        findMole: bindActionCreators(findMole, dispatch)
    }
};

export default connect( putStateToProps , putDispatchToProps)(actionField);