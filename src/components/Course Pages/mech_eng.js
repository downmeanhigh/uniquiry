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
  createData('Mechanical Engineering (NUS)', 'BBC/B', 'AAA/A', '$3,800', 73.75),
  createData('Mechanical Engineering (NTU)', 'CCC/D', 'AAA/A', '$3,850', 66.25),
];

export default function mech_eng() {
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
      
      Mechanical engineering involves the design, manufacture or operation of any product or system that moves and uses or produces energy. It is perhaps the most diverse and versatile of the engineering disciplines, with virtually every aspect of modern life being touched by mechanical engineering, from mobile phones and biomedical devices to aircrafts and power plants.
In ME, you build upon your knowledge of science and mathematics acquired in school to learn about solid and fluid mechanics, thermodynamics, heat transfer, control, instrumentation, materials, product design and manufacturing processes. The versatility of your ME training opens up a wide range of career possibilities, where you may design products, plan systems, or analyse and solve problems.    

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.eng.nus.edu.sg/me/ and https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-engineering-in-mechanical-engineering
      </div>
    </TableContainer>
  );
}