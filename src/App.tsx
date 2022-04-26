import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';



type AppPropsType = {
  state: any
  addNewPost: (newPost: string) => void
  updateNewPostText: (newText: string)=> void
}

function App(props: AppPropsType) {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Routes>

            <Route path="/profile"
                   element={<Profile
                       postsData={props.state.profilePage.postsData}
                       newPostText={props.state.profilePage.newPostText}
                       updateNewPostText={props.updateNewPostText}
                       addNewPost={props.addNewPost}/>}/>
            <Route path="/messages/*"
                   element={<Messages
                       dialogsData={props.state.messagesPage.dialogsData}
                       messagesData={props.state.messagesPage.messagesData}/>}/>
            {/*<Route path="/messages/:id" element={<MessageItem/>}/>*/}
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
