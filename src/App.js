import React, { useEffect, useState } from "react";
import {login, authFetch, useAuth, logout} from "./components/login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/secret">Secret</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/secret" component={Secret} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  useEffect(() => {
    fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
  }, [])
  return <h2>Home</h2>;
}

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed register")
    let opts = {
      'username': username,
      'password': password
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
        <button onClick={onSubmitClick} type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

function Login() {
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
      : <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}

function Secret() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    authFetch("/api/protected").then(response => {
      if (response.status === 401){
        setMessage("Sorry you aren't authorized!")
        return null
      }
      return response.json()
    }).then(response => {
      if (response && response.message){
        setMessage(response.message)
      }
    })
  }, [])
  return (
    <h2>Secret: {message}</h2>
  )
}