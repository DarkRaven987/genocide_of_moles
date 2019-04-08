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
        case "FIND_MOLE":
            store.moleArray.map(el => el.isMole = false);
            store.moleArray[Math.floor(Math.random() * (5))].isMole = true;
            return store;
        case "HARDER":
            store.gameDifficult++;
            return store;
        case "EASIER":
            store.gameDifficult--;
            return store;
        case "CHANGE_SCORE":
            store.score.current += action.payload;
            return store;
        case "FAIL":
            return {
                ...store, failTimes: store.failTimes += 1
            };
        case "INCREMENT_TIMER":
            store.currentTime++;
            return store;
        default:
            return store;
    }
};

export default reducer;