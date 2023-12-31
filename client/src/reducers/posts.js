import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        case FETCH_BY_SEARCH:
            return {...state, posts: action.payload.data};
        case FETCH_ALL:
            return {...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages};
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case CREATE:
            return [...state, action.payload];
        default:
            return state;
    }
}