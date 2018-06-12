import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './Pages/HomePage'
import House from './Pages/House'
import NavBar from './HeaderComponent/NavBar'
import Footer from './FooterComponent/Footer'
import Layout from './Layout'
import Tabs from './Tabs'
import Pane from './Pane'

class App extends Component {
    render() {
        return (
            <div>
               <Tabs selected = {1}>
                    <Pane label = "Tab 1">
                        <div> This is tab 1 contents</div>
                    </Pane> 
                    <Pane label = "Tab 2">
                        <div> this is tab 2 stuff</div>
                    </Pane> 
                    <Pane label = "Tab 3">
                        <div> THis is tab3 stuf</div>
                    </Pane>  
              </Tabs>
            </div>
        )
    }
}

export default App

/*
<Router>
        <div>
                    <Footer />
                    <Route name = "home" exact path="/" component = { HomePage } />
                </div>
            </Router>

            return (
            <Router>
                <div>
                    <NavBar />
                    <Route name = "home" exact path="/" component = { HomePage } />
                    <Route name = "house" exact path="/house" component = { House } />                
                    </div>
            </Router>
        )

        <Router>
                <div>
                    <NavBar />
                    <Route name = "home" exact path="/" component = { HomePage } />
                    <Route name = "house" exact path="/house" component = { House } />                
                    </div>
            </Router>

            Tabs selected = {0}>
                    <Pane label = "Tab 1">
                        <div>This is tab 1 contents</div>
                    </Pane> 
                    <Pane label = "Tab 2">
                        <div> this is tab 2 stuff</div>
                    </Pane> 
                    <Pane label = "Tab 3">
                        <div> THis is tab3 stuf</div>
                    </Pane>  
                </Tabs>
*/
