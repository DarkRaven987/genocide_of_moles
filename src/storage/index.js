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
    updateTime: 0,
    gameState: "start",
    gameResult: "None",
};

const reducer = (store=storage, action) => {
    switch(action.type){
        case "FIND_MOLE":
            store.moleArray.map(el => el.isMole = false);
            store.moleArray[Math.floor(Math.random() * (5))].isMole = true;
            return {
                ...store
            };
        case "CHANGE_GAME_STATE":
            switch(store.gameState) {
                case "start":
                    return {
                        ...store,
                        gameState: "playing"
                    };
                case "playing":
                    return {
                        ...store,
                        gameState: "end"
                    };
                case "end":
                    return {
                        ...store,
                        gameState: "start"
                    };
            }
            break;
        case "CHANGE_GAME_RESULT":
            return {
                ...store,
                gameResult: action.payload
            };
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
                currentTime:  store.currentTime+10
            };
        case "ZERO_TIMER":
            return {
                ...store,
                currentTime:  0
            };
        case "UPDATE_TIME":
            switch(store.gameDifficult){
                case 1:
                    return {
                        ...store,
                        updateTime: 2500
                    };
                case 2:
                    return {
                        ...store,
                        updateTime: 2000
                    };
                case 3:
                    return {
                        ...store,
                        updateTime: 1500
                    };
                case 4:
                    return {
                        ...store,
                        updateTime: 850
                    };
                case 5:
                    return {
                        ...store,
                        updateTime: 400
                    };
                default:
                    return store;
            }
        case "RESET_GLOBAL":
            return {
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
                updateTime: 0,
                gameState: "start",
                gameResult: "None",
            };
        default:
            return store;
    }
};

export default reducer;