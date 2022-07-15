import {combineReducers, createStore} from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';


export type RootStateType = ReturnType<typeof reducers>
export type RootStoreType = typeof store

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;
