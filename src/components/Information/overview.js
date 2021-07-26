import React, { useState, useEffect } from "react"
import {authFetch} from "../authenticate";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(49),
  },
}));

const Overview = () => {

    const [details, setDetails] = useState('')
    const [interests, setInterests] = useState('')
    const [results, setResults] = useState('')
      
        useEffect(() => {
          authFetch("/api/overview").then(response => {
            if (response.status === 401){
              return null
            }
            return response.json()
          }).then(response => {
            if (response){
                setDetails(response.details)
                setInterests(response.interests)
                setResults(response.results)
            }
          })
        }, [])
        return (
        <React.Fragment>
          <Grid item xs = {12}>
            <Typography variant="h6" gutterBottom>
              First name, last name, email :
              {details}
            </Typography>
          </Grid>
          <Grid item xs = {12}>
            <Typography variant="h6" gutterBottom>
              List of interests :
              {interests}            
          </Typography>
          </Grid>
          <Grid item xs = {12}>
            <Typography variant="h6" gutterBottom>
              A-Level Result :
              {results}            
          </Typography>
          </Grid>
        </React.Fragment>
        )
      }
      
export default Overview;