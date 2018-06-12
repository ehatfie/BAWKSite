import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Tabs extends Component {

    constructor(props){
        super(props)
        this.state = this.getInitialState()
    }
    getDefaultProps(){
        return {
            selected: 0
        }
    }

    getInitialState(){
        return{
            selected: this.props.selected
        }
    }

    handleClick(index, event) {
        event.preventDefault()
        this.setState({
            selected: index
        })
    }

    _renderTitles(){
        var labels = (child, index) => {
            let activeClass = (this.state.selected === index ? 'active' : '')
            return (
                <li key={index}>
                    <a href="#"
                    className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
            )
        }
        return (
            <ul className="tabs__labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        )
    }

    _renderContent(){
        return(
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        )
    }

    render() {
        return (
            <div className = "Tabs">
            {this._renderTitles()}
            {this._renderContent()}
            </div>
        )
    }
}

Tabs.propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired,
}

export default Tabs