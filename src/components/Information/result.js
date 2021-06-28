import React, { useEffect, useState } from "react"
import {authFetch} from "../authenticate";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(10),
  },
}));

const Result = ( {parentCallback} ) => {
  const classes = useStyles();
  const [firstH2, setFirstH2] = useState(0)
  const [secondH2, setSecondH2] = useState(0)
  const [thirdH2, setThirdH2] = useState(0)
  const [firstH1, setFirstH1] = useState(0)
  const [secondH1, setSecondH1] = useState(0)
  const [projectWork, setProjectWork] = useState(0);
  const [totalRP, setTotalRP] = useState(0);

  useEffect(() => {
    setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)}
    , [firstH2, secondH2, thirdH2, firstH1, secondH1, projectWork]
  )
  const onSubmitResultClick = (e)=>{
    e.preventDefault()

    console.log("You pressed submit")
    let values = {
      'firstH2': firstH2,
      'secondH2': secondH2,
      'thirdH2': thirdH2,
      'firstH1': firstH1,
      'secondH1': secondH1,
      'projectWork': projectWork,
      'totalRP': totalRP,
      }
    console.log(values)
    parentCallback(false, values)
    authFetch('/api/result', {
      method: 'post',
      body: JSON.stringify(values)
    }).then(r => r.json())
    .then(
      r => {
        console.log(r)
      }
    )
  }

  const handleFirstH2 = (e) => {
    setFirstH2(e.target.value)
    setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

const handleSecondH2 = (e) => {
    setSecondH2(e.target.value)
    setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

const handleThirdH2 = (e) => {
    setThirdH2(e.target.value)
    setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

const handleFirstH1 = (e) => {
      setFirstH1(e.target.value)
      setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

const handleSecondH1 = (e) => {
      setSecondH1(e.target.value)
      setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

const handleProjectWork = (e) => {
    setProjectWork(e.target.value)
    setTotalRP(firstH2 + secondH2 + thirdH2 + firstH1 + secondH1 + projectWork)
}

  return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>
          A-Level Result
        </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="h21">First H2</InputLabel>
        <Select
          labelId="h21"
          id="h21"
          value={firstH2}
          onChange={handleFirstH2}
        >
          <MenuItem value={20}>A</MenuItem>
          <MenuItem value={17.5}>B</MenuItem>
          <MenuItem value={15}>C</MenuItem>
          <MenuItem value={12.5}>D</MenuItem>
          <MenuItem value={10}>E</MenuItem>
          <MenuItem value={5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>  
      <FormControl className={classes.formControl}>
        <InputLabel id="h22">Second H2</InputLabel>
        <Select
          labelId="h22"
          id="h22"
          value={secondH2}
          onChange={handleSecondH2}
        >
          <MenuItem value={20}>A</MenuItem>
          <MenuItem value={17.5}>B</MenuItem>
          <MenuItem value={15}>C</MenuItem>
          <MenuItem value={12.5}>D</MenuItem>
          <MenuItem value={10}>E</MenuItem>
          <MenuItem value={5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="h23">Third H2</InputLabel>
        <Select
          labelId="h23"
          id="h23"
          value={thirdH2}
          onChange={handleThirdH2}
        >
          <MenuItem value={20}>A</MenuItem>
          <MenuItem value={17.5}>B</MenuItem>
          <MenuItem value={15}>C</MenuItem>
          <MenuItem value={12.5}>D</MenuItem>
          <MenuItem value={10}>E</MenuItem>
          <MenuItem value={5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="h11">First H1 or Worst H2</InputLabel>
        <Select
          labelId="h11"
          id="h11"
          value={firstH1}
          onChange={handleFirstH1}
        >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={8.75}>B</MenuItem>
          <MenuItem value={7.5}>C</MenuItem>
          <MenuItem value={6.25}>D</MenuItem>
          <MenuItem value={5}>E</MenuItem>
          <MenuItem value={2.5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="h12">H1 General Paper</InputLabel>
        <Select
          labelId="h12"
          id="h12"
          value={secondH1}
          onChange={handleSecondH1}
        >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={8.75}>B</MenuItem>
          <MenuItem value={7.5}>C</MenuItem>
          <MenuItem value={6.25}>D</MenuItem>
          <MenuItem value={5}>E</MenuItem>
          <MenuItem value={2.5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="h13">Project Work</InputLabel>
        <Select
          labelId="h13"
          id="h13"
          value={projectWork}
          onChange={handleProjectWork}
        >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={8.75}>B</MenuItem>
          <MenuItem value={7.5}>C</MenuItem>
          <MenuItem value={6.25}>D</MenuItem>
          <MenuItem value={5}>E</MenuItem>
          <MenuItem value={2.5}>S</MenuItem>
          <MenuItem value={0}>U</MenuItem>
        </Select>
      </FormControl>
        <React.Fragment>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={onSubmitResultClick}
                    className={classes.button}
                    size = "small"
                  >
                    {'Confirm Total RP: ' + totalRP}
                  </Button>
              </React.Fragment>
    </React.Fragment>
  );
}

export default Result;