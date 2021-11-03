import countReducer from './Count';
import personReducer from './Person';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    count: countReducer,
    person: personReducer
});
export default rootReducer;

