import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD54MLk9VE72Bfdztq8fUjDIkNHUdihfKM",
    authDomain: "duong10-reactjs.firebaseapp.com",
    databaseURL: "https://duong10-reactjs.firebaseio.com",
    projectId: "duong10-reactjs",
    storageBucket: "",
    messagingSenderId: "308021863861",
    appId: "1:308021863861:web:d7a06f4813dcdfa6"
};
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

// firebase.initializeApp(firebaseConfig)