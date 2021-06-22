import React, { useEffect, useState } from "react"
import {authFetch} from "../authenticate";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Interest = () => {
    const [datascience, setDatascience] = useState(false)
    const [software_dev, setSoftware_dev] = useState(false)
    const [optimization, setOptimization] = useState(false)
    const [engineering, setEngineering] = useState(false)
    const [statistics, setStatistics] = useState(false)
    const [mathematics, setMathematics] = useState(false)
    const [game_dev, setGame_dev] = useState(false)
    const [ai_ml, setAi_ml] = useState(false)
    const [physics, setPhysics] = useState(false)
    const [chemistry, setChemistry] = useState(false)
    const [biology, setBiology] = useState(false);

    const onSubmitInterestClick = (e)=>{
      e.preventDefault()
      console.log("You pressed submit")
      let values = {
        'datascience': datascience,
        'software_dev': software_dev,
        'optimization': optimization,
        'engineering': engineering,
        'statistics': statistics,
        'mathematics': mathematics,
        'game_dev': game_dev,
        'ai_ml': ai_ml,
        'physics': physics,
        'chemistry': chemistry,
        'biology': biology,
        }
      console.log(values)
      authFetch('/api/interest', {
        method: 'post',
        body: JSON.stringify(values)
      }).then(r => r.json())
      .then(
        r => {
          console.log(r)
        }
      )
    }

  return (
  <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Field of Interest
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="biology" 
            value={biology}
            onChange={() => setBiology(!biology)}/>}
            label="Biology" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="chemistry" 
            value={chemistry}
            onChange={() => setChemistry(!chemistry)}/>}
            label="Chemistry" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="physics" 
            value={physics}
            onChange={() => setPhysics(!physics)}/>}
            label="Physics" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="mathematics" 
            value={mathematics}
            onChange={() => setMathematics(!mathematics)}/>}
            label="Mathematics" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="statistics" 
            value={statistics}
            onChange={() => setStatistics(!statistics)}/>}
            label="Statistics" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="ai_ml" 
            value={ai_ml}
            onChange={() => setAi_ml(!ai_ml)}/>}
            label="AI & Machine Learning" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="datascience" 
            value={datascience}
            onChange={() => setDatascience(!datascience)}/>}
            label="Data Science" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="software_dev" 
            value={software_dev}
            onChange={() => setSoftware_dev(!software_dev)}/>}
            label="Software Development" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="game_dev" 
            value={game_dev}
            onChange={() => setGame_dev(!game_dev)}/>}
            label="Game Development" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="optimization" 
            value={optimization}
            onChange={() => setOptimization(!optimization)}/>}
            label="Optimization" 
          />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
          <Checkbox 
            color="secondary"
            name="engineering" 
            value={engineering}
            onChange={() => setEngineering(!engineering)}/>}
            label="Engineering" 
          />
      </Grid>
    </Grid>
  </React.Fragment>
);
}

export default Interest;