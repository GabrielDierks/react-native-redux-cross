/**
 * Created by gdierks on 07.04.18.
 */

import React, { Component } from 'react';


export default class MainScreen extends Component {
    componentWillMount() {
        alert('Private home is at: ' + this.props.location.pathname)
    }

    render() {
        return (
                <button onClick={this.props.logout}>Logout Here!</button>
        )

    }
}
