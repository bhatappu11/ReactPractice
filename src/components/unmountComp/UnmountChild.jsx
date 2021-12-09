import React, { Component } from 'react'

export class UnmountChild extends Component {
    componentWillUnmount() {
        alert("The myheader component is about to be unmounted.");
    }
    render() {
        return (
            <h1>hello</h1>
        );
    }
}

export default UnmountChild