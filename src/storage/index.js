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
    currentTime: 0,
    updateTime: 4000
};

const reducer = (store=storage, action) => {
    switch(action.type){
        case "FIND_MOLE":
            store.moleArray.map(el => el.isMole = false);
            store.moleArray[Math.floor(Math.random() * (5))].isMole = true;
            return store;
        case "HARDER":
            return {
                ...store, gameDifficult: action.payload
            };
        case "EASIER":
            return {
                ...store, gameDifficult: action.payload
            };
        case "CHANGE_SCORE":
            store.score.current += action.payload;
            return store;
        case "FAIL":
            return {
                ...store, failTimes: store.failTimes += 1
            };
        case "INCREMENT_TIMER":
            return {
                ...store,
                currentTime:  store.currentTime+10/1000
            };
        case "UPDATE_TIME":
            switch(store.gameDifficult){
                case 1:
                    return {
                        ...store,
                        updateTime: 4000
                    };
                case 2:
                    return {
                        ...store,
                        updateTime: 3500
                    };
                case 3:
                    return {
                        ...store,
                        updateTime: 3000
                    };
                case 4:
                    return {
                        ...store,
                        updateTime: 2000
                    };
                case 5:
                    return {
                        ...store,
                        updateTime: 1000
                    };
                default:
                    return store;
            }
        default:
            return store;
    }
};

export default reducer;