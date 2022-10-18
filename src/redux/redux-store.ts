import {combineReducers, legacy_createStore} from 'redux';
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

let store = legacy_createStore(reducers);
// @ts-ignore
window.store = store.getState()
export default store;
