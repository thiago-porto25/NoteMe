import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import FirebaseContext from "./context/firebaseContext"
import * as firebase from "./firebase/config"
import App from "./App"

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={{ ...firebase }}>
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
)
