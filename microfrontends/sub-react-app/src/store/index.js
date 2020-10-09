import { createStore, combineReducers, applyMiddleware } from 'redux';
import PersonReducer from './reducer/personReducer';
import GameReducer from './reducer/gameReducer';
import UserReducer from './reducer/userReducer';
import thunk from 'redux-thunk';

const initalState = {
   game:{name:'Football'},
   person:{name:"Gokul"},
   user:[]
}
const middleware = [thunk];
const allReducer = combineReducers({person:PersonReducer,game:GameReducer,user:UserReducer});
const store = createStore(allReducer,initalState,applyMiddleware(...middleware));



export default store;