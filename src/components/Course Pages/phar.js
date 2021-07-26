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
  createData('Pharmacy', 'AAA/B', 'AAA/A', '$3,700', 83.75),
];

export default function Phar() {
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
      Pharmacists are healthcare professionals who are experts on medicines. Their main role within the healthcare system is to ensure that medicines are used appropriately and safely. In the process, they actively provide advice to physicians and other healthcare practitioners on the selection, dose, interactions and side effects of medicines. They also counsel patients on their medicines and monitor their health progress to ensure that patients achieve the best outcomes with their drug therapy. As a profession, pharmacy is continuously evolving in tandem with the changing healthcare landscape and advancement in medical sciences.
Overall, the primary aim of the pharmacy course is to equip graduates with the relevant knowledge and skills for entry into the pharmacy profession. The course focuses on laying a strong foundation in pharmaceutical and clinical sciences so that graduates can readily apply these fundamental principles to their future employment, be it in community practice, hospital service, healthcare business, pharmaceutical industry or research.

      </div>
      <div style={{marginLeft: 45, width: '80%'}}>
      You can find more information in https://pharmacy.nus.edu.sg/study/undergraduate/bachelor-of-pharmacy/
      </div>
    </TableContainer>
  );
}