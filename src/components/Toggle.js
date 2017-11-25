import React, { Component } from 'react'

export default class Toggle extends Component {
    render() {
        console.log(this.props)
        return (
            <button onClick={this.props.onTogle}>
                {this.props.isToggled ? 'ON' : 'OFF'}
            </button>
        );
    }
}
