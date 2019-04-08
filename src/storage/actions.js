export const findMole = () => {
    return {
        type: "FIND_MOLE"
    }
};

export const makeGameHarder = () => {
    return {
        type: "HARDER"
    }
};

export const makeGameEasier = () => {
    return {
        type: "EASIER"
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