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
  createData('Computer Engineering (NUS)', 'AAA/B', 'AAA/A', '$5,000', 83.75),
  createData('Computer Engineering (NTU)', 'AAC/B', 'AAA/A', '$4,100', 78.75),
];

export default function Comp_eng() {
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
      
      "Computer Engineering" is a discipline about the hardware and software aspects of computer science. Computers are at the heart of any intelligent, modern and high tech systems. Devices and systems are becoming smarter (e.g. AI-enabled) because of computers.

You will be equipped with solid foundation in computer and electronic hardware design, software programming, networking, cyber security, and cloud computing. You will master the skill of integrating various computing technologies to design and implement intelligent systems and robotics. These skills & knowledge will empower you to take up the challenges of this digital age.


      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://ceg.nus.edu.sg/ and https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-computer-engineering
      </div>
    </TableContainer>
  );
}