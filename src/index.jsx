import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import initFirebase from "./firebaseConfig";
import * as firebase from "firebase";


ReactDOM.render(<App />, document.getElementById('root'));
// DO not initfirebase here bacause the App is not yet loaded correctly
// initFirebase();
// try {
//     firebase.auth().onAuthStateChanged((user) => console.log(user))
//   } catch (error) {
//     console.log(error)
//   }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
