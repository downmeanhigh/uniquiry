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
          <PrivateRoute path="/biz_anal" component={Biz_anal}/>
          <PrivateRoute path="/cs" component={Cs}/>
          <PrivateRoute path="/aero_eng" component={Aero_eng}/>
          <PrivateRoute path="/app_phy" component={App_phy}/>
          <PrivateRoute path="/bio_sci" component={Bio_sci}/>
          <PrivateRoute path="/bioeng" component={Bioeng}/>
          <PrivateRoute path="/biomed_eng" component={Biomed_eng}/>
          <PrivateRoute path="/chem_bio_sci" component={Chem_bio_sci}/>
          <PrivateRoute path="/chem_eng" component={Chem_eng}/>
          <PrivateRoute path="/chem" component={Chem}/>
          <PrivateRoute path="/civil_eng" component={Civil_eng}/>
          <PrivateRoute path="/comp_eng" component={Comp_eng}/>
          <PrivateRoute path="/dsa" component={Dsa}/>
          <PrivateRoute path="/dsai" component={Dsai}/>
          <PrivateRoute path="/dse" component={Dse}/>
          <PrivateRoute path="/eee" component={Eee}/>
          <PrivateRoute path="/eng_sci" component={Eng_sci}/>
          <PrivateRoute path="/env_eng" component={Env_eng}/>
          <PrivateRoute path="/env_sci" component={Env_sci}/>
          <PrivateRoute path="/food" component={Food}/>
          <PrivateRoute path="/iem" component={Iem}/>
          <PrivateRoute path="/info_sec" component={Info_sec}/>
          <PrivateRoute path="/info_sys" component={Info_sys}/>
          <PrivateRoute path="/ise" component={Ise}/>
          <PrivateRoute path="/life" component={Life}/>
          <PrivateRoute path="/math_sci" component={Math_sci}/>
          <PrivateRoute path="/math" component={Math}/>
          <PrivateRoute path="/mech_eng" component={Mech_eng}/>
          <PrivateRoute path="/ms" component={Ms}/>
          <PrivateRoute path="/mse" component={Mse}/>
          <PrivateRoute path="/phar" component={Phar}/>
          <PrivateRoute path="/pharm" component={Pharm_sci}/>
          <PrivateRoute path="/phy" component={Phy}/>
          <PrivateRoute path="/qf" component={Qf}/>
          <PrivateRoute path="/stats" component={Stats}/>

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