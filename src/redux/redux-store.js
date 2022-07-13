import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
});

let store = createStore(redusers);

export default store;
