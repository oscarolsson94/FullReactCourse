import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'react';

const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer
});

export default allReducers;

