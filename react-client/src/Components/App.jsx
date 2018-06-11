import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './Pages/HomePage'
import House from './Pages/House'
import NavBar from './HeaderComponent/NavBar'
import Footer from './FooterComponent/Footer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name = "home" exact path="/" component = { HomePage } />
                    <Route name = "house" exact path="/house" component = { House } />                
                </div>
            </Router>
        )
    }
}

export default App