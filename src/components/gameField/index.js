import React from 'react';

import './index.css';
import ActionField from '../actionField';
import GameInterface from '../gameInterface';

const gameField = (props) => {
    const {storage} = props;
    return(
        <div className="subContainer">

            <ActionField storage = {storage}/>

            <GameInterface storage = {storage}/>

        </div>
    )
};

export default gameField;