import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

let renderEntireTree = (state: any) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}
        />
      </BrowserRouter>,
      document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
