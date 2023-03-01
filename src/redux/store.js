import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux"; 
import thunk from 'redux-thunk'; 
import userFormReducer from './userform-reducer';
import validationReducer from './validation-reducer';


let reducers = combineReducers({
    userform: userFormReducer,
    validation: validationReducer 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk))); 
  
export default store;

