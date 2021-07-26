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
  createData('Physics', 'AAA/C', 'AAA/A', '$3,528', 82.5),
];

export default function phy() {
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
      Physics is one of the most fundamental of all sciences, and is the basis of our scientific knowledge of the physical world. It seeks to explain the behaviour of matter, time and space in the universe and covers phenomena ranging from subnuclear interactions to cosmological events like the Big Bang. 
The study of physics underlies many pivotal discoveries of the 20th century, including the laser, television, radio, computer technology and nuclear weapons. Physics has played a vital role in the development of quantum theory, the theory of relativity, and the splitting of the atom.        
The undergraduate degree in Physics provides a solid foundation covering core topics such as atomic and nuclear physics; electromagnetism; nanophysics; quantum mechanics; relativity; condensed matter physics; thermodynamics; and relevant mathematical methods.    

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.physics.nus.edu.sg/
      </div>
    </TableContainer>
  );
}