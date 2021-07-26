import React, { useEffect, useState } from "react";
import {authFetch, useAuth} from "./components/authenticate"
import Login from "./components/login.js"
import Register from "./components/register.js"
import Profile from "./components/profile.js";
import Homepage from "./components/homepage.js";
import biz_anal from "./components/Course Pages/biz_anal.js";
import cs from "./components/Course Pages/cs.js";
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
        {/* <nav>
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
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/secret" component={Secret} />
          <PrivateRoute path="/biz_anal" component={biz_anal}/>
          <PrivateRoute path="/cs" component={cs}/>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   useEffect(() => {
//     fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
//   }, [])
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

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
    authFetch("/api/suggested").then(response => {
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