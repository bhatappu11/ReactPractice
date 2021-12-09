import React,{useEffect,useState} from 'react'

function ReactHooks() {
    const [counter,setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter+1)
    }
    const handleDecrement = () => {
        setCounter(counter-1)
    }
    useEffect(() => {

    },[counter])
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default ReactHooks
