import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, IGP10, IGP90, grad_sal2020, RankPoint) {
  return { name, IGP10, IGP90, grad_sal2020, RankPoint};
}

const rows = [
  createData('Environmental Engineering (NUS)', 'BBC/C', 'AAA/A', '$3,500', 72.5),
  createData('Environmental Engineering (NTU)', 'CCC/C', 'AAA/A', '$3,450', 67.5),
];

export default function env_eng() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">IGP(10th Percentile)</TableCell>
            <TableCell align="right">IGP(90th Percentile)</TableCell>
            <TableCell align="right">Median Salary</TableCell>
            <TableCell align="right">Rank Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.IGP10}</TableCell>
              <TableCell align="right">{row.IGP90}</TableCell>
              <TableCell align="right">{row.grad_sal2020}</TableCell>
              <TableCell align="right">{row.RankPoint}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{marginLeft: 45, width: '80%'}}>
      
      The Environmental Engineering programme is structured on a flexible and diverse system that allows students to choose from a broad range of courses to receive a well-rounded education while maintaining high academic standards. 

Students take the common engineering courses which deals with basic concepts in mathematics, science and fundamental engineering principles, followed by a balanced mix of core courses in environmental engineering discipline.

Courses offered include fluid mechanics, hydrology, environmental chemistry, environmental processes, and environmental microbiology, water supply engineering, wastewater engineering, solid waste engineering, geo-environmental engineering, hydraulics and basic structural design. 



      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.eng.nus.edu.sg/cee/undergraduate/beng-environmental/ and https://www.ntu.edu.sg/spms/admissions/undergrad/detail/bachelor-of-engineering-in-environmental-engineering
      </div>
    </TableContainer>
  );
}