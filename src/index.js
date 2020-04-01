import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import {rerenderEntireTree} from './Render';

rerenderEntireTree(state);

serviceWorker.unregister();
