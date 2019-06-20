import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartItem from './components/CartItem';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CartItem />, document.getElementById('minicart'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
