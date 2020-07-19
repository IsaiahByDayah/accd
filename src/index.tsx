// If you don't use bootstrap.ts feel free to remove this line
import "bootstrap"

import React from "react"
import ReactDOM from "react-dom"

import App from "App"
import * as serviceWorker from "serviceWorker"

// FIREBASE IMPORTS
import * as firebase from "firebase/app"
import "firebase/analytics"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/database"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

if (process.env.NODE_ENV === "development") {
    // MARK: Connect to local RTDB eumilator
    firebaseConfig.databaseURL = `http://localhost:9000?ns=${process.env.REACT_APP_PROJECT_ID}`
}

firebase.initializeApp(firebaseConfig)

if (process.env.NODE_ENV === "development") {
    // MARK: connect to local Firestore emulator
    const db = firebase.firestore()
    if (window.location.hostname === "localhost") {
        db.settings({
            host: "localhost:8080",
            ssl: false,
        })
    }

    // MARK: connect to local Firebase Functions emulator
    firebase.functions().useFunctionsEmulator("http://localhost:5001")
}

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
