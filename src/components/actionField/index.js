import React from 'react';

import mole_true from "../../img/mole_true.png";
import mole_null from "../../img/mole_null.png";
import './index.css';

const actionField = (props) => {
    const {storage} = props;
    return (
        <div className="Game-Field">
            {
                storage.moleArray.map(el => {
                    return (
                        <div className="onClick-element" key = {el.id}>
                            {el.isMole ? <img src={mole_true} alt="mole_true"/> : <img src={mole_null} alt="mole_null"/>}
                        </div>
                    );
                })
            }
        </div>
    )
};

export default actionField;