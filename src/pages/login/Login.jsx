import React,{ useContext } from 'react'
import AuthContext from '../../AuthContext';

function Login() {
    const auth = useContext(AuthContext);
    console.log(auth.status);
    return (
        <div>
            <h1>Are you authenticated?</h1>
            {auth.status ? 
                <p>Logged in successfully</p>
                : 
                <p>Nopes</p>
            }
            <button onClick={auth.login}>Click to login</button>
        </div>
    )
}

export default Login
