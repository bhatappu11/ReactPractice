import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand: 'Ford',
            color: 'white',
            model: '2015'
        }
    }
    handleColor = () => {
        this.setState({color: 'blue'});
    }
    render() {
        return (
            <div>
                <h2>Car is: {this.state.brand}</h2>
                <h4>Features</h4>
                <p>color is {this.state.color} and model is {this.state.model}</p>
                <button onClick={this.handleColor}>Change color</button>
                <div style={{padding: '10px'}}><Link style={{ textDecoration: "none"}} to="/">HOME</Link></div>                
            </div>
        )
    }
}
