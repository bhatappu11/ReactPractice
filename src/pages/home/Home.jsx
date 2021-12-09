import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>React features</h2>
            <div>
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none"}} to="/state">STATE</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
