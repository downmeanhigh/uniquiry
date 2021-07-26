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
  createData('Food Science and Technology', 'AAA/A', 'AAA/A', '$3,528', 85),
];

export default function Food() {
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
      Food Science is the study of the nature of foods, the causes of their deterioration and the principles underlying methods of processing. The food scientist is an important link in the chain of events which results in the widespread availability of the great variety of nutritious, safe and reasonably priced food that most of us take for granted. Food Technology is more concerned with the understanding and application of science to food to satisfy the needs of society for sustainable food quality, safety and security.

The subject of FST therefore includes the study of basic sciences such as chemistry, biochemistry, biology, microbiology, mathematics, statistics and engineering and how these are applied to food systems. The subject also examines the relationships of food to man in terms of nutrition and health and safety, food acceptability and consumer protection.
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.fst.nus.edu.sg/
      </div>
    </TableContainer>
  );
}