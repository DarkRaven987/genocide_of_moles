const storage = {
    moleArray: [
        {id: 1, isMole: false},
        {id: 2, isMole: false},
        {id: 3, isMole: false},
        {id: 4, isMole: false},
        {id: 5, isMole: false},
        {id: 6, isMole: false},
        ],
    gameDifficult: 1,
    score: { current: 0, max: 100},
    failTimes: 0,
    currentTime: 0
};

const reducer = (store=storage, action) => {
    switch(action.type){
        case "GENERATE_MOLE_ARRAY":
            break;
        default:
            return store;
    }
};

export default reducer;