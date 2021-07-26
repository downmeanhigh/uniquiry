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
  createData('Quantitative Finance', 'AAA/C', 'AAA/A', '$3,528', 82.5),
];

export default function Qf() {
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
      Quantitative Finance is a multidisciplinary programme that combines mathematics, finance and computing with a practical orientation that is designed for high-calibre students who wish to become professionals in the finance industry.

The explosive growth of computer technology, globalization, and theoretical advances in finance and mathematics has resulted in quantitative methods playing an increasingly important role in the financial services industry and the economy as a whole.
New mathematical and computational methods have transformed the investment process and the financial industry. Today banks, investment firms, and insurance companies turn to technical innovation to gain competitive advantage. Sophisticated mathematical models are used to support investment decisions, to develop and price new securities and innovative products or to manage risk.
 
      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.math.nus.edu.sg/undergraduates/major-minor-programmes/cohort-2021-2022-and-later/b-sc-hons-with-major-in-quantitative-finance-qf/
      </div>
    </TableContainer>
  );
}