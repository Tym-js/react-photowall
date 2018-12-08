import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import "./styles.css"

const App = () => <Main />

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
