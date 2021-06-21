import {createAuthProvider} from 'react-token-auth';
import React, { useEffect, useState } from "react";
import Interest from "./interest";

export const [useAuth, authFetch, login, logout] =
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch('/api/refresh', {
            method: 'POST',
            body: token.access_token
        })
        .then(r => r.json())
    });

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logged] = useAuth();

    const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed login")
    let opts = {
        'username': username,
        'password': password
    }
    console.log(opts)
    fetch('/api/login', {
        method: 'post',
        body: JSON.stringify(opts)
    }).then(r => r.json())
    .then(token => {
        if (token.access_token){
            login(token)
            console.log(token)          
        }
        else {
            console.log("Please type in correct username/password")
        }
        })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

  return (
    <div>
      <h2>Login</h2>
      {!logged? <form action="#">
        <div>
          <input type="text" 
            placeholder="Username" 
            onChange={handleUsernameChange}
            value={username} 
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <button onClick={onSubmitClick} type="submit">
          Login Now
        </button>
      </form>
      : 
      <div>
        <Interest />
        <button onClick={() => logout()}>Logout</button>
      </div>
}
    </div>
  )
}

export default Login;
