import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from './components/SignIn/SignIn'
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" component={SignIn} />

          <Route path="*" component={ErrorPage} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
