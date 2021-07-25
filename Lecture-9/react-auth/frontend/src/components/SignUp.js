import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function SignUp() {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")
    
    const history = useHistory();
    
    async function signUpHandler(e) {

        e.preventDefault();

        try {
            const registeredData = {
                email,
                password,
                passwordVerify
            }
    
            await axios.post('/register', registeredData);
            
            history.push('/login');

        }
        catch (e) {
            console.log(e);
        }

    }


    return (
        <div>
            <h1>Register Yourself</h1>
            <form onSubmit={signUpHandler}>
                <input type="text"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input type="password"
                    placeholder="Verify Password"
                    onChange={(e)=>setPasswordVerify(e.target.value)}
                />
                <button>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;
