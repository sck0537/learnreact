import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



import countReducer from './reducers/reducer';


export default createStore(countReducer,applyMiddleware(thunk));