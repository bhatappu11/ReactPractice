import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class Class extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'black'
        }
    }
    handleColor = () =>{
        this.setState({color: 'blue'});
    }
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>Demonstrating class components</h1>
                <button onClick={this.handleColor}>click me</button>
                <div style={{padding: '10px'}}><Link style={{ textDecoration: "none"}} to="/">HOME</Link></div> 
            </div>
        )
    }
}
