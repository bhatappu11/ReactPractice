import React from 'react'
import Child from '../../components/child/Child';

function FuncLifeCycle() {
    const [display,setDisplay] = React.useState(false);
    const handleClick = () => {
        setDisplay((prev) => !(prev));
    }
    return (
        <div>
            <h2>Try it out</h2>
            <button onClick={handleClick}>Click me</button>
            {display && <Child msg={"hello"} />}
        </div>
    )
}

export default FuncLifeCycle
