import babyReducer from './babyReducer';
import loggedReducer from './loggedReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    baby: babyReducer,
    isLogged: loggedReducer
})

export default allReducers;