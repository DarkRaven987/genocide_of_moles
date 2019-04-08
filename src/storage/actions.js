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