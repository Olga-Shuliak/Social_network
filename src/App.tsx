import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';

import {MessageItem} from './components/Messages/Message/MessageItem';
import {MessagesContainer} from './components/Messages/MessagesContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer';





function App() {


  return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>

            <Route path="/profile/:userId"
                   element={<ProfileContainer  />}/>

            <Route path="/messages/*"
                   element={<MessagesContainer />}/>

            <Route path="/messages/:id" element={<MessageItem/>}/>

            <Route path="/users" element={<UsersContainer />}/>

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
