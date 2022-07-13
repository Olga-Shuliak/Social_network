import {AllActions, AppStateType, AppStoreType} from './types';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
// const SEND_MESSAGE = 'SEND-MESSAGE'


let store: AppStoreType = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, message: 'feel good', likeCount: 10},
        {id: 2, message: 'win!!!', likeCount: 5},
        {id: 3, message: 'aloha', likeCount: 1},
        {id: 4, message: 'all serious', likeCount: 7}
      ],
      newPostText: 'hello'
    },
    messagesPage: {
      dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Olia'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Gena'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Zakhar'}
      ],
      messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What about tomorrow?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber(state: AppStateType) {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель, патерн, publisher-subscriber
  },


  dispatch(action: AllActions) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }
}

//-----------------Creators----------------------------------------------------------

// export const addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST' // можно вынести в переменную
//   } as const
// }
// // более короткая запись:
// //export const addPostActionCreator = ()=> ({type: 'ADD-POST'})
// export const updateNewPostTextActionCreator = (text: string) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: text
//   } as const
// }

// export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'}) as const
// export const updateNewMessageBodyCreator = (body: string) =>
//     ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body}) as const



export default store;

