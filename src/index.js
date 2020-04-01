import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from './Redux/State'




ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root'));


serviceWorker.unregister();
