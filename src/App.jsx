import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route path="/dialogs" render={()=><Dialogs messagesData={props.state.dialogsPage.messagesData} dialogsData={props.state.dialogsPage.dialogsData}/>}/>
          <Route path="/profile" render={()=><Profile postData={props.state.profilePage.postData}/>}/>
          <Route path="/news" render={()=><News/>}/>
          <Route path="/music" render={()=><Music/>} />
          <Route path="/settings" render={()=><Settings/>}/>
        </div>
      </div>
  );
}

export default App;