import React,{useState,useEffect} from 'react'

function Functional() {
    const [counter,setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter+1)
    }
    useEffect(() => {

    },[counter])
    return (
        <div>
            <p>Clicks: {counter}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Functional
