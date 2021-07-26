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
  createData('Biomedical Engineering', 'BBB/C', 'AAA/A', '$3,500', 75),
];

export default function Biomed_eng() {
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
      
Biomedical Engineering (BME) is a discipline in which the principles and tools of traditional engineering disciplines are applied to the analysis and solution of problems in biology and medicine. There is no particular subject matter or set of techniques that belong exclusively to it. A BME education trains engineers who can analyse multidisciplinary problems from the engineering, biological and medical perspectives, in particular, the complications in working with living systems.

Not only does the study of Biomedical Engineering provide a solid foundation in biological sciences and engineering, it develops powerful methods for understanding basic physiological processes such as fluid transport, feedback control and cell regulation. Furthermore, Biomedical Engineering also studies the principles underlying biomedical instruments, orthopaedic implants and prosthetic devices.

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://www.eng.nus.edu.sg/bme/
      </div>
    </TableContainer>
  );
}