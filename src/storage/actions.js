export const findMole = () => {
    return {
        type: "FIND_MOLE"
    }
};

export const changeGameDifficulty = (value) => {
    return {
        type: "HARDER",
        payload: value
    }
};

export const changeGameState = () => {
    return {
        type: "CHANGE_GAME_STATE"
    }
};

export const changeGameResult = (value) => {
    return {
        type: "CHANGE_GAME_RESULT",
        payload: value
    }
};


export const changeScore = ( value ) => {
    return {
        type: "CHANGE_SCORE",
        payload: value
    }
};

export const incrementFailTimes = () => {
    return {
        type: "FAIL"
    }
};

export const liveTimer = () => {
    return {
        type: "INCREMENT_TIMER"
    }
};

export const annuleTimer = () => {
    return {
        type: "ZERO_TIMER"
    }
};

export const changeUpdateTime = (value) => {
    return {
        type: "UPDATE_TIME",
        payload: value
    }
};

export const resetGlobal = () => {
    return {
        type: "RESET_GLOBAL"
    }
}