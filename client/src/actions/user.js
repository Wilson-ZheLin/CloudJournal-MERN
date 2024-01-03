import * as api from "../api";

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUser(id);
        dispatch({ type: "GET_USER", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};