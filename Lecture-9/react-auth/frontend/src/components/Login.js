import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const history = useHistory();
    
    async function loginHandler(e) {
        e.preventDefault();

        try {

            const loginData = {
                email,
                password,
            }

            await axios.post('/login', loginData);
            history.push('/');
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input type="text"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
               <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
