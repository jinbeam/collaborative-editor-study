import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDprZZLYjITs1s8QLI-bqsYfhosa0pNSHI",
    authDomain: "collaborative-b55c9.firebaseapp.com",
    databaseURL: "https://collaborative-b55c9-default-rtdb.firebaseio.com",
    projectId: "collaborative-b55c9",
    storageBucket: "collaborative-b55c9.appspot.com",
    messagingSenderId: "871539649079",
    appId: "1:871539649079:web:cb3bc09b7963f9e8d82db2",
    measurementId: "G-MMZX5LV26D"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
firebase.analytics();

module.exports = database;