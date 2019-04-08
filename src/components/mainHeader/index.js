import React from 'react';

import './index.css';

const mainHeader = (props) => {
    const {incrementFailTimes} = props;
    return(
        <div className="App-header" onClick={() => incrementFailTimes()}>
            GENOCIDE OF MOLES
        </div>
    )
};


export default mainHeader;