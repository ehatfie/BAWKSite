import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {NavBar, NavItem} from 'react-materialize'

class Header extends Component {
    render() {
        return (
            <div>
                <NavBar brand='logo' right>
                    <NavItem><Link to="/Home">Home</Link></NavItem>
                </NavBar>
            </div>
        )
    }
}

export default Header

/*
<header>
                <ul id = "headerButtons">
                    <li className = "navButton"><Link to = "">Home</Link></li>
                    <li className = "navButton2"><Link to = "/House">House</Link></li>
                </ul>
            </header>
*/
