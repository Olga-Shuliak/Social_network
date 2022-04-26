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
      ]
    }
  },
  getState() {
    return this._state;
  },
  renderEntireTree(state:any) {
    console.log('State changed');
  },
  addNewPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this.renderEntireTree(this._state);
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this.renderEntireTree(this._state);
  },
  subscribe(observer:any) {
    this.renderEntireTree = observer; // наблюдатель, патерн, publisher-subscriber
  }
}




export default store;

