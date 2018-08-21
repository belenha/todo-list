import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB4SK1UvlCZgbEofiD0gGTCgtaW1xhBJeQ",
    authDomain: "react-list-90d3b.firebaseapp.com",
    databaseURL: "https://react-list-90d3b.firebaseio.com",
    projectId: "react-list-90d3b",
    storageBucket: "react-list-90d3b.appspot.com",
    messagingSenderId: "864239152448"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();