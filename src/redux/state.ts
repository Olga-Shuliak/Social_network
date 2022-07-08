const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
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
  _callSubscriber(state:any) {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer:any) {
    this._callSubscriber = observer; // наблюдатель, патерн, publisher-subscriber
  },

  // addNewPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 0
  //   };
  //   this._state.profilePage.postsData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  //updateNewPostText(newText: string) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action:any){// {type: 'ADD-POST'}
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messagesData.push({id: 7, message: body})
      this._callSubscriber(this._state);
    }
  }
}

//-----------------Creators----------------------------------------------------------

export const addPostActionCreator = ()=> {
  return {
    type: 'ADD-POST' // можно вынести в переменную
  }
}
// более короткая запись:
//export const addPostActionCreator = ()=> ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text:string)=> {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
  }
}

export const sendMessageCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string)=>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;

