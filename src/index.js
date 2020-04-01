import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import {addPost, updateNewPostText, subscribe} from './Redux/State';

 let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} 
            updateNewPostText = {updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)





serviceWorker.unregister();
