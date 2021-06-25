import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [firstH2, setFirstH2] = useState('')
  const [secondH2, setSecondH2] = useState('')
  const [thirdH2, setThirdH2] = useState('')
  const [firstH1, setFirstH1] = useState('')
  const [secondH1, setSecondH1] = useState('')
  const [projectWork, setProjectWork] = useState('');

  const onSubmitInterestClick = (e)=>{
    e.preventDefault()
    const totalRP = firstH2.value + secondH2.value + thirdH2.value + firstH1.value + secondH1.value + projectWork.value;
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
}

const handleSecondH2 = (e) => {
    setSecondH2(e.target.value)
}

const handleThirdH2 = (e) => {
    setThirdH2(e.target.value)
}

const handleFirstH1 = (e) => {
      setFirstH1(e.target.value)
}

const handleSecondH1 = (e) => {
      setSecondH1(e.target.value)
}

const handleProjectWork = (e) => {
    setProjectWork(e.target.value)
}

  return (
    <div>
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
    </div>
  );
}


// /* eslint-disable no-use-before-define */
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// export default function Playground() {
//   const defaultProps = {
//     options: grades,
//     getOptionLabel: (option) => option.title,
//   };

//   const flatProps = {
//     options: grades.map((option) => option.title),
//   };

//   const [value, setValue] = React.useState(null);

//   return (
//     <div style={{ width: 300 }}>
//       <Autocomplete
//         {...defaultProps}
//         id="debug"
//         debug
//         renderInput={(params) => <TextField {...params} label="debug" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-close-on-select"
//         disableCloseOnSelect
//         renderInput={(params) => (
//           <TextField {...params} label="disableCloseOnSelect" margin="normal" />
//         )}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="clear-on-escape"
//         clearOnEscape
//         renderInput={(params) => <TextField {...params} label="clearOnEscape" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-clearable"
//         disableClearable
//         renderInput={(params) => <TextField {...params} label="disableClearable" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="include-input-in-list"
//         includeInputInList
//         renderInput={(params) => (
//           <TextField {...params} label="includeInputInList" margin="normal" />
//         )}
//       />
//       <Autocomplete
//         {...flatProps}
//         id="flat-demo"
//         renderInput={(params) => <TextField {...params} label="flat" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="controlled-demo"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} label="controlled" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-complete"
//         autoComplete
//         includeInputInList
//         renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-list-wrap"
//         disableListWrap
//         renderInput={(params) => <TextField {...params} label="disableListWrap" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="open-on-focus"
//         openOnFocus
//         renderInput={(params) => <TextField {...params} label="openOnFocus" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-highlight"
//         autoHighlight
//         renderInput={(params) => <TextField {...params} label="autoHighlight" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="auto-select"
//         autoSelect
//         renderInput={(params) => <TextField {...params} label="autoSelect" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disabled"
//         disabled
//         renderInput={(params) => <TextField {...params} label="disabled" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="disable-portal"
//         disablePortal
//         renderInput={(params) => <TextField {...params} label="disablePortal" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="blur-on-select"
//         blurOnSelect
//         renderInput={(params) => <TextField {...params} label="blurOnSelect" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="clear-on-blur"
//         clearOnBlur
//         renderInput={(params) => <TextField {...params} label="clearOnBlur" margin="normal" />}
//       />
//       <Autocomplete
//         {...defaultProps}
//         id="select-on-focus"
//         selectOnFocus
//         renderInput={(params) => <TextField {...params} label="selectOnFocus" margin="normal" />}
//       />
//     </div>
//   );
// }

// const grades = [
//   { grade: 'A'},
//   { grade: 'B', year: 1972 },
//   { grade: 'C', year: 1974 },
//   { grade: 'D', year: 2008 },
//   { grade: 'E', year: 1957 },
//   { grade: "S", year: 1993 },
//   { grade: 'U', year: 1994 },
// ];