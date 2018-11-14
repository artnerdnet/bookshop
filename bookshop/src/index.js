import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shelf from './Shelf'
import { BrowserRouter } from 'react-router-dom';
import BookEditor from './BookEditor'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
// registerServiceWorker()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()