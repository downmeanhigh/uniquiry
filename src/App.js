import React, { useEffect, useState } from "react";
import {authFetch, useAuth} from "./components/authenticate"
import Login from "./components/login.js"
import Register from "./components/register.js"
import Profile from "./components/profile.js";
import Homepage from "./components/homepage.js";
import biz_anal from "./components/Course Pages/biz_anal.js";
import cs from "./components/Course Pages/cs.js";
import aero_eng from "./components/Course Pages/aero_eng.js";
import app_phy from "./components/Course Pages/app_phy";
import bio_sci from "./components/Course Pages/bio_sci";
import bioeng from "./components/Course Pages/bioeng";
import biomed_eng from "./components/Course Pages/biomed_eng";
import chem_bio_sci from "./components/Course Pages/chem_bio_sci";
import chem_eng from "./components/Course Pages/chem_eng";
import chem from "./components/Course Pages/chem";
import civil_eng from "./components/Course Pages/civil_eng";
import comp_eng from "./components/Course Pages/comp_eng";
import dsa from "./components/Course Pages/dsa";
import dsai from "./components/Course Pages/dsai";
import dse from "./components/Course Pages/dse";
import eee from "./components/Course Pages/eee";
import eng_sci from "./components/Course Pages/eng_sci";
import env_eng from "./components/Course Pages/env_eng";
import env_sci from "./components/Course Pages/env_sci";
import food from "./components/Course Pages/food";
import iem from "./components/Course Pages/iem";
import info_sec from "./components/Course Pages/info_sec";
import info_sys from "./components/Course Pages/info_sys";
import ise from "./components/Course Pages/ise";
import life from "./components/Course Pages/life";
import math_sci from "./components/Course Pages/math_sci";
import math from "./components/Course Pages/math";
import mech_eng from "./components/Course Pages/mech_eng";
import ms from "./components/Course Pages/ms";
import mse from "./components/Course Pages/mse";
import phar from "./components/Course Pages/phar";
import pharm_sci from "./components/Course Pages/pharm_sci";
import phy from "./components/Course Pages/phy";
import qf from "./components/Course Pages/qf";
import stats from "./components/Course Pages/stats";

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
          <PrivateRoute path="/aero_eng" component={aero_eng}/>
          <PrivateRoute path="/app_phy" component={app_phy}/>
          <PrivateRoute path="/bio_sci" component={bio_sci}/>
          <PrivateRoute path="/bioeng" component={bioeng}/>
          <PrivateRoute path="/biomed_eng" component={biomed_eng}/>
          <PrivateRoute path="/chem_bio_sci" component={chem_bio_sci}/>
          <PrivateRoute path="/chem_eng" component={chem_eng}/>
          <PrivateRoute path="/chem" component={chem}/>
          <PrivateRoute path="/civil_eng" component={civil_eng}/>
          <PrivateRoute path="/comp_eng" component={comp_eng}/>
          <PrivateRoute path="/dsa" component={dsa}/>
          <PrivateRoute path="/dsai" component={dsai}/>
          <PrivateRoute path="/dse" component={dse}/>
          <PrivateRoute path="/eee" component={eee}/>
          <PrivateRoute path="/eng_sci" component={eng_sci}/>
          <PrivateRoute path="/env_eng" component={env_eng}/>
          <PrivateRoute path="/env_sci" component={env_sci}/>
          <PrivateRoute path="/food" component={food}/>
          <PrivateRoute path="/iem" component={iem}/>
          <PrivateRoute path="/info_sec" component={info_sec}/>
          <PrivateRoute path="/info_sys" component={info_sys}/>
          <PrivateRoute path="/ise" component={ise}/>
          <PrivateRoute path="/life" component={life}/>
          <PrivateRoute path="/math_sci" component={math_sci}/>
          <PrivateRoute path="/math" component={math}/>
          <PrivateRoute path="/mech_eng" component={mech_eng}/>
          <PrivateRoute path="/ms" component={ms}/>
          <PrivateRoute path="/mse" component={mse}/>
          <PrivateRoute path="/phar" component={phar}/>
          <PrivateRoute path="/pharm" component={pharm_sci}/>
          <PrivateRoute path="/phy" component={phy}/>
          <PrivateRoute path="/qf" component={qf}/>
          <PrivateRoute path="/stats" component={stats}/>

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