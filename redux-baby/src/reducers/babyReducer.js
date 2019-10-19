import { createStore } from "redux";
import { feed, soothe, changeDiaper } from '../actions/babyActions';


// Setting your intital state
const initialState = {
    crying: "yes",
    hungry: "yes",
    remainingChanges: 6
}

// REDUCER --> handles your state changes, switches the action depending on its name

const babyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FEED':
            return {...state, hungry: "no" }
        case 'SOOTHE':
            return {...state, crying: "no" }
        case 'CHANGE_DIAPER':
            return {...state, remainingChanges: Math.max(0, state.remainingChanges - action.diaperChanges)
                    
                    }
        default: 
            return state;
    }
}

const store = createStore(babyReducer, initialState)
console.log('Initial state', store.getState())

store.subscribe(() => console.log('Updated state', store.getState()))
const newBaby = store.getState();
console.log(newBaby)
store.dispatch(feed())

export default babyReducer;