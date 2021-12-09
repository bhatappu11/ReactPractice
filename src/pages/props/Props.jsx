import React,{useState} from 'react'
import Child from '../../components/child/Child';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Props() {
    const [message,setMessage] = useState("");
    const handleClick = (msg) => {
        setMessage(msg);        
    }
    return (
        <div>
            <h3>This is parent</h3>
            <button onClick={()=>handleClick("hello people")}>call child</button>
            <Child msg={message}/>
            <div style={{padding: '10px'}}><Link style={{ textDecoration: "none"}} to="/">HOME</Link></div> 
        </div>
    )
}

export default Props
