import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// export type PostsDataType = {
//   id: number
//   message: string
//   likeCount: number
// }

let postsData = [
  {id: 1, message: 'Hi how are you?', likeCount: 10},
  {id: 2, message: 'hello bro', likeCount: 5},
  {id: 3, message: 'alloha', likeCount: 1},
  {id: 4, message: 'yo bro', likeCount: 7}
]

let dialogsData = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Olia'},
  {id: 3, name: 'Sasha'},
  {id: 4, name: 'Gena'},
  {id: 5, name: 'Sveta'},
  {id: 6, name: 'Zakhar'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'What about tomorrow?'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'}
]

ReactDOM.render(
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
