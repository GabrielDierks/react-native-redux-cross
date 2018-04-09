/**
 * Created by gdierks on 07.04.18.
 */

import React, { Component } from 'react';


export default class LoginScreen extends Component {
    render() {
        return (
                <button onClick={this.props.login}>Login Here!</button>
        )
    }
}