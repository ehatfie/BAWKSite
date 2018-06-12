import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Pane extends Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Pane.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default Pane