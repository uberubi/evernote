import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyA9yGmgjdOpSuY63bF6P0ClD0G5Yz5Gdf0",
  authDomain: "evernote-81afa.firebaseapp.com",
  databaseURL: "https://evernote-81afa.firebaseio.com",
  projectId: "evernote-81afa",
  storageBucket: "evernote-81afa.appspot.com",
  messagingSenderId: "258039881340",
  appId: "1:258039881340:web:c47c1649cbb65b5d3973f9",
  measurementId: "G-NS6VF2X871",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("evernote-container")
);