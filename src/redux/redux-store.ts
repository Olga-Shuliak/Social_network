import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import usersReducer from './reducers/usersReducer';


export type RootStateType = ReturnType<typeof reducers>
export type RootStoreType = typeof store

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
