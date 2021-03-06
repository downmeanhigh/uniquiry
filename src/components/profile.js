import React, { useCallback, useState } from 'react';
import {authFetch} from "./authenticate";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Interest from './Information/interest';
import Result from './Information/result';
import Overview from './Information/overview';
import Link from '@material-ui/core/Link';
import {Avatar} from '@material-ui/core';
import uniquiry from './Logos/uniquiry.png';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Field of Interest', 'A-Level Results'];

const Profile = () => {

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [disabledNext, setDisabledNext] = useState(true);
  const [interests, setInterests] = useState({});
  const [results, setResults] = useState({});
  const [message, setMessage] = useState('');

  const callbackInterest = useCallback((able, data) => {
    setDisabledNext(able)
    setInterests(data)
  }, [])

  const callbackResult = useCallback((able, data) => {
    setDisabledNext(able)
    setResults(data)
  }, [])

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setDisabledNext(true);
  };

  const handleDone = () => {
    setActiveStep(activeStep + 1);
};

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setDisabledNext(true);
  };

  const handleRestart = () => {
    setActiveStep(0);
    setDisabledNext(true);
  };

  const handleSuggest = () => {
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
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Overview />
      case 1:
        return <Interest parentCallback={callbackInterest}/>;
      case 2:
        return <Result parentCallback={callbackResult}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Link variant="h6" color="inherit" href="/" noWrap>
            <Avatar alt="uniquiry" imgProps sizes="large" src={uniquiry} />
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Profile
          </Typography>
        <React.Fragment>
          {activeStep === 0 ? (
            <div className={classes.buttons}>
            <Button 
            variant="contained"
            color="secondary"
            size="big"
            onClick={handleNext}
            className={classes.button}>
              Edit my profile
            </Button>
            <Button
            variant="contained"
            color="primary"
            size="big"
            onClick={handleSuggest}
            className={classes.button}
            href="/Secret"
            >
            Show me my suggested courses
            </Button>
            </div>
          ) : (
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          )}
          </React.Fragment>
          <React.Fragment>
            {activeStep === 3 ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your profile has been updated.
                </Typography>
                <Typography variant="subtitle1">
                  You have updated your profile successfully.
                  <Grid item xs={12}>
                  {JSON.stringify(interests)}
                  {JSON.stringify(results)}
                  </Grid>
                </Typography>
                <div className={classes.buttons}>
                    <Button onClick={handleRestart} className={classes.button}>
                      Restart
                    </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="big"
                    onClick={handleSuggest}
                    className={classes.button}
                    disabled={disabledNext}
                    href="/Secret"
                  >
                    Show me my suggested courses
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep < 3 && activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  
                  {activeStep < 3 && activeStep !== 0 && ( 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length ? handleDone : handleNext}
                    className={classes.button}
                    disabled={disabledNext}
                  >
                    {activeStep === steps.length ? 'Done' : 'Next'}
                  </Button>
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Profile;