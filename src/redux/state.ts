import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';
import React from 'react';
import {observe} from 'web-vitals/dist/modules/lib/observe';

let renderEntireTree = (state:RootStateType) => {
console.log('State changed')
}


let state = {
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
}


export type RootStateType = typeof state


export const addNewPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (observer:any) => {
  renderEntireTree = observer; // наблюдатель, патерн, publisher-subscriber
}

export default state;

