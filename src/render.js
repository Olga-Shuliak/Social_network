import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost, updateNewPostText} from './redux/state';



export let renderEntireTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>,
      document.getElementById('root')
  );
}

