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
  createData('Electrical Engineering (NUS)', 'BBC/B', 'AAA/A', '$4,200', 73.75),
  createData('Electrical Engineering (NTU)', 'CDD/C', 'AAA/A', '$3,880', 62.5),
];

export default function eee() {
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
      
      If you’re interested in how electrical devices work, are inquisitive, and have a strong interest in mathematics and science, then you probably already have some essential engineering skills and an electrical or electronics engineering degree may well be for you. Although technical knowledge is essential, electrical engineers are also involved in designing and building a range of devices, often within teams.

At bachelor level, an electrical engineering degree will aim to give students grounding in the underlying principles of electronic and electrical engineering, before allowing specialization in an area of interest later on in the course. Students will also be involved in projects working within groups.
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.eng.nus.edu.sg/ece/ and https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-electrical-and-electronic-engineering-(eee)-and-second-major-business
      </div>
    </TableContainer>
  );
}