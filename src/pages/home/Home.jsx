import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>React features</h2>
            <div>
                    <Link style={{ textDecoration: "none"}} to="/state">STATE</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/props">PROPS</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/functional">FUNCTIONAL_COMPONENTS</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/class">CLASS_COMPONENTS</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/classlifecycle">CLASS_LIFECYCLE</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/funclifecycle">FUNCTION_LIFECYCLE</Link>
                    <span style={{padding:'10px'}}></span>
                    <Link style={{ textDecoration: "none"}} to="/hooks">HOOKS</Link>
                    <span style={{padding:'10px'}}></span>
            </div>
        </div>
    )
}

export default Home
