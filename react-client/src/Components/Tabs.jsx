import React, { Component } from 'react'

const Tabs = React.createClass({
    displayName: 'Tabs',
    getDefaultProps(){
        return {
            selected: 0
        }
    },

    getInitialState(){
        return{
            selected: this.props.selected
        }
    },

    handleClick(index, event) {
        event.preventDefault()
        this.setState({
            selected: index
        })
    },

    _renderContent(){
        return(
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        )
    },

    _renderTitles(){
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
    },

    render() {
        return (
            <div className = "tabs">
            {this._renderTitles()}
            {this._renderContent()}
            </div>
        )
    }
})