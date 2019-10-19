import { createStore } from 'redux';
import allReducers from './reducers';

// STORE --> your globalized state: holds all data/ state of our app

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;