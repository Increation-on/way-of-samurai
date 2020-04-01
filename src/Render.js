import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './Redux/State';
import {updateNewPostText} from './Redux/State'

export let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

serviceWorker.unregister();
