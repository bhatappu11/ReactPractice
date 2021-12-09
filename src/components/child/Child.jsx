import React from 'react'

function Child(props) {
    return (
        <div>
            { props.msg ? 
            <>
            <h3>message receieved from parent</h3>
            <p>{props.msg}</p>
            </>
            : 'message not received'}
        </div>
    )
}

export default Child
