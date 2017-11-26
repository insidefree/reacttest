import React, { Component } from 'react'
import Toggle from 'react-toggle'

export default class ToggleWrap extends Component {
    render() {
        return (
            <label>
                <Toggle
                    defaultChecked={this.props.isToggled}
                    onChange={this.props.onToggle} />
            </label>
        );
    }
}
