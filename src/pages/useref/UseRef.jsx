import React,{ useRef } from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function UseRef() {
    const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");
    return (
        <div>
            <button onClick={handle}>Click me</button>

            <div style={{padding: '10px'}}><Link style={{ textDecoration: "none"}} to="/">HOME</Link></div> 
        </div>
    )
}

export default UseRef
