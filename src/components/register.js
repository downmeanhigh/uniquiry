import React, { useEffect, useState } from "react";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('');
  
    const onSubmitClick = (e)=>{
      e.preventDefault()
      console.log("You pressed register")
      let opts = {
        'username': username,
        'password': password,
        'email': email,
        'firstname': firstname,
        'lastname': lastname,
      }
      console.log(opts)
      fetch('/api/register', {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(r => r.json())
      .then(
        result => {console.log(result)
        }
      )
    }
    
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value)
    }

    const handleLastnameChange = (e) => {
        setLastname(e.target.value)
    }
  
    return (
      <div>
        <h2>Register</h2>
        <form action="#">
          <div>
            <input type="text" 
              placeholder="New Username" 
              onChange={handleUsernameChange}
              value={username} 
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="New Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleFirstnameChange}
              value={firstname}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastnameChange}
              value={lastname}
            />
          </div>
          <button onClick={onSubmitClick} type="submit">
            Register
          </button>
        </form>
      </div>
    )
  }

export default Register;