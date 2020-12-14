import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCyOLG-FKDby4ikwmYbOJ80HcdQJdI8qP4",
  authDomain: "arduino-98c1c.firebaseapp.com",
  databaseURL: "https://arduino-98c1c.firebaseio.com",
  projectId: "arduino-98c1c",
  storageBucket: "arduino-98c1c.appspot.com",
  messagingSenderId: "843318646252",
  appId: "1:843318646252:web:6e2ceeff718c04c8205cc9",
  measurementId: "G-N1XZ9ST4PX"
};



firebase.initializeApp({...firebaseConfig})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

