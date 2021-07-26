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
  createData('Mathematics', 'AAA/C', 'AAA/A', '$3,528', 82.5),
];

export default function Math() {
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
      Mathematics majors study the relationships between numbers, structures and patterns. Their classes range from algebra to statistics, and the concepts build on one another. Students learn skills like logic, analysis, abstract thinking and problem solving, which are valuable to future employers. Math majors study algebra, calculus, geometry and the different equations needed to solve problems. They also learn how to think and apply that foundation to an array of larger, more complex problems.

In the summers, some mathematics majors intern at companies and organizations to learn on-the-job skills in areas like risk modeling at banks or financial institutions, accounting at accounting firms, or analysis anywhere from financial firms to hospitals. 

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.math.nus.edu.sg/
      </div>
    </TableContainer>
  );
}