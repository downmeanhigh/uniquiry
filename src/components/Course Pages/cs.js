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
  createData('Computer Science (NUS)', 'AAA/A', 'AAA/A', '$5,243', 85),
  createData('Computer Science (NTU)', 'AAB/B', 'AAA/A', '$4,300', 81.25),
  createData('Computer Science (SMU)', 'ABB/A', 'AAA/A', '$4,542', 80),
];

export default function cs() {
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
      As technology is starting to become more integrated with society, computer science has become one of the more popular courses among students. If you are interested in problem solving, mathematics, and programming, this course will definitely pique your interest! 

With 10 focus areas to choose from, such as software engineering, artificial intelligence, and computer security, there is no shortage of choices for what you can do in the future! 
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.comp.nus.edu.sg/programmes/ug/cs/, https://www.ntu.edu.sg/education/undergraduate-programme/beng-(computer-science), and https://scis.smu.edu.sg/bsc-computer-science
      </div>
    </TableContainer>
  );
}