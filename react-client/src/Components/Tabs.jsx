import React, { Component } from 'react'

class Tabs extends Component {
    render() {
        return (
            <div className = "tabs">
            {this._renderTitles()}
            {this._renderContent()}
            </div>
        )
    }
}

Tabs.propTypes = {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
        React.PropTYpes.array,
        React.PropTypes.element
    ]).isRequired
}

function getDefaultProps(){
    return {
        selected: 0
    }
}

function getInitialState(){
    return{
        selected: this.props.selected
    }
}

function handleClick(index, event) {
    event.preventDefault()
    this.setState({
        selected: index
    })
}

function _renderContent(){
    return(
        <div className="tabs__content">
            {this.props.children[this.state.selected]}
        </div>
    )
}

function _renderTitles(){
    function labels (child, index){
        let activeClass = (this.state.selected === index ? 'active' : '')
        return (
            <li key={index}>
                <a href="#"
                className={activeCLass}
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

export default Tabs