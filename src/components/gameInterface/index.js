import React from 'react';

import './index.css';

const gameInterface = (props) => {
    const {storage} = props;

    return (
        <div className="gameInterface">
            <h1 className="interfaceHeader">STATUS BAR</h1>
            <div className="interfaceData">
                <h1>Game difficult: {storage.gameDifficult}</h1>
                <h1>Score: {storage.score.current}/{storage.score.max}point(s)</h1>
                <h1>You failed: {storage.failTimes} time(s)</h1>
                <h1>Time: {storage.currentTime} ms</h1>
            </div>
        </div>
    )
};

export default gameInterface;