import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <Dialogs />
      </div>
      {/* <Profile /> */}
    </div>);
}

export default App;