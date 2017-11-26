import React, { Component } from 'react'

export default class Toggle extends Component {
    render() {
        return (
            <button onClick={this.props.onTogle}>
                {this.props.isToggled ? 'With parameters' : 'With out parameters'}
            </button>
        );
    }
}
