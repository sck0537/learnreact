import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'
import countReducer from './reducers/Count';
import personReducer from './reducers/Person';


const rootReducer = combineReducers({
    count: countReducer,
    person: personReducer
});




export default createStore(
    rootReducer,

    composeWithDevTools(applyMiddleware(thunk))
    
);