import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => { //redux thunk for async functions
    
    try {
        const { data } = await api.fetchPosts();

        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }

    
}