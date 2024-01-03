import * as api from "../api";

export const getUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUser(id);
        return data;
    } catch (error) {
        console.log(error.message);
    }
};