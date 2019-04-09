import React from 'react';
import {connect} from "react-redux";

import mole_true from "../../img/mole_true.png";
import mole_null from "../../img/mole_null.png";
import './index.css';

class actionField extends React.Component{

    checkForMole = (element) => {
            if(element.isMole){
                const cell = document.getElementsByClassName("onClick-element")[element.id-1];
                this.props.successResult(cell)
            }else {
                this.props.failResult();
            }
    };

    render(){
        const {state} = this.props;
        return (
            <div className="Game-Field">
                {
                    state.moleArray.map(el => {
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


export default connect( putStateToProps )(actionField);