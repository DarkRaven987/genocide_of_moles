import React from 'react';

import './index.css';

class gameInterface extends React.Component {
    render(){
        const {storage} = this.props;
        return (
            <div className="gameInterface">
                <h1 className="interfaceHeader">STATUS BAR</h1>
                <div className="interfaceData">
                    <h1>Game difficult: {storage.gameDifficult}</h1>
                    <h1>Score: {storage.score.current}/{storage.score.max}point(s)</h1>
                    <h1>You failed: {storage.failTimes} time(s)</h1>
                    <h1>Time: {storage.currentTime} ms</h1>
                </div>
                <button className="StartButton" onClick = { start }>Start</button>
            </div>
        )
    }
};

const start = () => {
    console.log("Hello there! It`s time to play the game!");
};

export default gameInterface;