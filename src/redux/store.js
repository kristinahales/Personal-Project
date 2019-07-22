import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';


const rootReducer = combineReducers({
    user: userReducer,
    projects: projectsReducer 
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));