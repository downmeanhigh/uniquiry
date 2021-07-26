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
  createData('Data Science and Analytics', 'AAA/C', 'AAA/A', '$4,125', 82.5),
];

export default function dsa() {
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
      
     
      This course is designed to prepare graduates who are ready to acquire, manage and explore data that will inspire change around the world. Students will read modules in Mathematics, Statistics and Computer Science, and be exposed to the interplay between these three key areas in the practice of data science.

Graduates will be able to comprehend the conceptual and methodological foundations of analytical methods and techniques for data science, drawn from the broad disciplines of computing, mathematics, and statistics. They will also be able to apply, or develop and implement, appropriate analytic tools and techniques to resolve complex data-scientific problems in various sectors and domains, and be able to communicate findings and insights gained clearly using appropriate visualisation tools.
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.stat.nus.edu.sg/prospective-students/undergraduate-programme/data-science-and-analytics/
      </div>
    </TableContainer>
  );
}