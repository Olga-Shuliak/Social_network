import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';

import {MessageItem} from './components/Messages/Message/MessageItem';
import {MessagesContainer} from './components/Messages/MessagesContainer';
import {Users} from './components/Users/Users';



function App() {


  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>

            <Route path="/profile"
                   element={<Profile
                       // postsData={props.store._state.profilePage.postsData}
                       // newPostText={props.store._state.profilePage.newPostText}
                       // dispatch={props.dispatch}
                       //store={props.store}
                   />}/>

            <Route path="/messages/*"
                   element={<MessagesContainer
                       // dialogsData={props.state.messagesPage.dialogsData}
                       // messagesData={props.state.messagesPage.messagesData}
                       //store={props.store}
                   />}/>

            <Route path="/messages/:id" element={<MessageItem/>}/>

            <Route path="/users" element={<Users/>}/>

            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>

            {/*<Route path="/*" element={<div>404</div>}/>*/}

          </Routes>
        </div>

      </div>
  );
}

export default App;
