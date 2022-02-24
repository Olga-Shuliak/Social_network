import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages, {MessageItem} from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/messages/*" element={<Messages/>}/>
            {/*<Route path="/messages/:id" element={<MessageItem/>}/>*/}
            <Route path="/news" element={<News/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/settings" element={<Settings/>}/>

            <Route path="/*" element={<div>404</div>}/>
          </Routes>
        </div>

      </div>
  );
}

export default App;
