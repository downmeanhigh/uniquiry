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
  createData('Civil Engineering (NUS)', 'CCC/C', 'AAA/B', '$3,590', 67.5),
  createData('Civil Engineering (NTU)', 'CDD/C', 'AAA/B', '$3,500', 62.5),
];

export default function Civil_eng() {
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
      
      Civil engineering is the professional practice of designing and developing infrastructure projects. This can be on a huge scale, such as the development of nationwide transport systems or water supply networks, or on a smaller scale, such as the development of individual roads or buildings.
If you study civil engineering at undergraduate level, you’ll learn to apply mathematics and scientific knowledge (particularly physics) to real-life situations and problems that arise from creating and maintaining structures, taking into account environmental, financial, legal and ethical considerations.

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.eng.nus.edu.sg/cee/undergraduate/beng-civil/ and https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-civil-engineering
      </div>
    </TableContainer>
  );
}