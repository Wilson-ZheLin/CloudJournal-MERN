const reducers = (state = null, action) => {
    switch (action.type) {
        case "GET_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default reducers;
