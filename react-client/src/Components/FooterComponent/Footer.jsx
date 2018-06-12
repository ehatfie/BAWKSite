import React, { Component } from 'react'

class Footer extends Component {
    render() {
        retrn (
            <footer>
                 <ul id = "footerButtons">
                    <li className = "footButton"><Link to = "">Home</Link></li>
                    <li className = "footButton2"><Link to = "/House">House</Link></li>
                </ul>
            </footer>
        )
    }
}

export default Footer